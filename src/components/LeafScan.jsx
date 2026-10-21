import { useEffect, useState } from 'react'

// One-off animation in the hero: a leaf gets scanned, then the
// classifier's verdict appears. Mirrors the crop disease project.
export default function LeafScan() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const t = setTimeout(() => setDone(true), reduce ? 0 : 2200)
    return () => clearTimeout(t)
  }, [])

  return (
    <figure className={`scan ${done ? 'is-done' : ''}`}>
      <div className="scan__stage">
        <svg viewBox="0 0 200 240" role="img" aria-label="Tomato leaf with brown lesions">
          <path
            className="scan__leaf"
            d="M100 228 C 30 190, 22 90, 100 12 C 178 90, 170 190, 100 228 Z"
          />
          <path className="scan__vein" d="M100 228 L100 24" />
          {[60, 95, 130, 165].map((y, i) => (
            <g key={y} className="scan__vein">
              <path d={`M100 ${y + 14} Q ${70 - i * 2} ${y} ${54 + i * 3} ${y - 10}`} />
              <path d={`M100 ${y + 14} Q ${130 + i * 2} ${y} ${146 - i * 3} ${y - 10}`} />
            </g>
          ))}
          {[
            [72, 118, 9],
            [128, 82, 7],
            [118, 160, 11],
            [84, 178, 6],
          ].map(([cx, cy, r]) => (
            <g key={`${cx}-${cy}`} className="scan__spot">
              <circle cx={cx} cy={cy} r={r + 4} />
              <circle cx={cx} cy={cy} r={r} />
              <circle cx={cx} cy={cy} r={r / 2.4} />
            </g>
          ))}
          {[
            [72, 118, 9],
            [128, 82, 7],
            [118, 160, 11],
            [84, 178, 6],
          ].map(([cx, cy, r]) => (
            <rect
              key={`box-${cx}`}
              className="scan__box"
              x={cx - r - 7}
              y={cy - r - 7}
              width={(r + 7) * 2}
              height={(r + 7) * 2}
              rx="3"
            />
          ))}
        </svg>
        <div className="scan__line" aria-hidden="true" />
      </div>
      <figcaption className="scan__result" aria-live="polite">
        {done ? (
          <>
            <span className="scan__label">Tomato, early blight</span>
            <span className="scan__bar">
              <span style={{ width: '94%' }} />
            </span>
            <span className="scan__meta">94% confidence. Treat with a copper-based fungicide and remove affected leaves.</span>
          </>
        ) : (
          <span className="scan__meta">Scanning leaf…</span>
        )}
      </figcaption>
    </figure>
  )
}
