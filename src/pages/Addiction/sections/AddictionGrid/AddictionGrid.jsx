import {
  FaWineBottle,
  FaSnowflake,
  FaCapsules,
  FaSyringe,
  FaPills,
  FaBolt,
  FaArrowRight,
} from "react-icons/fa";

import "./AddictionGrid.css";

function AddictionGrid() {
  const addictions = [
    {
      icon: <FaWineBottle />,
      title: "Alcohol Addiction",
      text: "Compassionate outpatient support for individuals struggling with alcohol use.",
      link: "/addiction/alcohol-addiction",
    },
    {
      icon: <FaSnowflake />,
      title: "Cocaine Addiction",
      text: "Structured recovery support for individuals seeking help with cocaine use.",
      link: "/addiction/cocaine-addiction",
    },
    {
      icon: <FaCapsules />,
      title: "Fentanyl Addiction",
      text: "Supportive care for fentanyl and opioid-related substance use challenges.",
      link: "/addiction/fentanyl-addiction",
    },
    {
      icon: <FaSyringe />,
      title: "Heroin Addiction",
      text: "Outpatient recovery support for individuals impacted by heroin addiction.",
      link: "/addiction/heroin-addiction",
    },
    {
      icon: <FaPills />,
      title: "Opioid Addiction",
      text: "Compassionate treatment support for opioid-related addiction recovery.",
      link: "/addiction/opioid-addiction",
    },
    {
      icon: <FaBolt />,
      title: "Meth Addiction",
      text: "Structured support for individuals working to overcome meth addiction.",
      link: "/addiction/meth-addiction",
    },
  ];

  return (
    <section className="addiction-grid">
      <div className="container">
        <div className="addiction-grid__header">
          <span>Addiction Treatment</span>
          <h2>Programs for Substance Use Recovery</h2>
          <p>
            Explore outpatient addiction treatment support designed to help
            individuals build structure, accountability, and long-term recovery.
          </p>
        </div>

        <div className="addiction-grid__items">
          {addictions.map((item) => (
            <div className="addiction-grid__card" key={item.title}>
              <div className="addiction-grid__icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

              <a href={item.link}>
                Learn More <FaArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AddictionGrid;