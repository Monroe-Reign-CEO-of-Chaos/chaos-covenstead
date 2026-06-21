import React from 'react';

/**
 * PulseRule — the brand's signature divider. A thin gradient seam (gold → violet →
 * rose) with a soft glow. Echoes the EKG heartbeat line that "cracks through the world."
 * Use `variant="ekg"` for the literal heartbeat blip path.
 */
export function PulseRule({ variant = 'gradient', width = '100%', style = {}, ...rest }) {
  if (variant === 'ekg') {
    return (
      <svg
        viewBox="0 0 600 40"
        preserveAspectRatio="none"
        style={{ width, height: 40, overflow: 'visible', display: 'block', ...style }}
        {...rest}
      >
        <defs>
          <linearGradient id="cc-ekg" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="22%" stopColor="var(--violet)" />
            <stop offset="42%" stopColor="var(--gold)" />
            <stop offset="50%" stopColor="var(--rose)" />
            <stop offset="58%" stopColor="var(--gold)" />
            <stop offset="78%" stopColor="var(--violet)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <path
          d="M0,20 L210,20 L235,20 L250,7 L266,33 L282,12 L300,20 L600,20"
          fill="none"
          stroke="url(#cc-ekg)"
          strokeWidth="1.8"
          strokeLinecap="round"
          style={{ filter: 'drop-shadow(0 0 4px rgba(212,169,75,0.6)) drop-shadow(0 0 12px rgba(139,92,246,0.4))' }}
        />
      </svg>
    );
  }

  return (
    <div
      style={{
        width,
        height: '2px',
        background: 'linear-gradient(90deg, transparent, var(--gold) 25%, var(--violet) 50%, var(--rose) 75%, transparent)',
        opacity: 0.5,
        filter: 'drop-shadow(0 0 6px rgba(212,169,75,0.5))',
        ...style,
      }}
      {...rest}
    />
  );
}
