import { useParams } from "react-router-dom";
import InnerPageHero from "../../components/Hero/InnerPageHero/InnerPageHero";
import CallToAction from "../../components/sections/CallToAction/CallToAction";
import HomeFAQ from "../Home/sections/HomeFAQ/HomeFAQ";
import addictions from "../../data/addictions";
import SignsTreatment from "./sections/SignsTreatment/SignsTreatment";
import TreatmentApproach from "./sections/TreatmentApproach/TreatmentApproach";
import AddictionProcess from "./sections/AddictionProcess/AddictionProcess";
import SEO from "../../components/SEO/SEO";
import "./AddictionDetail.css";

function AddictionDetail() {
  const { slug } = useParams();
  const addiction = addictions[slug];
  const addictionSeo = {
  title: `${addiction?.title || "Addiction Treatment"} in Searcy, AR`,
  description:
    addiction?.heroText ||
    "Learn about outpatient addiction treatment at The Recovery Institute of Arkansas.",
  canonical: `/addiction/${slug}`,
  image: addiction?.image,
};

  if (!addiction) {
    return (
      <section className="addiction-not-found">
        <div className="container">
          <h1>Page Not Found</h1>
          <p>The addiction treatment page you are looking for does not exist.</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <SEO {...addictionSeo} />
      <InnerPageHero
        eyebrow="Addiction Treatment"
        title={addiction.title}
        text={addiction.heroText}
        image={addiction.image}
      />

      <section className="addiction-detail">
        <div className="container addiction-detail__container">
          <div className="addiction-detail__content">
            <span>Treatment Support</span>

            <h2>Understanding {addiction.substance}</h2>

            <p>
              {addiction.substance} can affect a person’s health, relationships,
              responsibilities, and sense of stability. Recovery is possible
              with the right structure, support, and willingness to take the
              next step.
            </p>

            <p>
              Our outpatient treatment approach helps individuals identify
              triggers, build coping skills, strengthen accountability, and
              develop healthier routines that support long-term recovery.
            </p>

            <h2>Compassionate Support for {addiction.substance}</h2>

            <p>
              Recovery from {addiction.substance} can feel overwhelming, but you
              do not have to face it alone. Our outpatient substance abuse
              treatment programs are designed to provide structure, support, and
              guidance throughout the recovery process.
            </p>

            <p>
              The Recovery Institute of Arkansas helps individuals develop
              healthier coping skills, strengthen accountability, and build a
              foundation for long-term recovery.
            </p>
          </div>

          <div className="addiction-detail__card">
            <h3>How We Help</h3>

            <ul>
              <li>Structured outpatient support</li>
              <li>Relapse prevention education</li>
              <li>Group-based recovery support</li>
              <li>Confidential admissions process</li>
              <li>Compassionate care focused on substance abuse recovery</li>
            </ul>
          </div>
        </div>
      </section>
      <SignsTreatment substance={addiction.substance} />
      <TreatmentApproach substance={addiction.substance} />
      <AddictionProcess substance={addiction.substance} />
      <HomeFAQ />
      <CallToAction />
    </>
  );
}

export default AddictionDetail;