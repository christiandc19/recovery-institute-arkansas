import {
  FaCheckCircle,
  FaHandsHelping,
  FaShieldAlt,
  FaUserFriends,
} from "react-icons/fa";

import "./WhyChooseUs.css";

function WhyChooseUs() {
  return (
    <section className="why-choose">
      <div className="container why-choose__container">
        <div className="why-choose__image">
          <img src="/images/why-choose-us.webp" alt="Supportive recovery care" />

          <div className="why-choose__badge">
            <strong>Supportive Care</strong>
            <span>Focused on lasting recovery</span>
          </div>
        </div>

        <div className="why-choose__content">
          <span className="why-choose__eyebrow">Why Choose Us</span>

          <h2>Recovery Support That Meets You Where You Are</h2>

          <p>
            The Recovery Institute of Arkansas provides compassionate outpatient
            substance abuse treatment for individuals ready to take the next
            step toward a healthier future.
          </p>

          <div className="why-choose__list">
            <div className="why-choose__item">
              <FaCheckCircle />
              <span>Intensive outpatient substance abuse treatment</span>
            </div>

            <div className="why-choose__item">
              <FaHandsHelping />
              <span>Compassionate support from admission to recovery</span>
            </div>

            <div className="why-choose__item">
              <FaShieldAlt />
              <span>Confidential and respectful treatment environment</span>
            </div>

            <div className="why-choose__item">
              <FaUserFriends />
              <span>Programs for alcohol, heroin, fentanyl, and more</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;