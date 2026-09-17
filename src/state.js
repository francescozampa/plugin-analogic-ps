globalThis.AnalogicState = {
  seed: 1,
  presetId: "convenience-1997",
  nextSeed() { this.seed = (this.seed + 1) >>> 0; return this.seed; },
  getPreset() { return globalThis.AnalogicPresets.find((preset) => preset.id === this.presetId); }
};
