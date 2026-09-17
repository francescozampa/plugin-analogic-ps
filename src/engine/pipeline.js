globalThis.AnalogicPipeline = {
  build({ preset, controls, seed }) {
    return {
      version: 1,
      preset,
      seed,
      stages: [
        globalThis.AnalogicTone.build({ intensity: controls.intensity / 100 }),
        globalThis.AnalogicHalation.build({ amount: controls.halation / 100 }),
        globalThis.AnalogicGrain.build({ family: preset.grain.family, amount: controls.grainAmount / 100, size: controls.grainSize / 100, seed }),
        { type: "bloom", params: { amount: controls.bloom / 100 } }
      ]
    };
  }
};
