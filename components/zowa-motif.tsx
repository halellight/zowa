export function ZowaMotif({
  size = 32,
  color = "#4D2395",
  className = "",
}: {
  size?: number
  color?: string
  className?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* Top Parallelogram Shape */}
      <path
        d="M 40 0 L 100 0 L 80.6 48.5 L 65 48.5 Q 50 48.5, 50 28.5 Q 50 48.5, 35 48.5 L 20.6 48.5 Z"
        fill={color}
      />
      {/* Bottom Parallelogram Shape */}
      <path
        d="M 19.4 51.5 L 35 51.5 Q 50 51.5, 50 71.5 Q 50 51.5, 65 51.5 L 79.4 51.5 L 60 100 L 0 100 Z"
        fill={color}
      />
    </svg>
  )
}
