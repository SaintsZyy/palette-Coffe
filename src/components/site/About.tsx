import { highlights } from "@/data/palette";

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <div className="absolute -left-3 -top-3 h-full w-full rounded-3xl bg-palette-yellow" />
            <img
              src="/assets/images/palette-interior.jpg"
              alt="Suasana interior cafe"
              className="relative h-[320px] w-full rounded-3xl border-2 border-ink object-cover shadow-block sm:h-[440px]"
            />
            <div className="absolute -bottom-4 -right-2 rotate-[6deg] rounded-2xl border-2 border-ink bg-palette-red px-3 py-2 text-white shadow-block-sm sm:-bottom-5 sm:-right-3 sm:px-4 sm:py-3">
              <div className="font-hand text-lg leading-none sm:text-xl">since the first sip</div>
              <div className="font-display text-sm font-bold uppercase tracking-wider">
                creative playground
              </div>
            </div>
          </div>

          <div>
            <span className="inline-block rounded-full border-2 border-ink bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-palette-blue">
              Tentang Kami
            </span>
            <h2 className="mt-4 font-display text-4xl font-extrabold md:text-5xl">
              Coffee & Space <span className="text-palette-orange">Experience</span>
            </h2>
            <p className="mt-5 text-foreground/75 md:text-lg">
              Nama cafe hadir sebagai <strong>creative playground di kota kamu</strong>. Di sini
              kamu bisa nongkrong, ngejar deadline, brainstorming project, sampai hunting konten
              dengan visual yang artistic.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className="rounded-2xl border-2 border-ink bg-white p-4 shadow-block-sm transition-transform hover:-translate-y-1 hover:rotate-[-1deg]"
                >
                  <div className="text-2xl">{h.icon}</div>
                  <div className="mt-2 font-display text-base font-extrabold">{h.title}</div>
                  <div className="mt-1 text-xs leading-relaxed text-foreground/65">{h.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
