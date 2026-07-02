import { FaQuestionCircle } from "react-icons/fa";
import "./IOPFAQ.css";

function IOPFAQ() {
  const faqs = [
    {
      question: "What is an Intensive Outpatient Program?",
      answer:
        "An Intensive Outpatient Program, or IOP, provides structured substance abuse treatment while allowing clients to continue living at home and managing daily responsibilities.",
    },
    {
      question: "Who is a good fit for IOP?",
      answer:
        "IOP may be a good fit for individuals who need more support than traditional outpatient care but do not require residential treatment.",
    },
    {
      question: "Can I work or go to school while in IOP?",
      answer:
        "Yes. IOP is designed to provide treatment support while clients continue daily responsibilities such as work, school, and family life.",
    },
    {
      question: "What does IOP treatment include?",
      answer:
        "Treatment may include group support, relapse prevention education, coping skills, accountability, and individualized recovery planning.",
    },
  ];

  return (
    <section className="iop-faq">
      <div className="container iop-faq__container">
        <div className="iop-faq__header">
          <span>Frequently Asked Questions</span>
          <h2>Questions About IOP Treatment?</h2>
          <p>
            Learn more about intensive outpatient treatment, who it may help,
            and what to expect when starting care.
          </p>
        </div>

        <div className="iop-faq__list">
          {faqs.map((faq) => (
            <div className="iop-faq__item" key={faq.question}>
              <div className="iop-faq__icon">
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

export default IOPFAQ;