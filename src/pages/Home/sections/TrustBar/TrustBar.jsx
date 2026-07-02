import {
  FaClinicMedical,
  FaHeart,
  FaLock,
  FaPhoneAlt,
} from "react-icons/fa";

import "./TrustBar.css";

function TrustBar() {
  return (
    <section className="trust-bar">
      <div className="container trust-bar__container">
        <div className="trust-bar__item">
          <FaClinicMedical />
          <span>IOP Treatment</span>
        </div>

        <div className="trust-bar__item">
          <FaHeart />
          <span>Compassionate Care</span>
        </div>

        <div className="trust-bar__item">
          <FaLock />
          <span>Confidential Support</span>
        </div>

        <div className="trust-bar__item">
          <FaPhoneAlt />
          <span>Admissions Available</span>
        </div>
      </div>
    </section>
  );
}

export default TrustBar;