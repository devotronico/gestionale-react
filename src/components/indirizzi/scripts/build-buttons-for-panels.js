/**
 * Crea i bottoni/tab della card
 * @param {HTMLElement} boxBtn - pannello che contiene i bottoni
 * @param {Object} obj - ↓
 *            text: testo del bottone/tab,
 *              id: id del bottone - non ha nessuna utilità al momento
 *              fn: funzione specifica applicata a ogni bottone
 */
const buildButtonsForPanels = obj => {
  const panel = document.querySelector(`#panel-${obj.type}`);

  const boxBtn = document.createElement('DIV');
  boxBtn.classList.add('box-btn');
  panel.appendChild(boxBtn);

  const btn = document.createElement('BUTTON');
  btn.id = `btn_panel-${obj.type}`;
  btn.className = `btn btn-light btn-flat btn-panel`;
  btn.innerHTML = obj.text;
  boxBtn.appendChild(btn);
  btn.addEventListener('click', obj.fn);
};

export default buildButtonsForPanels;
