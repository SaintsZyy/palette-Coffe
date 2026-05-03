import { Link } from "@tanstack/react-router";
import type { MenuItem } from "@/data/palette";

const badgeColors: Record<string, string> = {
  "Best Seller": "bg-palette-red text-white",
  Recommended: "bg-palette-blue text-white",
  Signature: "bg-palette-yellow text-ink",
  Sharing: "bg-palette-yellow text-ink",
  Hemat: "bg-palette-red text-white",
  "Barista's Pick": "bg-palette-blue text-white",
};

export function ProductCard({ item }: { item: MenuItem }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border-2 border-ink bg-white shadow-block-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-block">
      <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-ink bg-palette-cream">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {item.badge && (
          <span
            className={`absolute left-3 top-3 rounded-full border-2 border-ink px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider ${
              badgeColors[item.badge] ?? "bg-white text-ink"
            }`}
          >
            {item.badge}
          </span>
        )}
        {item.group && (
          <span className="absolute right-3 top-3 rounded-full border-2 border-ink bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ink/70 backdrop-blur">
            {item.group.split("·")[0].trim()}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-base font-extrabold leading-tight">{item.name}</h3>
        </div>
        {item.desc && (
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-foreground/65">
            {item.desc}
          </p>
        )}
        <div className="mt-auto flex items-end justify-between gap-3 pt-4">
          <div className="font-display text-lg font-extrabold text-palette-red">
            Rp {item.price}
          </div>
          <Link
            to="/menu"
            className="rounded-full border-2 border-ink bg-palette-yellow px-3 py-1.5 text-xs font-bold transition-all hover:bg-palette-red hover:text-white"
          >
            Order
          </Link>
        </div>
      </div>
    </article>
  );
}
