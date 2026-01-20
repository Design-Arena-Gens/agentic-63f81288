import { GAME_DESIGN_DOCUMENT } from "@/content/gdd";

export const GddPanel = () => {
  const { identity, camera, animation, physics, stadium, monetization } = GAME_DESIGN_DOCUMENT;

  return (
    <section className="section-card">
      <header style={{ marginBottom: "1.5rem" }}>
        <h2 className="panel-title" style={{ fontSize: "1.1rem" }}>
          Game Design Bible
        </h2>
        <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", color: "var(--text-subtle)" }}>
          Brand, presentation, and systems roadmap guiding the mobile-first football simulation.
        </p>
      </header>
      <div style={{ display: "grid", gap: "1.5rem", fontSize: "0.9rem", color: "var(--text-subtle)" }}>
        <section>
          <h3 className="panel-title">Identity & Branding</h3>
          <p style={{ marginTop: "0.5rem" }}>Title: {identity.title}</p>
          <ul className="tag-list" style={{ marginTop: "0.75rem" }}>
            {identity.pillars.map((pillar) => (
              <li key={pillar}>• {pillar}</li>
            ))}
          </ul>
        </section>
        <section>
          <h3 className="panel-title">Camera Suite</h3>
          <div className="surface-grid">
            {camera.systems.map((system) => (
              <article
                key={system.id}
                className="section-card"
                style={{ background: "rgba(255, 255, 255, 0.05)", borderColor: "rgba(255, 255, 255, 0.1)" }}
              >
                <p style={{ fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.18em" }}>
                  {system.description}
                </p>
                <ul className="tag-list" style={{ marginTop: "0.75rem" }}>
                  {system.behaviors.map((behavior) => (
                    <li key={behavior}>• {behavior}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
        <section>
          <h3 className="panel-title">Animation & Physics</h3>
          <div className="surface-grid surface-grid--two" style={{ marginTop: "0.75rem" }}>
            <article className="section-card" style={{ background: "rgba(255, 255, 255, 0.04)" }}>
              <p style={{ fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.18em" }}>
                Blending
              </p>
              <ul className="tag-list" style={{ marginTop: "0.75rem" }}>
                {Object.entries(animation.blending).map(([key, value]) => (
                  <li key={key}>
                    {key}: {value}
                  </li>
                ))}
              </ul>
            </article>
            <article className="section-card" style={{ background: "rgba(255, 255, 255, 0.04)" }}>
              <p style={{ fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.18em" }}>
                Procedural
              </p>
              <ul className="tag-list" style={{ marginTop: "0.75rem" }}>
                {animation.procedural.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          </div>
          <article className="section-card" style={{ marginTop: "1rem", background: "rgba(255, 255, 255, 0.04)" }}>
            <p style={{ fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.18em" }}>
              Ball Physics
            </p>
            <ul className="tag-list" style={{ marginTop: "0.75rem" }}>
              <li>Model: {physics.ball.model}</li>
              {Object.entries(physics.ball.parameters).map(([key, value]) => (
                <li key={key}>
                  {key}: {value}
                </li>
              ))}
            </ul>
          </article>
        </section>
        <section>
          <h3 className="panel-title">Stadium Atmosphere</h3>
          <article className="section-card" style={{ background: "rgba(255, 255, 255, 0.04)" }}>
            <p style={{ fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.18em" }}>
              Crowd & Lighting
            </p>
            <ul className="tag-list" style={{ marginTop: "0.75rem" }}>
              <li>Density: {stadium.atmosphere.crowdDensity}</li>
              <li>Chants: {stadium.atmosphere.chants}</li>
              <li>Lighting: {stadium.atmosphere.lighting}</li>
            </ul>
          </article>
          <article className="section-card" style={{ marginTop: "1rem", background: "rgba(255, 255, 255, 0.04)" }}>
            <p style={{ fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.18em" }}>
              Weather Impact
            </p>
            <ul className="tag-list" style={{ marginTop: "0.75rem" }}>
              {Object.entries(stadium.weather).map(([weather, effect]) => (
                <li key={weather}>
                  {weather}: {effect}
                </li>
              ))}
            </ul>
          </article>
        </section>
        <section>
          <h3 className="panel-title">Monetization Philosophy</h3>
          <p style={{ marginTop: "0.5rem" }}>{monetization.philosophy}</p>
          <ul className="tag-list" style={{ marginTop: "0.75rem" }}>
            {monetization.offerings.map((offering) => (
              <li key={offering}>• {offering}</li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
};
