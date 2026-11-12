"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SectionHeading from "@/components/ui/SectionHeading";
import useReveal from "@/hooks/useReveal";
import { destinations } from "@/data/destinations";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Destinations() {
  const ref = useRef(null);

  useReveal(ref);

  const { contextSafe } = useGSAP(
    () => {
      gsap.set("[data-info]", { y: 12 });
      gsap.from("[data-dest]", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-dest-grid]",
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: ref }
  );

  const onEnter = contextSafe((e) => {
    const card = e.currentTarget;
    gsap.to(card.querySelector("[data-img]"), {
      scale: 1.12,
      duration: 0.7,
      ease: "power2.out",
    });
    gsap.to(card.querySelector("[data-info]"), {
      y: 12,
      duration: 0.4,
      ease: "power2.out",
    });
  });

  const onLeave = contextSafe((e) => {
    const card = e.currentTarget;
    gsap.to(card.querySelector("[data-img]"), {
      scale: 1,
      duration: 0.7,
      ease: "power2.out",
    });
    gsap.to(card.querySelector("[data-info]"), {
      y: 24,
      duration: 0.4,
      ease: "power2.out",
    });
  });

  return (
    <section
      id="destinations"
      ref={ref}
      className="relative bg-navy/40 py-24"
    >
      <div className="container-x">
        <SectionHeading
          eyebrow="Popular Destinations"
          title="Where will you go"
          highlight="next?"
          description="Hamare sab se pasandida shehar, behtareen flight aur hotel packages ke saath."
        />

        <div
          data-dest-grid
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {destinations.map((dest) => (
            <article
              key={dest.id}
              data-dest
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
              className="group relative h-96 cursor-pointer overflow-hidden rounded-2xl border border-white/10"
            >
              {/* Image (fallback gradient peeche hai) */}
              <div
                data-img
                className={`absolute inset-0 bg-gradient-to-br ${dest.gradient}`}
              >
                <Image
                  src={dest.image}
                  alt={`${dest.name}, ${dest.country}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

              {/* Tag + rating */}
              <div className="absolute inset-x-4 top-4 flex items-center justify-between">
                <span className="rounded-full bg-ink/70 px-3 py-1 text-xs font-semibold text-gold backdrop-blur">
                  {dest.tag}
                </span>
                <span className="rounded-full bg-ink/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  ★ {dest.rating}
                </span>
              </div>

              {/* Info */}
              <div
                data-info
                className="absolute inset-x-0 bottom-0 p-5 pb-10"
              >
                <h3 className="font-display text-2xl font-bold text-white">
                  {dest.name}
                </h3>
                <p className="text-sm text-slate-300">{dest.country}</p>

                <div className="mt-3 flex items-center justify-between">
                  <p className="text-sm text-slate-300">
                    From{" "}
                    <span className="text-xl font-bold text-gold">
                      ${dest.price}
                    </span>
                  </p>
                  <a
                    href="#home"
                    className="text-sm font-semibold text-white hover:text-gold transition-colors"
                  >
                    Book now →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}