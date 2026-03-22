import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, DM_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { Nav } from "@/components/layout/nav";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IdeaBuild — The New Leverage",
  description:
    "A one-day workshop for senior professionals who have a business idea and no time to wait for someone else to build it. Singapore, May 2025.",
  openGraph: {
    title: "IdeaBuild — The New Leverage",
    description:
      "A one-day workshop for senior professionals who have a business idea and no time to wait for someone else to build it. Singapore, May 2025.",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const host = (await headers()).get("host") ?? "";
  // Hide IdeaBuild nav on the root brand domain — the /home page has its own header
  const showIdeaBuildNav =
    host !== "thenewleverage.com" && host !== "www.thenewleverage.com";

  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable} antialiased`}
      >
        {/* Skip to main content — accessibility (CSS-only show on focus) */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {showIdeaBuildNav && <Nav />}
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
