import InnerPageHero from "../../components/Hero/InnerPageHero/InnerPageHero";
import Section from "../../components/ui/Section/Section";
import "./Accessibility.css";

function Accessibility() {
  return (
    <>
      <InnerPageHero
        eyebrow="Accessibility"
        title="Accessibility Statement"
        text="The Recovery Institute of Arkansas is committed to making our website accessible and usable for all visitors."
        image="/images/terms-hero.webp"
      />

      <Section className="accessibility">
        <div className="accessibility__content">
          <p className="accessibility__updated">
            <strong>Effective Date:</strong> July 1, 2026
          </p>

          <h2>Our Commitment</h2>
          <p>
            We are committed to providing a website experience that is accessible
            to the widest possible audience, regardless of technology or ability.
          </p>

          <h2>Ongoing Improvements</h2>
          <p>
            We continue to review and improve our website to support usability,
            readability, keyboard navigation, and accessible content structure.
          </p>

          <h2>Accessibility Features</h2>
          <p>
            Our website is designed with clear navigation, readable typography,
            proper heading structure, responsive layouts, and descriptive image
            text where appropriate.
          </p>

          <h2>Third-Party Content</h2>
          <p>
            Some third-party tools or external links may not be fully controlled
            by The Recovery Institute of Arkansas. We encourage accessibility
            best practices wherever possible.
          </p>

          <h2>Need Assistance?</h2>
          <p>
            If you experience difficulty using this website or need assistance
            accessing information, please contact us and we will make reasonable
            efforts to help.
          </p>
        </div>
      </Section>
    </>
  );
}

export default Accessibility;