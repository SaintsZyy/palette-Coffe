import { createFileRoute, Link } from "@tanstack/react-router";
import { menuCategories } from "@/data/palette";
import { ProductCard } from "@/components/site/ProductCard";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/menu/")({
  head: () => ({
    meta: [
      { title: "Full Menu — Logo / Nama Cafe" },
      {
        name: "description",
        content:
          "Eksplor semua menu cafe template — coffee, non-coffee, snacks, mains, dan bundling lengkap dengan harga.",
      },
      { property: "og:title", content: "Full Menu — Logo / Nama Cafe" },
      {
        property: "og:description",
        content: "Coffee, non-coffee, snacks, mains & bundling. Order now di lokasi cafe kamu.",
      },
    ],
  }),
  component: MenuIndexPage,
});

function MenuIndexPage() {
  return (
    <div className="min-h-screen bg-palette-cream">
      <Navbar />
      <main className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <header className="mb-10 flex flex-col gap-4">
          <Link
            to="/"
            className="self-start rounded-full border-2 border-ink bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider hover:bg-palette-yellow"
          >
            ← Back to home
          </Link>
          <span className="self-start rounded-full border-2 border-ink bg-palette-yellow px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]">
            All Menu
          </span>
          <h1 className="font-display text-4xl font-extrabold md:text-6xl">
            Full <span className="text-palette-red">Cafe</span> Menu
          </h1>
          <p className="max-w-2xl text-foreground/65">
            Dari espresso ritual hingga rice bowl & dessert — semua menu kami dalam satu tempat.
            Filter cepat per kategori atau scroll untuk lihat semuanya.
          </p>
        </header>

        <nav className="mb-12 flex flex-wrap gap-2">
          {menuCategories.map((c) => (
            <a
              key={c.slug}
              href={`#${c.slug}`}
              className="rounded-full border-2 border-ink bg-white px-4 py-2 text-sm font-bold transition-all hover:bg-palette-yellow"
            >
              {c.label}
            </a>
          ))}
        </nav>

        <div className="space-y-20">
          {menuCategories.map((c) => (
            <section key={c.slug} id={c.slug} className="scroll-mt-24">
              <div className="mb-6 flex flex-col gap-2 border-b-2 border-ink pb-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="font-display text-3xl font-extrabold md:text-4xl">{c.label}</h2>
                  <p className="mt-1 text-sm text-foreground/65">{c.blurb}</p>
                </div>
                <Link
                  to="/menu/$category"
                  params={{ category: c.slug }}
                  className="self-start rounded-full border-2 border-ink bg-palette-yellow px-4 py-1.5 text-xs font-bold uppercase tracking-wider hover:bg-palette-red hover:text-white md:self-end"
                >
                  Lihat hanya {c.label} →
                </Link>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {c.items.map((item) => (
                  <ProductCard key={item.name} item={item} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-16 text-center text-xs text-foreground/50">
          *Harga belum termasuk PB1 tax 10%
        </p>
      </main>
      <Footer />
    </div>
  );
}
