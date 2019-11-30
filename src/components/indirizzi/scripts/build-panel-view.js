import actionRowRead from './action-row-read.js';
import buildButtonsForPanels from './build-buttons-for-panels';

/**
 * Costruisce il Pannello di Visualizzazione degli indirizzi
 * @param {Object} obj - dati
 */
const buildPanelView = obj => {
  const panelBox = document.querySelector('#panel-view-box');

  for (const key in obj) {
    const row = document.createElement('DIV');
    row.classList.add('panel_row');
    panelBox.appendChild(row);

    const th = document.createElement('DIV');
    th.classList.add('title');
    th.innerText = key;
    row.appendChild(th);

    const td = document.createElement('DIV');
    td.classList.add('value');
    td.innerText = obj[key];
    row.appendChild(td);
  }

  // const boxBtn = document.createElement('DIV');
  // boxBtn.classList.add('box-btn');
  // panelBox.appendChild(boxBtn);

  buildButtonsForPanels({
    text: 'Mostra ordini rows',
    type: 'view',
    fn: function() {
      actionRowRead();
    }
  });
};

export default buildPanelView;
