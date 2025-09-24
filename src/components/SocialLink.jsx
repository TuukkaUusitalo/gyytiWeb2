
const SocialLink = ({ link, itemClass, icon }) => {
  return (
    <li key={link.id}>
      <a href={link.href} className={itemClass} target="_blank" rel="noreferrer">
        {/*<i className={link.icon}></i>*/}
        {icon}
      </a>
    </li>
  );
};

export default SocialLink;
