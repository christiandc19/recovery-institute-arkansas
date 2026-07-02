import InnerPageHero from "../../components/Hero/InnerPageHero/InnerPageHero";
import Section from "../../components/ui/Section/Section";
import "./TermsConditions.css";

function TermsConditions() {
  return (
    <>
      <InnerPageHero
        eyebrow="Terms & Conditions"
        title="Website Terms & Conditions"
        text="Please review these terms before using The Recovery Institute of Arkansas website."
        image="/images/terms-hero.webp"
      />

      <Section className="terms">
        <div className="terms__content">
          <p className="terms__updated">
            <strong>Effective Date:</strong> July 1, 2026
          </p>

          <h2>Use of This Website</h2>
          <p>
            This website is provided for general informational purposes about
            The Recovery Institute of Arkansas and its substance abuse treatment
            services.
          </p>

          <h2>No Medical Advice</h2>
          <p>
            Information on this website is not intended to replace professional
            medical, clinical, or emergency care. If you are experiencing a
            medical emergency, call 911 immediately.
          </p>

          <h2>Service Information</h2>
          <p>
            The Recovery Institute of Arkansas provides substance abuse
            treatment services. We do not provide PHP or standalone mental
            health services.
          </p>

          <h2>Website Accuracy</h2>
          <p>
            We make reasonable efforts to keep website information accurate, but
            we do not guarantee that all information is complete, current, or
            error-free.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            This website may include links to third-party websites. We are not
            responsible for external content, policies, or practices.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            These Terms & Conditions may be updated at any time. Continued use
            of this website means you accept the updated terms.
          </p>
        </div>
      </Section>
    </>
  );
}

export default TermsConditions;