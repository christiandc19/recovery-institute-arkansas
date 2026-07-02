import { FaPhoneAlt, FaShieldAlt, FaHeart } from "react-icons/fa";
import SITE from "../../../../constants/site";
import "./AdmissionsIntro.css";

function AdmissionsIntro() {
  return (
    <section className="admissions-intro">
      <div className="container admissions-intro__container">
        <div className="admissions-intro__image">
          <img
            src="/images/admissions-intro.webp"
            alt="Admissions support for recovery treatment"
          />
        </div>

        <div className="admissions-intro__content">
          <span>What Happens First</span>

          <h2>One Call Can Help You Understand Your Options</h2>

          <p>
            Reaching out does not mean you need to have everything figured out.
            Our admissions team can answer your questions, explain available
            treatment options, and help you understand the next step.
          </p>

          <div className="admissions-intro__list">
            <div>
              <FaPhoneAlt />
              <p>Speak with our admissions team</p>
            </div>

            <div>
              <FaShieldAlt />
              <p>Ask questions in a confidential setting</p>
            </div>

            <div>
              <FaHeart />
              <p>Receive compassionate guidance without judgment</p>
            </div>
          </div>

          <a href={`tel:${SITE.phoneLink}`} className="admissions-intro__button">
            Call Admissions
          </a>
        </div>
      </div>
    </section>
  );
}

export default AdmissionsIntro;