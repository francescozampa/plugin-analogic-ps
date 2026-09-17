# Analogic — Photoshop UXP Plugin

Analogic is a Photoshop plugin concept for giving digital photographs a convincing analog character without turning the workflow into a pile of generic retro filters.

The direction is hybrid:

- Photoshop-native, non-destructive adjustments where Photoshop already does the job well;
- real scanned film grain used as source material;
- procedural variation so grain never looks like a repeating texture;
- pixel-level processing only where it materially improves realism;
- a small panel built around photographic character rather than technical complexity.

> **Status:** product specification + technical scaffold. The actual image engine is intentionally not presented as finished.

## Product idea

Analogic should feel closer to choosing a camera / film / lab combination than stacking effects.

Example look names:

- **1997 / Convenience Store** — warm consumer negative, minilab contrast, medium grain.
- **2004 / Indie Tour** — slightly underexposed 35mm, cool shadows, flash highlights.
- **Sunday Slide** — cleaner color, denser blacks, restrained grain.
- **Pushed After Dark** — larger clustered grain, stronger contrast, more halation.

## Technology direction

- Adobe Photoshop UXP
- Manifest v5
- JavaScript / HTML / CSS for the first implementation
- Photoshop DOM first
- `batchPlay` only when necessary
- Photoshop Imaging API for pixel access where needed
- WebAssembly only after profiling proves it useful

## Development principle

Build the smallest complete loop first:

**open photo → choose look → apply non-destructive analog stack → adjust grain → undo cleanly**

Read `AGENTS.md` and `docs/CODEX_HANDOFF.md` before implementation.
