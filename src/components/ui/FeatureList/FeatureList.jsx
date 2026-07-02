import "./FeatureList.css";

function FeatureList({ items = [], className = "" }) {
  return (
    <div className={`feature-list ${className}`}>
      {items.map((item) => (
        <div className="feature-list__item" key={item.title}>
          <div className="feature-list__icon">{item.icon}</div>

          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeatureList;