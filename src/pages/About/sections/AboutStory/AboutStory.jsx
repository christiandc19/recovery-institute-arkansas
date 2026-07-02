import { FaHeart, FaHandsHelping, FaLeaf } from "react-icons/fa";
import "./AboutStory.css";

function AboutStory() {
  return (
    <section className="about-story">
      <div className="container about-story__container">

        <div className="about-story__image">
          <img
            src="/images/about-story.webp"
            alt="Recovery Support"
          />
        </div>

        <div className="about-story__content">

          <span>Our Story</span>

          <h2>
            Compassionate Care That Puts People First
          </h2>

          <p>
            The Recovery Institute of Arkansas was founded with one purpose:
            helping individuals overcome substance abuse through compassionate,
            evidence-based outpatient treatment in a supportive environment.
          </p>

          <p>
            We understand that every recovery journey is unique. Our team works
            alongside each individual with dignity, respect, and personalized
            care to help build a healthier future.
          </p>

          <div className="about-story__cards">

            <div>
              <FaHeart />
              <h3>Compassion</h3>
            </div>

            <div>
              <FaHandsHelping />
              <h3>Respect</h3>
            </div>

            <div>
              <FaLeaf />
              <h3>Recovery</h3>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutStory;