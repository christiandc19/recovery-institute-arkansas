import { FaCheckCircle, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import SITE from "../../constants/site";
import "./TopBar.css";

function TopBar() {
  return (
    <section className="topbar">
      <div className="container topbar__container">
        <div className="topbar__item">
          <FaMapMarkerAlt />
          <span>
            {SITE.address}, {SITE.city}, {SITE.state} {SITE.zip}
          </span>
        </div>

        <div className="topbar__right">
          <a href={`tel:${SITE.phoneLink}`} className="topbar__item">
            <FaPhoneAlt />
            <span>{SITE.phone}</span>
          </a>

          <span className="topbar__status">
            <FaCheckCircle />
            <span>{SITE.admissions}</span>
          </span>
        </div>
      </div>
    </section>
  );
}

export default TopBar;