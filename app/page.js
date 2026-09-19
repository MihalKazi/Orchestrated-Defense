import Masthead from "@/components/Masthead";
import Hero from "@/components/Hero";
import AboutReport from "@/components/AboutReport";
import ExecutiveSummary from "@/components/ExecutiveSummary";
import Intro from "@/components/Intro";
import Scale from "@/components/Scale";
import Targets from "@/components/Targets";
import Coordination from "@/components/Coordination";
import Forensics from "@/components/Forensics";
import Aftermath from "@/components/Aftermath";
import Implications from "@/components/Implications";
import Conclusion from "@/components/Conclusion";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Page() {
  return (
    <>
      <Masthead />
      <Hero />
      <main>
        <AboutReport />
        <ExecutiveSummary />
        <Intro />
        <Scale />
        <Targets />
        <Coordination />
        <Forensics />
        <Aftermath />
        <Implications />
        <Conclusion />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
