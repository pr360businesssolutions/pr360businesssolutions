// Reusable logo lockup — a faithful SVG rendition of the PR 360° brand mark:
// dual circular "360" arrows (gradient orange over the top, navy under the bottom,
// each ending in an arrowhead) beside the "PR 360°" wordmark and "BUSINESS SOLUTIONS".
// `variant` controls the wordmark color: "dark" (navy on light) or "light" (white on navy).
export default function Logo({ variant = 'dark', markSize = 42 }) {
  const navy = variant === 'light' ? '#FFFFFF' : '#172D4A'
  const orange = '#EA5B1A'
  const sub = variant === 'light' ? 'rgba(255,255,255,.78)' : '#5b6774'
  const uid = variant // unique-ish suffix so gradient/marker ids don't collide between header & footer

  return (
    <span className="logo" aria-label="PR 360° Business Solutions">
      <LogoMark size={markSize} uid={uid} onDark={variant === 'light'} />
      <span className="logo-text">
        <span className="logo-name">
          <span style={{ color: navy }}>PR&nbsp;</span>
          <span style={{ color: orange }}>360°</span>
        </span>
        <span className="logo-sub" style={{ color: sub }}>
          BUSINESS SOLUTIONS
        </span>
      </span>
    </span>
  )
}

export function LogoMark({ size = 42, uid = 'm', onDark = false }) {
  // On dark backgrounds (e.g. the navy footer) the navy parts become white so the
  // mark stays visible; the orange keeps its brand color in both cases.
  const navyInk = onDark ? '#FFFFFF' : '#172D4A'
  return (
    <svg
      className="logo-mark"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`og-${uid}`} x1="10" y1="12" x2="90" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#F79433" />
          <stop offset="1" stopColor="#E8501B" />
        </linearGradient>
        <marker
          id={`oh-${uid}`} markerWidth="3.2" markerHeight="3.2" refX="1.4" refY="1.6"
          orient="auto" markerUnits="strokeWidth"
        >
          <path d="M0,0 L3,1.6 L0,3.2 Z" fill="#E8501B" />
        </marker>
        <marker
          id={`nh-${uid}`} markerWidth="3.2" markerHeight="3.2" refX="1.4" refY="1.6"
          orient="auto" markerUnits="strokeWidth"
        >
          <path d="M0,0 L3,1.6 L0,3.2 Z" fill={navyInk} />
        </marker>
      </defs>

      {/* Orange arrow — sweeps over the top, arrowhead on the right pointing down */}
      <path
        d="M17.2,41.2 A34,34 0 0 1 82.8,41.2"
        stroke={`url(#og-${uid})`}
        strokeWidth="9"
        strokeLinecap="round"
        markerEnd={`url(#oh-${uid})`}
      />
      {/* Navy arrow — sweeps under the bottom, arrowhead on the left pointing up */}
      <path
        d="M82.8,58.8 A34,34 0 0 1 17.2,58.8"
        stroke={navyInk}
        strokeWidth="9"
        strokeLinecap="round"
        markerEnd={`url(#nh-${uid})`}
      />

      {/* PR360° inside the ring */}
      <text
        x="50" y="55.8" textAnchor="middle"
        fontFamily="Inter, Arial, sans-serif" fontWeight="800" fontSize="17"
        letterSpacing="-0.4"
      >
        <tspan fill={navyInk}>P</tspan><tspan fill="#EA5B1A">R</tspan><tspan fill={navyInk}>360</tspan>
      </text>
    </svg>
  )
}
