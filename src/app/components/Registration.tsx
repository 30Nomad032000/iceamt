import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: "Students / Research Scholars",
    price: "₹350",
    currency: "INR",
    features: [
      "Access to all sessions",
      "Conference Kit",
      "Certificate of Participation",
      "Networking Opportunities",
    ],
    highlight: false,
  },
  {
    name: "Faculty",
    price: "₹500",
    currency: "INR",
    features: [
      "Access to all sessions",
      "Conference Kit",
      "Certificate of Presentation",
      "Publication Support",
      "Networking Opportunities",
    ],
    highlight: true,
  },
  {
    name: "Industry Professionals",
    price: "₹750",
    currency: "INR",
    features: [
      "Access to all sessions",
      "Premium Conference Kit",
      "Certificate of Presentation",
      "Publication Support",
      "Exclusive Networking Sessions",
    ],
    highlight: false,
  },
  {
    name: "Foreign Participants",
    price: "$15",
    currency: "USD",
    features: [
      "Access to all sessions",
      "Conference Kit",
      "Certificate of Presentation",
      "Publication Support",
      "Global Networking",
    ],
    highlight: false,
  },
];

export function Registration() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const bankRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Defer to next frame so layout is stable before ScrollTrigger calculates
    const raf = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      const ctx = gsap.context(() => {
        if (cardsRef.current) {
          gsap.fromTo(
            cardsRef.current.children,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.15,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: cardsRef.current,
                start: "top 80%",
                once: true,
              },
            }
          );
        }
        if (bankRef.current) {
          gsap.fromTo(
            bankRef.current,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: bankRef.current,
                start: "top 85%",
                once: true,
              },
            }
          );
        }
      });
      ctxRef.current = ctx;
    });
    const ctxRef = { current: null as gsap.Context | null };
    return () => {
      cancelAnimationFrame(raf);
      ctxRef.current?.revert();
    };
  }, []);

  return (
    <section
      id="registration"
      ref={sectionRef}
      className="py-20 md:py-32 overflow-hidden"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12 md:mb-16">
          <span
            className="text-[10px] uppercase tracking-[0.2em] block mb-3"
            style={{ fontFamily: "var(--font-mono)", color: "var(--clay)" }}
          >
            Join Us
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
            style={{ fontFamily: "var(--font-heading)", color: "var(--charcoal)" }}
          >
            The{" "}
            <span
              style={{
                fontFamily: "var(--font-drama)",
                fontStyle: "italic",
                fontWeight: 500,
              }}
            >
              Gateway
            </span>
          </h2>
        </div>

        {/* Pricing Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="relative flex flex-col p-7 transition-all duration-500"
              style={{
                background: plan.highlight ? "var(--moss)" : "white",
                border: plan.highlight
                  ? "2px solid var(--clay)"
                  : "1px solid rgba(46, 64, 54, 0.08)",
                borderRadius: "var(--radius-card)",
                boxShadow: plan.highlight
                  ? "0 16px 48px rgba(46, 64, 54, 0.2)"
                  : "0 4px 20px rgba(26, 26, 26, 0.04)",
                transform: plan.highlight ? "scale(1.03)" : "scale(1)",
              }}
            >
              {plan.highlight && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.2em] px-4 py-1 font-semibold"
                  style={{
                    fontFamily: "var(--font-mono)",
                    background: "var(--clay)",
                    color: "white",
                    borderRadius: "var(--radius-pill)",
                  }}
                >
                  Recommended
                </span>
              )}

              <span
                className="text-[10px] uppercase tracking-[0.18em] mb-4"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: plan.highlight
                    ? "rgba(242, 240, 233, 0.5)"
                    : "rgba(26, 26, 26, 0.4)",
                }}
              >
                {plan.name}
              </span>

              <div className="flex items-baseline gap-1 mb-6">
                <span
                  className="text-3xl md:text-4xl font-bold"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: plan.highlight ? "var(--clay)" : "var(--charcoal)",
                  }}
                >
                  {plan.price}
                </span>
                <span
                  className="text-xs"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: plan.highlight
                      ? "rgba(242, 240, 233, 0.35)"
                      : "rgba(26, 26, 26, 0.3)",
                  }}
                >
                  / person
                </span>
              </div>

              <div
                className="w-full h-px mb-6"
                style={{
                  background: plan.highlight
                    ? "rgba(242, 240, 233, 0.1)"
                    : "rgba(46, 64, 54, 0.06)",
                }}
              />

              <div className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                      style={{
                        background: plan.highlight ? "var(--clay)" : "var(--moss)",
                      }}
                    />
                    <span
                      className="text-sm leading-relaxed"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: plan.highlight
                          ? "rgba(242, 240, 233, 0.7)"
                          : "rgba(26, 26, 26, 0.55)",
                      }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className="btn-magnetic w-full py-3 text-sm font-semibold tracking-wide"
                style={{
                  fontFamily: "var(--font-heading)",
                  borderRadius: "var(--radius-pill)",
                  background: plan.highlight ? "var(--clay)" : "rgba(46, 64, 54, 0.06)",
                  color: plan.highlight ? "white" : "var(--charcoal)",
                  border: plan.highlight ? "none" : "1px solid rgba(46, 64, 54, 0.08)",
                }}
              >
                <span className="btn-bg" style={{ background: plan.highlight ? "var(--clay-dark)" : "var(--moss)" }} />
                <span>Register Now →</span>
              </button>

              <span
                className="text-[9px] uppercase tracking-[0.15em] text-center mt-3 block"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: plan.highlight
                    ? "rgba(242, 240, 233, 0.3)"
                    : "rgba(26, 26, 26, 0.25)",
                }}
              >
                Deadline: February 25, 2027
              </span>
            </div>
          ))}
        </div>

        {/* Bank Details */}
        <div
          ref={bankRef}
          className="max-w-3xl mx-auto p-8"
          style={{
            background: "rgba(46, 64, 54, 0.04)",
            border: "1px solid rgba(46, 64, 54, 0.08)",
            borderRadius: "var(--radius-card)",
          }}
        >
          <h3
            className="text-[10px] uppercase tracking-[0.2em] mb-6 text-center"
            style={{ fontFamily: "var(--font-mono)", color: "var(--clay)" }}
          >
            Bank Account Details
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Account Name", value: "Principal" },
              { label: "Account Number", value: "62560100001337" },
              { label: "IFSC Code", value: "BARB0VIMATT" },
              { label: "Branch", value: "Mattoor" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-4"
                style={{
                  background: "white",
                  borderRadius: "1rem",
                  border: "1px solid rgba(46, 64, 54, 0.06)",
                }}
              >
                <div
                  className="text-[10px] uppercase tracking-[0.15em] mb-1"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "rgba(26, 26, 26, 0.4)",
                  }}
                >
                  {item.label}
                </div>
                <div
                  className="text-sm font-bold"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--charcoal)",
                  }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
