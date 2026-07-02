import {
  FaUsers,
  FaWineBottle,
  FaSyringe,
  FaCapsules,
  FaShieldAlt,
  FaHandsHelping,
  FaArrowRight,
} from "react-icons/fa";

import "./TreatmentPrograms.css";

function TreatmentPrograms() {
  const programs = [
    {
      icon: <FaUsers />,
      title: "IOP Substance Abuse",
      text: "Structured outpatient treatment for individuals who need support while continuing daily responsibilities.",
      link: "/programs",
    },
    {
      icon: <FaWineBottle />,
      title: "Alcohol Addiction Program",
      text: "Compassionate support for individuals struggling with alcohol use and recovery challenges.",
      link: "/addiction/alcohol-addiction",
    },
    {
      icon: <FaSyringe />,
      title: "Heroin Addiction Program",
      text: "Outpatient recovery support for individuals impacted by heroin use.",
      link: "/addiction/heroin-addiction",
    },
    {
      icon: <FaCapsules />,
      title: "Fentanyl Addiction Support",
      text: "Supportive care for individuals facing fentanyl and opioid-related substance use.",
      link: "/addiction/fentanyl-addiction",
    },
    {
      icon: <FaShieldAlt />,
      title: "Relapse Prevention",
      text: "Tools and support to help clients build healthier habits and reduce relapse risks.",
      link: "/programs",
    },
    {
      icon: <FaHandsHelping />,
      title: "Group Support",
      text: "A supportive recovery environment where clients can connect, learn, and grow together.",
      link: "/programs",
    },
  ];

  return (
    <section className="treatment-programs">
      <div className="container">
        <div className="treatment-programs__header">
          <span>Programs We Offer</span>
          <h2>Substance Abuse Treatment Programs</h2>
          <p>
            Our programs are designed to provide structure, accountability, and
            compassionate support throughout the recovery process.
          </p>
        </div>

        <div className="treatment-programs__grid">
          {programs.map((program) => (
            <div className="treatment-programs__card" key={program.title}>
              <div className="treatment-programs__icon">{program.icon}</div>

              <h3>{program.title}</h3>

              <p>{program.text}</p>

              <a href={program.link}>
                Learn More <FaArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TreatmentPrograms;