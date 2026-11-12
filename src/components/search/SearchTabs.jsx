"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import VisaForm from "@/components/search/VisaForm";
import FlightForm from "@/components/search/FlightForm";
import HotelForm from "@/components/search/HotelForm";
import CarForm from "@/components/search/CarForm";
import ResultCard from "@/components/ui/ResultCard";

gsap.registerPlugin(useGSAP);

const tabs = [
  { id: "flights", label: "Flights", icon: "✈️", Form: FlightForm },
  { id: "hotels", label: "Hotels", icon: "🏨", Form: HotelForm },
  { id: "visa", label: "Visa", icon: "🛂", Form: VisaForm },
  { id: "cars", label: "Car Rental", icon: "🚗", Form: CarForm },
];

export default function SearchTabs() {
  const ref = useRef(null);
  const messageRef = useRef(null);

  const [active, setActive] = useState("flights");
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState(null);

  const ActiveForm = tabs.find((t) => t.id === active).Form;

  const changeTab = (id) => {
    setActive(id);
    setResults([]);
    setSelected(null);
  };

  const handleSearch = (data) => {
    setResults(data);
    setSelected(null);
  };

  // When an item is selected, make sure the confirmation is visible
  useEffect(() => {
    if (selected) {
      messageRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [selected]);

  // Animate result cards with a stagger whenever results change
  useGSAP(
    () => {
      if (!results.length) return;
      gsap.fromTo(
        "[data-result]",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "opacity,transform",
        }
      );
    },
    { scope: ref, dependencies: [results] }
  );

  // Fade the form in when the tab changes
  useGSAP(
    () => {
      gsap.from("[data-form]", {
        opacity: 0,
        y: 12,
        duration: 0.4,
        ease: "power2.out",
      });
    },
    { scope: ref, dependencies: [active] }
  );

  return (
    <div
      ref={ref}
      className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-navy/80 p-4 sm:p-6 text-left shadow-2xl shadow-black/40 backdrop-blur-md"
    >
      {/* Tabs */}
      <div className="mb-6 grid grid-cols-2 sm:grid-cols-4 gap-2 rounded-2xl bg-ink/60 p-1.5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => changeTab(tab.id)}
            className={`flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold transition-all duration-300 cursor-pointer ${
              active === tab.id
                ? "bg-gold text-ink shadow-lg shadow-gold/20"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <span>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active form */}
      <div data-form>
        <ActiveForm onSearch={handleSearch} />
      </div>

      {/* Results */}
      {results.length > 0 && (
        <div className="mt-6 border-t border-white/10 pt-6">
          <p className="mb-4 text-sm text-slate-400">
            <span className="font-semibold text-white">{results.length}</span>{" "}
            results found
          </p>

          {/* Confirmation message (above the cards so it stays in view) */}
          {selected && (
            <p
              ref={messageRef}
              role="status"
              className="mb-4 rounded-xl border border-gold/30 bg-gold/10 px-4 py-3 text-sm text-gold"
            >
              ✓ Selected: {selected.title} (${selected.price}). Our team will
              contact you shortly.
            </p>
          )}

          <div className="flex flex-col gap-3">
            {results.map((item) => (
              <ResultCard
                key={item.id}
                item={item}
                onSelect={setSelected}
                isSelected={selected?.id === item.id}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}