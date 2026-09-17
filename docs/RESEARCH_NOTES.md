# Research notes

Keep experimental findings here as dated entries.

## Open questions

### Photoshop host
- Which target Photoshop version should define minimum compatibility?
- Which adjustment-layer operations are cleanly exposed through DOM vs `batchPlay`?
- What is the cleanest one-history-state Apply pattern in current UXP?
- How should generated state be tagged without relying only on names?

### Grain
- How large must source grain scans be to avoid repetition?
- Does luminance-aware grain need per-pixel processing in MVP, or can a native mask approximation pass?
- How should apparent grain size respond to document dimensions?

### Halation
Compare a native duplicate/threshold/channel/blur/blend stack with a custom pixel pipeline. Judge edge behavior, hue, highlight selectivity and speed.

### Performance
Benchmark 12 MP, 24 MP, 45 MP, 8-bit and 16-bit.

## Decision template

### YYYY-MM-DD — Decision title

**Question** — what are we deciding?

**Experiment** — what was tested?

**Result** — what happened?

**Decision** — what are we doing?

**Why** — why is this the simplest useful choice?

**Revisit when** — what evidence would justify reopening this?
