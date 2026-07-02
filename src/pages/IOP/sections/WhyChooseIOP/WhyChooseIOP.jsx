import {
  FaHome,
  FaCalendarAlt,
  FaUsers,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";

import Section from "../../../../components/ui/Section/Section";
import SplitSection from "../../../../components/ui/SplitSection/SplitSection";
import SectionHeader from "../../../../components/ui/SectionHeader/SectionHeader";
import FeatureList from "../../../../components/ui/FeatureList/FeatureList";
import "./WhyChooseIOP.css";

function WhyChooseIOP() {
  const features = [
    {
      icon: <FaHome />,
      title: "Live at Home",
      description:
        "Receive treatment while continuing to live at home and stay connected to daily life.",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Structured Schedule",
      description:
        "Participate in consistent treatment sessions that support accountability and growth.",
    },
    {
      icon: <FaUsers />,
      title: "Peer Support",
      description:
        "Connect with others who understand the recovery process in a supportive setting.",
    },
    {
      icon: <FaTools />,
      title: "Practical Recovery Skills",
      description:
        "Build relapse prevention tools and coping strategies for real-world challenges.",
    },
  ];

  return (
    <Section className="why-choose-iop" background="light">
      <SplitSection
        reverse
        image="/images/why-choose-iop.webp"
        imageAlt="Supportive outpatient recovery setting"
      >
        <SectionHeader
          eyebrow="Why Choose IOP"
          title="A Flexible Level of Care With Real Structure"
          description="IOP is designed for individuals who need more support than traditional outpatient care, but do not require residential treatment or PHP."
          align="left"
        />

        <FeatureList items={features} />

        <div className="why-choose-iop__note">
          <FaCheckCircle />
          <p>
            Our IOP focuses specifically on substance abuse treatment and
            recovery support.
          </p>
        </div>
      </SplitSection>
    </Section>
  );
}

export default WhyChooseIOP;