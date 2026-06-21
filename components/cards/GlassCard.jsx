import React from 'react';

/**
 * GlassCard — the nebula-glass artifact surface. Thin metal border, dark glass fill,
 * a luminous accent seam across the top, and a glow-lift on hover. The brand's
 * default container for dossiers, archive entries, and canon objects.
 */
export function GlassCard({ accent = 'nebula', hover = true, children, style = {}, ...rest }) {
  const accents = {
    nebula: {
      border: 'rgba(168,220,238,0.22)',
      borderHover: 'rgba(168,220,238,0.38)',
      seam: 'linear-gradient(90deg, transparent, var(--nebula), var(--gold), transparent)',
      fill: 'linear-gradient(135deg, rgba(168,220,238,0.05), rgba(5,5,10,0.8))',
      glow: '0 16px 40px rgba(168,220,238,0.1)',
    },
    gold: {
      border: 'rgba(212,169,75,0.22)',
      borderHover: 'rgba(212,169,75,0.38)',
      seam: 'linear-gradient(90deg, var(--gold), transparent)',
      fill: 'linear-gradient(135deg, rgba(212,169,75,0.04), rgba(5,5,10,0.75))',
      glow: '0 12px 32px rgba(212,169,75,0.08)',
    },
    violet: {
      border: 'rgba(139,92,246,0.24)',
      borderHover: 'rgba(139,92,246,0.42)',
      seam: 'linear-gradient(90deg, transparent, var(--violet), var(--rose), transparent)',
      fill: 'linear-gradient(135deg, rgba(139,92,246,0.05), rgba(5,5,10,0.8))',
      glow: '0 16px 40px rgba(139,92,246,0.12)',
    },
  };
  const a = accents[accent] || accents.nebula;

  return (
    <div
      style={{
        position: 'relative',
        border: `1px solid ${a.border}`,
        background: a.fill,
        borderRadius: '2px',
        padding: '2rem',
        overflow: 'hidden',
        transition: 'transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
        ...style,
      }}
      onMouseEnter={hover ? (e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.borderColor = a.borderHover;
        e.currentTarget.style.boxShadow = a.glow;
      } : undefined}
      onMouseLeave={hover ? (e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = a.border;
        e.currentTarget.style.boxShadow = 'none';
      } : undefined}
      {...rest}
    >
      <span style={{
        content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: a.seam, opacity: 0.6,
      }} />
      {children}
    </div>
  );
}
