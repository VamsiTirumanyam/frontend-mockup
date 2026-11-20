"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { pageContainerClassName } from "./Shared";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const products = [
  { title: "Brembo 256mm Ventilated Front Disc", partname: "Front brake disc", fit: "Polo 1.2 TSI", price: "₹3,450", part: "09.7011.14", brand: "BREMBO", type: "OE", warranty: "6 mo", image: `${basePath}/products/brake-disc.png`, cheaperName: "Aisin aftermarket", cheaperPrice: "₹2,890", savings: "₹560" },
  { title: "Monroe Front Gas Strut Damper", partname: "Front gas strut", fit: "Creta 2019+", price: "₹4,890", part: "G8164-MN", brand: "MONROE", type: "OEM", warranty: "12 mo", image: `${basePath}/products/front-struts.png`, cheaperName: "Gabriel aftermarket", cheaperPrice: "₹3,990", savings: "₹900" },
  { title: "Bosch  Rail Injector", partname: " Rail injector", fit: "Nexon 1.5 Diesel", price: "₹8,950", part: "0445110-CR", brand: "BOSCH", type: "OES", warranty: "12 mo", image: `${basePath}/products/common-rail-injector.png`, cheaperName: "Delphi aftermarket", cheaperPrice: "₹7,850", savings: "₹1,100" },
  { title: "Gates PowerGrip Timing Kit + Pump", partname: "Timing kit", fit: "Swift K-Series", price: "₹5,120", part: "KP15669XS", brand: "GATES", type: "OE", warranty: "6 mo", image: `${basePath}/products/timing-kit.png`, cheaperName: "INA aftermarket", cheaperPrice: "₹4,240", savings: "₹880" },
];

export default function ProductsSection() {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [added, setAdded] = useState<Record<string, boolean>>({});

  
  return (
    <section className={`products-section ${pageContainerClassName} cinematic-section`} data-cinematic-section id="featured">
      <div className="products-heading">
        <div><span className="eyebrow"><span className="eyebrow-dot" /> Verified inventory</span><h2 className="font-bold">OE first. Alternatives identified.</h2><p>OE is our first choice. Any OEM or OES alternative is clearly identified on your quote.</p></div>
        <a className="text-link" href="#services">View all 180,000+ parts <ArrowRight size={15} /></a>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card mx-auto flex h-full w-full max-w-xl flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm" key={product.part}>
            <div className="product-card__image relative h-36 w-full bg-slate-100">
              <img className="h-full w-full object-cover" src={product.image} alt={product.partname} loading="lazy" />
              <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
                <span className="h-2 w-2 rounded-full bg-green-600" /> In stock · same day
              </span>
              <span className="absolute right-3 bottom-3 rounded-md bg-gray-600/80 px-2.5 py-0.5 text-xs font-medium text-white">1 / 2</span>
            </div>

            <div className="flex flex-1 flex-col space-y-3 p-3">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="product-card__title line-clamp-2 min-h-10 text-sm font-bold text-gray-900 sm:min-h-12 sm:text-base">{product.partname}</h3>
                  <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                    <span className="rounded bg-blue-50 px-2 py-0.5 text-xs font-semibold text-blue-700">{product.brand}</span>
                    <span className="rounded bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">{product.type}</span>
                    
                  </div>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-base font-bold text-gray-900 sm:text-lg">{product.price}</p>
                  <p className="text-xs text-gray-500">{product.price} each</p>
                </div>
              </div>

              <div className="product-card__specs grid grid-cols-3 gap-2 rounded-xl bg-gray-50 p-2.5 text-xs">
                <div><p className="text-xs text-gray-500">Part no</p><p className="product-card__spec-value mt-0.5 line-clamp-2 min-h-8 font-semibold text-gray-900">{product.part}</p></div>
                <div><p className="text-xs text-gray-500">Fits</p><p className="product-card__spec-value mt-0.5 line-clamp-2 min-h-8 font-semibold text-gray-900">{product.fit}</p></div>
                <div><p className="text-xs text-gray-500">Lead time</p><p className="product-card__spec-value mt-0.5 line-clamp-2 min-h-8 font-semibold text-gray-900">Same day</p></div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-sm font-medium text-gray-800">Quantity</span>
                <div className="product-card__quantity-control flex items-center rounded-xl border border-gray-300 bg-white">
                  <button type="button" aria-label={`Decrease ${product.partname} quantity`} className="px-3.5 py-1.5 text-lg font-medium text-gray-600 hover:bg-gray-50" onClick={() => setQuantities((current) => ({ ...current, [product.part]: Math.max(1, (current[product.part] ?? 1) - 1) }))}>−</button>
                  <span className="px-3 text-sm font-semibold text-gray-900">{quantities[product.part] ?? 1}</span>
                  <button type="button" aria-label={`Increase ${product.partname} quantity`} className="px-3.5 py-1.5 text-lg font-medium text-gray-600 hover:bg-gray-50" onClick={() => setQuantities((current) => ({ ...current, [product.part]: (current[product.part] ?? 1) + 1 }))}>+</button>
                </div>
              </div>

              <div className="product-card__cheaper flex items-center justify-between rounded-xl border border-amber-200 bg-amber-50/70 px-3 py-2">
                <div><p className="text-xs font-semibold text-amber-800">Cheaper option · save {product.savings}</p><p className="line-clamp-1 text-[11px] text-gray-600">{product.cheaperName} · {product.cheaperPrice}</p></div>
                <span className="text-xs font-semibold text-amber-800">View ›</span>
              </div>

              <button type="button" data-added={Boolean(added[product.part])} className="product-card__action mt-auto flex w-full items-center justify-center gap-1.5 rounded-xl py-2.5 text-xs font-medium sm:text-sm" onClick={() => setAdded((current) => ({ ...current, [product.part]: !current[product.part] }))}>
                {added[product.part] ? <><span className="font-bold">✓ Added to order</span><span className="font-bold">· tap to remove</span></> : <><span className="font-bold">Add to order</span><span className="font-bold">· {product.price}</span></>}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
