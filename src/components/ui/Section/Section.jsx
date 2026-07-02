import "./Section.css";

function Section({
  children,
  background = "white",
  size = "lg",
  className = "",
}) {
  return (
    <section className={`section section--${background} section--${size} ${className}`}>
      <div className="container">{children}</div>
    </section>
  );
}

export default Section;