import { useState } from "react";
import { cafe } from "@/data/palette";

const links = [
  { href: "#about", label: "Tentang" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Galeri" },
  { href: "#testimonials", label: "Cerita" },
  { href: "#location", label: "Lokasi" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-palette-cream/85 backdrop-blur supports-[backdrop-filter]:bg-palette-cream/75">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <img
            src="/assets/icons/logo.png"
            alt="Palette Coffee logo"
            className="h-9 w-9 rounded-full border-2 border-ink object-cover shadow-block-sm"
          />
          <div className="min-w-0 leading-tight">
            <div className="truncate font-display text-base font-extrabold tracking-tight sm:text-lg">
              {cafe.name}
            </div>
            <div className="-mt-0.5 hidden text-[10px] uppercase tracking-[0.2em] text-palette-orange sm:block">
              {cafe.concept}
            </div>
          </div>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-palette-red"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#menu"
            className="rounded-full border-2 border-ink bg-palette-yellow px-4 py-2 text-sm font-bold text-palette-ink shadow-block-sm transition-transform hover:-translate-y-0.5"
          >
            Pesan Sekarang
          </a>
        </nav>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border-2 border-ink bg-white md:hidden"
        >
          <span className="text-lg">{open ? "✕" : "☰"}</span>
        </button>
      </div>
      {open && (
        <div className="border-t-2 border-ink bg-palette-cream md:hidden">
          <div className="flex flex-col gap-1 px-5 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-palette-yellow/40"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#menu"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full border-2 border-ink bg-palette-red px-4 py-2 text-center text-sm font-bold text-white"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
