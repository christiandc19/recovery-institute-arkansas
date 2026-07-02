import {
  FaPhoneAlt,
  FaClipboardCheck,
  FaUsers,
  FaLeaf,
} from "react-icons/fa";

import "./RecoveryJourney.css";

function RecoveryJourney() {
  const steps = [
    {
      icon: <FaPhoneAlt />,
      number: "01",
      title: "Reach Out",
      text: "Call us or submit a confidential inquiry to begin your recovery journey.",
    },
    {
      icon: <FaClipboardCheck />,
      number: "02",
      title: "Assessment",
      text: "We'll learn about your needs and recommend the most appropriate level of care.",
    },
    {
      icon: <FaUsers />,
      number: "03",
      title: "Begin Treatment",
      text: "Start your intensive outpatient program with compassionate clinical support.",
    },
    {
      icon: <FaLeaf />,
      number: "04",
      title: "Build Lasting Recovery",
      text: "Develop healthy habits and the confidence to move forward with your life.",
    },
  ];

  return (
    <section className="recovery-journey">
      <div className="container">
        <div className="recovery-journey__header">
          <span>Your Recovery Journey</span>

          <h2>Four Simple Steps Toward a Healthier Future</h2>

          <p>
            Recovery doesn't have to feel overwhelming. From your first call to
            ongoing support, we're here to help every step of the way.
          </p>
        </div>

        <div className="recovery-journey__grid">
          {steps.map((step) => (
            <div key={step.number} className="recovery-journey__card">
              <div className="recovery-journey__number">
                {step.number}
              </div>

              <div className="recovery-journey__icon">
                {step.icon}
              </div>

              <h3>{step.title}</h3>

              <p>{step.text}</p>
            </div>
          ))}
        </div>

        <div className="recovery-journey__cta">
          <a href="/contact-us">
            Start Your Recovery Today
          </a>
        </div>
      </div>
    </section>
  );
}

export default RecoveryJourney;