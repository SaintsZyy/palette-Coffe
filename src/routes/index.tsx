import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Menu } from "@/components/site/Menu";
import { Gallery } from "@/components/site/Gallery";
import { Studio } from "@/components/site/Studio";
import { Testimonials } from "@/components/site/Testimonials";
import { Location } from "@/components/site/Location";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Palette Coffee — Coffee & Space di Semarang" },
      {
        name: "description",
        content:
          "Palette Coffee & Space Semarang — creative playground untuk ngopi, berkarya, dan hunting konten. Open daily 09.00–01.00 di Banyumanik.",
      },
      { property: "og:title", content: "Palette Coffee — Coffee & Space" },
      {
        property: "og:description",
        content: "A place of happiness to paint the canvas of your life ✨",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-palette-cream text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Studio />
      <Testimonials />
      <Location />
      <Footer />
    </main>
  );
}
