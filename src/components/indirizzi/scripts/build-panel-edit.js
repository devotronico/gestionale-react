import actionRowUpdate from './action-row-update.js';
import buildButtonsForPanels from './build-buttons-for-panels';

/**
 * Costruisce il Pannello di Modifica Ordine
 * @param {Object} obj
 */
const buildPanelEdit = obj => {
  const panelBox = document.querySelector('#panel-edit-box');
  // const panel = document.querySelector('#panel-edit');

  // Crea le righe
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
    // td.innerText = obj[key];
    row.appendChild(td);

    if (key === 'stato') {
      const select = document.createElement('SELECT');
      select.id = 'edit-select';
      select.size = 6;
      td.appendChild(select);
      const ordineList = ['sospeso', 'produzione', 'completato', 'deposito', 'fatturato', 'spedito'];
      for (let i = 0; i < ordineList.length; i++) {
        const option = document.createElement('OPTION');
        option.value = ordineList[i];
        option.text = ordineList[i];
        select.appendChild(option);
      }
      select.value = obj[key];
      continue;
    }
    const input = document.createElement('INPUT');
    input.type = 'text';
    input.value = obj[key];

    // input.classList.add(`edit-date-${key}`); // set the CSS class
    input.id = `edit-${key}`; // set the CSS class
    td.appendChild(input); // put it into the DOM
  }

  // const boxBtn = document.createElement('DIV');
  // boxBtn.classList.add('box-btn');
  // panel.appendChild(boxBtn);

  buildButtonsForPanels({
    text: 'Aggiorna',
    type: 'edit',
    fn: function() {
      actionRowUpdate();
    }
  });
};

export default buildPanelEdit;
