import {
  FaPhoneAlt,
  FaClipboardList,
  FaUserCheck,
  FaLeaf,
} from "react-icons/fa";

import "./AdmissionsSteps.css";

function AdmissionsSteps() {
  const steps = [
    {
      icon: <FaPhoneAlt />,
      number: "01",
      title: "Reach Out",
      text: "Call admissions or send a message to begin the process.",
    },
    {
      icon: <FaClipboardList />,
      number: "02",
      title: "Ask Questions",
      text: "Our team will explain treatment options and what to expect.",
    },
    {
      icon: <FaUserCheck />,
      number: "03",
      title: "Complete Assessment",
      text: "We learn more about your needs and recommend next steps.",
    },
    {
      icon: <FaLeaf />,
      number: "04",
      title: "Begin Recovery",
      text: "Start outpatient treatment with structure and support.",
    },
  ];

  return (
    <section className="admissions-steps">
      <div className="container">
        <div className="admissions-steps__header">
          <span>Admissions Process</span>
          <h2>Getting Started Is Simple</h2>
          <p>
            Our admissions process is designed to feel clear, confidential, and
            supportive from the very first conversation.
          </p>
        </div>

        <div className="admissions-steps__grid">
          {steps.map((step) => (
            <div className="admissions-steps__card" key={step.number}>
              <div className="admissions-steps__number">{step.number}</div>
              <div className="admissions-steps__icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdmissionsSteps;