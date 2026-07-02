import {
  FaWineBottle,
  FaCapsules,
  FaSyringe,
  FaUserShield,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

import "./HomePrograms.css";

function HomePrograms() {
  const programs = [
    {
      icon: <FaUsers />,
      title: "IOP Substance Abuse",
      text: "Structured outpatient support for individuals seeking recovery while maintaining daily responsibilities.",
    },
    {
      icon: <FaWineBottle />,
      title: "Alcohol Addiction",
      text: "Compassionate treatment support for individuals struggling with alcohol use.",
    },
    {
      icon: <FaSyringe />,
      title: "Heroin Addiction",
      text: "Recovery-focused care for individuals impacted by heroin addiction.",
    },
    {
      icon: <FaCapsules />,
      title: "Fentanyl Addiction",
      text: "Supportive treatment for those facing fentanyl and opioid-related substance use.",
    },
    {
      icon: <FaUserShield />,
      title: "Relapse Prevention",
      text: "Tools, education, and support to help clients build lasting recovery habits.",
    },
    {
      icon: <FaUsers />,
      title: "Group Support",
      text: "A supportive environment where clients can connect, grow, and heal together.",
    },
  ];

  return (
    <section className="home-programs">
      <div className="container">
        <div className="home-programs__header">
          <span>Our Programs</span>
          <h2>Treatment Programs Designed for Lasting Recovery</h2>
          <p>
            We focus on substance abuse treatment programs that help individuals
            move forward with structure, support, and confidence.
          </p>
        </div>

        <div className="home-programs__grid">
          {programs.map((program) => (
            <div className="home-programs__card" key={program.title}>
              <div className="home-programs__icon">{program.icon}</div>

              <h3>{program.title}</h3>

              <p>{program.text}</p>

              <a href="/programs">
                Learn More <FaArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomePrograms;