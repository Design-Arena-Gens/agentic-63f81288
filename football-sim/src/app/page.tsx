import { MatchOverview } from "@/components/MatchOverview";
import { RuleBreakdown } from "@/components/RuleBreakdown";
import { ModeSelector } from "@/components/ModeSelector";
import { ControlsOverlay } from "@/components/ControlsOverlay";
import { MatchTimeline } from "@/components/Timeline";
import { GddPanel } from "@/components/GddPanel";

export default function Home() {
  return (
    <main className="app-shell">
      <header className="section-card" style={{ padding: "2rem 2rem 1.5rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <span className="chip" style={{ background: "rgba(10, 132, 255, 0.2)", color: "var(--text-strong)" }}>
            Total Football Intelligence
          </span>
          <h1 style={{ fontSize: "2.8rem", fontWeight: 700, lineHeight: 1.1 }}>
            Elite Football Simulation Engine
          </h1>
          <p style={{ maxWidth: "640px", color: "var(--text-subtle)", fontSize: "1rem" }}>
            Mobile-optimised URP architecture delivering authentic 11v11 football with full IFAB regulation enforcement, tactical AI depth, and gesture-first controls ready for competitive play.
          </p>
        </div>
      </header>
      <section className="surface-grid surface-grid--two">
        <MatchOverview />
        <ModeSelector />
        <ControlsOverlay />
        <MatchTimeline />
      </section>
      <RuleBreakdown />
      <GddPanel />
    </main>
  );
}
