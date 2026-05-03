import { gallery } from "@/data/palette";

export function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end sm:gap-6">
          <div>
            <span className="inline-block rounded-full border-2 border-ink bg-palette-blue px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white">
              Visual Gallery
            </span>
            <h2 className="mt-4 font-display text-4xl font-extrabold md:text-5xl">
              Interior vibes &<br />
              <span className="text-palette-orange">plating moments.</span>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/palettespace__/"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border-2 border-ink bg-white px-4 py-2 text-sm font-bold shadow-block-sm transition-transform hover:-translate-y-0.5 md:inline-block"
          >
            Lihat di Instagram →
          </a>
        </div>

        <div className="mt-10 columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4 [&>*]:mb-4">
          {gallery.map((g, i) => (
            <div
              key={i}
              className="break-inside-avoid overflow-hidden rounded-2xl border-2 border-ink bg-white p-1.5 shadow-block-sm transition-transform hover:-translate-y-1"
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className={`w-full rounded-xl object-cover ${g.tall ? "aspect-[3/4]" : "aspect-square"}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
