import "../header.css";

function Header({ toggleNav }) {
  return (
    <div className="header">
      <nav>
        <div className="nav-logo">
          <a href="#">
            <span>Identity</span>
            <span>Mark</span>
          </a>
        </div>
        <ul className="nav-list">
          <li>
            <a href="#">Tools</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="mailto:example@gmail.com">Support</a>
          </li>
          <li>
            <a className="login" href="#">
              Login
            </a>
          </li>
        </ul>
      </nav>
      <div className="hamburger" onClick={() => toggleNav()}>
        <img src="/hamburger.svg" alt="Menu" />
      </div>
    </div>
  );
}

export default Header;
