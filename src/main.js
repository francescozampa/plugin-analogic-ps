(() => {
  const $ = (id) => document.getElementById(id);
  const elements = {
    look: $("look"), intensity: $("intensity"), grainAmount: $("grainAmount"),
    grainSize: $("grainSize"), halation: $("halation"), bloom: $("bloom"),
    regenerate: $("regenerate"), apply: $("apply"), status: $("status")
  };

  const setStatus = (message) => { elements.status.textContent = message; };
  const readControls = () => ({
    intensity: Number(elements.intensity.value), grainAmount: Number(elements.grainAmount.value),
    grainSize: Number(elements.grainSize.value), halation: Number(elements.halation.value),
    bloom: Number(elements.bloom.value)
  });

  function loadPreset(presetId) {
    globalThis.AnalogicState.presetId = presetId;
    const preset = globalThis.AnalogicState.getPreset();
    if (!preset) return;
    Object.entries(preset.controls).forEach(([key, value]) => { if (elements[key]) elements[key].value = value; });
  }

  async function refreshDocumentState() {
    const result = await globalThis.AnalogicPhotoshop.preflight();
    elements.apply.disabled = !result.supported;
    setStatus(result.status);
  }

  elements.look.addEventListener("change", (event) => loadPreset(event.target.value));
  elements.regenerate.addEventListener("click", () => setStatus(`New grain seed: ${globalThis.AnalogicState.nextSeed()}`));
  elements.apply.addEventListener("click", async () => {
    const preset = globalThis.AnalogicState.getPreset();
    const plan = globalThis.AnalogicPipeline.build({ preset, controls: readControls(), seed: globalThis.AnalogicState.seed });
    try {
      setStatus("Applying…");
      await globalThis.AnalogicPhotoshop.applyPlan(plan);
      setStatus(`Applied: ${preset.name}`);
    } catch (error) {
      setStatus(error?.message || "Could not apply Analogic.");
      console.error(error);
    }
  });

  loadPreset(globalThis.AnalogicState.presetId);
  refreshDocumentState();
})();
