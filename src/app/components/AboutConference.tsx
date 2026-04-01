import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutConference() {
  const sectionRef = useRef<HTMLElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      const ctx = gsap.context(() => {
        if (linesRef.current) {
          const words = linesRef.current.querySelectorAll(".word-reveal");
          gsap.fromTo(words, { y: 30, opacity: 0 }, {
            y: 0, opacity: 1, stagger: 0.06, duration: 0.7, ease: "power3.out",
            scrollTrigger: { trigger: linesRef.current, start: "top 75%", once: true },
          });
        }
        if (bodyRef.current) {
          gsap.fromTo(bodyRef.current.children, { y: 30, opacity: 0 }, {
            y: 0, opacity: 1, stagger: 0.12, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: bodyRef.current, start: "top 80%", once: true },
          });
        }
        if (statsRef.current) {
          gsap.fromTo(statsRef.current.children, { y: 20, opacity: 0 }, {
            y: 0, opacity: 1, stagger: 0.15, duration: 0.7, ease: "power3.out",
            scrollTrigger: { trigger: statsRef.current, start: "top 85%", once: true },
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
      id="about-conference"
      ref={sectionRef}
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: "var(--charcoal)" }}
    >
      {/* Parallax background texture */}
      <div
        className="absolute inset-0 z-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        {/* Contrast Statements */}
        <div ref={linesRef} className="mb-16 md:mb-20">
          <p
            className="text-lg md:text-xl mb-4"
            style={{
              fontFamily: "var(--font-body)",
              color: "rgba(242, 240, 233, 0.45)",
            }}
          >
            <span className="word-reveal inline-block mr-1.5">Most</span>
            <span className="word-reveal inline-block mr-1.5">conferences</span>
            <span className="word-reveal inline-block mr-1.5">focus</span>
            <span className="word-reveal inline-block mr-1.5">on:</span>
            <span
              className="word-reveal inline-block font-semibold"
              style={{ color: "rgba(242, 240, 233, 0.65)" }}
            >
              presentation.
            </span>
          </p>

          <p className="leading-[0.95]">
            <span
              className="word-reveal inline-block mr-2 text-lg md:text-xl"
              style={{
                fontFamily: "var(--font-body)",
                color: "rgba(242, 240, 233, 0.45)",
              }}
            >
              ICEAMT focuses on:
            </span>
            <span
              className="word-reveal inline-block text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
              style={{
                fontFamily: "var(--font-drama)",
                fontStyle: "italic",
                fontWeight: 600,
                color: "var(--clay)",
                lineHeight: 1.1,
              }}
            >
              convergence.
            </span>
          </p>
        </div>

        {/* Body */}
        <div ref={bodyRef} className="space-y-6 max-w-3xl mb-16 md:mb-20">
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{
              fontFamily: "var(--font-body)",
              color: "rgba(242, 240, 233, 0.6)",
            }}
          >
            The International Conference in Engineering Applied Science,
            Management, and Technology (ICEAMT 2027) is a prestigious global event
            that serves as a dynamic platform for scholars, industry leaders,
            academics, and professionals to come together and share their insights,
            innovations, and research findings across three interconnected domains.
          </p>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{
              fontFamily: "var(--font-body)",
              color: "rgba(242, 240, 233, 0.6)",
            }}
          >
            This conference is designed to promote interdisciplinary collaboration,
            encourage the exchange of ideas, and explore emerging trends that shape
            the future of science, business, and technology. ICEAMT is more than
            just an academic gathering — it is a catalyst for innovation, a forum
            for dialogue, and a bridge between research and practical application.
          </p>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="flex flex-wrap gap-12 md:gap-20 pt-10"
          style={{
            borderTop: "1px solid rgba(242, 240, 233, 0.08)",
          }}
        >
          <div>
            <div
              className="text-4xl md:text-5xl font-bold"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--clay)",
              }}
            >
              2
            </div>
            <div
              className="text-[10px] uppercase tracking-[0.2em] mt-2"
              style={{
                fontFamily: "var(--font-mono)",
                color: "rgba(242, 240, 233, 0.35)",
              }}
            >
              Days
            </div>
          </div>
          <div>
            <div
              className="text-4xl md:text-5xl font-bold"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--clay)",
              }}
            >
              4
            </div>
            <div
              className="text-[10px] uppercase tracking-[0.2em] mt-2"
              style={{
                fontFamily: "var(--font-mono)",
                color: "rgba(242, 240, 233, 0.35)",
              }}
            >
              Departments
            </div>
          </div>
          <div>
            <div
              className="text-4xl md:text-5xl font-bold"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--clay)",
              }}
            >
              Global
            </div>
            <div
              className="text-[10px] uppercase tracking-[0.2em] mt-2"
              style={{
                fontFamily: "var(--font-mono)",
                color: "rgba(242, 240, 233, 0.35)",
              }}
            >
              Platform
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
