import {
  FaIdCard,
  FaNotesMedical,
  FaPills,
  FaFileMedical,
} from "react-icons/fa";

import "./WhatToBring.css";

function WhatToBring() {
  const items = [
    {
      icon: <FaIdCard />,
      title: "Photo Identification",
      text: "Bring a valid government-issued photo ID for the admissions process.",
    },
    {
      icon: <FaFileMedical />,
      title: "Insurance Information",
      text: "If applicable, bring your insurance card and any coverage information.",
    },
    {
      icon: <FaPills />,
      title: "Medication List",
      text: "Provide a list of current medications and any relevant medical history.",
    },
    {
      icon: <FaNotesMedical />,
      title: "Questions & Goals",
      text: "Write down any questions or concerns you'd like to discuss with our team.",
    },
  ];

  return (
    <section className="what-to-bring">
      <div className="container">

        <div className="what-to-bring__header">
          <span>Prepare For Your Visit</span>

          <h2>What To Bring</h2>

          <p>
            Preparing ahead of time helps make your admissions appointment
            smoother and allows our team to better understand your needs.
          </p>
        </div>

        <div className="what-to-bring__grid">
          {items.map((item) => (
            <div className="what-to-bring__card" key={item.title}>
              <div className="what-to-bring__icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhatToBring;