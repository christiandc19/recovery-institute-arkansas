import {
  FaHome,
  FaUserCheck,
  FaBriefcase,
  FaHeart,
  FaCheckCircle,
} from "react-icons/fa";

import Section from "../../../../components/ui/Section/Section";
import SectionHeader from "../../../../components/ui/SectionHeader/SectionHeader";
import FeatureList from "../../../../components/ui/FeatureList/FeatureList";
import "./WhoIsIOPFor.css";

function WhoIsIOPFor() {
  const items = [
    {
      icon: <FaHome />,
      title: "You want treatment while living at home",
      description:
        "IOP allows clients to receive structured support without living at a facility.",
    },
    {
      icon: <FaUserCheck />,
      title: "You need more support than occasional counseling",
      description:
        "IOP provides more structure and accountability than traditional weekly appointments.",
    },
    {
      icon: <FaBriefcase />,
      title: "You want to continue work, school, or family responsibilities",
      description:
        "Treatment is designed to support recovery while helping clients stay connected to daily life.",
    },
    {
      icon: <FaHeart />,
      title: "You are ready to build long-term recovery skills",
      description:
        "IOP helps clients develop coping tools, relapse prevention strategies, and healthier routines.",
    },
  ];

  return (
    <Section className="who-iop" background="light">
      <div className="who-iop__container">
        <div className="who-iop__content">
          <SectionHeader
            eyebrow="Is IOP Right for You?"
            title="IOP May Be a Good Fit If..."
            description="Intensive outpatient treatment can be helpful for individuals who need structured support while maintaining independence and daily responsibilities."
            align="left"
          />

          <FeatureList items={items} />

          <div className="who-iop__note">
            <FaCheckCircle />
            <p>
              If detox or a higher level of care is needed first, our team can
              help you understand your next step.
            </p>
          </div>
        </div>

        <div className="who-iop__image">
          <img src="/images/who-iop-for.webp" alt="Person receiving recovery support" />
        </div>
      </div>
    </Section>
  );
}

export default WhoIsIOPFor;