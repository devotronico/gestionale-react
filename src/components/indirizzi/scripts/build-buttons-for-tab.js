const onClickTabView = () => {
  console.log('onClickTabView');
  const prevBtnTabActive = document.querySelector('.btn-tab.active');
  prevBtnTabActive.classList.remove('active');

  const currBtnTabActive = document.querySelector('#btn-view');
  currBtnTabActive.classList.add('active');

  const activePanel = document.querySelector('.panel.active');
  activePanel.classList.remove('active');
  const activePanelCanc = document.querySelector('#panel-view');
  activePanelCanc.classList.add('active');
};

const onClickTabEdit = () => {
  console.log('onClickTabEdit');
  const prevBtnTabActive = document.querySelector('.btn-tab.active');
  prevBtnTabActive.classList.remove('active');

  const currBtnTabActive = document.querySelector('#btn-edit');
  currBtnTabActive.classList.add('active');

  const activePanel = document.querySelector('.panel.active');
  activePanel.classList.remove('active');
  const activePanelCanc = document.querySelector('#panel-edit');
  activePanelCanc.classList.add('active');
};
const onClickTabCanc = () => {
  console.log('onClickTabCanc');
  const prevBtnTabActive = document.querySelector('.btn-tab.active');
  prevBtnTabActive.classList.remove('active');

  const currBtnTabActive = document.querySelector('#btn-canc');
  currBtnTabActive.classList.add('active');

  const activePanel = document.querySelector('.panel.active');
  activePanel.classList.remove('active');
  const activePanelCanc = document.querySelector('#panel-canc');
  activePanelCanc.classList.add('active');
};
const onClickTabClose = () => {
  console.log('onClickTabClose');
  document.getElementById('card').remove();
  const activeRow = document.querySelector('.active');
  if (activeRow) {
    activeRow.classList.remove('active');
  }
};

/**
 * Crea i bottoni/tab della card
 * @param {HTMLElement} boxBtn - box che contiene i bottoni/tab
 * @param {Object[]} arrOfobj - ↓
 *            text: testo del bottone/tab,
 *            type: tipo di azione che fa il bottone/tab,
 *           color: classe di colore del bottoni/tab,
 *          active: stato del bottone: attivo|non attivo
 */
const createAllButtonTab = (boxBtn, arrOfobj) => {
  arrOfobj.forEach(obj => {
    const btn = document.createElement('BUTTON');
    btn.id = `btn-${obj.type}`;
    btn.className = `btn btn-${obj.color} btn-flat btn-tab ${obj.active}`;
    btn.setAttribute('type', obj.type);
    btn.innerHTML = obj.text;
    boxBtn.appendChild(btn);
    btn.addEventListener('click', obj.fn);
  });
};

export { createAllButtonTab, onClickTabView, onClickTabEdit, onClickTabCanc, onClickTabClose };
