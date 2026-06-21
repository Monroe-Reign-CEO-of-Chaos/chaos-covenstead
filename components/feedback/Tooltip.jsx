import React from 'react';

/**
 * Tooltip — a small mono-caps glass chip shown on hover/focus of its child.
 * Wrap any element; the tip floats above (default) with a nebula hairline.
 */
export function Tooltip({ label, placement = 'top', children, style = {} }) {
  const [show, setShow] = React.useState(false);

  const pos = {
    top:    { bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: 8 },
    bottom: { top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: 8 },
    left:   { right: '100%', top: '50%', transform: 'translateY(-50%)', marginRight: 8 },
    right:  { left: '100%', top: '50%', transform: 'translateY(-50%)', marginLeft: 8 },
  };

  return (
    <span
      style={{ position: 'relative', display: 'inline-flex', ...style }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
    >
      {children}
      <span
        role="tooltip"
        style={{
          position: 'absolute', ...pos[placement], zIndex: 200, whiteSpace: 'nowrap', pointerEvents: 'none',
          fontFamily: "'Share Tech Mono', monospace", fontSize: '0.54rem', letterSpacing: '0.22em', textTransform: 'uppercase',
          color: 'var(--nebula-bright)', background: 'rgba(5,5,10,0.95)', border: '1px solid var(--glass-border-nebula)',
          borderRadius: '2px', padding: '0.4rem 0.7rem', boxShadow: '0 6px 20px rgba(0,0,0,0.5)',
          opacity: show ? 1 : 0, transition: 'opacity 0.2s', transitionDelay: show ? '0.05s' : '0s',
        }}
      >{label}</span>
    </span>
  );
}
