import { FaBullseye, FaEye, FaHeart, FaShieldAlt } from "react-icons/fa";
import "./MissionValues.css";

function MissionValues() {
  return (
    <section className="mission-values">
      <div className="container">
        <div className="mission-values__header">
          <span>Mission & Values</span>
          <h2>Every Person Deserves a Chance to Recover</h2>
          <p>
            Our mission is to provide compassionate outpatient substance abuse
            treatment that helps individuals build healthier lives, stronger
            relationships, and lasting recovery.
          </p>
        </div>

        <div className="mission-values__grid">
          <div className="mission-values__card mission-values__card--large">
            <FaBullseye />
            <h3>Our Mission</h3>
            <p>
              To support individuals struggling with substance abuse through
              respectful, structured, and compassionate outpatient treatment.
            </p>
          </div>

          <div className="mission-values__card">
            <FaEye />
            <h3>Our Vision</h3>
            <p>
              A community where individuals and families can heal, rebuild, and
              move forward with hope.
            </p>
          </div>

          <div className="mission-values__card">
            <FaHeart />
            <h3>Compassion</h3>
            <p>
              We meet every person with dignity, patience, and understanding.
            </p>
          </div>

          <div className="mission-values__card">
            <FaShieldAlt />
            <h3>Integrity</h3>
            <p>
              We provide care in a confidential, respectful, and ethical setting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionValues;