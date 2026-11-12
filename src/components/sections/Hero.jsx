"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "@/components/ui/Button";
import SearchTabs from "@/components/search/SearchTabs";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const ref = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from("[data-hero-badge]", { y: 20, opacity: 0, duration: 0.6 })
        .from(
          "[data-hero-line]",
          { yPercent: 110, duration: 1, stagger: 0.15 },
          "-=0.2"
        )
        .from("[data-hero-text]", { y: 30, opacity: 0, duration: 0.8 }, "-=0.5")
        .from(
          "[data-hero-cta]",
          { y: 30, opacity: 0, duration: 0.7, stagger: 0.12 },
          "-=0.5"
        )
        .from("[data-hero-search]", { y: 60, opacity: 0, duration: 0.9 }, "-=0.4");

      // background glow orbs ki halki floating animation
      gsap.to("[data-orb]", {
        y: -30,
        x: 20,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 1,
      });
    },
    { scope: ref }
  );

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-ink to-ink" />
      <div
        data-orb
        className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-gold/20 blur-3xl"
      />
      <div
        data-orb
        className="absolute bottom-0 -left-24 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl"
      />

      <div className="container-x relative z-10 text-center">
        <span
          data-hero-badge
          className="inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold"
        >
          Your journey starts here
        </span>

        <h1 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1]">
          <span className="block overflow-hidden">
            <span data-hero-line className="block">
              Discover the World
            </span>
          </span>
          <span className="block overflow-hidden">
            <span data-hero-line className="block text-gold">
              Travel Without Limits
            </span>
          </span>
        </h1>

        <p
          data-hero-text
          className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-slate-400"
        >
          Visa, flights, hotels aur car rental, sab kuch ek jagah. Apna agla
          safar plan karo aasani aur befikri ke saath.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div data-hero-cta>
            <Button href="#services" size="lg">
              Explore Services
            </Button>
          </div>
          <div data-hero-cta>
            <Button href="#destinations" variant="outline" size="lg">
              Popular Destinations
            </Button>
          </div>
        </div>

        {/* Search tabs yahan aayenge */}
        <div data-hero-search className="mt-14">
          <SearchTabs />
        </div>
      </div>
    </section>
  );
}