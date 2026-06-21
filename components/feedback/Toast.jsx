import React from 'react';

/**
 * Toast — a slim glass bar with a luminous nebula seam down its leading edge.
 * Use for transient confirmations ("The Index was recorded"). Tone sets the seam
 * and icon glyph color.
 */
export function Toast({ tone = 'nebula', icon, children, onDismiss, style = {}, ...rest }) {
  const tones = {
    nebula: { seam: 'var(--nebula)', glyph: '⬡', color: 'var(--nebula-bright)' },
    gold:   { seam: 'var(--gold)', glyph: '◆', color: 'var(--gold-bright)' },
    violet: { seam: 'var(--violet)', glyph: '◈', color: 'var(--violet)' },
    danger: { seam: 'var(--pulse-fire)', glyph: '✕', color: 'var(--pulse-fire)' },
  };
  const t = tones[tone] || tones.nebula;

  return (
    <div
      role="status"
      style={{
        position: 'relative', display: 'flex', alignItems: 'center', gap: '0.8rem',
        minWidth: 280, maxWidth: 440, padding: '0.85rem 1.1rem 0.85rem 1.3rem',
        background: 'rgba(10,8,20,0.92)', border: '1px solid var(--glass-border)', borderRadius: '2px',
        backdropFilter: 'blur(12px)', boxShadow: '0 12px 36px rgba(0,0,0,0.5)', overflow: 'hidden', ...style,
      }}
      {...rest}
    >
      <span style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '3px', background: t.seam, boxShadow: `0 0 12px ${t.seam}` }} />
      <span style={{ color: t.color, fontSize: '0.85rem', flexShrink: 0, fontFamily: "'Share Tech Mono', monospace" }}>{icon || t.glyph}</span>
      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.02rem', color: 'var(--text-bright)', flex: 1, lineHeight: 1.4 }}>{children}</span>
      {onDismiss && (
        <button onClick={onDismiss} aria-label="Dismiss" style={{
          border: 'none', background: 'transparent', color: 'var(--text-dim)', cursor: 'pointer',
          fontFamily: "'Share Tech Mono', monospace", fontSize: '0.7rem', flexShrink: 0,
        }} onMouseEnter={(e)=>e.currentTarget.style.color='var(--gold)'} onMouseLeave={(e)=>e.currentTarget.style.color='var(--text-dim)'}>✕</button>
      )}
    </div>
  );
}
