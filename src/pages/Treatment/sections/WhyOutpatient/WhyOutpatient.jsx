import {
  FaHome,
  FaCalendarAlt,
  FaTools,
  FaUserFriends,
  FaCheckCircle,
} from "react-icons/fa";

import SplitSection from "../../../../components/ui/SplitSection/SplitSection";
import SectionHeader from "../../../../components/ui/SectionHeader/SectionHeader";
import FeatureList from "../../../../components/ui/FeatureList/FeatureList";
import Section from "../../../../components/ui/Section/Section";
import "./WhyOutpatient.css";

function WhyOutpatient() {
  const featureItems = [
    {
      icon: <FaHome />,
      title: "Remain at Home",
      description: "Continue living in your home environment while receiving care."
    },
    {
      icon: <FaCalendarAlt />,
      title: "Flexible Support",
      description: "Treatment designed to fit around real-life responsibilities."
    },
    {
      icon: <FaTools />,
      title: "Practice Recovery Skills",
      description: "Build coping tools and apply them in everyday situations."
    },
    {
      icon: <FaUserFriends />,
      title: "Stay Connected",
      description: "Receive support while maintaining healthy community ties."
    }
  ];

  return (
    <Section className="why-outpatient">
      <div className="container">
        <SplitSection
          image="/images/why-outpatient.webp"
          imageAlt="Outpatient recovery support"
        >
          <SectionHeader
            eyebrow="Why Outpatient Works"
            title="Get Support While Staying Connected to Daily Life"
            description="Outpatient treatment gives individuals the opportunity to receive structured recovery support while continuing work, school, family, and personal responsibilities."
            align="left"
          />

          <div className="why-outpatient__list">

            <FeatureList items={featureItems} />

          </div>

          <div className="why-outpatient__note">
            <FaCheckCircle />
            <p>
              The Recovery Institute of Arkansas focuses on substance abuse
              treatment only. We do not provide PHP or standalone mental health services.
            </p>
          </div>
        </SplitSection>
      </div>
    </Section>
  );
}

export default WhyOutpatient;