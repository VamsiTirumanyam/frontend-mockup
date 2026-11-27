"use client";

import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Eyebrow, pageContainerClassName } from "./Shared";

const publicAssetPath = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

const products = [
  {
    title: "Brembo 256mm Ventilated Front Disc",
    partName: "Front brake disc",
    fit: "VW Polo, Vento, Skoda Rapid · 1.2 TSI / 1.6 MPI",
    price: "₹3,450",
    part: "09.7011.14",
    type: "OE",
    brand: "BREMBO",
    warranty: "6 mo warranty",
    cheaperName: "Valeo aftermarket",
    cheaperPrice: "₹2,890",
    savings: "₹560",
    image: publicAssetPath("/products/brake-disc.png"),
  },
  {
    title: "Monroe Front Gas Strut Damper",
    partName: "Front gas strut",
    fit: "Hyundai Creta, Kia Seltos · 2019–2024",
    price: "₹4,890",
    part: "G8164-MN",
    type: "OEM",
    brand: "MONROE",
    warranty: "12 mo warranty",
    cheaperName: "Gabriel aftermarket",
    cheaperPrice: "₹3,990",
    savings: "₹900",
    image: publicAssetPath("/products/front-struts.png"),
  },
  {
    title: "Bosch Common Rail Injector",
    partName: "Common rail injector",
    fit: "Tata Nexon 1.5 Revotorq Diesel, Altroz",
    price: "₹8,950",
    part: "0445110-CR",
    type: "OES",
    brand: "BOSCH",
    warranty: "12 mo warranty",
    cheaperName: "Delphi aftermarket",
    cheaperPrice: "₹7,850",
    savings: "₹1,100",
    image: publicAssetPath("/products/common-rail-injector.png"),
  },
  {
    title: "Gates PowerGrip Timing Kit + Pump",
    partName: "Timing kit",
    fit: "Maruti Suzuki Swift, Baleno, Dzire · K-Series",
    price: "₹5,120",
    part: "KP15669XS",
    type: "OE",
    brand: "GATES",
    warranty: "6 mo warranty",
    cheaperName: "INA aftermarket",
    cheaperPrice: "₹4,240",
    savings: "₹880",
    image: publicAssetPath("/products/timing-kit.png"),
  },
];

function getProductStep(grid: HTMLDivElement) {
  const firstCard = grid.firstElementChild;
  if (!(firstCard instanceof HTMLElement)) return 0;

  const gap = Number.parseFloat(getComputedStyle(grid).columnGap) || 0;
  return firstCard.offsetWidth + gap;
}

function getScrollBehavior(): ScrollBehavior {
  return matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "instant"
    : "smooth";
}

const carouselArrowClassName =
  "pointer-events-auto absolute top-1/2 grid size-[38px] -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-[#e1d8e7] bg-white text-(--green-dark) shadow-[0_3px_10px_rgb(40_22_48_/_16%)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--green)";

