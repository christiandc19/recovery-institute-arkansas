import {
  FaWineBottle,
  FaCapsules,
  FaSyringe,
  FaUserShield,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./HomePrograms.css";

function HomePrograms() {
  const programs = [
  {
    icon: <FaUsers />,
    title: "IOP Substance Abuse",
    text: "Structured outpatient support for individuals seeking recovery while maintaining daily responsibilities.",
    link: "/iop-substance-abuse",
  },
  {
    icon: <FaWineBottle />,
    title: "Alcohol Addiction",
    text: "Compassionate treatment support for individuals struggling with alcohol use.",
    link: "/addiction/alcohol-addiction",
  },
  {
    icon: <FaSyringe />,
    title: "Heroin Addiction",
    text: "Recovery-focused care for individuals impacted by heroin addiction.",
    link: "/addiction/heroin-addiction",
  },
  {
    icon: <FaCapsules />,
    title: "Fentanyl Addiction",
    text: "Supportive treatment for those facing fentanyl and opioid-related substance use.",
    link: "/addiction/fentanyl-addiction",
  },
  {
    icon: <FaUserShield />,
    title: "Relapse Prevention",
    text: "Tools, education, and support to help clients build lasting recovery habits.",
    link: "/programs/relapse-prevention",
  },
  {
    icon: <FaUsers />,
    title: "Group Support",
    text: "A supportive environment where clients can connect, grow, and heal together.",
    link: "/programs/group-therapy",
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

              <Link to={program.link}>
                Learn More <FaArrowRight />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomePrograms;