# Technical architecture

## High-level shape

```text
UI
│
├── state + preset selection
│
└── pipeline planner
    │
    ├── native Photoshop operations
    │   └── src/photoshop/
    │
    └── pixel operations, only when needed
        └── Imaging API / future WASM
```

Keep the *idea of the look* separate from *how Photoshop performs it*.

## Layers

### UI
Render controls, capture input, show status/errors and call application actions. It must not contain `batchPlay` descriptors or preset constants.

### State + presets
A preset is a plain data object describing intent.

### Engine / pipeline
`src/engine/` decides which stages run, parameter normalization, processing order and whether native or pixel methods are appropriate.

### Photoshop adapter
`src/photoshop/` owns active document access, preflight, grouping, adjustment layers, modal execution, `batchPlay`, Imaging API reads/writes and history behavior.

## Hybrid processing model

Use native layers when they are editable, fast and visually good enough. Use Imaging API when native operations become too awkward or compromised. Add WASM only after profiling.

## Apply transaction

1. Preflight document.
2. Resolve preset and UI overrides.
3. Prepare parameters.
4. Enter modal execution if required.
5. Create top-level group.
6. Create native effect layers.
7. Create raster/helper layers only when required.
8. Name/tag generated content.
9. Commit.
10. On failure, attempt cleanup and surface a useful error.

## Document compatibility

MVP target: RGB documents, 8-bit first, 16-bit after explicit testing. Other modes should fail clearly rather than produce broken results.

## Performance strategy

No full-resolution recomputation on every slider move in MVP. Avoid unnecessary duplicate pixel reads and release temporary image data quickly.
