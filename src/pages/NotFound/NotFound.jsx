import { Link } from "react-router-dom";
import { FaArrowLeft, FaHome } from "react-icons/fa";
import "./NotFound.css";

function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <div className="not-found__content">
          <span>404</span>

          <h1>Page Not Found</h1>

          <p>
            The page you're looking for may have been moved, deleted, or never
            existed. Let's get you back to a place where we can help.
          </p>

          <div className="not-found__buttons">
            <Link to="/" className="not-found__primary">
              <FaHome />
              Back to Home
            </Link>

            <Link to="/contact-us" className="not-found__secondary">
              <FaArrowLeft />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;