import { Link } from "react-router-dom";
import { FaCheckCircle, FaPhoneAlt, FaHome } from "react-icons/fa";
import SITE from "../../constants/site";
import "./ThankYou.css";

function ThankYou() {
  return (
    <section className="thank-you">
      <div className="container thank-you__container">
        <div className="thank-you__card">
            <div className="thank-you__status">
            <FaCheckCircle className="thank-you__icon" />
            <span>Message Sent</span>
            </div>

          <h1>Thank You for Reaching Out</h1>

          <p>
            Thank you for contacting The Recovery Institute of Arkansas. Our admissions team has received your message and will reach out as soon as possible. If your matter is urgent, please call us directly at (501) 380-0180.
          </p>

          <div className="thank-you__notice">
            We typically respond during normal business hours. If you need immediate assistance, please call us directly.
            </div>

          <div className="thank-you__actions">
            <a href={`tel:${SITE.phoneLink}`}>
              <FaPhoneAlt />
              Call Admissions
            </a>

            <Link to="/">
              <FaHome />
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThankYou;