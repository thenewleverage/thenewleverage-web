"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-60px 0px 0px 0px" }
    );

    // Observe a sentinel div just below the hero
    const sentinel = document.getElementById("hero-sentinel");
    if (sentinel) observer.observe(sentinel);

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      ref={heroRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: "60px",
        background: scrolled ? "rgba(250,250,247,0.96)" : "rgba(250,250,247,0.92)",
        backdropFilter: "blur(8px)",
        borderBottom: scrolled ? "1px solid var(--rule)" : "1px solid transparent",
        transition: "border-bottom-color 0.2s ease, background 0.2s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          height: "100%",
          padding: "0 clamp(1.5rem, 6vw, 5rem)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Wordmark */}
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            letterSpacing: "0.12em",
            color: "var(--ink)",
          }}
        >
          THE NEW LEVERAGE
          <span
            className="nav-wordmark-sub"
            style={{ margin: "0 0.5em", color: "var(--ink-muted)" }}
          >
            ·
          </span>
          <span
            className="nav-wordmark-sub"
            style={{ color: "var(--gold)" }}
          >
            IDEABUILD
          </span>
        </span>

        {/* CTA */}
        <Link
          href="/register"
          className="btn-primary"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "13px",
            fontWeight: 500,
            color: "var(--ink)",
            background: "#F5EDD6",
            border: "1px solid #B8942A",
            padding: "8px 20px",
            borderRadius: "2px",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#EDD88A")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#F5EDD6")}
        >
          Secure your seat →
        </Link>
      </div>
    </nav>
  );
}
