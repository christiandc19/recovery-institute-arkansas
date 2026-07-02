import InnerPageHero from "../../components/Hero/InnerPageHero/InnerPageHero";
import CallToAction from "../../components/sections/CallToAction/CallToAction";
import ContactInfo from "./sections/ContactInfo/ContactInfo";
import "./Contact.css";

function Contact() {
  return (
    <>
      <InnerPageHero
        eyebrow="Contact Us"
        title="Take the First Step Toward Recovery"
        text="Reach out to The Recovery Institute of Arkansas to ask questions, learn about treatment options, or begin the admissions process."
        image="/images/contact-hero.webp"
      />

      <ContactInfo />
      <CallToAction />
    </>
  );
}

export default Contact;