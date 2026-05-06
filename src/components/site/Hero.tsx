import { cafe, heroImages } from "@/data/palette";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-warm">
      {/* paint blobs */}
      <div className="pointer-events-none absolute -left-24 -top-20 h-72 w-72 rounded-full bg-palette-yellow/70 blur-3xl" />
      <div className="pointer-events-none absolute right-[-6rem] top-40 h-80 w-80 rounded-full bg-palette-red/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-4rem] left-1/3 h-72 w-72 rounded-full bg-palette-blue/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-5 md:grid-cols-2 md:gap-14 md:px-8 md:py-24">
        <div className="animate-fade-up">
          <span className="inline-flex max-w-full items-center gap-2 rounded-full border-2 border-ink bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-palette-red shadow-block-sm sm:text-xs sm:tracking-[0.18em]">
            <span className="h-2 w-2 rounded-full bg-palette-red animate-pulse" />
            Open Now · {cafe.hours}
          </span>
          <h1 className="mt-5 font-display text-[2.35rem] font-extrabold leading-[1.02] tracking-tight sm:text-5xl md:text-7xl">
            Paint your <span className="text-palette-red">day</span>,
            <br />
            sip your <span className="text-palette-orange">art</span>.
          </h1>
          <p className="mt-5 max-w-xl text-base text-foreground/75 md:text-lg">
            <span className="font-hand text-2xl text-palette-blue">"{cafe.tagline}"</span>
            <br className="hidden md:block" />
            Lebih dari coffee shop — ruang buat ide baru, ngobrol santai, berkarya, dan bikin konten
            yang memorable di kota kamu.
          </p>
          <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#menu"
              className="rounded-full border-2 border-ink bg-palette-red px-6 py-3 text-center font-bold text-white shadow-block transition-transform hover:-translate-y-0.5"
            >
              Lihat Menu →
            </a>
            <a
              href={cafe.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-ink bg-white px-6 py-3 text-center font-bold text-palette-ink shadow-block-sm transition-transform hover:-translate-y-0.5"
            >
              Pesan via WhatsApp
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-foreground/60 sm:flex sm:items-center sm:gap-5">
            <div>
              <div className="font-display text-2xl font-extrabold text-palette-ink">2.1k+</div>
              <div className="text-xs uppercase tracking-wider">IG Followers</div>
            </div>
            <div className="hidden h-8 w-px bg-ink/20 sm:block" />
            <div>
              <div className="font-display text-2xl font-extrabold text-palette-ink">16h</div>
              <div className="text-xs uppercase tracking-wider">Daily Open</div>
            </div>
          </div>
        </div>

        {/* Image collage */}
        <div className="relative mx-auto h-[360px] w-full max-w-sm sm:h-[440px] sm:max-w-lg md:h-[560px]">
          <div
            className="group absolute left-0 top-6 h-52 w-36 rotate-[-6deg] overflow-hidden rounded-2xl border-2 border-ink bg-white p-2 shadow-block animate-float sm:h-64 sm:w-44 md:h-80 md:w-56"
            style={{ ["--r" as string]: "-6deg" }}
          >
            <img
              src={heroImages.counter1}
              alt="Coffee shop counter"
              className="h-full w-full rounded-xl object-cover transition-transform duration-300 ease-out group-hover:scale-105"
            />
          </div>
          <div
            className="group absolute right-0 top-0 h-56 w-40 rotate-[5deg] overflow-hidden rounded-2xl border-2 border-ink bg-white p-2 shadow-block animate-float sm:h-72 sm:w-52 md:h-96 md:w-64"
            style={{ ["--r" as string]: "5deg", animationDelay: "1.2s" }}
          >
            <img
              src={heroImages.interior}
              alt="Cafe interior"
              className="h-full w-full rounded-xl object-cover transition-transform duration-300 ease-out group-hover:scale-105"
            />
          </div>
          <div
            className="group absolute bottom-0 left-8 h-44 w-44 rotate-[-3deg] overflow-hidden rounded-2xl border-2 border-ink bg-white p-2 shadow-block animate-float sm:left-12 sm:h-56 sm:w-56 md:left-24 md:h-64 md:w-72"
            style={{ ["--r" as string]: "-3deg", animationDelay: "0.6s" }}
          >
            <img
              src={heroImages.counter2}
              alt="Coffee bar"
              className="h-full w-full rounded-xl object-cover transition-transform duration-300 ease-out group-hover:scale-105"
            />
          </div>
          {/* sticker */}
          <div className="absolute right-0 bottom-4 grid h-20 w-20 -rotate-12 place-items-center rounded-full border-2 border-ink bg-palette-yellow text-center font-display text-[10px] font-extrabold uppercase shadow-block-sm sm:-right-2 sm:bottom-6 sm:h-24 sm:w-24 sm:text-xs md:h-28 md:w-28 md:text-sm">
            Coffee
            <br />& Space
          </div>
        </div>
      </div>

      {/* marquee */}
      <div className="border-y-2 border-ink bg-palette-ink py-3 text-palette-cream">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap px-6 font-display text-sm font-bold uppercase tracking-wider sm:text-base">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-10">
              <span>Paint your canvas</span>
              <span className="text-palette-yellow">●</span>
              <span>Signature Latte</span>
              <span className="text-palette-orange">●</span>
              <span>Creative corner open</span>
              <span className="text-palette-red">●</span>
              <span>Creative Space Nama Kota</span>
              <span className="text-palette-yellow">●</span>
              <span>Open daily 09.00 - 23.00</span>
              <span className="text-palette-orange">●</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
