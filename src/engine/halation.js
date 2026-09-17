globalThis.AnalogicHalation = {
  build(params = {}) { return { type: "halation", params: { amount: params.amount ?? 0 } }; }
};
