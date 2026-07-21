import { useEffect, useState } from "react";

function LegalPage({ type }) {
  const [document, setDocument] = useState(null);

  useEffect(() => {
    const file = type === "privacy" ? "privacy.json" : "tos.json";

    fetch(`/legal/${file}`)
      .then((res) => res.json())
      .then(setDocument);
  }, [type]);

  if (!document) return <p>Ladataan...</p>;

  return (
    <div className="legal-page">
      <h1>
        {type === "privacy" ? "Tietosuojaseloste" : "Käyttöehdot"}
      </h1>

      <p className="legal-date">
        Voimassa: {document.effective}
      </p>

      {document.sections.map((section, index) => (
        <section key={index} className="legal-section">
          <h2>{section.title}</h2>

          {Object.entries(section)
            .filter(([key]) => key.startsWith("body"))
            .map(([key, value]) => (
              <p key={key}>{value}</p>
            ))}
        </section>
      ))}
    </div>
  );
}

export default LegalPage;