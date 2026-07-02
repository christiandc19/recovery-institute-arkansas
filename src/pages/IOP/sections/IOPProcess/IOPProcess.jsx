import {
  FaPhoneAlt,
  FaClipboardCheck,
  FaUsers,
  FaLeaf,
} from "react-icons/fa";

import Section from "../../../../components/ui/Section/Section";
import SectionHeader from "../../../../components/ui/SectionHeader/SectionHeader";
import "./IOPProcess.css";

function IOPProcess() {
  const steps = [
    {
      number: "01",
      icon: <FaPhoneAlt />,
      title: "Reach Out",
      text: "Call admissions or contact us online to ask questions and begin the process.",
    },
    {
      number: "02",
      icon: <FaClipboardCheck />,
      title: "Assessment",
      text: "We learn about your needs and determine whether IOP is the right fit.",
    },
    {
      number: "03",
      icon: <FaUsers />,
      title: "Begin IOP",
      text: "Start structured outpatient treatment with group support and recovery guidance.",
    },
    {
      number: "04",
      icon: <FaLeaf />,
      title: "Build Recovery Skills",
      text: "Develop practical tools to support relapse prevention and long-term recovery.",
    },
  ];

  return (
    <Section className="iop-process">
      <SectionHeader
        eyebrow="How To Get Started"
        title="Your IOP Recovery Process"
        description="Starting treatment should feel clear and supportive. Our team helps guide you through each step."
      />

      <div className="iop-process__grid">
        {steps.map((step) => (
          <div className="iop-process__card" key={step.number}>
            <div className="iop-process__icon">{step.icon}</div>
            <span>{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default IOPProcess;