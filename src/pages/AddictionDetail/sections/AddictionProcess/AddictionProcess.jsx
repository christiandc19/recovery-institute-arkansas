import {
  FaPhoneAlt,
  FaClipboardCheck,
  FaUsers,
  FaLeaf,
} from "react-icons/fa";

import Section from "../../../../components/ui/Section/Section";
import SectionHeader from "../../../../components/ui/SectionHeader/SectionHeader";
import "./AddictionProcess.css";

function AddictionProcess({ substance }) {
  const steps = [
    {
      number: "01",
      icon: <FaPhoneAlt />,
      title: "Reach Out",
      text: "Contact our admissions team to ask questions and begin the process confidentially.",
    },
    {
      number: "02",
      icon: <FaClipboardCheck />,
      title: "Assessment",
      text: `We learn more about your needs and how ${substance} has affected your life.`,
    },
    {
      number: "03",
      icon: <FaUsers />,
      title: "Begin Treatment",
      text: "Start outpatient support with structure, guidance, and accountability.",
    },
    {
      number: "04",
      icon: <FaLeaf />,
      title: "Build Lasting Recovery",
      text: "Develop tools, habits, and support systems that help you move forward.",
    },
  ];

  return (
    <Section className="addiction-process" background="light">
      <SectionHeader
        eyebrow="Recovery Process"
        title="A Clear Path Toward Recovery"
        description="Recovery can feel overwhelming, but the process does not have to be confusing. Our team helps guide each step with care and support."
      />

      <div className="addiction-process__grid">
        {steps.map((step) => (
          <div className="addiction-process__card" key={step.number}>
            <div className="addiction-process__icon">{step.icon}</div>
            <span>{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default AddictionProcess;