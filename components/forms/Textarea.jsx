import React from 'react';

/**
 * Textarea — the multi-line companion to Input. Same glass field, mono label,
 * and nebula focus glow; vertical resize only.
 */
export function Textarea({ label, hint, invalid = false, rows = 4, id, style = {}, ...rest }) {
  const fid = id || (label ? 'ta-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', ...style }}>
      {label && (
        <label htmlFor={fid} style={{
          fontFamily: "'Share Tech Mono', monospace", fontSize: '0.58rem', letterSpacing: '0.28em',
          textTransform: 'uppercase', color: 'var(--text-muted)',
        }}>{label}</label>
      )}
      <textarea
        id={fid}
        rows={rows}
        style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--text-bright)',
          background: 'rgba(10,8,20,0.6)', border: `1px solid ${invalid ? 'var(--pulse-fire)' : 'var(--glass-border)'}`,
          borderRadius: '2px', padding: '0.7rem 0.9rem', outline: 'none', width: '100%', resize: 'vertical',
          transition: 'border-color 0.25s, box-shadow 0.25s',
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
