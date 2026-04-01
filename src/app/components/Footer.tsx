import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const navColumns = [
  {
    title: "Navigate",
    links: [
      { name: "Home", to: "hero" },
      { name: "About", to: "about-college" },
      { name: "Departments", to: "departments" },
      { name: "Committee", to: "committee" },
    ],
  },
  {
    title: "Conference",
    links: [
      { name: "Call for Papers", to: "papers" },
      { name: "Important Dates", to: "dates" },
      { name: "Registration", to: "registration" },
      { name: "Venue", to: "venue" },
    ],
  },
];

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      const ctx = gsap.context(() => {
        if (footerRef.current) {
          const inner = footerRef.current.querySelector(".footer-inner");
          if (inner) {
            gsap.fromTo(inner.children, { y: 30, opacity: 0 }, {
              y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out",
              scrollTrigger: { trigger: footerRef.current, start: "top 85%", once: true },
            });
          }
        }
      });
      ctxRef.current = ctx;
    });
    const ctxRef = { current: null as gsap.Context | null };
    return () => { cancelAnimationFrame(raf); ctxRef.current?.revert(); };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      ref={footerRef}
      className="relative pt-14 md:pt-20 pb-8"
      style={{
        background: "#141414",
      }}
    >
      {/* Top accent separator */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2"
        style={{
          width: "min(80%, 600px)",
          height: "1px",
          background: "linear-gradient(90deg, transparent, var(--clay), transparent)",
          opacity: 0.5,
        }}
      />
      <div className="footer-inner max-w-6xl mx-auto px-6 md:px-12">
        {/* Main grid — 3 columns */}
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-10 md:gap-12 pb-10 mb-8" style={{ borderBottom: "1px solid rgba(242, 240, 233, 0.06)" }}>
          {/* Brand + Contact */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span
                className="text-lg font-bold tracking-tight"
                style={{ fontFamily: "var(--font-heading)", color: "var(--cream)" }}
              >
                ICEAMT
              </span>
              <span
                className="text-xs"
                style={{ fontFamily: "var(--font-mono)", color: "var(--clay)" }}
              >
                2027
              </span>
            </div>
            <p
              className="text-sm leading-relaxed mb-6 max-w-xs"
              style={{
                fontFamily: "var(--font-body)",
                color: "rgba(242, 240, 233, 0.4)",
              }}
            >
              International Conference in Engineering Applied Science,
              Management & Technology.
            </p>

            {/* Contact — compact */}
            <div className="space-y-2">
              <a
                href="mailto:info@iceamt2027.org"
                className="block text-xs hover-lift transition-colors duration-300"
                style={{ fontFamily: "var(--font-mono)", color: "rgba(242, 240, 233, 0.45)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--clay)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242, 240, 233, 0.45)")}
              >
                info@iceamt2027.org
              </a>
              <a
                href="mailto:support@adishankara.ac.in"
                className="block text-xs hover-lift transition-colors duration-300"
                style={{ fontFamily: "var(--font-mono)", color: "rgba(242, 240, 233, 0.45)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--clay)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242, 240, 233, 0.45)")}
              >
                support@adishankara.ac.in
              </a>
              <span
                className="block text-xs"
                style={{ fontFamily: "var(--font-mono)", color: "rgba(242, 240, 233, 0.25)" }}
              >
                +91 484 246 3825
              </span>
            </div>
          </div>

          {/* Nav Columns */}
          {navColumns.map((col, i) => (
            <div key={i}>
              <h4
                className="text-[10px] uppercase tracking-[0.2em] mb-5"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "rgba(242, 240, 233, 0.3)",
                }}
              >
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollTo(link.to)}
                      className="text-sm cursor-pointer hover-lift transition-colors duration-300"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: "rgba(242, 240, 233, 0.5)",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--clay)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "rgba(242, 240, 233, 0.5)")
                      }
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p
            className="text-[10px] uppercase tracking-[0.15em]"
            style={{
              fontFamily: "var(--font-mono)",
              color: "rgba(242, 240, 233, 0.2)",
            }}
          >
            © 2027 Adi Shankara Institute of Engineering & Technology
          </p>
          <p
            className="text-[10px] uppercase tracking-[0.15em]"
            style={{
              fontFamily: "var(--font-mono)",
              color: "rgba(242, 240, 233, 0.15)",
            }}
          >
            Kalady, Kerala, India
          </p>
        </div>
      </div>
    </footer>
  );
}
