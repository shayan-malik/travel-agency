"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SectionHeading from "@/components/ui/SectionHeading";
import useReveal from "@/hooks/useReveal";
import { testimonials } from "@/data/testimonials";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Stars({ count }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={i < count ? "text-gold" : "text-slate-600"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);

  useReveal(ref);

  const { contextSafe } = useGSAP(
    () => {
      gsap.from("[data-testi]", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-testi-grid]",
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: ref }
  );

  const onEnter = contextSafe((e) => {
    const card = e.currentTarget;
    gsap.to(card, { y: -8, duration: 0.3, ease: "power2.out" });
    gsap.to(card.querySelector("[data-quote]"), {
      scale: 1.2,
      rotate: -8,
      duration: 0.3,
      ease: "back.out(2)",
    });
  });

  const onLeave = contextSafe((e) => {
    const card = e.currentTarget;
    gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out" });
    gsap.to(card.querySelector("[data-quote]"), {
      scale: 1,
      rotate: 0,
      duration: 0.3,
    });
  });

  return (
    <section id="testimonials" ref={ref} className="relative py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by"
          highlight="thousands of travelers"
          description="Hamare customers kya kehte hain, unki apni zubani."
        />

        <div
          data-testi-grid
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t) => (
            <article
              key={t.id}
              data-testi
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
              className="relative flex flex-col rounded-2xl border border-white/10 bg-navy p-6 transition-colors duration-300 hover:border-gold/40"
            >
              <span
                data-quote
                className="absolute right-5 top-4 font-display text-6xl leading-none text-gold/20"
              >
                “
              </span>

              <Stars count={t.rating} />

              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">
                {t.text}
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-sm font-bold text-ink">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {t.name}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {t.role} • {t.city}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}