import "../footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-box">
          <div className="footer-1">
            <div className="footer-1-el1">
              <p>Design Your Own Logo</p>
              <p>Try LogoMaker for free, no sign-up required.</p>
            </div>
            <div className="footer-1-el2">
              <p>Support</p>
              <p>Need Assistance? We're Here to Help.</p>
            </div>
            <div className="footer-1-el3">
              <p>Tools</p>
              <p>Explore our free tools for color, font, and logo design.</p>
            </div>
          </div>
          <div className="footer-2">
            <p>Terms of service</p>
            <p>Privacy policy</p>
          </div>
        </div>
        <div className="footer-sq">
          <div className="sq-1"></div>
          <div className="sq-2"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
