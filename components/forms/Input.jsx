import React from 'react';

/**
 * Input — a glass text field. Hairline gold border, dark glass fill, a mono
 * uppercase label, and a nebula-blue focus glow (no harsh outline). Inscribing
 * into the Index.
 */
export function Input({ label, hint, invalid = false, id, style = {}, ...rest }) {
  const fid = id || (label ? 'in-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', ...style }}>
      {label && (
        <label htmlFor={fid} style={{
          fontFamily: "'Share Tech Mono', monospace", fontSize: '0.58rem', letterSpacing: '0.28em',
          textTransform: 'uppercase', color: 'var(--text-muted)',
        }}>{label}</label>
      )}
      <input
        id={fid}
        style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: '1.05rem', color: 'var(--text-bright)',
          background: 'rgba(10,8,20,0.6)', border: `1px solid ${invalid ? 'var(--pulse-fire)' : 'var(--glass-border)'}`,
          borderRadius: '2px', padding: '0.7rem 0.9rem', outline: 'none', width: '100%',
          transition: 'border-color 0.25s, box-shadow 0.25s',
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = invalid ? 'var(--pulse-fire)' : 'var(--nebula)';
          e.currentTarget.style.boxShadow = invalid
            ? '0 0 0 3px rgba(232,99,10,0.14)'
            : '0 0 0 3px rgba(168,220,238,0.12), 0 0 18px rgba(168,220,238,0.12)';
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = invalid ? 'var(--pulse-fire)' : 'var(--glass-border)';
          e.currentTarget.style.boxShadow = 'none';
        }}
        {...rest}
      />
      {hint && (
        <span style={{
          fontFamily: "'Share Tech Mono', monospace", fontSize: '0.52rem', letterSpacing: '0.18em',
          color: invalid ? 'var(--pulse-fire)' : 'var(--text-dim)',
        }}>{hint}</span>
      )}
    </div>
  );
}
