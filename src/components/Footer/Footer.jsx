import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaChevronRight,
  FaShieldAlt,
} from "react-icons/fa";
import SITE from "../../constants/site";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <img
              src="/images/trioa-wh.png"
              alt="The Recovery Institute of Arkansas"
            />
          </Link>

          <p>
            Compassionate outpatient substance abuse treatment for individuals
            ready to take the next step toward lasting recovery.
          </p>

          <div className="footer__contact">
            <p>
              <FaMapMarkerAlt />
              <span>
                {SITE.address}
                <br />
                {SITE.city}, {SITE.state} {SITE.zip}
              </span>
            </p>

            <a href={`tel:${SITE.phoneLink}`}>
              <FaPhoneAlt />
              <span>{SITE.phone}</span>
            </a>
          </div>
        </div>

        <div className="footer__column">
          <h3>Quick Links</h3>
          <Link to="/"><FaChevronRight /> Home</Link>
          <Link to="/about-us"><FaChevronRight /> About Us</Link>
          <Link to="/treatment"><FaChevronRight /> Treatment</Link>
          <Link to="/programs"><FaChevronRight /> Programs</Link>
          <Link to="/contact-us"><FaChevronRight /> Contact Us</Link>
        </div>

        <div className="footer__column">
          <h3>Addiction</h3>
          <Link to="/addiction/alcohol-addiction"><FaChevronRight /> Alcohol Addiction</Link>
          <Link to="/addiction/heroin-addiction"><FaChevronRight /> Heroin Addiction</Link>
          <Link to="/addiction/fentanyl-addiction"><FaChevronRight /> Fentanyl Addiction</Link>
        </div>

        <div className="footer__column">
          <h3>Programs</h3>
          <Link to="/iop-substance-abuse"><FaChevronRight /> IOP Substance Abuse</Link>
          <Link to="/programs/group-therapy"><FaChevronRight /> Group Therapy</Link>
          <Link to="/programs/family-support"><FaChevronRight /> Family Support</Link>
          <Link to="/programs/relapse-prevention"><FaChevronRight /> Relapse Prevention</Link>
        </div>

        <div className="footer__column">
          <h3>Legal</h3>
          <Link to="/privacy-policy"><FaChevronRight /> Privacy Policy</Link>
          <Link to="/terms-and-conditions"><FaChevronRight /> Terms & Conditions</Link>
          <Link to="/accessibility"><FaChevronRight /> Accessibility</Link>
        </div>

      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-container">
          <div className="footer__shield">
            <FaShieldAlt />
          </div>

          <p>© 2026 The Recovery Institute of Arkansas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;