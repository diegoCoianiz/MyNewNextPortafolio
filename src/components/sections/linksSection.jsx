import React, { useState } from "react";
import "@/styles/LinksSection.css";

const LinksSection = ({ data }) => {
  return (
    <section className="links-section">
      <ul className="links-list">
        {data.princialLinks.map((link, id) => (
          <div key={`princialLinks+${id}`}>
            <LinkCard link={link} id={id} />
          </div>
        ))}
      <h3>Jugamos?</h3>
      <LinkCard key={`sudoku+${1}`} link={data.sudoku} id={1} />
      <h3>Examen final:</h3>
      <LinkCard key={`datathon+${1}`} link={data.datathon_codeSpace} id={1} />
      </ul>
    </section>
  );
};

export default LinksSection;

const LinkCard = ({ link, id }) => {
  const [copiedLink, setCopiedLink] = useState(null);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(index);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  return (
    <li className="links-list__item">
      {link.url ? (
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="links-list__link"
        >
          <div className="links-list__content">
            <span className="links-list__name">{link.name}</span>
            <p className="links-list__description">
              {link.description?.[0] || ""} {/* Validación */}
            </p>
          </div>
          <div className="links-list__arrow">
            <span>⋆</span>
            <span style={{ margin: "-15px 0px" }}>⋆</span>
            <span>⋆</span>
          </div>
        </a>
      ) : (
        <div
          className={`links-list__link ${copiedLink === id ? "links-list__copy--active" : "links-list__copy"
            }`}
          onClick={() => handleCopy(link.toCopy, id)}
        >
          <div className="links-list__content">
            <span className="links-list__name">{link.name}</span>
            <p className="links-list__description">
              {copiedLink === id
                ? link.description?.[1] || "¡Copiado!"
                : link.description?.[0] || "Haz click para copiar"}
            </p>
          </div>
          <div className="links-list__arrow">
            <span>⋆</span>
            <span style={{ margin: "-15px 0px" }}>⋆</span>
            <span>⋆</span>
          </div>
        </div>
      )}
    </li>
  );
};
