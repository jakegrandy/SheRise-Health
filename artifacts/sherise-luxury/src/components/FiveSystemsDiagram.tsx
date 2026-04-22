function SystemsPentagon() {
  const cx = 320, cy = 288, R = 188, nodeR = 66;

  const systems = [
    { label: ["Hormonal", "Regulation"], angle: -90 },
    { label: ["Metabolic", "Function"], angle: -18 },
    { label: ["Reproductive", "Health"], angle: 54 },
    { label: ["Nervous System", "Regulation"], angle: 126 },
    { label: ["Lifestyle", "Inputs"], angle: 198 },
  ];

  const toRad = (deg: number) => (deg * Math.PI) / 180;

  const nodes = systems.map(({ label, angle }) => ({
    label,
    x: cx + R * Math.cos(toRad(angle)),
    y: cy + R * Math.sin(toRad(angle)),
  }));

  const edges: [number, number][] = [[0,1],[1,2],[2,3],[3,4],[4,0]];

  function edgePoints(a: number, b: number) {
    const ax = nodes[a].x, ay = nodes[a].y;
    const bx = nodes[b].x, by = nodes[b].y;
    const len = Math.sqrt((bx-ax)**2 + (by-ay)**2);
    const ux = (bx-ax)/len, uy = (by-ay)/len;
    const pad = nodeR + 4;
    return {
      x1: ax + ux*pad, y1: ay + uy*pad,
      x2: bx - ux*pad, y2: by - uy*pad,
    };
  }

  return (
    <svg viewBox="0 0 640 576" className="w-full max-w-2xl mx-auto" aria-label="Five interconnected physiologic systems diagram">
      <defs>
        <marker id="tip-fwd-fsd" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <polygon points="0,0 7,3.5 0,7" fill="#B5736A" opacity="0.75" />
        </marker>
        <marker id="tip-bwd-fsd" markerWidth="7" markerHeight="7" refX="1" refY="3.5" orient="auto-start-reverse">
          <polygon points="0,0 7,3.5 0,7" fill="#B5736A" opacity="0.75" />
        </marker>
      </defs>

      {nodes.map((n, i) => {
        const len = Math.sqrt((n.x-cx)**2 + (n.y-cy)**2);
        const ux = (n.x-cx)/len, uy = (n.y-cy)/len;
        return (
          <line key={`spoke-${i}`}
            x1={cx + ux*42} y1={cy + uy*42}
            x2={n.x - ux*(nodeR+2)} y2={n.y - uy*(nodeR+2)}
            stroke="#B5736A" strokeWidth="1.4" strokeOpacity="0.7" strokeDasharray="5 5"
          />
        );
      })}

      {edges.map(([a, b], i) => {
        const { x1, y1, x2, y2 } = edgePoints(a, b);
        return (
          <line key={`edge-${i}`}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#B5736A" strokeWidth="1.5" strokeOpacity="0.55"
            markerEnd="url(#tip-fwd-fsd)"
            markerStart="url(#tip-bwd-fsd)"
          />
        );
      })}

      <circle cx={cx} cy={cy} r="40" fill="#0f2922" stroke="#B5736A" strokeWidth="1.2" strokeOpacity="0.5" />
      <text x={cx} y={cy - 7} textAnchor="middle" fill="#E8C9C2"
        fontSize="9.5" fontFamily="Outfit, sans-serif" fontWeight="600" letterSpacing="1.5">WHOLE</text>
      <text x={cx} y={cy + 8} textAnchor="middle" fill="#E8C9C2"
        fontSize="9.5" fontFamily="Outfit, sans-serif" fontWeight="600" letterSpacing="1.5">HEALTH</text>

      {nodes.map((n, i) => (
        <g key={`node-${i}`}>
          <circle cx={n.x} cy={n.y} r={nodeR} fill="#132A24" stroke="#B5736A" strokeWidth="1.5" strokeOpacity="0.7" />
          {n.label.map((line, li) => (
            <text key={li}
              x={n.x} y={n.y + (li - (n.label.length - 1) / 2) * 18}
              textAnchor="middle" dominantBaseline="middle"
              fill="#F4F1EB" fontSize="14" fontFamily="Outfit, sans-serif" fontWeight="600" letterSpacing="0.3">
              {line}
            </text>
          ))}
        </g>
      ))}
    </svg>
  );
}

export function FiveSystemsDiagram() {
  return (
    <div className="bg-[#EDF2EE] border border-[#132A24]/10 rounded-2xl px-6 pt-8 pb-6 md:px-10">
      <p className="text-center text-[#B5736A] text-xs font-semibold tracking-widest uppercase mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>
        Five Interconnected Physiologic Systems
      </p>
      <SystemsPentagon />
      <p className="text-center text-[#132A24]/60 text-sm font-light mt-0 pb-2 max-w-xl mx-auto" style={{ fontFamily: "Outfit, sans-serif" }}>
        These systems operate in constant, dynamic relationship. The She Rises Framework optimizes every system in your whole health.
      </p>
    </div>
  );
}

export default FiveSystemsDiagram;
