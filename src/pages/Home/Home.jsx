import "./Home.css";

import HomeHero from "./sections/HomeHero/HomeHero";
import TrustBar from "./sections/TrustBar/TrustBar";
import WhyChooseUs from "./sections/WhyChooseUs/WhyChooseUs";
import HomePrograms from "./sections/HomePrograms/HomePrograms";
import RecoveryJourney from "./sections/RecoveryJourney/RecoveryJourney";
import NotAlone from "./sections/NotAlone/NotAlone";
import HomeFAQ from "./sections/HomeFAQ/HomeFAQ";
import CallToAction from "../../components/sections/CallToAction/CallToAction";
import SEO from "../../components/SEO/SEO";
import seo from "../../data/seo";
import organizationSchema from "../../data/schema";
function Home() {

  return (
    <>

      <SEO
        {...seo.home}
        schema={organizationSchema}
      />
      <HomeHero />
      <TrustBar />
      <WhyChooseUs />
      <HomePrograms />
      <RecoveryJourney />
      <NotAlone />
      <HomeFAQ />
      <CallToAction />
    </>
  );
}

export default Home;