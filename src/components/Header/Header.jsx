import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import SITE from "../../constants/site";
import navigation from "../../data/navigation";
import TopBar from "./TopBar";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <>
      <TopBar />

      <header className="header">
        <div className="container header__container">
          <Link to="/" className="header__logo" onClick={closeMenu}>
            <img
              src="/images/trioa.png"
              alt="The Recovery Institute of Arkansas"
            />
          </Link>

          <nav className="header__nav">
            <ul className="header__menu">
              {navigation.map((item) => (
                <li
                  key={item.path}
                  className={item.children ? "header__dropdown" : ""}
                >
                  <NavLink to={item.path}>{item.title}</NavLink>

                  {item.children && (
                    <div className="header__dropdown-menu">
                      {item.children.map((child) => (
                        <NavLink key={child.path} to={child.path}>
                          {child.title}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <a href={`tel:${SITE.phoneLink}`} className="header__button">
            Call Admissions
          </a>

          <button
            className="header__toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className={`header__mobile ${isMenuOpen ? "is-open" : ""}`}>
          <nav className="container">
            {navigation.map((item) => (
              <div key={item.path} className="header__mobile-group">
                <NavLink to={item.path} onClick={closeMenu}>
                  {item.title}
                </NavLink>

                {item.children && (
                  <div className="header__mobile-submenu">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        onClick={closeMenu}
                      >
                        {child.title}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <a
              href={`tel:${SITE.phoneLink}`}
              className="header__mobile-button"
              onClick={closeMenu}
            >
              Call Admissions
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;