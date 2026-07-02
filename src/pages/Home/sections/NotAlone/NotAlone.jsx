import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";
import SITE from "../../../../constants/site";
import "./NotAlone.css";

function NotAlone() {
  return (
    <section className="not-alone">
      <div className="container not-alone__container">
        <div className="not-alone__content">
          <span>You Are Not Alone</span>

          <h2>Recovery Starts With One Honest Conversation</h2>

          <p>
            Asking for help can feel difficult, but you do not have to face
            addiction alone. Our team provides confidential, compassionate
            support for individuals ready to take the next step.
          </p>

          <div className="not-alone__list">
            <div>
              <FaCheckCircle />
              <span>Confidential support</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Judgment-free care</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Outpatient treatment options</span>
            </div>
          </div>

          <a href={`tel:${SITE.phoneLink}`} className="not-alone__button">
            <FaPhoneAlt />
            Call Admissions
          </a>
        </div>

        <div className="not-alone__image">
          <img
            src="/images/not-alone.webp"
            alt="Compassionate recovery support"
          />
        </div>
      </div>
    </section>
  );
}

export default NotAlone;