import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timelineItems = [
  {
    date: "February 10, 2027",
    title: "Abstract Submission Deadline",
    description:
      "Submit your abstract for review. All topics in applied science, management, and technology are welcome.",
    animType: "geometric" as const,
  },
  {
    date: "February 20, 2027",
    title: "Full Paper Submission",
    description:
      "Accepted abstracts must submit full papers by this date. Follow the conference paper format guidelines.",
    animType: "scanner" as const,
  },
  {
    date: "February 25, 2027",
    title: "Last Date of Registration",
    description:
      "Complete your registration before this deadline to secure your spot at the conference.",
    animType: "waveform" as const,
  },
  {
    date: "March 3 & 4, 2027",
    title: "Conference Dates",
    description:
      "Two-day international conference at Adi Shankara Institute of Engineering and Technology, Kalady, Kerala.",
    animType: "radar" as const,
  },
];

/* ─── SVG Animation: Rotating Geometric ─── */
function GeometricAnimation() {
  return (
    <svg viewBox="0 0 120 120" className="w-20 h-20 md:w-28 md:h-28" style={{ opacity: 0.7 }}>
      <circle
        cx="60" cy="60" r="45"
        fill="none" stroke="var(--clay)" strokeWidth="1.2"
        strokeDasharray="4 6"
        style={{ animation: "tl-spin 18s linear infinite" }}
      />
      <circle
        cx="60" cy="60" r="30"
        fill="none" stroke="var(--clay)" strokeWidth="1"
        strokeDasharray="2 8"
        style={{ animation: "tl-spin-reverse 25s linear infinite" }}
      />
      <circle cx="60" cy="60" r="15" fill="none" stroke="var(--cream)" strokeWidth="0.7" opacity="0.35" />
      <circle cx="60" cy="60" r="3.5" fill="var(--clay)" />
      {/* Orbiting dot on outer ring */}
      <circle
        cx="60" cy="15" r="2.5"
        fill="var(--clay)"
        style={{ animation: "tl-spin 18s linear infinite", transformOrigin: "60px 60px" }}
      />
    </svg>
  );
}

/* ─── SVG Animation: Scanning Laser ─── */
function ScannerAnimation() {
  return (
    <svg viewBox="0 0 120 120" className="w-20 h-20 md:w-28 md:h-28" style={{ opacity: 0.7 }}>
      {/* Dot grid */}
      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 5 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={20 + col * 20}
            cy={20 + row * 20}
            r="2"
            fill="var(--cream)"
            opacity="0.25"
          />
        ))
      )}
      {/* Scanning line — CSS animated */}
      <g style={{ animation: "tl-scan 3s ease-in-out infinite" }}>
        <line
          x1="8" y1="0" x2="112" y2="0"
          stroke="var(--clay)" strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Glow trail */}
        <line
          x1="8" y1="0" x2="112" y2="0"
          stroke="var(--clay)" strokeWidth="8"
          strokeLinecap="round"
          opacity="0.15"
        />
      </g>
    </svg>
  );
}

/* ─── SVG Animation: Waveform ─── */
function WaveformAnimation() {
  return (
    <svg viewBox="0 0 140 60" className="w-28 md:w-40 h-12 md:h-16" style={{ opacity: 0.7 }}>
      {/* Baseline */}
      <line x1="0" y1="30" x2="140" y2="30" stroke="var(--cream)" strokeWidth="0.5" opacity="0.15" />
      {/* Animated waveform */}
      <path
        d="M0,30 Q7,30 10,30 T20,12 T30,48 T40,12 T50,48 T60,30 T70,30 T80,12 T90,48 T100,12 T110,48 T120,30 Q133,30 140,30"
        fill="none"
        stroke="var(--clay)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="8 4"
        style={{ animation: "tl-wave 2.5s linear infinite" }}
      />
      {/* Static glow echo */}
      <path
        d="M0,30 Q7,30 10,30 T20,12 T30,48 T40,12 T50,48 T60,30 T70,30 T80,12 T90,48 T100,12 T110,48 T120,30 Q133,30 140,30"
        fill="none"
        stroke="var(--clay)"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.08"
        strokeDasharray="8 4"
        style={{ animation: "tl-wave 2.5s linear infinite" }}
      />
    </svg>
  );
}

