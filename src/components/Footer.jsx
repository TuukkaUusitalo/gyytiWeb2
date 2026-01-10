import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link" />
      <SocialLinks parentClass="footer-icons" itemClass="footer-icon"/>
      <p style={{fontSize: '25px', textAlign: 'center'}}>
        Contact:
      </p>
      <p style={{fontSize: '15px', textAlign: 'center'}}>
        hello@gyyti.com, tuukka@gyyti.com, lauri@gyyti.com
      </p>
      <p className="copyright">
        copyright © Gyyti<span id="date">2026</span>. all rights
        reserved
      </p>
    </footer>
  );
}

export default Footer;
