# Grain assets

Do not commit random internet grain textures here.

This directory is for runtime-ready assets derived from grain scans we have the right to distribute.

## Proposed structure

```text
assets/grain/
├── fine/
├── classic/
├── consumer/
└── pushed/
```

Each family should eventually contain multiple independent source samples.

Keep master scans in a separate archive/source workflow and retain metadata for source/film, exposure, processing, scanner, scan resolution, bit depth and preprocessing.

Runtime assets should be lossless, free of baked vignette/obvious scanner gradient, normalized enough for predictable behavior and large enough for random crops.

See `docs/GRAIN_ENGINE.md`.
