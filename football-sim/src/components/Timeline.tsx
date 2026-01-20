"use client";

import { useMatchStore } from "@/lib/store/matchStore";

export const MatchTimeline = () => {
  const { events } = useMatchStore();

  return (
    <section className="section-card">
      <header className="panel-heading">
        <h2 className="panel-title" style={{ fontSize: "1.1rem" }}>
          Match Timeline
        </h2>
        <span className="chip">{events.length} events</span>
      </header>
      <ul className="timeline-list">
        {events.slice(-12).reverse().map((event) => (
          <li key={event.id} className="timeline-item">
            <span style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <Badge type={event.type} />
              <span style={{ fontSize: "0.85rem", letterSpacing: "0.08em" }}>
                {event.description}
              </span>
            </span>
            <span style={{ fontSize: "0.7rem", color: "var(--text-faint)", textTransform: "uppercase" }}>
              {event.minute}'
            </span>
          </li>
        ))}
        {!events.length && (
          <li className="timeline-item" style={{ justifyContent: "center" }}>
            <span style={{ fontSize: "0.75rem", color: "var(--text-faint)" }}>
              Awaiting kickoff events.
            </span>
          </li>
        )}
      </ul>
    </section>
  );
};

const Badge = ({ type }: { type: string }) => {
  let className = "badge default";
  if (type === "GOAL") className = "badge goal";
  else if (type === "CARD") className = "badge card";
  else if (type === "FOUL") className = "badge foul";
  return <span className={className}>{type}</span>;
};
