import "./SplitSection.css";

function SplitSection({
  image,
  imageAlt,
  reverse = false,
  children,
  className = "",
}) {
  return (
    <div
      className={`split-section ${
        reverse ? "split-section--reverse" : ""
      } ${className}`}
    >
      <div className="split-section__image">
        <img src={image} alt={imageAlt} />
      </div>

      <div className="split-section__content">{children}</div>
    </div>
  );
}

export default SplitSection;