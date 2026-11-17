import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Courses } from "@/components/site/Courses";
import { Infrastructure } from "@/components/site/Infrastructure";
import { Leadership } from "@/components/site/Leadership";
import { Gallery } from "@/components/site/Gallery";
import { Media } from "@/components/site/Media";
import { Videos } from "@/components/site/Videos";
import { Recruiters } from "@/components/site/Recruiters";
import { Placements } from "@/components/site/Placements";
import { Testimonials } from "@/components/site/Testimonials";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kalyan PG College — Bhilai Nagar-Durg (C.G.)" },
      {
        name: "description",
        content:
          "Kalyan Post Graduate College, Bhilai — Premier grant-in-aid institution established in 1963. Recognized by UGC as 'College with Potential for Excellence' and affiliated to Hemchand Yadav University Durg.",
      },
      { property: "og:title", content: "Kalyan PG College — Bhilai Nagar-Durg" },
      {
        property: "og:description",
        content:
          "60+ years of academic excellence. Science, Commerce, Arts, Education, BCA, and 8 Ph.D Research Centres. Admissions open for 2026-27.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-surface text-ink">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Infrastructure />
      <Leadership />
      <Gallery />
      <Media />
      <Videos />
      <Recruiters />
      <Placements />
      <Testimonials />
      <Footer />
    </main>
  );
}
