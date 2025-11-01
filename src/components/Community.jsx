import { useState } from "react";
import Modal from "./Modal";

function Community({ image, date, title, info, location, duration, hasModal, pdfUrl }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="tour-card relative">
      <div className="tour-img-container">
        <img src={image} className="tour-img" alt={title} />
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{info}</p>

        {hasModal && (
          <button
            onClick={() => setIsOpen(true)}
            className="relative z-10 mt-3 px-4 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition-all"
            style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", padding: "10px 15px", borderRadius: 12, borderWidth: 0.5, borderColor: "#10B981" }}
          >
            Tutustu raporttiin
          </button>
        )}
      </div>

      {/* Tässä uusi Portal-modaali */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={title} pdfUrl={pdfUrl} />
    </article>
  );
}

export default Community;
