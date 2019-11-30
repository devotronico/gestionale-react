import buildPanelView from './build-panel-view.js';
import buildPanelEdit from './build-panel-edit.js';
import buildPanelCanc from './build-panel-canc.js';
import {
  createAllButtonTab,
  onClickTabView,
  onClickTabEdit,
  onClickTabCanc,
  onClickTabClose
} from './build-buttons-for-tab';

/**
 * Crea i pannelli della card
 * @param {*} panelBox - contenitore dei pannelli
 * @param {Object[]} arrOfobj - ↓
 *            type: tipo di pannello,
 *          active: stato del pannello (attivo|non attivo)
 */
const createPanelTab = (cardBody, arrOfobj) => {
  arrOfobj.forEach(obj => {
    const panel = document.createElement('DIV');
    panel.id = `panel-${obj.type}`;
    panel.className = `panel ${obj.active}`;
    cardBody.appendChild(panel);

    const panelBox = document.createElement('DIV');
    panelBox.id = `panel-${obj.type}-box`;
    panelBox.className = 'panel-box';
    panel.appendChild(panelBox);
  });
};

/**
 * Aggiunge un nuovo elemento <DIV> sotto la riga che è stata cliccata
 *
 * <a></a> Cerca a salire nella gerarchia degli elementi un elemento con una classe specifica
 *     quando lo trova viene selezionato
 *
 * [b] Se l'elemento selezionato ha già la classe 'active' significa che è stato già
 *     cliccato precedentemente, quindi il codice viene interrotto
 * __[b] Se l'elemento <TR> selezionato non ha le classi 'list-tr' e 'active-row'
 *   __  il codice viene interrotto
 *
 * [c] elementBelow è l' elemento che si trova sotto alla riga cliccata con classe 'list-tr'
 * Puo essere:
 * 1. una riga con classe 'row td'
 * 2. una card con id `card`
 * 3. null
 * [d] Se elementBelow non è null
 * [e] e ha l'id `card` vuol dire che la card associata alla riga cliccata è
 *     già stata costruita e quindi non c'è bisogno di ricostruirla,
 *     di conseguenza la funzione viene interrotta.
 *
 * <f> Se una riga è già selezionata,
 *     viene deselezionata rimuovendone la classe 'active'
 *
 * [g] alla riga dell' ordine cliccata viene applicata la classe 'active' per evidenziarla
 *
 * <h> Se una card già esiste sotto un' altra riga allora viene rimossa
 *
 * <i> Viene creata una nuova carda e posizionata sotto la riga cliccata
 * <l> Crea i Bottoni: Mostra Modifica Cancella Chiudi
 * <m> Crea i Pannelli: Mostra Modifica Cancella
 * @param {event} event
 */
const buildCardUnderRow = evt => {
  let selectedRow = evt.target;

  // <a>
  while (!selectedRow.classList.contains('row', 'td')) {
    selectedRow = selectedRow.parentNode;
  }

  if (selectedRow.classList.contains('active')) {
    return; // [b]
  }

  const elementBelow = selectedRow.nextElementSibling; // [c]
  if (elementBelow) {
    // [d]
    if (elementBelow.id === 'card') {
      // [e]
      console.log('card gia presente sotto questa riga');
      return;
    }
  }

  // <f>
  const activeRow = document.querySelector('.active');
  if (activeRow) {
    activeRow.classList.remove('active');
  }
  // </f>

  selectedRow.classList.add('active'); // [g]

  // <h>
  const oldCardRow = document.getElementById('card');
  if (oldCardRow) {
    oldCardRow.remove();
  }
  // </h>

  // <i>
  const card = document.createElement('DIV');
  card.id = 'card';
  selectedRow.insertAdjacentElement('afterend', card);
  // </i>

  // <l>
  // Crea DIV/BOX che contiene i bottoni dei TAB
  const boxBtn = document.createElement('DIV');
  boxBtn.id = 'card-head';
  boxBtn.classList.add('box-btn-tab');
  card.appendChild(boxBtn);

  // Crea Buttoni Mostra Modifica Cancella Chiudi
  createAllButtonTab(boxBtn, [
    {
      text: 'Mostra',
      type: 'view',
      color: 'primary',
      active: 'active',
      fn: function() {
        onClickTabView();
      }
    },
    {
      text: 'Modifica',
      type: 'edit',
      color: 'warning',
      active: '',
      fn: function() {
        onClickTabEdit();
      }
    },
    {
      text: 'Cancella',
      type: 'canc',
      color: 'danger',
      active: '',
      fn: function() {
        onClickTabCanc();
      }
    },
    {
      text: '&#10006;',
      type: 'close',
      color: 'light',
      active: '',
      fn: function() {
        onClickTabClose();
      }
    }
  ]);
  // </l>

  // <m>
  // Box che contiene tutti i tipi di pannelli
  const cardBody = document.createElement('DIV');
  cardBody.id = 'card-body';
  card.appendChild(cardBody);

  // Crea tutti i Pannelli
  createPanelTab(cardBody, [
    { type: 'view', active: 'active' },
    { type: 'edit', active: '' },
    { type: 'canc', active: '' }
  ]);
  // </m>

  const obj = {
    id: selectedRow.children[0].children[0].innerText,
    cliente_id: selectedRow.children[1].children[0].innerText,
    principale: selectedRow.children[2].children[0].innerText,
    via: selectedRow.children[3].children[0].innerText,
    civico: selectedRow.children[4].children[0].innerText,
    cap: selectedRow.children[5].children[0].innerText,
    comune: selectedRow.children[6].children[0].innerText,
    provincia: selectedRow.children[7].children[0].innerText,
    nazione: selectedRow.children[8].children[0].innerText
  };
  const copia = Object.assign({}, obj);

  buildPanelView(obj);
  buildPanelEdit(copia);
  buildPanelCanc();
};

export default buildCardUnderRow;
