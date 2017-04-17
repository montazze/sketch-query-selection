var onRun = function(context) {

  // Constants
  const doc = context.document;

  // Functions
  const deselectLayers = () => context.document.currentPage().deselectAllLayers();
  const selectLayers = layers => layers.slice().map(layer => layer.select_byExpandingSelection(true, true));
  const isText = layer => layer.class() == "MSTextLayer";

  // Selection
  const selection = context.selection.slice();
  // First deselect all
  deselectLayers();
  // Then filter!
  selectLayers(selection.filter(isText));

}
