const StorageCtrl = (function () {

  return {
    syncStorage: function (items) {
      localStorage.setItem('items', JSON.stringify(items));
    },

    getItems: function () {
      return JSON.parse(localStorage.getItem('items')) || [];
    }
  };
})();

const ItemCtrl = (function () {
  console.log('Item controller');

  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  const state = {
    items: [],

    currentItem: null,
    totalCalories: 0,
  };

  return {
    getTotalCalories() {
      let total = 0;
      state.items.forEach(item => total += parseInt(item.calories));

      return total;
    },

    getState: function () {
      return state;
    },

    getCurrent: function () {
      return state.currentItem;
    },

    deleteItem: function (id) {
      this.getState().items = this.getState().items.filter(item => item.id !== id);
    },

    updateItem(id, values) {
      const itemToUpdate = this.getState().items.find(item => item.id === id);
      itemToUpdate.name = values.name;
      itemToUpdate.calories = values.calories;
    },

    setItem: function (item) {
      //Auto-increment id
      item.id = state.items.length === 0 ? 0 : state.items[state.items.length - 1].id + 1;
      state.items.push(item);
      return item;
    },
  };
})();

const UICtrl = (function () {
  const UiSelectors = {
    ITEM_LIST: '#item-list',
    ADD_BTN: '.add-btn',
    UPDATE_BTN: '.update-btn',
    DELETE_BTN: '.delete-btn',
    CANCEL_BTN: '.cancel-btn',
    ITEM_NAME_INPUT: '#item-name',
    ITEM_CALORIES_INPUT: '#item-calories',
    TOTAL_CALORIES: '.total-calories',
    CARD_CONTENT: '.card-content',
    CLEAR_BUTTON: '.clear-btn',
  };


  const hideList = function () {
    document.querySelector(UiSelectors.ITEM_LIST).style.display = 'none';
  };
  const getItemInput = function () {
    return {
      name: document.querySelector(UiSelectors.ITEM_NAME_INPUT).value,
      calories: parseInt(document.querySelector(UiSelectors.ITEM_CALORIES_INPUT).value),
    };
  };
  const getSelectors = function () {
    return UiSelectors;
  };
  const populateItems = function (items) {
    if (items.length > 0) {
      document.querySelector(UiSelectors.ITEM_LIST).style.display = 'block';
    }
    let html = '';

    items.forEach(item => {
      html += `
        <li class="collection-item" id="item-${item.id}">
            <strong>${item.name}: </strong> <em>${item.calories}</em>
            <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
        </li>`;
    });

    document.querySelector(UiSelectors.ITEM_LIST).innerHTML = html;
  };
  const clearInputFields = function () {
    document.querySelector(UiSelectors.ITEM_NAME_INPUT).value = '';
    document.querySelector(UiSelectors.ITEM_CALORIES_INPUT).value = '';
  };

  const clearEditState = function () {
    clearInputFields();
    console.log('<<<start hiding');
    document.querySelector(UiSelectors.UPDATE_BTN).style.display = 'none';
    document.querySelector(UiSelectors.DELETE_BTN).style.display = 'none';
    document.querySelector(UiSelectors.CANCEL_BTN).style.display = 'none';
    document.querySelector(UiSelectors.ADD_BTN).style.display = 'inline';
    console.log('>>>end hiding');
  };

  const showEditState = function (item) {
    document.querySelector(UiSelectors.ITEM_NAME_INPUT).value = item.name;
    document.querySelector(UiSelectors.ITEM_CALORIES_INPUT).value = item.calories;

    console.log('<<<start showing');
    document.querySelector(UiSelectors.UPDATE_BTN).style.display = 'inline';
    document.querySelector(UiSelectors.DELETE_BTN).style.display = 'inline';
    document.querySelector(UiSelectors.CANCEL_BTN).style.display = 'inline';
    document.querySelector(UiSelectors.ADD_BTN).style.display = 'none';
    console.log('>>>end showing');
  };

  const setTotalCalories = function (total) {
    document.querySelector(UiSelectors.TOTAL_CALORIES).textContent = total;
  };

  return {
    showEditState,
    clearEditState,
    setTotalCalories,
    hideList,
    clearInputFields,
    getItemInput,
    populateItems,
    getSelectors,
  };
})();


const App = (function (ItemCtrl, UICtrl, StorageCtrl) {

  const reverseSyncStorage = function () {
    ItemCtrl.getState().items = StorageCtrl.getItems();
  };

  const syncStorage = function () {
    const items = ItemCtrl.getState().items;
    StorageCtrl.syncStorage(items);
  };

  const updateUI = function () {
    UICtrl.clearEditState();

    const items = ItemCtrl.getState().items;
    console.log('Updating items', items);

    if (!items.length) {
      UICtrl.hideList();
    }

    UICtrl.populateItems(items);

    console.log('Clearing fields');
    UICtrl.clearInputFields();

    const totalCalories = ItemCtrl.getTotalCalories();
    UICtrl.setTotalCalories(totalCalories);
  };

  const loadEventListeners = function () {
    const SELECTORS = UICtrl.getSelectors();

    document.querySelector(SELECTORS.ADD_BTN).addEventListener('click', itemAddSubmit);

    document.querySelector(SELECTORS.ITEM_LIST).addEventListener('click', itemUpdateSubmit);

    document.querySelector(SELECTORS.CARD_CONTENT).addEventListener('click', handleEdit);

    document.querySelector(SELECTORS.CLEAR_BUTTON).addEventListener('click', handleClear);
  };

  const handleClear = function (e) {
    ItemCtrl.getState().items = [];
    syncStorage();
    updateUI();
    e.preventDefault();
  };

  const handleEdit = function (e) {
    const current = ItemCtrl.getCurrent();

    if (e.target.classList.contains('cancel-btn')) {
      UICtrl.clearEditState();
    }

    if (e.target.classList.contains('update-btn')) {
      ItemCtrl.updateItem(current.id, UICtrl.getItemInput());
      syncStorage();
      updateUI();
    }

    if (e.target.classList.contains('delete-btn')) {
      ItemCtrl.deleteItem(current.id);
      ItemCtrl.getState().items = ItemCtrl.getState().items.filter(item => item.id !== current.id);

      syncStorage();
      updateUI();
    }

    e.preventDefault();
  };

  const itemAddSubmit = function (e) {
    const item = UICtrl.getItemInput();

    if (item.name !== '' && item.calories) {
      ItemCtrl.setItem(item);
      syncStorage();
      updateUI();
    }

    e.preventDefault();
  };

  const itemUpdateSubmit = function (e) {
    if (e.target.classList.contains('edit-item')) {
      console.log('EDIT');
      const itemId = parseInt(e.target.parentNode.parentNode.id.split('-')[1]);
      ItemCtrl.getState().currentItem = ItemCtrl.getState().items.find(i => i.id === itemId);
      UICtrl.showEditState(ItemCtrl.getState().currentItem);
    }

    e.preventDefault();
  };

  return {
    init: function () {
      reverseSyncStorage();
      updateUI();
      loadEventListeners();
    }
  };
})(ItemCtrl, UICtrl, StorageCtrl);

App.init();

