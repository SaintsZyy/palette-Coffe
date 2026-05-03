import { cafe } from "@/data/palette";

export function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-palette-ink text-palette-cream">
      <div className="paint-stripes h-3" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-5 md:grid-cols-3 md:px-8">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <img
              src="/assets/icons/logo.png"
              alt="Palette Coffee logo"
              className="h-10 w-10 rounded-full border-2 border-palette-cream object-cover"
            />
            <div>
              <div className="font-display text-xl font-extrabold">{cafe.name}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-palette-yellow">
                {cafe.concept}
              </div>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm text-palette-cream/70 font-hand text-xl leading-snug md:max-w-none">
            "{cafe.tagline} ✨"
          </p>
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-palette-yellow">
            Navigasi
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:text-palette-yellow">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-palette-yellow">
                Menu
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-palette-yellow">
                Galeri
              </a>
            </li>
            <li>
              <a href="#location" className="hover:text-palette-yellow">
                Lokasi
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-palette-yellow">
            Connect
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={cafe.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-palette-yellow"
              >
                📷 @{cafe.instagram}
              </a>
            </li>
            <li>
              <a
                href={cafe.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="hover:text-palette-yellow"
              >
                💬 {cafe.whatsappLabel}
              </a>
            </li>
            <li>
              <a
                href={cafe.maps}
                target="_blank"
                rel="noreferrer"
                className="hover:text-palette-yellow"
              >
                📍 {cafe.shortAddress}
              </a>
            </li>
            <li className="text-palette-cream/60">⏰ {cafe.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-palette-cream/15 px-5 py-5 text-center text-xs text-palette-cream/60 md:px-8">
        © {new Date().getFullYear()} Palette Coffee · Coffee & Space. All rights reserved.
      </div>
    </footer>
  );
}
