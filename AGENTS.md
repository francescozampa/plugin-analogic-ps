# AGENTS.md — Codex development brief

This repository describes **Analogic**, a Photoshop UXP plugin that gives digital photos a convincing analog character.

Before changing architecture, read:

1. `docs/PRODUCT.md`
2. `docs/ARCHITECTURE.md`
3. `docs/GRAIN_ENGINE.md`
4. `docs/UX_SPEC.md`
5. `ROADMAP.md`

## Product goal

Create a fast analog-photo tool that feels photographic rather than like a generic retro filter.

The product combines Photoshop-native non-destructive adjustments, scanned real-film grain sources, procedural variation and optional pixel-level processing.

## Hard constraints

- Use Photoshop **UXP**, not CEP / ExtendScript.
- Use Manifest v5.
- Prefer Photoshop DOM APIs.
- Use `batchPlay` only for functionality unavailable or impractical in the DOM.
- Do not flatten the user's document as part of normal operation.
- Every Apply operation should create one clearly named top-level group.
- Do not depend on fragile layer-name parsing as application state.
- Grain must not be a single static texture simply dropped in Overlay mode.
- Treat real grain scans as source material, not as a finished effect.
- Keep film grain and scanner noise conceptually separate.
- Do not use named commercial film stocks as the core preset taxonomy.
- Avoid unnecessary network permissions.
- Do not introduce React, Vue, a bundler, TypeScript, or WASM until there is a concrete benefit.
- Verify Photoshop API behavior against current Adobe documentation before relying on undocumented assumptions.

## Architecture rule

UI code must not contain Photoshop action descriptors.

Use these boundaries:

- `src/` — UI and state
- `src/engine/` — effect planning and algorithms
- `src/photoshop/` — Photoshop host integration
- `assets/grain/` — source scans and derived grain assets
- `docs/` — decisions and product specification

## Development sequence

### Phase 0 — shell
Get the panel to load in Photoshop with no warnings.

### Phase 1 — native look stack
Implement one preset using Photoshop-native layers / adjustments. It must create `Analogic — <Look Name>` and leave originals untouched.

### Phase 2 — controls
Wire Look, Intensity, Grain amount, Grain size, Halation and Bloom. Preset values live in `src/presets.js`.

### Phase 3 — grain prototype
Implement grain from multiple source scans with randomized source/crop/transform, luminance-dependent response, apparent size control and seed regeneration.

### Phase 4 — image engine
Only after the native proof works, benchmark whether Imaging API / WASM materially improves grain realism, halation quality or performance.

## Photoshop integration guidelines

- Wrap document mutations in Photoshop modal execution when required.
- Keep `batchPlay` descriptors in `src/photoshop/`.
- Document every non-obvious descriptor and why DOM APIs were insufficient.
- Dispose of Imaging API buffers and image data as soon as practical.
- Guard for bit depth, color mode, absent documents, locked layers and very large documents.
- Preserve the user's active document and selection where practical.
- Prefer one coherent history operation for Apply.

## First Codex task

Follow `docs/CODEX_HANDOFF.md` exactly. Start with the panel shell and document preflight. Do **not** begin with grain.
