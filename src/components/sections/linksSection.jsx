import React, { useState } from "react";
import "@/styles/LinksSection.css";

const LinksSection = ({data}) => {
  
  const links = data
  const [copiedLink, setCopiedLink] = useState(null);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(index);
    setTimeout(() => setCopiedLink(null), 2000); // Reset state after 2 seconds
  };

  return (
    <section className="links-section">
      <ul className="links-list">
        {links.map((link, id) => (
          <li key={id} className="links-list__item">
            {link.url ? (
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="links-list__link"
              >
                <div className="links-list__content">
                  <span className="links-list__name">{link.name}</span>
                  <p className="links-list__description">{link.description[0]}</p>
                </div>
                <div className="links-list__arrow">
                  <span>⋆</span>
                  <span style={{ margin: "-15px 0px" }}>⋆</span>
                  <span>⋆</span>
                </div>
              </a>
            ) : (
              <div
                className={`links-list__link ${
                  copiedLink === id
                    ? "links-list__copy--active"
                    : "links-list__copy"
                }`}
                onClick={() => handleCopy(link.toCopy, id)}
              >
                <div className="links-list__content">
                  <span className="links-list__name">{link.name}</span>
                  <p className="links-list__description">
                    {copiedLink === id
                      ? link.description[1]
                      : link.description[0]}
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
        ))}
      </ul>
    </section>
  );
};

export default LinksSection;
