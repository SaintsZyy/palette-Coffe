import { cafe } from "@/data/palette";

export function Location() {
  const mapsEmbed = "https://www.google.com/maps?q=Nama+Cafe+Nama+Kota&output=embed";
  return (
    <section id="location" className="bg-palette-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <span className="inline-block rounded-full border-2 border-ink bg-palette-red px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white">
              Visit Us
            </span>
            <h2 className="mt-4 font-display text-4xl font-extrabold md:text-5xl">
              Mampir ke
              <br />
              <span className="text-palette-orange">Nama Cafe.</span>
            </h2>
            <div className="mt-6 space-y-4 rounded-2xl border-2 border-ink bg-white p-6 shadow-block-sm">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-palette-blue">
                  Alamat
                </div>
                <p className="mt-1 text-sm leading-relaxed">{cafe.address}</p>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-palette-blue">
                  Jam Buka
                </div>
                <p className="mt-1 text-sm font-medium">{cafe.hours}</p>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-palette-blue">
                  Kontak
                </div>
                <p className="mt-1 text-sm font-medium">
                  WhatsApp: {cafe.whatsappLabel}
                  <br />
                  IG: @{cafe.instagram}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={cafe.maps}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border-2 border-ink bg-palette-yellow px-4 py-2 text-sm font-bold shadow-block-sm transition-transform hover:-translate-y-0.5"
                >
                  Google Maps
                </a>
                <a
                  href={cafe.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border-2 border-ink bg-palette-red px-4 py-2 text-sm font-bold text-white shadow-block-sm transition-transform hover:-translate-y-0.5"
                >
                  WhatsApp
                </a>
                <a
                  href={cafe.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border-2 border-ink bg-white px-4 py-2 text-sm font-bold shadow-block-sm transition-transform hover:-translate-y-0.5"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="overflow-hidden rounded-2xl border-2 border-ink bg-white p-2 shadow-block">
              <iframe
                title="Lokasi Nama Cafe"
                src={mapsEmbed}
                className="h-[320px] w-full rounded-xl sm:h-[420px] md:h-[460px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
