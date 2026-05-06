import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getCategory, menuCategories } from "@/data/palette";
import { ProductCard } from "@/components/site/ProductCard";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/menu/$category")({
  loader: ({ params }) => {
    const category = getCategory(params.category);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    const label = loaderData?.category.label ?? "Menu";
    return {
      meta: [
        { title: `${label} — Logo / Nama Cafe` },
        {
          name: "description",
          content: `Lihat semua menu ${label.toLowerCase()} di cafe template lengkap dengan harga & deskripsi.`,
        },
        { property: "og:title", content: `${label} — Logo / Nama Cafe` },
        {
          property: "og:description",
          content: loaderData?.category.blurb ?? "Menu Logo / Nama Cafe.",
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-palette-cream">
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-24 text-center">
        <h1 className="font-display text-4xl font-extrabold">Kategori tidak ditemukan</h1>
        <p className="mt-3 text-foreground/65">
          Coba kembali ke halaman menu untuk lihat kategori yang tersedia.
        </p>
        <Link
          to="/menu"
          className="mt-6 inline-block rounded-full border-2 border-ink bg-palette-yellow px-5 py-2 font-bold"
        >
          Lihat semua menu
        </Link>
      </div>
      <Footer />
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-3xl px-5 py-24 text-center">
      <h1 className="font-display text-3xl font-extrabold">Terjadi kesalahan</h1>
      <p className="mt-2 text-foreground/65">{error.message}</p>
    </div>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();

  // Group items by sub-group for nicer presentation
  const groups = category.items.reduce<Record<string, typeof category.items>>((acc, item) => {
    const key = item.group ?? category.label;
    (acc[key] ||= []).push(item);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-palette-cream">
      <Navbar />
      <main className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <header className="mb-10 flex flex-col gap-4">
          <Link
            to="/menu"
            className="self-start rounded-full border-2 border-ink bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider hover:bg-palette-yellow"
          >
            ← All Menu
          </Link>
          <span className="self-start rounded-full border-2 border-ink bg-palette-yellow px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]">
            {category.label}
          </span>
          <h1 className="font-display text-4xl font-extrabold md:text-6xl">
            {category.label} <span className="text-palette-red">Menu</span>
          </h1>
          <p className="max-w-2xl text-foreground/65">{category.blurb}</p>
        </header>

        <nav className="mb-10 flex flex-wrap gap-2">
          {menuCategories.map((c) => (
            <Link
              key={c.slug}
              to="/menu/$category"
              params={{ category: c.slug }}
              className="rounded-full border-2 border-ink bg-white px-4 py-2 text-sm font-bold transition-all hover:bg-palette-yellow data-[status=active]:bg-palette-red data-[status=active]:text-white"
              activeOptions={{ exact: true }}
            >
              {c.label}
            </Link>
          ))}
        </nav>

        <div className="space-y-14">
          {Object.entries(groups).map(([groupName, items]) => (
            <section key={groupName}>
              <h2 className="mb-5 inline-block border-b-2 border-ink pb-1 font-display text-2xl font-extrabold">
                {groupName}
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
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
