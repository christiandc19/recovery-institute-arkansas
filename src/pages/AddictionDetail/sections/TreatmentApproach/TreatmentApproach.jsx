import {
  FaUsers,
  FaShieldAlt,
  FaTools,
  FaHeart,
  FaCheckCircle,
} from "react-icons/fa";

import Section from "../../../../components/ui/Section/Section";
import SplitSection from "../../../../components/ui/SplitSection/SplitSection";
import SectionHeader from "../../../../components/ui/SectionHeader/SectionHeader";
import FeatureList from "../../../../components/ui/FeatureList/FeatureList";
import "./TreatmentApproach.css";

function TreatmentApproach({ substance }) {
  const items = [
    {
      icon: <FaUsers />,
      title: "Group-Based Support",
      description:
        "Clients can connect with others while learning practical recovery tools.",
    },
    {
      icon: <FaTools />,
      title: "Relapse Prevention Skills",
      description:
        "Treatment focuses on identifying triggers and building healthier coping strategies.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Confidential Environment",
      description:
        "Care is provided with privacy, respect, and dignity throughout the process.",
    },
    {
      icon: <FaHeart />,
      title: "Compassionate Guidance",
      description:
        "Our team supports clients with understanding, encouragement, and accountability.",
    },
  ];

  return (
    <Section className="treatment-approach">
      <SplitSection
        image="/images/treatment-approach.webp"
        imageAlt="Compassionate addiction treatment support"
      >
        <SectionHeader
          eyebrow="Treatment Approach"
          title={`How We Support Recovery From ${substance}`}
          description="Our outpatient treatment approach is designed to help individuals build structure, develop coping skills, and move forward with confidence."
          align="left"
        />

        <FeatureList items={items} />

        <div className="treatment-approach__note">
          <FaCheckCircle />
          <p>
            Treatment is focused on substance abuse recovery. The Recovery
            Institute of Arkansas does not provide PHP or standalone mental
            health services.
          </p>
        </div>
      </SplitSection>
    </Section>
  );
}

export default TreatmentApproach;