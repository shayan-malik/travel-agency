"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const stats = [
  { value: 15000, suffix: "+", label: "Happy Travelers" },
  { value: 120, suffix: "+", label: "Destinations" },
  { value: 8, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
];

export default function Stats() {
  const ref = useRef(null);

  useGSAP(
    () => {
      // Cards ka reveal
      gsap.from("[data-stat]", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          once: true,
        },
      });

      // Counters: 0 se target tak ginti
      gsap.utils.toArray("[data-counter]").forEach((el) => {
        const target = Number(el.dataset.value);
        const suffix = el.dataset.suffix || "";
        const counter = { val: 0 };

        gsap.to(counter, {
          val: target,
          duration: 2.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            once: true,
          },
          onUpdate: () => {
            el.textContent =
              Math.round(counter.val).toLocaleString("en-US") + suffix;
          },
        });
      });
    },
    { scope: ref }
  );

  return (
    <section ref={ref} className="relative py-20">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-4 rounded-3xl border border-white/10 bg-gradient-to-br from-navy to-navy-light p-6 sm:p-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              data-stat
              className="text-center lg:border-r lg:border-white/10 lg:last:border-r-0"
            >
              <p
                data-counter
                data-value={stat.value}
                data-suffix={stat.suffix}
                className="font-display text-4xl font-bold text-gold sm:text-5xl"
              >
                0{stat.suffix}
              </p>
              <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}