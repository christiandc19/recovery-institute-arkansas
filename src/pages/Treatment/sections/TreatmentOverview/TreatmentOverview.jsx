import {
  FaUserFriends,
  FaCalendarCheck,
  FaShieldAlt,
  FaHandsHelping,
} from "react-icons/fa";

import SectionHeader from "../../../../components/ui/SectionHeader/SectionHeader";
import FeatureCard from "../../../../components/ui/FeatureCard/FeatureCard";
import Section from "../../../../components/ui/Section/Section";
import "./TreatmentOverview.css";

function TreatmentOverview() {
  return (
    <Section className="treatment-overview">
      <div className="treatment-overview__container">
        <div className="treatment-overview__content">
          <SectionHeader
            eyebrow="Treatment Overview"
            title="Structured Support Without Pausing Your Life"
            description="The Recovery Institute of Arkansas provides outpatient substance abuse treatment designed for individuals who need support, guidance, and accountability while continuing daily responsibilities."
            align="left"
          />

          <p>
            Our programs focus on practical recovery tools, relapse prevention,
            group support, and compassionate care for alcohol and drug addiction.
          </p>
        </div>

        <div className="treatment-overview__grid">
          <FeatureCard
            icon={<FaUserFriends />}
            title="Group Support"
            description="Connect with others in a structured and supportive setting."
          />

          <FeatureCard
            icon={<FaCalendarCheck />}
            title="Flexible Care"
            description="Outpatient treatment that supports real-life responsibilities."
          />

          <FeatureCard
            icon={<FaShieldAlt />}
            title="Confidential"
            description="Your privacy and dignity are protected throughout treatment."
          />

          <FeatureCard
            icon={<FaHandsHelping />}
            title="Guided Recovery"
            description="Support focused on helping you move forward with confidence."
          />
        </div>
      </div>
    </Section>
  );
}

export default TreatmentOverview;