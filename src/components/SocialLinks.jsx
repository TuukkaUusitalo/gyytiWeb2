import { socialLinks } from "../data";
import SocialLink from "./SocialLink";
import { FaWhatsapp, FaFacebook, FaTwitter, FaSquarespace } from "react-icons/fa";


const iconMap = {
  "FaWhatsapp": <FaWhatsapp />,
 // "fab fa-facebook": <FaFacebook />,
 // "fab fa-x-twitter": <FaTwitter />,
//  "fab fa-squarespace": <FaSquarespace />

}


const SocialLinks = ({ parentClass, itemClass }) =>  {
  return (
    <ul className={parentClass} id="social-links">
      {socialLinks.map((link) => {
        return <SocialLink key={link.id} link={link} itemClass={itemClass} icon={iconMap[link.icon]} />;
      })}
    </ul>
  );
}

export default SocialLinks;
