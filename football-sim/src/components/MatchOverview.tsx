"use client";

import { useMemo } from "react";
import { useMatchStore } from "@/lib/store/matchStore";

export const MatchOverview = () => {
  const { state } = useMatchStore();
  const { score, home, away, clock, phase } = state;

  const timeLabel = useMemo(() => {
    const minute = Math.floor(clock.elapsedSeconds / 60);
    const second = Math.floor(clock.elapsedSeconds % 60)
      .toString()
      .padStart(2, "0");
    return `${minute}:${second}`;
  }, [clock.elapsedSeconds]);

  return (
    <section className="section-card">
      <header className="panel-heading">
        <h2 className="panel-title">Match Status</h2>
        <span className="chip">{phase.replace("_", " ")}</span>
      </header>
      <div className="surface-grid" style={{ marginTop: "1.5rem" }}>
        <div className="surface-grid surface-grid--two" style={{ alignItems: "center" }}>
          <TeamBadge
            name={home.profile.shortName}
            colors={home.profile.colors}
            score={score.home}
          />
          <TimeChip label={timeLabel} added={clock.addedTimeSecondsFirstHalf} />
          <TeamBadge
            name={away.profile.shortName}
            colors={away.profile.colors}
            score={score.away}
            align="right"
          />
        </div>
      </div>
      <div className="surface-grid surface-grid--two" style={{ marginTop: "1.25rem" }}>
        <Stat label="Possession" value="51%" />
        <Stat label="Shots" value="4 - 3" />
        <Stat label="Pass Accuracy" value="87%" />
      </div>
    </section>
  );
};

const TeamBadge = ({
  name,
  colors,
  score,
  align = "left",
}: {
  name: string;
  colors: { primary: string; secondary: string };
  score: number;
  align?: "left" | "right";
}) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      flexDirection: align === "right" ? "row-reverse" : "row",
      textAlign: align === "right" ? "right" : "left",
    }}
  >
    <span
      style={{
        display: "grid",
        placeItems: "center",
        width: "3rem",
        height: "3rem",
        borderRadius: "999px",
        background: colors.primary,
        fontSize: "1.2rem",
        fontWeight: 700,
      }}
    >
      {name}
    </span>
    <div>
      <p style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "var(--text-subtle)" }}>
        {name}
      </p>
      <p style={{ fontSize: "2.2rem", fontWeight: 600 }}>{score}</p>
    </div>
  </div>
);

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="panel-title" style={{ letterSpacing: "0.18em" }}>
      {label}
    </p>
    <p style={{ marginTop: "0.35rem", fontSize: "1rem" }}>{value}</p>
  </div>
);

const TimeChip = ({ label, added }: { label: string; added: number }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.25rem",
    }}
  >
    <span style={{ fontSize: "2.4rem", fontWeight: 700 }}>{label}</span>
    <span className="chip">Added +{Math.floor(added / 60)}'</span>
  </div>
);
