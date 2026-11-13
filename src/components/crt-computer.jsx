function starPoints(cx, cy, spikes, outer, inner) {
  const points = [];
  for (let i = 0; i < spikes * 2; i += 1) {
    const radius = i % 2 === 0 ? outer : inner;
    const angle = (Math.PI * i) / spikes - Math.PI / 2;
    points.push(
      `${(cx + Math.cos(angle) * radius).toFixed(1)},${(cy + Math.sin(angle) * radius).toFixed(1)}`,
    );
  }
  return points.join(" ");
}

const keys = [];
for (let row = 0; row < 4; row += 1) {
  for (let col = 0; col < 13; col += 1) {
    keys.push({ row, col });
  }
}

export function CrtComputer() {
  return (
    <svg
      className="crt"
      viewBox="0 0 500 430"
      role="img"
      aria-label="Ilustración de una computadora de escritorio. En la pantalla verde se lee negocio.html."
    >
      <defs>
        <pattern id="crt-scan" width="4" height="4" patternUnits="userSpaceOnUse">
          <rect width="4" height="1" fill="#06221f" opacity="0.28" />
        </pattern>
      </defs>
      <g aria-hidden="true">
        <polygon points={starPoints(250, 145, 14, 168, 78)} fill="#5b3aa8" />
        <polygon points={starPoints(78, 78, 4, 16, 6)} fill="#ffe566" />
        <polygon points={starPoints(430, 70, 4, 14, 5)} fill="#3ddecb" />
        <polygon points={starPoints(400, 210, 4, 10, 4)} fill="#ffe566" />

        <rect x="118" y="46" width="264" height="214" rx="10" fill="#e6d3b0" stroke="#1c1428" strokeWidth="4" />
        <rect x="138" y="64" width="224" height="158" fill="#cbb892" stroke="#1c1428" strokeWidth="3" />
        <rect x="148" y="74" width="204" height="138" fill="#128f86" />
        <rect x="148" y="74" width="204" height="138" fill="url(#crt-scan)" />

        <g transform="translate(206,104)">
          <path d="M6 16 H26 L32 22 H70 V62 H6 Z" fill="#f0c14a" stroke="#1c1428" strokeWidth="3" />
        </g>
        <text
          x="250"
          y="192"
          textAnchor="middle"
          fill="#f7efd6"
          fontFamily="VT323, monospace"
          fontSize="26"
        >
          negocio.html
        </text>
        <polygon
          points="300,146 300,176 309,167 320,182 328,177 317,162 330,162"
          fill="#fff8e6"
          stroke="#1c1428"
          strokeWidth="2"
        />

        <circle cx="158" cy="238" r="5" fill="#3ddecb" stroke="#1c1428" strokeWidth="2" />
        <rect x="286" y="232" width="70" height="8" fill="#1c1428" />

        <rect x="168" y="260" width="164" height="16" fill="#d7c29a" stroke="#1c1428" strokeWidth="3" />
        <rect x="128" y="274" width="244" height="34" rx="3" fill="#e6d3b0" stroke="#1c1428" strokeWidth="4" />
        <rect x="300" y="286" width="48" height="10" fill="#1c1428" />

        <rect x="70" y="324" width="360" height="84" rx="6" fill="#efe2c8" stroke="#1c1428" strokeWidth="4" />
        {keys.map(({ row, col }) => (
          <rect
            key={`${row}-${col}`}
            x={86 + col * 26}
            y={336 + row * 17}
            width="20"
            height="12"
            fill={row === 3 ? "#e4d3b4" : "#fff8e6"}
            stroke="#1c1428"
            strokeWidth="1.4"
          />
        ))}
      </g>
    </svg>
  );
}
