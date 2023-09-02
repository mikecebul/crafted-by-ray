
import Projects from "../components/projects";
import Image from "next/image";
import HeroBackground from "../../public/hero_background.jpg";
import HeroCTA from "../components/heroCTA";
import Testimonials from "../components/testimonial";
import { Metadata } from "next";

export const metafdata: Metadata = {
    title: "Crafted By Ray",
    description: "Wood working business and YouTuber."
}

export default function Page() {
  return (
      <main className="">
        <Image
          src={HeroBackground
          }
          alt="Pine wood panels background"
          className="w-full h-[434px] object-cover absolute inset-0 -z-10"
        />
        <HeroCTA />
        <Testimonials />
        <Projects />
      </main>
  );
}
