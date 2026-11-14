"use client";

import{
  ContactShadows,
  Environment,
  PresentationControls,
  useGLTF,
}from "@react-three/drei";

import{
  Canvas,
  useFrame,
}from "@react-three/fiber";

import{
  Suspense,
  useMemo,
  useRef,
}from "react";

import * as THREE from "three";

const vehicleModelPath = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/models/vehicle.glb`;

type CarModelProps={
  targetRotation:number;
};

function CarModel({
  targetRotation,
}:CarModelProps){
  const {scene}=useGLTF(vehicleModelPath);

  const groupRef=
    useRef<THREE.Group>(null);

  const model=useMemo(()=>{
    const clone=scene.clone(true);

    clone.traverse((child)=>{
      if(child instanceof THREE.Mesh){
        child.castShadow=true;
        child.receiveShadow=true;
      }
    });

    const box=
      new THREE.Box3().setFromObject(clone);

    const size=
      new THREE.Vector3();

    const center=
      new THREE.Vector3();

    box.getSize(size);
    box.getCenter(center);

    clone.position.set(
      -center.x,
      -center.y,
      -center.z,
    );

    const largestDimension=Math.max(
      size.x,
      size.y,
      size.z,
    );

    const desiredSize=5.8;

    const scale=
      desiredSize/largestDimension;

    const container=
      new THREE.Group();

    container.scale.setScalar(scale);
    container.add(clone);

    return container;
  },[scene]);

  useFrame((_,delta)=>{
    if(!groupRef.current)return;

    const smoothing=
      1-Math.exp(-4.5*delta);

    groupRef.current.rotation.y=
      THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotation,
        smoothing,
      );
  });

  return(
    <group
      ref={groupRef}
      position={[0,-0.95,0]}
    >
      <primitive object={model}/>
    </group>
  );
}

type CarSceneProps={
  targetRotation:number;
};

export default function CarScene({
  targetRotation,
}:CarSceneProps){
  return(
    <Canvas
      shadows
      dpr={[1,1.5]}
      camera={{
        position:[5.4,2.1,8],
        fov:30,
      }}
      gl={{
        antialias:true,
        alpha:true,
      }}
      style={{
        width:"100%",
        height:"100%",
        background:"transparent",
      }}
    >
      <Suspense fallback={null}>
        <ambientLight color="#f4eafb" intensity={1.35}/>

        <directionalLight
          castShadow
          position={[6,8,6]}
          color="#fffaff"
          intensity={2}
        />

        <spotLight
          position={[-6,5,4]}
          color="#dfc5ed"
          intensity={1.35}
          angle={0.48}
          penumbra={1}
        />

        <PresentationControls
          global
          cursor
          snap={false}
          speed={1}
          zoom={1}
          polar={[
            -0.06,
            0.06,
          ]}
          azimuth={[
            -Math.PI/2,
            Math.PI/2,
          ]}
        >
          <CarModel
            targetRotation={targetRotation}
          />
        </PresentationControls>

        <ContactShadows
          position={[0,-1.42,0]}
          color="#49315a"
          opacity={0.2}
          scale={7.5}
          blur={3}
          far={4}
        />

        <Environment preset="studio"/>
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload(vehicleModelPath);