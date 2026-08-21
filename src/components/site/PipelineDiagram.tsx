"use client";

import { motion } from "framer-motion";

const nodes = [
  { x: 70, label: "SOURCE DATA", sub: "warehouses, docs, APIs" },
  { x: 350, label: "RAG / AGENTS", sub: "retrieval, orchestration" },
  { x: 630, label: "GOVERNANCE", sub: "policy, audit, controls" },
  { x: 910, label: "PRODUCTION", sub: "monitored & operated" },
];

const segments = nodes.slice(0, -1).map((n, i) => ({
  x1: n.x,
  x2: nodes[i + 1].x,
}));

export function PipelineDiagram() {
  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox="0 0 980 180"
        className="w-full min-w-[720px] h-auto"
        role="img"
        aria-label="Diagram of the Solvix Labs AI pipeline: source data flows through RAG and agents, a governance layer, into monitored production."
      >
        <line x1="70" y1="70" x2="910" y2="70" stroke="var(--line-dark)" strokeWidth="1" />

        {segments.map((seg, i) => (
          <motion.circle
            key={i}
            r="3"
            fill="var(--verified)"
            initial={{ cx: seg.x1, opacity: 0 }}
            animate={{ cx: [seg.x1, seg.x2], opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              delay: i * 0.55,
              ease: "linear",
            }}
            cy={70}
          />
        ))}

        {nodes.map((n, i) => (
          <g key={n.label}>
            <motion.circle
              cx={n.x}
              cy={70}
              r={9}
              fill="var(--ink-raised)"
              stroke={i === 2 ? "var(--amber)" : "var(--signal)"}
              strokeWidth="2"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            />
            <text
              x={n.x}
              y={112}
              textAnchor="middle"
              className="mono-label"
              fontSize="11"
              fill="var(--paper)"
            >
              {n.label}
            </text>
            <text
              x={n.x}
              y={130}
              textAnchor="middle"
              fontSize="10.5"
              fill="var(--slate-dark)"
            >
              {n.sub}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
