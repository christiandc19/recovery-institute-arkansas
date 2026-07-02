import {
  FaCalendarCheck,
  FaUsers,
  FaShieldAlt,
  FaHandsHelping,
  FaCheckCircle,
} from "react-icons/fa";

import Section from "../../../../components/ui/Section/Section";
import SplitSection from "../../../../components/ui/SplitSection/SplitSection";
import SectionHeader from "../../../../components/ui/SectionHeader/SectionHeader";
import FeatureList from "../../../../components/ui/FeatureList/FeatureList";
import "./IOPOverview.css";

function IOPOverview() {
  const features = [
    {
      icon: <FaCalendarCheck />,
      title: "Structured Weekly Support",
      description:
        "Receive consistent outpatient care designed to support ongoing recovery.",
    },
    {
      icon: <FaUsers />,
      title: "Group-Based Recovery",
      description:
        "Connect with others in a supportive treatment environment.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Confidential Care",
      description:
        "Your privacy and dignity are respected throughout the process.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Practical Recovery Tools",
      description:
        "Learn coping skills, relapse prevention strategies, and healthier habits.",
    },
  ];

  return (
    <Section className="iop-overview">
      <SplitSection
        image="/images/iop-overview.webp"
        imageAlt="Intensive outpatient recovery support"
      >
        <SectionHeader
          eyebrow="How IOP Works"
          title="Treatment Support That Fits Into Everyday Life"
          description="An Intensive Outpatient Program provides structured substance abuse treatment without requiring clients to live at a facility. This allows individuals to receive support while continuing work, school, and family responsibilities."
          align="left"
        />

        <FeatureList items={features} />

        <div className="iop-overview__note">
          <FaCheckCircle />
          <p>
            The Recovery Institute of Arkansas provides IOP substance abuse
            treatment only. We do not provide PHP or standalone mental health services.
          </p>
        </div>
      </SplitSection>
    </Section>
  );
}

export default IOPOverview;