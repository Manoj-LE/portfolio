import React from 'react';

export function SectionTitle({ number, title, accentText, description }) {
  return (
    <div className="section-title">
      {number && <div className="section-title__number">// {number}</div>}
      <h2 className="section-title__heading">
        {title} {accentText && <span>{accentText}</span>}
      </h2>
      {description && <p className="section-title__description">{description}</p>}
    </div>
  );
}
