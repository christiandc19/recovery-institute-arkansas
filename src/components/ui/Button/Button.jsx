import { Link } from "react-router-dom";
import "./Button.css";

function Button({
  children,
  to,
  href,
  variant = "primary",
  className = "",
  ...props
}) {
  const buttonClass = `btn btn--${variant} ${className}`;

  if (to) {
    return (
      <Link to={to} className={buttonClass} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={buttonClass} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
}

export default Button;