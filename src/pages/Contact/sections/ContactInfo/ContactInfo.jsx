import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaEnvelope,
} from "react-icons/fa";

import SITE from "../../../../constants/site";
import "./ContactInfo.css";

function formatPhoneNumber(value) {
  const numbers = value.replace(/\D/g, "").slice(0, 10);

  if (numbers.length <= 3) return numbers;
  if (numbers.length <= 6) return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;

  return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6)}`;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function ContactInfo() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    preferred_contact_method: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

function handleChange(e) {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: name === "phone" ? formatPhoneNumber(value) : value,
  }));
}

  async function handleSubmit(e) {
    e.preventDefault();

    if (formData.phone.replace(/\D/g, "").length !== 10) {
      setStatus({
        loading: false,
        success: "",
        error: "Please enter a valid 10-digit phone number.",
      });
      return;
    }

    if (!isValidEmail(formData.email)) {
      setStatus({
        loading: false,
        success: "",
        error: "Please enter a valid email address.",
      });
      return;
    }

    if (formData.message.trim().length < 10) {
      setStatus({
        loading: false,
        success: "",
        error: "Please enter a message with at least 10 characters.",
      });
      return;
    }    

        setStatus({
          loading: true,
          success: "",
          error: "",
        });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          ...formData,
          site_name: "The Recovery Institute of Arkansas",
          website: "https://therecoveryinstituteofarkansas.com",
          submitted_at: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        loading: false,
        success: "Thank you. Your message has been sent successfully.",
        error: "",
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        preferred_contact_method: "",
        message: "",
      });

      setTimeout(() => {
        window.location.href = "/thank-you";
      }, 1200);
    } catch (error) {
      setStatus({
        loading: false,
        success: "",
        error:
          "Something went wrong. Please call admissions directly at (501) 380-0180.",
      });
    }
  }

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
              <h3>Visit Our Office</h3>
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
              <p>Speak directly with our admissions team.</p>
            </div>

            <div>
              <FaClock />
              <h3>Admissions Hours</h3>
              <p>
                Monday – Friday
                <br />
                8:00 AM – 5:00 PM
                <br />
                Confidential support available.
              </p>
            </div>

            <div>
              <FaEnvelope />
              <h3>Email Us</h3>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </div>
          </div>
        </div>

        <form className="contact-info__form" onSubmit={handleSubmit}>
          <h3>Send a Message</h3>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <select
            name="preferred_contact_method"
            value={formData.preferred_contact_method}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Preferred Contact Method
            </option>
            <option value="Phone">Phone</option>
            <option value="Email">Email</option>
          </select>

          <textarea
            name="message"
            placeholder="How can we help?"
            rows="5"
            maxLength="500"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <p className="contact-info__counter">
            {formData.message.length}/500 characters
          </p>

          {status.error && <p className="contact-info__error">{status.error}</p>}
          {status.success && (
            <p className="contact-info__success">{status.success}</p>
          )}

          <button type="submit" disabled={status.loading}>
            {status.loading
              ? "Sending..."
              : "Request a Confidential Consultation"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactInfo;