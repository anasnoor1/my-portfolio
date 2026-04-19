import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { Work } from "@/components/portfolio/Work";
import { About } from "@/components/portfolio/About";
import { Stack } from "@/components/portfolio/Stack";
import { Contact, Footer } from "@/components/portfolio/Contact";
export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Muhammad Anas — Full Stack Developer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Muhammad Anas, a MERN stack full-stack developer based in Lahore. Selected work in real-time marketplaces, e-commerce, fitness platforms and Web3 VR.",
      },
      { property: "og:title", content: "Muhammad Anas — Full Stack Developer" },
      {
        property: "og:description",
        content: "Selected projects, stack and contact for Muhammad Anas.",
      },
    ],
  }),
});
function Index() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav />
      <Hero />
      <Marquee />
      <Work />
      <About />
      <Stack />
      <Contact />
      <Footer />
    </main>
  );
}
