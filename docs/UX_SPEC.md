# UX specification

The panel should feel like a small photographic instrument, not a dashboard: compact, tactile, legible and slightly nostalgic without fake camera skeuomorphism.

## MVP panel

```text
┌────────────────────────────┐
│ ANALOGIC                   │
│ LOOK                       │
│ [ 1997 / Convenience  ▾ ]  │
│ CHARACTER                  │
│ Intensity      ━━━━━●━━    │
│ FILM                       │
│ Grain          ━━━━━●━━    │
│ Grain Size     ━━━●━━━━    │
│ LIGHT                      │
│ Halation       ━━●━━━━━    │
│ Bloom          ━━━●━━━━    │
│ [ Regenerate Grain ]       │
│ [ APPLY ]                  │
│ Ready                      │
└────────────────────────────┘
```

## Interaction model

Look selects the base recipe. Intensity is global strength. Grain controls amplitude, Grain Size apparent scale, Halation highlight-adjacent warm/red spread, Bloom broader diffusion. Regenerate changes seed. Apply creates the effect stack.

MVP does not need a constantly updating full-resolution live preview.

## Layer output

One top-level group:

```text
Analogic — 1997 / Convenience Store
├── Scan Character
├── Grain
├── Halation
├── Color
└── Tone
```

The exact implementation can evolve but the hierarchy should remain understandable.
