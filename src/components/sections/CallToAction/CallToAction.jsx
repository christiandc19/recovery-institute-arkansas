import { FaPhoneAlt, FaArrowRight } from "react-icons/fa";
import SITE from "../../../constants/site";
import Button from "../../ui/Button/Button";

import "./CallToAction.css";

function CallToAction() {
  return (
    <section className="home-cta">
      <div className="container">
        <div className="home-cta__box">
          <span>Take The First Step Today</span>

          <h2>
            Your Recovery Journey Can
            <br />
            Start Today
          </h2>

          <p>
            The hardest step is asking for help. Our compassionate admissions
            team is here to answer your questions, explain your treatment
            options, and help you begin recovery with confidence.
          </p>

          
          <div className="home-cta__buttons">
            <Button href={`tel:${SITE.phoneLink}`} variant="light">
              <FaPhoneAlt />
              Call Admissions
            </Button>

            <Button to="/contact-us" variant="outline" className="home-cta__outline">
              Contact Us
              <FaArrowRight />
            </Button>
          </div>



        </div>
      </div>
    </section>
  );
}

export default CallToAction;