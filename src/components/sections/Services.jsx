"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SectionHeading from "@/components/ui/SectionHeading";
import useReveal from "@/hooks/useReveal";
import { services } from "@/data/services";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Services() {
  const ref = useRef(null);

  // Heading ka scroll reveal (data-reveal wale elements)
  useReveal(ref);

  const { contextSafe } = useGSAP(
    () => {
      // Cards ek ke baad ek scroll par aayein
      gsap.from("[data-card]", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-grid]",
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: ref }
  );

  // Hover effects (contextSafe se GSAP ka cleanup sahi hota hai)
  const onEnter = contextSafe((e) => {
    const card = e.currentTarget;
    gsap.to(card, { y: -10, duration: 0.3, ease: "power2.out" });
    gsap.to(card.querySelector("[data-icon]"), {
      rotate: 10,
      scale: 1.15,
      duration: 0.3,
      ease: "back.out(2)",
    });
    gsap.to(card.querySelector("[data-glow]"), { opacity: 1, duration: 0.3 });
  });

  const onLeave = contextSafe((e) => {
    const card = e.currentTarget;
    gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out" });
    gsap.to(card.querySelector("[data-icon]"), {
      rotate: 0,
      scale: 1,
      duration: 0.3,
    });
    gsap.to(card.querySelector("[data-glow]"), { opacity: 0, duration: 0.3 });
  });

  return (
    <section id="services" ref={ref} className="relative py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Services"
          title="Everything you need for your"
          highlight="perfect journey"
          description="Everything from visas to car rentals in one place. No hidden charges, no stress."
        />

        <div
          data-grid
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <article
              key={service.id}
              data-card
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy p-6"
            >
              {/* Hover glow */}
              <div
                data-glow
                className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gold/20 opacity-0 blur-3xl"
              />

              <div
                data-icon
                className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-3xl"
              >
                {service.icon}
              </div>

              <h3 className="relative font-display text-xl font-bold text-white">
                {service.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-slate-400">
                {service.description}
              </p>

              <ul className="relative mt-5 space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-slate-300"
                  >
                    <span className="text-gold">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}