import "./FeatureCard.css";

function FeatureCard({
  icon,
  title,
  description,
  children,
  className = "",
  centered = false,
}) {
  return (
    <div
      className={`feature-card ${
        centered ? "feature-card--center" : ""
      } ${className}`}
    >
      {icon && <div className="feature-card__icon">{icon}</div>}

      {title && <h3>{title}</h3>}

      {description && <p>{description}</p>}

      {children}
    </div>
  );
}

export default FeatureCard;