export default function ProductsSection() {
  const productGridRef = useRef<HTMLDivElement>(null);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [addedProducts, setAddedProducts] = useState<Record<string, boolean>>(
    {},
  );
  const [activeProductIndex, setActiveProductIndex] = useState(0);

  useEffect(() => {
    const grid = productGridRef.current;
    const slider = grid?.parentElement;
    if (!grid || !slider) return;

    let lastInteractionAt = 0;
    const markInteraction = () => {
      lastInteractionAt = Date.now();
    };
    slider.addEventListener("pointerdown", markInteraction);

    const interval = window.setInterval(() => {
      if (
        !window.matchMedia("(max-width: 520px)").matches ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        slider.matches(":hover") ||
        slider.contains(document.activeElement) ||
        Date.now() - lastInteractionAt < 6000
      ) {
        return;
      }

      const step = getProductStep(grid);
      if (!step) return;
      const maxScroll = grid.scrollWidth - grid.clientWidth;
      const remainingScroll = maxScroll - grid.scrollLeft;
      if (remainingScroll <= 1) {
        grid.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        grid.scrollBy({
          left: Math.min(step, remainingScroll),
          behavior: "smooth",
        });
      }
    }, 4000);

    return () => {
      window.clearInterval(interval);
      slider.removeEventListener("pointerdown", markInteraction);
    };
  }, []);

  function scrollProducts(direction: -1 | 1) {
    const grid = productGridRef.current;
    if (!grid) return;

    grid.scrollBy({
      left: direction * getProductStep(grid),
      behavior: getScrollBehavior(),
    });
  }

  function updateActiveProduct() {
    const grid = productGridRef.current;
    if (!grid) return;

    const step = getProductStep(grid);
    if (step) {
      const index = Math.round(grid.scrollLeft / step);
      setActiveProductIndex(Math.max(0, Math.min(products.length - 1, index)));
    }
  }

  function goToProduct(index: number) {
    const grid = productGridRef.current;
    if (!grid) return;

    grid.scrollTo({
      left: index * getProductStep(grid),
      behavior: getScrollBehavior(),
    });
  }

  function changeQuantity(part: string, change: number) {
    setQuantities((current) => ({
      ...current,
      [part]: Math.max(1, (current[part] ?? 1) + change),
    }));
  }

  return (
    <section
      className={`products-section ${pageContainerClassName} relative z-[1]`}
      data-cinematic-section
      id="featured"
    >
      <div className="products-heading">
        <div>
          <Eyebrow className="mb-2">Verified inventory</Eyebrow>
          <h2>OE first. Alternatives identified.</h2>
          <p>
            OE is our first choice. Any OEM or OES alternative is clearly
            identified on your quote.
          </p>
        </div>
        <a className="text-link" href="#services">
          View all 180,000+ parts <ArrowRight size={15} />
        </a>
      </div>
      <div className="relative">
        <div
          className="grid grid-cols-4 gap-[13px] max-[760px]:grid-cols-2 phone:flex phone:snap-x phone:snap-mandatory phone:scroll-px-0.5 phone:gap-3 phone:overflow-x-auto phone:px-0.5 phone:pt-0.5 phone:pb-3.5 phone:[scrollbar-width:none] phone:[&::-webkit-scrollbar]:hidden"
          ref={productGridRef}
          onScroll={updateActiveProduct}
        >
          {products.map((product) => (
            <article
              className="product-card phone:flex-[0_0_88%] phone:snap-start"
              key={product.part}
            >
              <div className="product-card__image">
                <span className="stock-tag">
                  <span className="stock-dot" /> In stock · same day
                </span>
                <img src={product.image} alt={product.title} loading="lazy" />
              </div>
              <div className="flex flex-1 flex-col gap-[13px] px-3.5 pt-4 pb-3.5 phone:gap-[9px] phone:px-3 phone:pt-3 phone:pb-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="product-card__title-wrap">
                    <h3>{product.partName}</h3>
                    <div className="mt-[9px] flex flex-wrap gap-[5px] phone:mt-1.5 phone:gap-1">
                      <span className="brand-badge">{product.brand}</span>
                      <span className="type-badge">{product.type}</span>
                      <span className="warranty-badge">{product.warranty}</span>
                    </div>
                  </div>
                  <div className="product-card__price">
                    <strong>{product.price}</strong>
                    <small>{product.price} each</small>
                  </div>
                </div>

                <div className="product-card__specs">
                  <div>
                    <small>Part no</small>
                    <strong>{product.part}</strong>
                  </div>
                  <div>
                    <small>Fits</small>
                    <strong>{product.fit.split(" · ")[0]}</strong>
                  </div>
                  <div>
                    <small>Lead time</small>
                    <strong>Same day</strong>
                  </div>
                </div>

                <div className="product-card__quantity flex items-center justify-between">
                  <strong>Quantity</strong>
                  <div className="quantity-control">
                    <button
                      type="button"
                      aria-label={`Decrease ${product.partName} quantity`}
                      disabled={(quantities[product.part] ?? 1) === 1}
                      onClick={() => changeQuantity(product.part, -1)}
                    >
                      −
                    </button>
                    <output aria-label={`${product.partName} quantity`}>
                      {quantities[product.part] ?? 1}
                    </output>
                    <button
                      type="button"
                      aria-label={`Increase ${product.partName} quantity`}
                      onClick={() => changeQuantity(product.part, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="cheaper-option">
                  <div>
                    <strong>Cheaper option · save {product.savings}</strong>
                    <span>
                      {product.cheaperName} · {product.cheaperPrice}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="product-card__action"
                  aria-pressed={Boolean(addedProducts[product.part])}
                  data-added={Boolean(addedProducts[product.part])}
                  onClick={() =>
                    setAddedProducts((current) => ({
                      ...current,
                      [product.part]: !current[product.part],
                    }))
                  }
                >
                  {addedProducts[product.part] ? (
                    <>
                      <Check size={17} strokeWidth={3} />
                      <strong>Added to order</strong>
                      <span>· tap to remove</span>
                    </>
                  ) : (
                    <>
                      <strong>Add to order</strong>
                      <span>· {product.price}</span>
                    </>
                  )}
                </button>
              </div>
            </article>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-0 hidden phone:block">
          <button
            type="button"
            className={`${carouselArrowClassName} left-2`}
            aria-label="Previous products"
            onClick={() => scrollProducts(-1)}
          >
            <ArrowLeft size={18} />
          </button>
          <button
            type="button"
            className={`${carouselArrowClassName} right-2`}
            aria-label="Next products"
            onClick={() => scrollProducts(1)}
          >
            <ArrowRight size={18} />
          </button>
        </div>
        <div
          className="mt-[5px] hidden justify-center gap-[7px] phone:flex"
          role="group"
          aria-label="Product slides"
        >
          {products.map((product, index) => (
            <button
              key={product.part}
              type="button"
              className="h-[7px] w-[7px] cursor-pointer rounded-full bg-[#d8cddd] transition-[width,background-color] duration-200 ease-[ease] aria-[current=true]:w-5 aria-[current=true]:bg-(--green-dark) focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-(--green)"
              aria-label={`Go to product ${index + 1} of ${products.length}`}
              aria-current={index === activeProductIndex ? "true" : undefined}
              onClick={() => goToProduct(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
