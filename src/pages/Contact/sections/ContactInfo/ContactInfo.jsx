import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import SITE from "../../../../constants/site";
import "./ContactInfo.css";

function ContactInfo() {
  return (
    <section className="contact-info">
      <div className="container contact-info__container">
        <div className="contact-info__content">
          <span>Get In Touch</span>
          <h2>Contact Our Admissions Team</h2>
          <p>
            Whether you are ready to begin treatment or simply have questions,
            our team is here to help you understand the next step.
          </p>

          <div className="contact-info__cards">
            <div>
              <FaMapMarkerAlt />
              <h3>Visit Us</h3>
              <p>
                {SITE.address}
                <br />
                {SITE.city}, {SITE.state} {SITE.zip}
              </p>
            </div>

            <div>
              <FaPhoneAlt />
              <h3>Call Admissions</h3>
              <a href={`tel:${SITE.phoneLink}`}>{SITE.phone}</a>
            </div>

            <div>
              <FaClock />
              <h3>Availability</h3>
              <p>Contact us to speak with admissions.</p>
            </div>
          </div>
        </div>

        <form className="contact-info__form">
          <h3>Send a Message</h3>

          <input type="text" placeholder="Full Name" />
          <input type="tel" placeholder="Phone Number" />
          <input type="email" placeholder="Email Address" />
          <textarea placeholder="How can we help?" rows="5"></textarea>

          <button type="submit">Submit Inquiry</button>
        </form>
      </div>
    </section>
  );
}

export default ContactInfo;