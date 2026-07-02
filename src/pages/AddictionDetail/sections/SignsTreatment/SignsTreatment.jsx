import {
  FaExclamationCircle,
  FaUserFriends,
  FaCalendarTimes,
  FaShieldAlt,
} from "react-icons/fa";

import Section from "../../../../components/ui/Section/Section";
import SectionHeader from "../../../../components/ui/SectionHeader/SectionHeader";
import FeatureCard from "../../../../components/ui/FeatureCard/FeatureCard";
import "./SignsTreatment.css";

function SignsTreatment({ substance }) {
  const signs = [
    {
      icon: <FaExclamationCircle />,
      title: "Difficulty stopping use",
      description:
        "You may want to stop or reduce use but find it difficult to do so consistently.",
    },
    {
      icon: <FaUserFriends />,
      title: "Strained relationships",
      description:
        "Substance use may begin affecting family, friendships, work, or daily responsibilities.",
    },
    {
      icon: <FaCalendarTimes />,
      title: "Loss of control",
      description:
        "Use may continue even when it causes stress, consequences, or disruption.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Need for support",
      description:
        "Recovery can become more manageable with structure, accountability, and compassionate guidance.",
    },
  ];

  return (
    <Section className="signs-treatment" background="light">
      <SectionHeader
        eyebrow="Signs You May Need Treatment"
        title={`When ${substance} Starts Affecting Daily Life`}
        description="Substance use can look different for every person. If it is becoming harder to manage responsibilities, relationships, or personal health, it may be time to reach out for support."
      />

      <div className="signs-treatment__grid">
        {signs.map((sign) => (
          <FeatureCard
            key={sign.title}
            icon={sign.icon}
            title={sign.title}
            description={sign.description}
          />
        ))}
      </div>
    </Section>
  );
}

export default SignsTreatment;