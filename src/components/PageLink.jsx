import { Link } from "react-router-dom";

const PageLink = ({ link, itemClass }) => {
  // Jos linkki alkaa #, käytetään tavallista ankkuria (scrollaa samaa sivua)
  if (link.href.startsWith("#")) {
    return (
      <li>
        <a href={link.href} className={itemClass}>
          {link.text}
        </a>
      </li>
    );
  }

  // Muuten käytetään React Routerin Link-komponenttia
  return (
    <li>
      <Link to={link.href} className={itemClass}>
        {link.text}
      </Link>
    </li>
  );
};

export default PageLink;
