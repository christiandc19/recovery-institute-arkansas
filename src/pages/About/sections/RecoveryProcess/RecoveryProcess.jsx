import {
  FaPhoneAlt,
  FaClipboardList,
  FaUsers,
  FaLeaf,
} from "react-icons/fa";

import "./RecoveryProcess.css";

function RecoveryProcess() {
  const steps = [
    {
      number: "01",
      icon: <FaPhoneAlt />,
      title: "Reach Out",
      text: "Contact our admissions team to ask questions and learn more about treatment.",
    },
    {
      number: "02",
      icon: <FaClipboardList />,
      title: "Assessment",
      text: "We take time to understand your needs and recommend the right next step.",
    },
    {
      number: "03",
      icon: <FaUsers />,
      title: "Begin Treatment",
      text: "Start outpatient treatment with structure, guidance, and support.",
    },
    {
      number: "04",
      icon: <FaLeaf />,
      title: "Build Lasting Recovery",
      text: "Develop healthier habits and tools that support long-term recovery.",
    },
  ];

  return (
    <section className="recovery-process">
      <div className="container">
        <div className="recovery-process__header">
          <span>Our Process</span>
          <h2>Starting Recovery Should Feel Clear and Supported</h2>
          <p>
            From your first call to ongoing care, our team helps you understand
            each step so you can move forward with confidence.
          </p>
        </div>

        <div className="recovery-process__timeline">
          {steps.map((step) => (
            <div className="recovery-process__step" key={step.number}>
              <div className="recovery-process__icon">{step.icon}</div>
              <div className="recovery-process__number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecoveryProcess;