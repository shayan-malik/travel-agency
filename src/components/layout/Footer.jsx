import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Destinations", href: "#destinations" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = ["Visa Services", "Flight Booking", "Hotel Booking", "Car Rental"];

const socials = [
  { label: "Facebook", short: "f" },
  { label: "Instagram", short: "in" },
  { label: "Twitter", short: "x" },
  { label: "LinkedIn", short: "li" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink pt-16">
      <div className="container-x">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="#home" className="font-display text-2xl font-bold text-white">
              Safar<span className="text-gold">kos</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Visa, flights, hotels and car rental, all in one place. Your journey, our responsibility.
            </p>

            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-semibold uppercase text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-ink"
                >
                  {s.short}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((name) => (
                <li key={name}>
                  <Link
                    href="#services"
                    className="text-sm text-slate-400 transition-colors hover:text-gold"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Stay Updated</h4>
            <p className="mb-4 text-sm text-slate-400">
              Get new offers and deals in your inbox.
            </p>
            <form
              className="flex gap-2"
              action="#"
            >
              <input
                type="email"
                required
                placeholder="Your email"
                aria-label="Email for newsletter"
                className="min-w-0 flex-1 rounded-full border border-white/10 bg-navy-light px-4 py-2.5 text-sm text-white placeholder:text-slate-500 outline-none focus:border-gold"
              />
              <button
                type="submit"
                className="cursor-pointer rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-gold-dark"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Safarkos Travel. All rights reserved.</p>
          <p>Built with Next.js, Tailwind CSS & GSAP</p>
        </div>
      </div>
    </footer>
  );
}