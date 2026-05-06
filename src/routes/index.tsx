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
      { title: "Logo / Nama Cafe — Coffee & Creative Space" },
      {
        name: "description",
        content:
          "Template coffee shop — creative playground untuk ngopi, berkarya, dan hunting konten. Open daily 09.00-23.00 di kota kamu.",
      },
      { property: "og:title", content: "Logo / Nama Cafe — Coffee & Creative Space" },
      {
        property: "og:description",
        content: "Placeholder tagline untuk identitas cafe kamu",
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
