import {
  FaCheckCircle,
  FaUserFriends,
  FaCalendarAlt,
  FaLock,
} from "react-icons/fa";

import "./WhyChooseAbout.css";

function WhyChooseAbout() {
  return (
    <section className="why-about">
      <div className="container why-about__container">
        <div className="why-about__content">
          <span>Why Choose Us</span>

          <h2>Recovery That Puts You First</h2>

          <p>
            Every individual deserves treatment that is compassionate,
            respectful, and tailored to their recovery journey. We focus on
            helping people build lasting recovery through personalized
            outpatient care.
          </p>

          <div className="why-about__features">
            <div>
              <FaUserFriends />
              <div>
                <h3>Experienced Recovery Professionals</h3>
                <p>Supportive guidance from a caring treatment team.</p>
              </div>
            </div>

            <div>
              <FaCheckCircle />
              <div>
                <h3>Personalized Treatment Plans</h3>
                <p>Recovery plans built around your individual needs.</p>
              </div>
            </div>

            <div>
              <FaCalendarAlt />
              <div>
                <h3>Flexible Outpatient Scheduling</h3>
                <p>Treatment that fits around work, school, and family.</p>
              </div>
            </div>

            <div>
              <FaLock />
              <div>
                <h3>Confidential Care</h3>
                <p>Your privacy and dignity are always respected.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="why-about__image">
          <img
            src="/images/about-why.webp"
            alt="Recovery Support"
          />
        </div>
      </div>
    </section>
  );
}

export default WhyChooseAbout;