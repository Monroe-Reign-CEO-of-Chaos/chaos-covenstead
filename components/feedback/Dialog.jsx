import React from 'react';

/**
 * Dialog — a centered glass panel inside a gold filigree frame, over a blurred
 * obsidian scrim. The brand's "a prophecy is revealed" moment. Controlled via `open`.
 */
export function Dialog({ open, onClose, title, eyebrow, children, footer, width = 460, style = {} }) {
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '2rem', background: 'rgba(5,5,10,0.72)', backdropFilter: 'blur(8px)',
        animation: 'cc-fade 0.3s ease both',
      }}
    >
      <style>{`@keyframes cc-fade{from{opacity:0}to{opacity:1}}@keyframes cc-rise{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}`}</style>
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative', width: '100%', maxWidth: width,
          background: 'linear-gradient(135deg, rgba(139,92,246,0.06), rgba(10,8,20,0.94))',
          border: '1px solid var(--glass-border)', padding: '2.6rem 2.4rem',
          boxShadow: '0 0 60px rgba(139,92,246,0.18), 0 24px 60px rgba(0,0,0,0.6)',
          animation: 'cc-rise 0.4s cubic-bezier(0.25,0.46,0.45,0.94) both', ...style,
        }}
      >
        {/* filigree frame */}
        <span style={{ position: 'absolute', inset: '0.6rem', border: '1px solid rgba(212,169,75,0.16)', pointerEvents: 'none' }} />
        {['tl','tr','bl','br'].map((c) => (
          <span key={c} style={{
            position: 'absolute', width: 28, height: 28, borderColor: 'rgba(212,169,75,0.4)', borderStyle: 'solid', pointerEvents: 'none',
            top: c[0] === 't' ? '0.3rem' : 'auto', bottom: c[0] === 'b' ? '0.3rem' : 'auto',
            left: c[1] === 'l' ? '0.3rem' : 'auto', right: c[1] === 'r' ? '0.3rem' : 'auto',
            borderWidth: `${c[0]==='t'?'1px':'0'} ${c[1]==='r'?'1px':'0'} ${c[0]==='b'?'1px':'0'} ${c[1]==='l'?'1px':'0'}`,
          }} />
        ))}

        <button onClick={onClose} aria-label="Close" style={{
          position: 'absolute', top: '1rem', right: '1rem', width: 28, height: 28, border: 'none', background: 'transparent',
          color: 'var(--text-muted)', fontSize: '1rem', cursor: 'pointer', lineHeight: 1, fontFamily: "'Share Tech Mono', monospace",
        }} onMouseEnter={(e)=>e.currentTarget.style.color='var(--gold)'} onMouseLeave={(e)=>e.currentTarget.style.color='var(--text-muted)'}>✕</button>

        {eyebrow && (
          <span style={{
            fontFamily: "'Share Tech Mono', monospace", fontSize: '0.58rem', letterSpacing: '0.35em',
            textTransform: 'uppercase', color: 'var(--nebula)', display: 'block', marginBottom: '0.9rem', textAlign: 'center',
          }}>{eyebrow}</span>
        )}
        {title && (
          <h2 style={{
            fontFamily: "'Cinzel Decorative', serif", fontSize: '1.2rem', fontWeight: 700, letterSpacing: '0.06em',
            color: 'var(--gold-bright)', textAlign: 'center', margin: '0 0 1.2rem',
          }}>{title}</h2>
        )}
        <div style={{
          fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '1.1rem', lineHeight: 1.7,
          color: 'rgba(245,240,255,0.82)', textAlign: 'center',
        }}>{children}</div>
        {footer && (
          <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center', marginTop: '2rem' }}>{footer}</div>
        )}
      </div>
    </div>
  );
}
