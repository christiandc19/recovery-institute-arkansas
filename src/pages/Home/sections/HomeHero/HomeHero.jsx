import { FaArrowRight, FaClinicMedical, FaHeart, FaUserShield } from "react-icons/fa";
import "./HomeHero.css";

function HomeHero() {
  return (
    <section className="home-hero">
      <div className="home-hero__overlay">
        <div className="container home-hero__container">
          <div className="home-hero__content">
            <span className="home-hero__eyebrow">Recovery Begins Here</span>

            <h1>
              Healing Today.
              <br />
              Hope for Tomorrow.
            </h1>

            <div className="home-hero__divider"></div>

            <p>
              Compassionate outpatient substance abuse treatment designed to help
              you take the next step toward lasting recovery.
            </p>

            <div className="home-hero__buttons">
              <a href="/contact-us" className="home-hero__btn home-hero__btn--primary">
                Start Your Recovery
              </a>

              <a href="/programs" className="home-hero__btn home-hero__btn--outline">
                View Programs <FaArrowRight />
              </a>
            </div>

            <div className="home-hero__features">
              <div className="home-hero__feature">
                <FaClinicMedical />
                <span>IOP Treatment</span>
              </div>

              <div className="home-hero__feature">
                <FaHeart />
                <span>Compassionate Care</span>
              </div>

              <div className="home-hero__feature">
                <FaUserShield />
                <span>Confidential Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;