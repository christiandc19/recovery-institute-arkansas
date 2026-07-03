import InnerPageHero from "../../components/Hero/InnerPageHero/InnerPageHero";
import Section from "../../components/ui/Section/Section";
import SEO from "../../components/SEO/SEO";
import seo from "../../data/seo";
import "./PrivacyPolicy.css";

function PrivacyPolicy() {
  return (
    <>
      <SEO {...seo.privacyPolicy} />
      <InnerPageHero
        eyebrow="Privacy Policy"
        title="Your Privacy Matters"
        text="The Recovery Institute of Arkansas is committed to protecting your privacy and handling your information responsibly."
        image="/images/privacy-hero.webp"
      />

      <Section className="privacy-policy">
        <div className="privacy-policy__content">

          <p className="privacy-policy__updated">
            <strong>Effective Date:</strong> July 1, 2026
          </p>

          <h2>Information We Collect</h2>

          <p>
            We may collect personal information that you voluntarily provide
            when completing contact forms, requesting information, or
            communicating with our admissions team. This may include your name,
            phone number, email address, and any information you choose to
            provide regarding your inquiry.
          </p>

          <h2>How We Use Your Information</h2>

          <p>
            Information submitted through our website is used to respond to
            inquiries, provide information about our services, improve the user
            experience, and communicate regarding treatment options when
            requested.
          </p>

          <h2>Information Sharing</h2>

          <p>
            We do not sell or rent personal information. Information may be
            shared only when required by law or when necessary to provide
            requested services.
          </p>

          <h2>Website Analytics</h2>

          <p>
            Our website may use cookies and analytics technologies to understand
            website performance and improve the overall visitor experience.
            These technologies do not replace professional medical records or
            treatment documentation.
          </p>

          <h2>Security</h2>

          <p>
            We implement reasonable administrative and technical safeguards to
            protect information submitted through this website. However, no
            method of electronic transmission can be guaranteed to be completely
            secure.
          </p>

          <h2>Third-Party Links</h2>

          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of external sites.
          </p>

          <h2>Changes to This Policy</h2>

          <p>
            This Privacy Policy may be updated periodically. Any revisions will
            be posted on this page with an updated effective date.
          </p>

          <h2>Contact Us</h2>

          <p>
            If you have questions regarding this Privacy Policy, please contact
            The Recovery Institute of Arkansas using the contact information
            provided on our website.
          </p>

        </div>
      </Section>
    </>
  );
}

export default PrivacyPolicy;