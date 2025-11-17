import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, title, pdfUrl }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999999,
        padding: "1rem",
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          maxWidth: "700px",
          width: "100%",
          maxHeight: "90vh",        // tärkeä: ei kasva yli ruudun
          overflowY: "auto",        // mahdollistaa pystyscrollin
          padding: "2rem",
          position: "relative",
          WebkitOverflowScrolling: "touch", // pehmeä scrollaus iOS:lla
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            fontSize: "1.5rem",
            color: "#555",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          &times;
        </button>

        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{title}</h2>
        <h3 style={{ fontSize: "1rem", marginBottom: "1rem" }}>
          Automatisoi työmatkaliikkumisen raportointia
        </h3>
        <p style={{ marginBottom: "1rem", color: "#333" }}>
          Työntekijöiden työmatkojen raportointi muuttuu työnantajille pian pakolliseksi, scope 3 mukaisesti.
          Gyyti-sovellus on käyttäjälähtöinen ratkaisu ja järjestelmä, joka perustuu karttapohjaiseen reititykseen ja etäisyyden laskemiseen.
        </p>
        <p style={{ marginBottom: "1rem", color: "#333" }}>
          Käyttäjän tarvitsee ainoastaan pitää sovellusta päällä työmatkan aikana. Sovelluksessa on helppoa sopia ja automatisoida kyytien järjestämistä työntekijöiden kesken, ja ratkaisu toimii loistavasti suurillakin työpaikoilla, joissa henkilöstöä on satoja, jopa tuhansia.
        </p>

        <h3 style={{ fontSize: "1rem", marginBottom: "1rem" }}>
          Nopea laskuesimerkki vuosipäästöistä
        </h3>
        <p style={{ marginBottom: "1rem", color: "#333" }}>
          - Uusien autojen keskimääräinen CO₂-päästö on EU:ssa viime vuosina ollut arviolta ~ 100–110 g CO₂/km tasolla (Euroopan ympäristöhallinto)
        </p>
        <p style={{ marginBottom: "1rem", color: "#333" }}>- Päästö per kilometri = 105 g CO₂</p>
        <p style={{ marginBottom: "1rem", color: "#333" }}>- Keskimääräinen vuotuinen ajomäärä = 30 000 km</p>
        <p style={{ marginBottom: "1rem", color: "#333" }}>
          Vuotuiset CO₂-päästöt henkilötasolla = 105 g/km × 30 000 km = 3,15 tonnia CO₂ / vuosi
        </p>
        <p style={{ marginBottom: "1rem", color: "#333", fontWeight: 'bold' }}>100 ihmisen organisaatio:</p>
        <p style={{ marginBottom: "1rem", color: "#333" }}>- 33% henkilöstöstä autoilee työpaikalle</p>
        <p style={{ marginBottom: "1rem", color: "#333" }}>- 33 x 3,15 tonnia CO₂ / vuosi = 103,95 tonnia CO₂ / vuosi</p>
        <p style={{ marginBottom: "1rem", color: "#333" }}>
          Gyydin avulla matkoja yhdistämällä luku voi pienentyä merkittävästi
        </p>

        <h3 style={{ fontSize: "1rem", marginBottom: "1rem" }}>Katso PDF:stä raportin sisältö</h3>

        <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
          {pdfUrl && (
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#eee",
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                textDecoration: "none",
                color: "#333",
              }}
            >
              Lataa PDF
            </a>
          )}
          <button
            onClick={onClose}
            style={{
              backgroundColor: "#75b0ff",
              color: "white",
              border: "none",
              borderRadius: "8px",
              padding: "0.5rem 1rem",
              cursor: "pointer",
            }}
          >
            Sulje
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
