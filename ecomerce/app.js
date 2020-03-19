import { ProductView } from './views/ProductView.js'
import { StorageController } from "./controllers/StorageController.js";
import {ProductsModel} from "./models/ProductModel.js";

document.addEventListener("DOMContentLoaded", () => {
  const ui = new ProductView();
  const products = new ProductsModel();
  ui.setupAPP();

  // get all products
  products
    .getProducts()
    .then(products => {
      ui.displayProducts(products);
      StorageController.saveProducts(products);
    })
    .then(() => {
      ui.getBagButtons();
      ui.cartLogic();
    });
});
