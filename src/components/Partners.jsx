const Partners = ({ partners, parentClass }) => {
  return (
    <div className={parentClass}>
      {partners.map((partner) => (
        <div key={partner.id} className="partner-item">
          <img src={partner.image} className="partner-img" alt={partner.name} />
        </div>
      ))}
    </div>
  );
};

export default Partners;
