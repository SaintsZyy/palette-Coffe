import { cafe } from "@/data/palette";

export function Studio() {
  return (
    <section className="relative bg-palette-ink py-20 text-palette-cream md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-5 md:grid-cols-2 md:px-8">
        <div className="relative h-[340px] sm:h-[420px]">
          <img
            src="/assets/images/palette-pose.jpg"
            alt="Photo studio Pose & Pop"
            className="absolute left-0 top-0 h-56 w-44 rotate-[-4deg] rounded-2xl border-2 border-palette-cream object-cover shadow-block sm:h-72 sm:w-56 md:h-96 md:w-64"
          />
          <img
            src="/assets/images/palette-photobooth.jpg"
            alt="Photo studio interior merah"
            className="absolute bottom-0 right-0 h-52 w-52 rotate-[6deg] rounded-2xl border-2 border-palette-cream object-cover shadow-block sm:h-64 sm:w-64 md:h-80 md:w-80"
          />
          <div className="absolute right-2 top-2 rotate-12 rounded-full border-2 border-palette-cream bg-palette-yellow px-3 py-1.5 font-display text-xs font-extrabold uppercase text-palette-ink shadow-block-sm sm:right-6 sm:px-4 sm:py-2 sm:text-sm">
            Open Now 🥰
          </div>
        </div>
        <div>
          <span className="inline-block rounded-full border-2 border-palette-cream bg-palette-red px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]">
            Creative Space
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold md:text-5xl">
            Photo Studio is
            <br />
            <span className="text-palette-yellow">Open Now!</span>
          </h2>
          <p className="mt-5 max-w-lg text-palette-cream/75 md:text-lg">
            Datang dan eksplorasi ruang kreatif PALETTE. Cocok untuk personal shoot, brand content,
            reels, atau collaborative project bareng teman kreator.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={cafe.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-palette-cream bg-palette-yellow px-6 py-3 font-bold text-palette-ink shadow-block-sm transition-transform hover:-translate-y-0.5"
            >
              Book via Instagram
            </a>
            <a
              href={cafe.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-palette-cream bg-transparent px-6 py-3 font-bold text-palette-cream transition-colors hover:bg-palette-cream hover:text-palette-ink"
            >
              Tanya Jadwal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
