import React from 'react';

/**
 * Select — a glass dropdown. Styled native <select> with a gold caret, mono label,
 * and nebula focus glow. Options are passed as an array or as <option> children.
 */
export function Select({ label, hint, options, invalid = false, id, children, style = {}, ...rest }) {
  const fid = id || (label ? 'sel-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  const caret = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%23D4A94B' stroke-width='1.5'/%3E%3C/svg%3E";
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', ...style }}>
      {label && (
        <label htmlFor={fid} style={{
          fontFamily: "'Share Tech Mono', monospace", fontSize: '0.58rem', letterSpacing: '0.28em',
          textTransform: 'uppercase', color: 'var(--text-muted)',
        }}>{label}</label>
      )}
      <select
        id={fid}
        style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: '1.05rem', color: 'var(--text-bright)',
          background: `rgba(10,8,20,0.6) url("${caret}") no-repeat right 0.9rem center`,
          border: `1px solid ${invalid ? 'var(--pulse-fire)' : 'var(--glass-border)'}`, borderRadius: '2px',
          padding: '0.7rem 2.2rem 0.7rem 0.9rem', outline: 'none', width: '100%', appearance: 'none',
          WebkitAppearance: 'none', cursor: 'pointer', transition: 'border-color 0.25s, box-shadow 0.25s',
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = 'var(--nebula)';
          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(168,220,238,0.12), 0 0 18px rgba(168,220,238,0.12)';
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = invalid ? 'var(--pulse-fire)' : 'var(--glass-border)';
          e.currentTarget.style.boxShadow = 'none';
        }}
        {...rest}
      >
        {options
          ? options.map((o, i) => {
              const val = typeof o === 'string' ? o : o.value;
              const lab = typeof o === 'string' ? o : o.label;
              return <option key={i} value={val} style={{ background: '#0A0A14' }}>{lab}</option>;
            })
          : children}
      </select>
      {hint && (
        <span style={{
          fontFamily: "'Share Tech Mono', monospace", fontSize: '0.52rem', letterSpacing: '0.18em',
          color: invalid ? 'var(--pulse-fire)' : 'var(--text-dim)',
        }}>{hint}</span>
      )}
    </div>
  );
}
