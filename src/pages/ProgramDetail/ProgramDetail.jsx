import { useParams } from "react-router-dom";
import {
  FaUsers,
  FaShieldAlt,
  FaTools,
  FaHeart,
  FaCalendarCheck,
  FaUserCheck,
  FaSeedling,
} from "react-icons/fa";

import InnerPageHero from "../../components/Hero/InnerPageHero/InnerPageHero";
import Section from "../../components/ui/Section/Section";
import SectionHeader from "../../components/ui/SectionHeader/SectionHeader";
import FeatureCard from "../../components/ui/FeatureCard/FeatureCard";
import CallToAction from "../../components/sections/CallToAction/CallToAction";
import HomeFAQ from "../Home/sections/HomeFAQ/HomeFAQ";
import programDetails from "../../data/programDetails";
import "./ProgramDetail.css";

function ProgramDetail() {
  const { slug } = useParams();
  const program = programDetails[slug];

  if (!program) {
    return (
      <Section>
        <div className="program-detail__not-found">
          <h1>Program Not Found</h1>
          <p>The program page you are looking for does not exist.</p>
        </div>
      </Section>
    );
  }

  const benefitIcons = [<FaUsers />, <FaTools />, <FaShieldAlt />, <FaHeart />];

  const benefits = program.benefits.map((benefit, index) => ({
    icon: benefitIcons[index] || <FaHeart />,
    title: benefit,
    description:
      "Supportive recovery guidance designed to help clients build confidence, stability, and healthier coping skills.",
  }));

  const processCards = [
    {
      icon: <FaCalendarCheck />,
      title: "Structured Sessions",
      description:
        "Each program follows a guided structure designed to support growth, accountability, and recovery progress.",
    },
    {
      icon: <FaUserCheck />,
      title: "Personalized Support",
      description:
        "Care is focused on each client’s needs, goals, challenges, and long-term recovery plan.",
    },
    {
      icon: <FaSeedling />,
      title: "Long-Term Recovery",
      description:
        "Clients build healthy routines, coping tools, and support systems that continue beyond treatment.",
    },
  ];


  return (
    <>
      <InnerPageHero
        eyebrow={program.eyebrow}
        title={program.title}
        text={program.heroText}
        image={program.image}
      />

      <Section className="program-detail">
        <div className="program-detail__overview">
          <SectionHeader
            eyebrow="Program Overview"
            title={program.overviewTitle}
            description={program.overviewText}
          />

          <div className="program-detail__grid">
            {benefits.map((benefit) => (
              <FeatureCard
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </Section>


      <Section background="light" className="program-detail__process-section">
        <div className="program-detail__process">
          <SectionHeader
            eyebrow="What To Expect"
            title={program.processTitle}
            description={program.processText}
          />

          <div className="program-detail__process-grid">
            {processCards.map((card) => (
              <FeatureCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </Section>

      <HomeFAQ />
      <CallToAction />
    </>
  );
}

export default ProgramDetail;