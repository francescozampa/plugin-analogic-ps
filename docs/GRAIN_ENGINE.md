# Grain engine specification

## Core decision

Use **real film-grain scans as source material**, then transform and composite them algorithmically.

## What we are not doing

Not: `one grain.jpg → scale to canvas → Overlay 30% → done`.

That approach repeats, applies equal strength everywhere, mixes scanner noise with film grain and gives every image the same pattern.

## Grain library

Do not organize source scans only by ISO. ISO is not enough to describe grain character.

Suggested families: Fine, Classic, Consumer, High Speed and Pushed. For MVP, 4 families are enough. Each family should contain multiple independent scans.

## Source acquisition

Use real developed film and consistent high-quality scans. Avoid scanner sharpening and JPEG. Keep raw master scans outside runtime assets and record stock/family, exposure, development, scanner settings and resolution.

## Asset preprocessing

1. Remove large-scale density gradient.
2. Neutralize color if intended as monochrome grain structure.
3. Remove dust/scratches unless deliberate.
4. Separate low-frequency unevenness from grain.
5. Normalize mean and variance.
6. Crop usable source regions.
7. Inspect scanner patterning.
8. Export losslessly.

## Film grain vs scanner noise

These are separate systems. Film grain is larger, luminance-dependent photographic texture; scan character is finer noise/channel/microcontrast behavior.

## Runtime model

```text
select source
→ seeded random crop / transform
→ scale grain
→ derive image luminance mask
→ shape grain amplitude by luminance
→ modulate grain statistics
→ composite
```

## Seed behavior

The same image, preset, settings and seed should ideally reproduce the same placement. Regenerate changes only the seed.

## Luminance response

Define `grainAmplitude = f(luminance, preset, amount)`. Different looks can emphasize different tonal regions.

## Apparent size

Grain Size should modify apparent photographic scale, not merely blur a fixed texture.

## Quality tests

Inspect fit, 50%, 100% and 200%, especially skies, skin, deep shadows, white walls and gradients. Watch for repetition, fixed-pattern texture, digital RGB speckles and identical strength across tones.

## Performance experiments

Benchmark 12 MP, 24 MP and 45 MP. Record read, processing, write and total Apply time before deciding whether WASM is worthwhile.
