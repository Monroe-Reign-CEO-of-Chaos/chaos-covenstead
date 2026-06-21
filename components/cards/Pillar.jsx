import React from 'react';

/**
 * Pillar — a beveled (angled-corner) glass panel for the "three roles" pattern:
 * an icon glyph, a Cinzel title, and a Cormorant body. Hover lifts the border and
 * casts a violet glow. The signature clip-path shape ties it to the CTA.
 */
export function Pillar({ icon, title, children, style = {}, ...rest }) {
  return (
    <div
      style={{
        position: 'relative',
        flex: 1,
        minWidth: 240,
        maxWidth: 320,
        padding: '2.5rem 2rem',
        background: 'rgba(10,8,22,0.72)',
        border: '1px solid rgba(212,169,75,0.22)',
        backdropFilter: 'blur(12px)',
        clipPath: 'polygon(14px 0%, 100% 0%, calc(100% - 14px) 100%, 0% 100%)',
        textAlign: 'center',
        transition: 'border-color 0.3s, box-shadow 0.3s',
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(212,169,75,0.45)';
        e.currentTarget.style.boxShadow = '0 0 35px rgba(139,92,246,0.18)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(212,169,75,0.22)';
        e.currentTarget.style.boxShadow = 'none';
      }}
      {...rest}
    >
      {icon != null && (
        <span style={{ fontSize: '1.6rem', marginBottom: '1rem', display: 'block' }}>{icon}</span>
      )}
      <h3 style={{
        fontFamily: "'Cinzel Decorative', serif",
        fontSize: '0.72rem',
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--gold)',
        marginBottom: '0.9rem',
      }}>
        {title}
      </h3>
      <p style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontStyle: 'italic',
        fontSize: '0.95rem',
        lineHeight: 1.75,
        color: 'var(--text-cool-muted)',
        margin: 0,
      }}>
        {children}
      </p>
    </div>
  );
}
