globalThis.AnalogicPhotoshop = {
  async preflight() {
    let photoshop;
    try {
      photoshop = require("photoshop");
    } catch (error) {
      return { supported: false, status: "Photoshop host API unavailable.", error };
    }

    const { app } = photoshop;
    if (!app.documents || app.documents.length === 0) {
      return { supported: false, status: "Open an RGB document to begin." };
    }

    const document = app.activeDocument;
    return { supported: true, document, status: `Ready — ${document.width} × ${document.height}` };
  },

  async applyPlan(plan) {
    // TODO: validate mode/depth, enter modal execution, create one top-level group,
    // create native effects, add pixel-derived layers only where justified,
    // and clean up on failure.
    throw new Error(`Apply not implemented yet. Planned look: ${plan?.preset?.name ?? "Unknown"}`);
  }
};
