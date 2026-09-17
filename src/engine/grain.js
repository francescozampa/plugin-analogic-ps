globalThis.AnalogicGrain = {
  build(params = {}) {
    return {
      type: "grain",
      params: {
        family: params.family ?? "classic",
        amount: params.amount ?? 0.5,
        size: params.size ?? 0.5,
        seed: params.seed ?? 1
      }
    };
  }
};
