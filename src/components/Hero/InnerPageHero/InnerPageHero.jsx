import "./InnerPageHero.css";

function InnerPageHero({ eyebrow, title, text, image }) {
  return (
    <section className="inner-hero">
      <div className="container inner-hero__container">
        <div className="inner-hero__content">
          {eyebrow && <span>{eyebrow}</span>}

          <h1>{title}</h1>

          {text && <p>{text}</p>}
        </div>

        {image && (
          <div className="inner-hero__image">
            <img src={image} alt={title} />
          </div>
        )}
      </div>
    </section>
  );
}

export default InnerPageHero;