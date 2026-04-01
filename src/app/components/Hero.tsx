import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Calendar, MapPin } from "lucide-react";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const fullNameRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const orgRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.from(badgeRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      })
        .from(
          titleRef.current,
          { y: 50, opacity: 0, duration: 1, ease: "power3.out" },
          "-=0.3"
        )
        .from(
          fullNameRef.current,
          { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        )
        .from(
          metaRef.current,
          { y: 25, opacity: 0, duration: 0.7, ease: "power3.out" },
          "-=0.4"
        )
        .from(
          orgRef.current,
          { y: 20, opacity: 0, duration: 0.7, ease: "power3.out" },
          "-=0.3"
        )
        .from(
          ctaRef.current,
          { y: 25, opacity: 0, duration: 0.7, ease: "power3.out" },
          "-=0.3"
        )
        .from(
          scrollRef.current,
          { opacity: 0, duration: 0.8, ease: "power3.out" },
          "-=0.2"
        );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{ height: "100dvh", minHeight: "700px" }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient Overlay — heavier to ensure text readability */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(26, 26, 26, 0.55) 0%, rgba(46, 64, 54, 0.65) 30%, rgba(46, 64, 54, 0.75) 60%, rgba(26, 26, 26, 0.93) 100%)",
        }}
      />

      {/* Content — Centered */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Conference Type Badge */}
        <div ref={badgeRef} className="mb-6 md:mb-8">
          <div
            className="inline-flex items-center gap-2.5 px-5 py-2.5"
            style={{
              fontFamily: "var(--font-mono)",
              background: "rgba(242, 240, 233, 0.08)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(242, 240, 233, 0.12)",
              borderRadius: "var(--radius-pill)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{
                background: "var(--clay)",
                animation: "hero-pulse 2s ease-in-out infinite",
              }}
            />
            <span
              className="text-[11px] md:text-xs uppercase tracking-[0.2em] font-medium"
              style={{ color: "rgba(242, 240, 233, 0.8)" }}
            >
              Two-Day International Conference
            </span>
          </div>
        </div>

        {/* Main Title — ICEAMT 2027 */}
        <div ref={titleRef} className="mb-4 md:mb-5">
          <h1 className="flex flex-col items-center gap-0">
            <span
              className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight leading-none"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--cream)",
                letterSpacing: "-0.03em",
              }}
            >
              ICEAMT
            </span>
            <span
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-none"
              style={{
                fontFamily: "var(--font-drama)",
                fontStyle: "italic",
                color: "var(--clay)",
                letterSpacing: "-0.01em",
              }}
            >
              2027
            </span>
          </h1>
        </div>

        {/* Full Conference Name */}
        <div ref={fullNameRef} className="mb-6 md:mb-8 max-w-3xl">
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-medium"
            style={{
              fontFamily: "var(--font-body)",
              color: "rgba(242, 240, 233, 0.75)",
              letterSpacing: "0.01em",
            }}
          >
            International Conference in
            <br className="hidden sm:block" />
            <span style={{ color: "var(--cream)" }}>
              {" "}Engineering Applied Science, Management & Technology
            </span>
          </p>
        </div>

        {/* Date & Location — Prominent */}
        <div ref={metaRef} className="mb-5 md:mb-6">
          <div
            className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 px-6 py-3.5"
            style={{
              fontFamily: "var(--font-mono)",
              background: "rgba(242, 240, 233, 0.06)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(242, 240, 233, 0.1)",
              borderRadius: "1.25rem",
            }}
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" style={{ color: "var(--clay)" }} />
              <span
                className="text-sm md:text-base font-semibold"
                style={{ color: "var(--cream)" }}
              >
                March 3 & 4, 2027
              </span>
            </div>
            <div
              className="hidden sm:block w-px h-5"
              style={{ background: "rgba(242, 240, 233, 0.15)" }}
            />
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" style={{ color: "var(--clay)" }} />
              <span
                className="text-sm md:text-base font-semibold"
                style={{ color: "var(--cream)" }}
              >
                Kalady, Kerala, India
              </span>
            </div>
          </div>
        </div>

        {/* Organized By */}
        <div ref={orgRef} className="mb-8 md:mb-10">
          <p
            className="text-xs md:text-sm"
            style={{
              fontFamily: "var(--font-body)",
              color: "rgba(242, 240, 233, 0.4)",
            }}
          >
            Organized by{" "}
            <span style={{ color: "rgba(242, 240, 233, 0.65)", fontWeight: 500 }}>
              Adi Shankara Institute of Engineering & Technology
            </span>
          </p>
        </div>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
        >
          <a
            href="https://cmt3.research.microsoft.com/ICEAMT2027"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-magnetic inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold tracking-wide"
            style={{
              fontFamily: "var(--font-heading)",
              borderRadius: "var(--radius-pill)",
              background: "var(--clay)",
              color: "white",
            }}
          >
            <span
              className="btn-bg"
              style={{ background: "var(--clay-dark)" }}
            />
            <span>Submit Your Paper</span>
          </a>
          <button
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium tracking-wide hover-lift transition-all duration-300"
            style={{
              fontFamily: "var(--font-heading)",
              borderRadius: "var(--radius-pill)",
              border: "1px solid rgba(242, 240, 233, 0.2)",
              color: "rgba(242, 240, 233, 0.8)",
              background: "rgba(242, 240, 233, 0.04)",
            }}
            onClick={() =>
              document
                .getElementById("registration")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Register Now
          </button>
          <button
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium tracking-wide hover-lift transition-all duration-300"
            style={{
              fontFamily: "var(--font-heading)",
              color: "rgba(242, 240, 233, 0.5)",
            }}
            onClick={() =>
              document
                .getElementById("about-college")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Learn More ↓
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span
          className="text-[9px] uppercase tracking-[0.25em]"
          style={{ fontFamily: "var(--font-mono)", color: "var(--clay)" }}
        >
          Scroll
        </span>
        <div
          className="w-px h-10"
          style={{
            background: "linear-gradient(to bottom, var(--clay), transparent)",
          }}
        />
      </div>

      <style>{`
        @keyframes hero-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
      `}</style>
    </section>
  );
}
