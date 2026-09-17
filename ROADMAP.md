# Roadmap

## M0 — Repository + UXP shell

Goal: a real Photoshop panel that loads.

Deliverables: valid UXP manifest, panel HTML/CSS, plugin status area, document preflight and basic error reporting.

Done when the panel loads through UXP Developer Tool, no-document state is clear, a supported RGB document reports basic properties and no document is modified.

## M1 — First native analog stack

Prove the interaction model before custom pixel algorithms. Build one look with native tonal/color operations and a generated top-level group.

## M2 — Presets + core controls

Add 3 presets plus Intensity, Grain Amount, Grain Size, Halation, Bloom and Regenerate seed.

## M3 — Real grain v1

Build a hybrid grain system from neutralized real-film grain scans. Require multiple grain families, seed variation, luminance response, adjustable scale and no obvious repetition.

## M4 — Halation + bloom study

Compare Photoshop-native stack versus Imaging API pixel processing and document the result.

## M5 — Scan character

Keep scanner texture separate from film grain. Explore fine noise, subtle channel variation, micro-contrast and slight color bias.

## M6 — Performance + safety

Test 12 MP, 24 MP, 45+ MP, 8-bit RGB, 16-bit RGB where supported and layered PSDs.

## M7 — Private beta

Prepare 8–12 finished looks, real grain asset library, packaging, installation notes, test matrix and known limitations.

## Later, only if justified

WASM core, live preview, custom preset saving, more lens artifacts, dust/light leaks/date stamp and additional optimization.
