"use client";

import { useState } from "react";

interface ChoiceCardProps {
  tag: string;
  heading: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  ctaExternal?: boolean;
  ctaNote?: string;
  variant: "primary" | "secondary";
}

export function ChoiceCard({
  tag,
  heading,
  description,
  features,
  ctaText,
  ctaHref,
  ctaExternal,
  ctaNote,
  variant,
}: ChoiceCardProps) {
  const [hovered, setHovered] = useState(false);

  const isPrimary = variant === "primary";
  const featureColor = isPrimary ? "#B8942A" : "#7A7A72";
  const tagColor = isPrimary ? "#B8942A" : "#7A7A72";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: isPrimary ? "#FFFFFF" : "#FAFAF7",
        border: `1px solid ${hovered ? "#B8942A" : "#E2E0D8"}`,
        borderRadius: "4px",
        padding: "2rem",
        transition: "border-color 200ms",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {/* Tag */}
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: tagColor,
        }}
      >
        {tag}
      </div>

      {/* Heading */}
      <div
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "16px",
          fontWeight: 500,
          color: "var(--ink)",
        }}
      >
        {heading}
      </div>

      {/* Description */}
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "13px",
          color: "#3A3A35",
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        {description}
      </p>

      {/* Features */}
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        {features.map((feature) => (
          <li
            key={feature}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "13px",
              color: "#3A3A35",
              display: "flex",
              gap: "8px",
            }}
          >
            <span style={{ color: featureColor, flexShrink: 0 }}>—</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div style={{ marginTop: "auto" }}>
        <a
          href={ctaHref}
          target={ctaExternal ? "_blank" : undefined}
          rel={ctaExternal ? "noopener noreferrer" : undefined}
          style={{
            display: "block",
            width: "100%",
            padding: "14px",
            textAlign: "center",
            fontFamily: "var(--font-sans)",
            fontSize: "14px",
            fontWeight: 500,
            borderRadius: "2px",
            textDecoration: "none",
            background: isPrimary ? "#0D0D0B" : "#FFFFFF",
            color: isPrimary ? "#FFFFFF" : "#0D0D0B",
            border: isPrimary ? "none" : "1px solid #0D0D0B",
            boxSizing: "border-box",
          }}
        >
          {ctaText}
        </a>
        {ctaNote && (
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "11px",
              color: "#7A7A72",
              textAlign: "center",
              margin: "8px 0 0 0",
            }}
          >
            {ctaNote}
          </p>
        )}
      </div>
    </div>
  );
}
