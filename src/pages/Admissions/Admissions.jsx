import InnerPageHero from "../../components/Hero/InnerPageHero/InnerPageHero";
import CallToAction from "../../components/sections/CallToAction/CallToAction";
import HomeFAQ from "../Home/sections/HomeFAQ/HomeFAQ";

import AdmissionsIntro from "./sections/AdmissionsIntro/AdmissionsIntro";
import AdmissionsSteps from "./sections/AdmissionsSteps/AdmissionsSteps";
import WhatToBring from "./sections/WhatToBring/WhatToBring";

function Admissions() {
  return (
    <>
      <InnerPageHero
        eyebrow="Admissions"
        title="Starting Recovery Should Feel Simple"
        text="Our admissions team is here to answer your questions, explain the treatment process, and help you begin your recovery journey with confidence."
        image="/images/admissions-hero.webp"
      />

      <AdmissionsIntro />
      <AdmissionsSteps />
      <WhatToBring />
      <HomeFAQ />
      <CallToAction />
    </>
  );
}

export default Admissions;