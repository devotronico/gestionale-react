import { deleteOrdine } from './action-delete-ordine.js';
import buildButtonsForPanels from './build-buttons-for-panels';

// <CANC_ROW>
const buildPanelCanc = () => {
  const panelBox = document.querySelector('#panel-canc-box');
  // const panel = document.querySelector('#panel-canc');

  const paragrafo = document.createElement('P');
  paragrafo.innerHTML = 'Cancellare questa Riga?';
  panelBox.appendChild(paragrafo);

  buildButtonsForPanels({
    text: 'SI',
    type: 'canc',
    fn: function() {
      deleteOrdine();
    }
  });
};
// </CANC_ROW>

export default buildPanelCanc;
