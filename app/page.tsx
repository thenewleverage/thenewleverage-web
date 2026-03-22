import { Hero } from "@/components/landing/hero";
import { Transformation } from "@/components/landing/transformation";
import { WhoItsFor } from "@/components/landing/who-its-for";
import { Syllabus } from "@/components/landing/syllabus";
import { BuildExamples } from "@/components/landing/build-examples";
import { Takeaways } from "@/components/landing/takeaways";
import { PrivacyNote } from "@/components/landing/privacy-note";
import { FinalCta } from "@/components/landing/final-cta";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Transformation />
      <WhoItsFor />
      <Syllabus />
      <BuildExamples />
      {/* <Instructor /> */}
      <Takeaways />
      <PrivacyNote />
      <FinalCta />
      <Footer />
    </>
  );
}