/* ─── SVG Animation: Radar Ping ─── */
function RadarAnimation() {
  return (
    <svg viewBox="0 0 120 120" className="w-20 h-20 md:w-28 md:h-28" style={{ opacity: 0.7 }}>
      {/* Expanding ping rings */}
      <circle
        cx="60" cy="60" r="40"
        fill="none" stroke="var(--clay)" strokeWidth="1.5"
        style={{ animation: "tl-ping 3s ease-out infinite", transformOrigin: "60px 60px" }}
      />
      <circle
        cx="60" cy="60" r="40"
        fill="none" stroke="var(--clay)" strokeWidth="1.2"
        style={{ animation: "tl-ping 3s ease-out infinite 1s", transformOrigin: "60px 60px" }}
      />
      <circle
        cx="60" cy="60" r="40"
        fill="none" stroke="var(--clay)" strokeWidth="1"
        style={{ animation: "tl-ping 3s ease-out infinite 2s", transformOrigin: "60px 60px" }}
      />
      {/* Sweep arm */}
      <line
        x1="60" y1="60" x2="60" y2="20"
        stroke="var(--clay)" strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
        style={{ animation: "tl-spin 4s linear infinite", transformOrigin: "60px 60px" }}
      />
      {/* Center dot */}
      <circle cx="60" cy="60" r="4" fill="var(--clay)" />
      <circle cx="60" cy="60" r="7" fill="none" stroke="var(--cream)" strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
}

const AnimationComponent = {
  geometric: GeometricAnimation,
  scanner: ScannerAnimation,
  waveform: WaveformAnimation,
  radar: RadarAnimation,
};

export function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      const ctx = gsap.context(() => {
        if (cardsRef.current) {
          gsap.fromTo(cardsRef.current.children, { y: 60, opacity: 0 }, {
            y: 0, opacity: 1, stagger: 0.15, duration: 0.9, ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 65%", once: true },
          });
        }
      });
      ctxRef.current = ctx;
    });
    const ctxRef = { current: null as gsap.Context | null };
    return () => { cancelAnimationFrame(raf); ctxRef.current?.revert(); };
  }, []);

  return (
    <section
      id="dates"
      ref={sectionRef}
      className="py-20 md:py-32 overflow-hidden"
      style={{ background: "var(--moss)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-12 md:mb-16">
          <span
            className="text-[10px] uppercase tracking-[0.2em] block mb-3"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--clay)",
            }}
          >
            Mark Your Calendar
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--cream)",
            }}
          >
            Important{" "}
            <span
              style={{
                fontFamily: "var(--font-drama)",
                fontStyle: "italic",
                fontWeight: 500,
              }}
            >
              Dates
            </span>
          </h2>
        </div>

        <div ref={cardsRef} className="space-y-4 md:space-y-6">
          {timelineItems.map((item, idx) => {
            const Anim = AnimationComponent[item.animType];
            return (
              <div
                key={idx}
                className="relative flex flex-col md:flex-row md:items-center gap-6 md:gap-10 p-6 md:p-10"
                style={{
                  background: "rgba(242, 240, 233, 0.06)",
                  border: "1px solid rgba(242, 240, 233, 0.1)",
                  borderRadius: "var(--radius-card)",
                }}
              >
                {/* SVG Animation */}
                <div className="hidden md:flex items-center justify-center flex-shrink-0 w-28">
                  <Anim />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ background: "var(--clay)" }}
                    />
                    <span
                      className="text-sm md:text-base font-semibold"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--cream)",
                      }}
                    >
                      {item.date}
                    </span>
                  </div>
                  <h3
                    className="text-xl md:text-2xl font-bold mb-2"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--cream)",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm md:text-base leading-relaxed"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "rgba(242, 240, 233, 0.5)",
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Index number */}
                <div
                  className="hidden md:block text-6xl font-bold opacity-[0.12] absolute right-10 top-1/2 -translate-y-1/2"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--cream)",
                  }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes tl-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes tl-spin-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes tl-scan {
          0%, 100% { transform: translateY(10px); }
          50% { transform: translateY(110px); }
        }
        @keyframes tl-wave {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -24; }
        }
        @keyframes tl-ping {
          0% { transform: scale(0.2); opacity: 0.8; }
          100% { transform: scale(1); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
