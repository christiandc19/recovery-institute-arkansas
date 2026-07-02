import "./SectionHeader.css";

function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}) {
  return (
    <div className={`section-header section-header--${align} ${className}`}>
      {eyebrow && <span>{eyebrow}</span>}

      {title && <h2>{title}</h2>}

      {description && <p>{description}</p>}
    </div>
  );
}

export default SectionHeader;