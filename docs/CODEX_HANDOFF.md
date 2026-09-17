# Codex handoff

## Mission

Turn this repository from a product/architecture scaffold into a working Photoshop UXP plugin.

The priority is **a complete, boring, reliable first vertical slice**, not sophisticated image science.

## Read first

- `AGENTS.md`
- `docs/PRODUCT.md`
- `docs/ARCHITECTURE.md`
- `docs/GRAIN_ENGINE.md`
- `docs/UX_SPEC.md`
- `ROADMAP.md`

## First implementation task

### Goal
Make the UXP panel load and accurately report the active document state.

### Required work
1. Validate / adjust `manifest.json` against current Photoshop UXP documentation.
2. Make the panel load in UXP Developer Tool.
3. Render the controls defined in `index.html`.
4. Implement document preflight in `src/photoshop/document.js`.
5. Show no document, width × height, mode and bit depth where safely accessible.
6. Disable Apply when unsupported.
7. Do not modify the document yet.

### Definition of done
No runtime errors, clear no-document state, clear status for normal RGB photo, no invented undocumented APIs, and README contains exact local run instructions discovered during implementation.

## Second task
Implement a single non-destructive `1997 / Convenience Store` look using native Photoshop operations. Do not let grain block the first complete Apply flow.

## Third task
Make presets data-driven and wire controls.

## Fourth task
Implement grain v1 using `docs/GRAIN_ENGINE.md`.

## Research rule
If an Adobe API is uncertain, check current official docs, prefer documented DOM methods, isolate `batchPlay` when necessary and document descriptors.

## Technical decision gates
Use Imaging API only when native implementation cannot reach the effect cleanly. Add WASM only after a benchmark proves JS inadequate. Add a UI framework only when vanilla becomes meaningfully hard to maintain.
