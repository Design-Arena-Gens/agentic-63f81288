export const GAME_DESIGN_DOCUMENT = {
  identity: {
    title: "Total Football Intelligence",
    pillars: [
      "Authentic football laws enforced through transparent systems",
      "Competitive depth with tactical flexibility",
      "Mobile-first controls without sacrificing simulation realism",
    ],
    branding: {
      colors: {
        primary: "#0A84FF",
        secondary: "#FF2D55",
        neutral: "#1C1C1E",
      },
      typography: {
        display: "Rajdhani",
        body: "Inter",
      },
    },
  },
  camera: {
    systems: [
      {
        id: "broadcast",
        description: "Wide tactical view with height compensation for stadium tiers.",
        behaviors: [
          "Adaptive zoom during transitions",
          "Rail-camera sweeps on set pieces",
          "VAR zoom feed with touch-to-scrub timeline",
        ],
      },
      {
        id: "player-follow",
        description: "Third-person perspective tied to the controlled athlete.",
        behaviors: [
          "Dynamic head tilt based on sprint state",
          "Contextual shake during collisions",
          "Snap-to-ball assist for goalmouth scrambles",
        ],
      },
    ],
  },
  animation: {
    blending: {
      locomotion: "4-way blend-tree with sprint override",
      tackling: "Impact-driven branch with recovery states",
      goalkeepers: "Upper-body IK for shot saving",
    },
    procedural: [
      "Foot planting on slippery surfaces",
      "Dynamic jersey tug reactions",
      "Ball juggling for skill moves",
    ],
  },
  physics: {
    ball: {
      model: "6 DOF integration with Magnus effect",
      parameters: {
        drag: 0.12,
        lift: 0.06,
        restitution: 0.78,
      },
    },
    player: {
      fatigueCurve: "Exponential decay after minute 70",
      collisionLayers: ["Body", "Feet", "KeeperGloves"],
    },
  },
  stadium: {
    atmosphere: {
      crowdDensity: "Dynamic by fixture importance",
      chants: "Team-specific banks with reactive volume",
      lighting: "URP baked + dynamic shadows for night matches",
    },
    weather: {
      CLEAR: "Baseline ball speed and normal fatigue",
      OVERCAST: "Reduced glare + 1% slower ball",
      RAIN: "Splash shaders + 6% slower ball + slide tackle boost",
      SNOW: "Footprint decals, 10% slower ball, increased fatigue",
    },
  },
  monetization: {
    philosophy: "No pay-to-win, cosmetics and conveniences only",
    offerings: [
      "Kit packs (seasonal)",
      "Stadium theme bundles",
      "Career staff boost tokens",
    ],
    adStrategy: {
      placement: "Main menu carousel",
      frequency: "Every third navigation cycle",
      optOut: true,
    },
  },
};
