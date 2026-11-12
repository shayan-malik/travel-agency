"use client";

import { useRef, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Field from "@/components/ui/Field";
import Button from "@/components/ui/Button";
import useReveal from "@/hooks/useReveal";

const info = [
  { icon: "📍", label: "Office", value: "Shahrah-e-Faisal, Karachi, Pakistan" },
  { icon: "📞", label: "Phone", value: "+92 300 1234567" },
  { icon: "✉️", label: "Email", value: "info@wanderlux.com" },
  { icon: "🕒", label: "Working Hours", value: "Mon - Sat, 9:00 AM - 8:00 PM" },
];

const services = ["Visa Services", "Flight Booking", "Hotel Booking", "Car Rental"];

const initialForm = { name: "", email: "", service: "", message: "" };

export default function Contact() {
  const ref = useRef(null);
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  useReveal(ref);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Backend nahi hai, to bas success message dikhate hain
    setSent(true);
    setForm(initialForm);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" ref={ref} className="relative bg-navy/40 py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Contact Us"
          title="Let's plan your"
          highlight="next trip"
          description="Fill in the form and our team will get back to you within 24 hours."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Contact info */}
          <div data-reveal className="space-y-4 lg:col-span-2">
            {info.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-navy p-5 transition-colors duration-300 hover:border-gold/40"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-xl">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form
            data-reveal
            onSubmit={handleSubmit}
            className="grid gap-4 rounded-2xl border border-white/10 bg-navy p-6 sm:grid-cols-2 sm:p-8 lg:col-span-3"
          >
            <Field
              label="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              minLength={3}
            />
            <Field
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />

            <div className="sm:col-span-2">
              <Field
                label="Service"
                name="service"
                options={services}
                value={form.service}
                onChange={handleChange}
                placeholder="Which service do you need?"
              />
            </div>

            <div className="flex flex-col gap-1.5 text-left sm:col-span-2">
              <label htmlFor="message" className="text-xs font-medium text-slate-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                minLength={10}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your travel plan..."
                className="w-full resize-none rounded-xl border border-white/10 bg-navy-light px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20"
              />
            </div>

            <div className="sm:col-span-2">
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </div>

            {sent && (
              <p
                role="status"
                className="rounded-xl border border-gold/30 bg-gold/10 px-4 py-3 text-sm text-gold sm:col-span-2"
              >
                ✓ Thank you! Your message has been received, we will get in touch soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}