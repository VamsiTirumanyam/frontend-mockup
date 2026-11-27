"use client";

import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { pageContainerClassName } from "./Shared";

const publicAssetPath = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

const products = [
  {
    title: "Brembo 256mm Ventilated Front Disc",
    partname: "Clutch bearing",
    fit: "VW Polo, Vento, Skoda Rapid · 1.2 TSI / 1.6 MPI",
    price: "₹3,450",
    part: "09.7011.14",
    type: "OE",
    brand: "LUK",
    warranty: "6 mo warranty",
    cheaperName: "Valeo aftermarket",
    cheaperPrice: "₹2,890",
    savings: "₹560",
    image: publicAssetPath("/products/brake-disc.png"),
  },
  {
    title: "Monroe Front Gas Strut Damper",
    partname: "Front gas strut",
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
    partname: "Common rail injector",
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
    partname: "Timing kit",
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

export default function ProductsSection() {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [addedProducts, setAddedProducts] = useState<Record<string, boolean>>(
    {},
  );

  return (
    <section
      className={`products-section ${pageContainerClassName} cinematic-section`}
      data-cinematic-section
      id="featured"
    >
      <div className="products-heading">
        <div>
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Verified inventory
          </span>
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
      <div className="product-grid grid grid-cols-4 gap-[13px] max-[760px]:grid-cols-2 max-[520px]:grid-cols-1 max-[520px]:gap-3">
        {products.map((product) => (
          <article className="product-card" key={product.part}>
            <div className="product-card__image">
              <span className="stock-tag">
                <span className="stock-dot" /> In stock · same day
              </span>
              <img src={product.image} alt={product.title} loading="lazy" />
              <span className="product-page-count">1 / 2</span>
            </div>
            <div className="product-card__body">
              <div className="product-card__header">
                <div className="product-card__title-wrap">
                  <h3>{product.partname}</h3>
                  <div className="product-card__badges">
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

              <div className="product-card__quantity">
                <strong>Quantity</strong>
                <div className="quantity-control">
                  <button
                    type="button"
                    aria-label={`Decrease ${product.partname} quantity`}
                    onClick={() =>
                      setQuantities((current) => ({
                        ...current,
                        [product.part]: Math.max(
                          1,
                          (current[product.part] ?? 1) - 1,
                        ),
                      }))
                    }
                  >
                    −
                  </button>
                  <span>{quantities[product.part] ?? 1}</span>
                  <button
                    type="button"
                    aria-label={`Increase ${product.partname} quantity`}
                    onClick={() =>
                      setQuantities((current) => ({
                        ...current,
                        [product.part]: (current[product.part] ?? 1) + 1,
                      }))
                    }
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="cheaper-option">
                <div>
                  <strong>Cheaper option · save {product.savings}</strong>
                  <span>
                    {product.cheaperName} · {product.cheaperPrice} · Neha Ramiah
                  </span>
                </div>
                <b>View ›</b>
              </div>

              <button
                type="button"
                className="product-card__action"
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
    </section>
  );
}
