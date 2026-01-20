# Total Football Intelligence

Total Football Intelligence is a mobile-first football (soccer) simulation stack built with Next.js. It demonstrates an end-to-end rule engine covering full IFAB regulations, tactical AI, match event pipeline, gesture-based controls, and a professional game design document ready for production planning.

## Features

- ✅ Complete regulation suite: 90-minute structure, extra time, penalties, stoppage logic, substitutions, VAR, and offside modelling
- ✅ Modular C#-inspired architecture ported to TypeScript for quick iteration on web clients
- ✅ Advanced AI modules for team tactics, player behaviour, goalkeeper reactions, and referee adjudication
- ✅ Gesture interpreter for mobile touch controls (pass, shoot, cross, skill, tactical toggles)
- ✅ Game mode definitions covering Exhibition, Career, League, Tournament, Training, and Penalty Shootout scenarios
- ✅ Replay and save-state services for match analysis, plus GDD surfacing camera, animation, physics, and monetisation pillars
- ✅ Vitest harness with unit coverage focused on the critical rule engine paths

## Getting Started

Install dependencies and launch the development server:

```bash
npm install
npm run dev
```

The app runs at [http://localhost:3000](http://localhost:3000).

### Testing

```bash
npm run test
```

Vitest executes rule-engine unit tests that validate stoppage time, substitution allowances, penalty detection, and offside handling.

### Build

```bash
npm run build
npm run start
```

## Project Structure

- `src/lib/engine` – rule constants, match engine, utilities, and initial state factory
- `src/lib/ai` – tactical, player, goalkeeper, and referee intelligence modules
- `src/lib/controls` – gesture interpretation and tactical control application
- `src/lib/services` – save-game and replay subsystems
- `src/lib/modes` – structured definitions for each playable mode
- `src/components` – presentation of match dashboard, rule explanations, controls overlay, and GDD
- `src/content/gdd.ts` – full game design document for production teams

## Deployment

Build and deploy with Vercel CLI:

```bash
npm run build
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-63f81288
```

After deployment, verify public availability:

```bash
curl https://agentic-63f81288.vercel.app
```

## Licensing

Content is provided for demonstration purposes. Ensure proper licensing for fonts, assets, and branding before commercial release.
