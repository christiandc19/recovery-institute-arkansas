import InnerPageHero from "../../components/Hero/InnerPageHero/InnerPageHero";
import CallToAction from "../../components/sections/CallToAction/CallToAction";
import IOPFAQ from "./sections/IOPFAQ/IOPFAQ";
import IOPOverview from "./sections/IOPOverview/IOPOverview";
import IOPProcess from "./sections/IOPProcess/IOPProcess";
import WhyChooseIOP from "./sections/WhyChooseIOP/WhyChooseIOP";
import WhoIsIOPFor from "./sections/WhoIsIOPFor/WhoIsIOPFor";
import SEO from "../../components/SEO/SEO";
import seo from "../../data/seo";
import "./IOP.css";

function IOP() {
  return (
    <>
      <SEO {...seo.iop} />
      <InnerPageHero
        eyebrow="IOP Substance Abuse"
        title="Intensive Outpatient Treatment for Substance Abuse"
        text="Our IOP program provides structured recovery support while allowing clients to continue daily responsibilities at home, work, school, and with family."
        image="/images/iop-hero.webp"
      />

      <IOPOverview />
      <WhyChooseIOP />
      <WhoIsIOPFor />
      <IOPProcess />
      <IOPFAQ />
      <CallToAction />
    </>
  );
}

export default IOP;