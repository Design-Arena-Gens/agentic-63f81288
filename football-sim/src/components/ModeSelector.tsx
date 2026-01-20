"use client";

import { MODES } from "@/lib/modes/modes";
import { useMatchStore } from "@/lib/store/matchStore";

export const ModeSelector = () => {
  const { selectedModeId, setMode } = useMatchStore();

  return (
    <section className="section-card">
      <header className="panel-heading" style={{ marginBottom: "1rem" }}>
        <h2 className="panel-title" style={{ fontSize: "1.1rem" }}>
          Game Modes
        </h2>
        <span className="chip">{MODES.length} options</span>
      </header>
      <div className="surface-grid surface-grid--two">
        {MODES.map((mode) => (
          <button
            key={mode.id}
            onClick={() => setMode(mode.id)}
            className={`button-mode ${selectedModeId === mode.id ? "is-active" : ""}`}
          >
            <div className="panel-heading" style={{ marginBottom: "0.5rem" }}>
              <p className="panel-title">{mode.name}</p>
              <span style={{ fontSize: "0.75rem", color: "var(--text-subtle)" }}>
                {mode.durationMinutes}'
              </span>
            </div>
            <p style={{ fontSize: "0.9rem", color: "var(--text-subtle)" }}>{mode.description}</p>
            <ul className="tag-list" style={{ marginTop: "0.75rem", gap: "0.35rem" }}>
              {mode.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            <div
              style={{
                marginTop: "0.9rem",
                display: "flex",
                gap: "1.5rem",
                fontSize: "0.75rem",
                textTransform: "uppercase",
                color: "var(--text-faint)",
              }}
            >
              <span>Extra Time: {mode.allowsExtraTime ? "Yes" : "No"}</span>
              <span>Penalties: {mode.allowsPenalties ? "Yes" : "No"}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};
