import { FaQuestionCircle } from "react-icons/fa";
import "./HomeFAQ.css";

function HomeFAQ() {
  const faqs = [
    {
      question: "What is an Intensive Outpatient Program?",
      answer:
        "An Intensive Outpatient Program, or IOP, provides structured substance abuse treatment while allowing clients to continue living at home and managing daily responsibilities.",
    },
    {
      question: "Do you provide mental health services?",
      answer:
        "No. The Recovery Institute of Arkansas focuses on substance abuse treatment services and does not provide standalone mental health services.",
    },
    {
      question: "Is treatment confidential?",
      answer:
        "Yes. Your privacy is important, and inquiries are handled with care, respect, and confidentiality.",
    },
    {
      question: "How do I get started?",
      answer:
        "You can call admissions or contact us online. Our team will help you understand the next steps and determine the right treatment option.",
    },
  ];

  return (
    <section className="home-faq">
      <div className="container home-faq__container">
        <div className="home-faq__header">
          <span>Frequently Asked Questions</span>
          <h2>Questions About Starting Treatment?</h2>
          <p>
            We know reaching out can feel overwhelming. Here are a few common
            questions to help you understand what to expect.
          </p>
        </div>

        <div className="home-faq__list">
          {faqs.map((faq) => (
            <div className="home-faq__item" key={faq.question}>
              <div className="home-faq__icon">
                <FaQuestionCircle />
              </div>

              <div>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeFAQ;