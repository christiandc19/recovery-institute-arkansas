import Section from "../../../../components/ui/Section/Section";

import {
  FaUsers,
  FaWineBottle,
  FaSyringe,
  FaCapsules,
  FaShieldAlt,
  FaHandsHelping,
  FaArrowRight,
} from "react-icons/fa";

import SectionHeader from "../../../../components/ui/SectionHeader/SectionHeader";
import "./ProgramsGrid.css";

function ProgramsGrid() {
  const programs = [
    {
      icon: <FaUsers />,
      title: "IOP Substance Abuse",
      text: "Structured outpatient treatment for individuals who need consistent recovery support.",
      link: "/programs",
    },
    {
      icon: <FaWineBottle />,
      title: "Alcohol Addiction Program",
      text: "Compassionate outpatient support for individuals struggling with alcohol use.",
      link: "/addiction/alcohol-addiction",
    },
    {
      icon: <FaSyringe />,
      title: "Heroin Addiction Program",
      text: "Supportive treatment for individuals impacted by heroin addiction.",
      link: "/addiction/heroin-addiction",
    },
    {
      icon: <FaCapsules />,
      title: "Fentanyl Addiction Support",
      text: "Recovery-focused care for fentanyl and opioid-related substance use.",
      link: "/addiction/fentanyl-addiction",
    },
    {
      icon: <FaShieldAlt />,
      title: "Relapse Prevention",
      text: "Practical tools and guidance to help reduce relapse risks.",
      link: "/programs",
    },
    {
      icon: <FaHandsHelping />,
      title: "Group Support",
      text: "A supportive environment where clients can connect, learn, and grow.",
      link: "/programs",
    },
  ];

  return (
    <Section className="programs-grid">
        <SectionHeader
          eyebrow="Our Programs"
          title="Support for Every Stage of Recovery"
          description="Each program is designed to help individuals build skills, accountability, and confidence throughout their recovery journey."
        />

        <div className="programs-grid__items">
          {programs.map((program) => (
            <div className="programs-grid__card" key={program.title}>
              <div className="programs-grid__icon">{program.icon}</div>

              <h3>{program.title}</h3>

              <p>{program.text}</p>

              <a href={program.link}>
                Learn More <FaArrowRight />
              </a>
            </div>
          ))}
        </div>
    </Section>
  );
}

export default ProgramsGrid;