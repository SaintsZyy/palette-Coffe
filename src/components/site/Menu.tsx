import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { menuCategories, type MenuCategory } from "@/data/palette";
import { ProductCard } from "./ProductCard";

const PREVIEW_COUNT = 6;

type Tab = "all" | MenuCategory["slug"];

const tabAccents: Record<string, string> = {
  all: "bg-palette-red text-white",
  coffee: "bg-palette-yellow text-ink",
  "non-coffee": "bg-palette-blue text-white",
  snacks: "bg-palette-yellow text-ink",
  mains: "bg-palette-red text-white",
  bundling: "bg-palette-blue text-white",
};

export function Menu() {
  const [active, setActive] = useState<Tab>("all");

  const tabs: { slug: Tab; label: string }[] = [
    { slug: "all", label: "All" },
    ...menuCategories.map((c) => ({ slug: c.slug as Tab, label: c.label })),
  ];

  const previewItems =
    active === "all"
      ? menuCategories.flatMap((c) => c.items).slice(0, PREVIEW_COUNT)
      : (menuCategories.find((c) => c.slug === active)?.items ?? []).slice(0, PREVIEW_COUNT);

  const showMoreTo = active === "all" ? "/menu" : `/menu/${active}`;

  return (
    <section id="menu" className="relative bg-palette-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="inline-block rounded-full border-2 border-ink bg-palette-yellow px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]">
              Palette Menu
            </span>
            <h2 className="mt-4 font-display text-4xl font-extrabold md:text-5xl">
              From coffee ritual
              <br />
              to <span className="text-palette-red">new bites</span>.
            </h2>
            <p className="mt-3 max-w-xl text-foreground/65">
              Setiap menu di-craft untuk menemani mood-mu — entah lagi brainstorming, sharing
              moment, atau sekadar recharge.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t.slug}
              onClick={() => setActive(t.slug)}
              className={`rounded-full border-2 border-ink px-4 py-2 text-sm font-bold transition-all ${
                active === t.slug
                  ? `${tabAccents[t.slug]} shadow-block-sm`
                  : "bg-white hover:bg-palette-yellow/40"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div
          key={active}
          className="mt-10 grid animate-fade-up gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {previewItems.map((item) => (
            <ProductCard key={`${active}-${item.name}`} item={item} />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <Link
            to={showMoreTo}
            className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-palette-red px-6 py-3 font-display text-base font-extrabold text-white shadow-block-sm transition-all hover:-translate-y-0.5 hover:shadow-block"
          >
            Show More
            <span aria-hidden>→</span>
          </Link>
          <p className="text-center text-xs text-foreground/50">
            *Harga belum termasuk PB1 tax 10%
          </p>
        </div>
      </div>
    </section>
  );
}
