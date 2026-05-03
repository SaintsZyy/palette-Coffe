import { testimonials } from "@/data/palette";

const tones = ["bg-palette-yellow", "bg-white", "bg-palette-blue text-white"];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border-2 border-ink bg-palette-orange px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white">
            Cerita Pengunjung
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold md:text-5xl">
            Good people,
            <br />
            <span className="text-palette-red">great vibes.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className={`rounded-2xl border-2 border-ink p-6 shadow-block-sm transition-transform hover:-translate-y-1 ${tones[i % tones.length]}`}
            >
              <div className="font-display text-3xl leading-none">"</div>
              <blockquote className="mt-2 text-base leading-relaxed">{t.text}</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full border-2 border-ink bg-palette-cream font-display text-sm font-extrabold text-palette-ink">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-xs opacity-70">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
