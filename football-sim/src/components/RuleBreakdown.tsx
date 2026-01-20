const RULE_SECTIONS = [
  {
    title: "Match Structure",
    rules: [
      "90 regulation minutes split across two 45-minute halves with stoppage time derived from match events.",
      "Optional extra-time of two 15-minute halves triggered for knock-out fixtures that finish level.",
      "Penalty shootouts implement IFAB sudden-death transitions after five kicks per side.",
      "Dynamic injury-time calculation handles substitutions, VAR delays, and stoppages.",
    ],
  },
  {
    title: "Field & Players",
    rules: [
      "Full 11v11 formations with captaincy and goalkeeper differentiation for handling privilege.",
      "Substitutions respect five-change limit plus concussion allowance in competitive modes.",
      "Formations map to precise field coordinates for AI positioning anchors.",
      "Goalkeeper-specific physics apply to gloves collision layer and penalty enforcement.",
    ],
  },
  {
    title: "Ball Restarts",
    rules: [
      "Kick-off locks all players in their half until the first touch exits the center spot.",
      "Goal kicks require the ball to leave the penalty area before opponent contact.",
      "Corner, throw-in, and dropped ball restarts replicate real placement constraints and ref advantage reset.",
      "Indirect free kicks demand a secondary touch before goal validation.",
    ],
  },
  {
    title: "Fouls & Misconduct",
    rules: [
      "Advantage windows last five seconds with retroactive booking and restart enforcement when pulled back.",
      "Yellow and red card escalation mirrors IFAB: second yellow upgrades to direct dismissal.",
      "Handball logic toggles via proximity weighting for defenders inside the penalty area.",
      "Slide tackles evaluate impact force and victim orientation to determine sanction gravity.",
    ],
  },
  {
    title: "Offside System",
    rules: [
      "Real-time last-defender tracking projects an adaptive offside line with tolerance buffer.",
      "Passive offside holds a pending state until the attacker interferes with play or gains advantage.",
      "VAR module captures freeze-frames at ball contact to review marginal infractions.",
      "Goal nullification syncs with replay to render calibrated grid overlays.",
    ],
  },
  {
    title: "Penalty Area Rules",
    rules: [
      "Handball and foul detection inside the box trigger direct penalties with goalkeeper line checks.",
      "Penalty retake conditions include keeper encroachment and attacker infringement before the kick.",
      "Goalkeeper jump timing enforces single foot-on-line at contact as per 2024 amendments.",
      "Saved penalties flow into rebound logic only after legal encroachment validation.",
    ],
  },
  {
    title: "Referee System",
    rules: [
      "Referee positioning trails the ball by 8-12 meters using diagonal system of control.",
      "Decision latency mimics human delay with crowd feedback spikes for dramatic events.",
      "Fourth official calculates stoppage with substitution, injury, and VAR inputs.",
      "Whistle cues feed audio layers for in-stadium and broadcast presentation.",
    ],
  },
  {
    title: "Player Physics",
    rules: [
      "Fatigue drains pace and recovery while increasing injury likelihood under high-intensity actions.",
      "Sprint and jog states adjust animation blend weights and stamina consumption rates.",
      "Collision model accounts for slide tackle vector, momentum, and player balance attribute.",
      "Injury severities scale with impact and fatigue, triggering substitution prompts when severe.",
    ],
  },
];

export const RuleBreakdown = () => {
  return (
    <section className="section-card section-card--soft">
      <header style={{ marginBottom: "1.5rem" }}>
        <h2 className="panel-title" style={{ fontSize: "1.1rem" }}>
          Regulation Synopsis
        </h2>
        <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", color: "var(--text-subtle)" }}>
          Every subsystem aligns with IFAB directives and surfaces transparent explanations for competitive players.
        </p>
      </header>
      <div className="surface-grid surface-grid--two">
        {RULE_SECTIONS.map((section) => (
          <article
            key={section.title}
            className="section-card"
            style={{
              background: "rgba(255, 255, 255, 0.04)",
              borderColor: "rgba(255, 255, 255, 0.08)",
            }}
          >
            <h3 className="panel-title" style={{ letterSpacing: "0.28em" }}>
              {section.title}
            </h3>
            <ul className="tag-list" style={{ marginTop: "0.75rem" }}>
              {section.rules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};
