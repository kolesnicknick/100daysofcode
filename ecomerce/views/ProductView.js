import { StorageController } from "../controllers/StorageController.js";
import { CartController } from "../controllers/CartController.js";

export class ProductView {
    constructor() {
        this.cart = new CartController();
        this.cartContent = document.querySelector(".cart-content");
        this.productsDOM = document.querySelector(".products-center");
        this.cart = [];
        this.buttonsDOM = [];
    }



    displayProducts(products) {
        let result = "";
        products.forEach(product => {
            result += `
   <!-- single product -->
        <article class="product">
          <div class="img-container">
            <img
              src=${product.image}
              alt="product"
              class="product-img"
            />
            <button class="bag-btn" data-id=${product.id}>
              <i class="fas fa-shopping-cart"></i>
              add to bag
            </button>
          </div>
          <h3>${product.title}</h3>
          <h4>$${product.price}</h4>
        </article>
        <!-- end of single product -->
   `;
        });
        this.productsDOM.innerHTML = result;
    }

    getBagButtons() {
        let buttons = [...document.querySelectorAll(".bag-btn")];
        this.buttonsDOM = buttons;
        buttons.forEach(button => {
            let id = button.dataset.id;
            let inCart =  this.cart.find(item => item.id === id);

            if (inCart) {
                button.innerText = "In Cart";
                button.disabled = true;
            }
            button.addEventListener("click", event => {
                // disable button
                event.target.innerText = "In Cart";
                event.target.disabled = true;
                // add to cart
                let cartItem = { ...StorageController.getProduct(id), amount: 1 };
                this.cart = [... this.cart, cartItem];

                StorageController.saveCart(this.cart);

                this.cart.setCartValues(this.cart);
                this.addCartItem(cartItem);
                this.cart.showCart();
            });
        });
    }


    addCartItem(item) {
        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `<!-- cart item -->
            <!-- item image -->
            <img src=${item.image} alt="product" />
            <!-- item info -->
            <div>
              <h4>${item.title}</h4>
              <h5>$${item.price}</h5>
              <span class="remove-item" data-id=${item.id}>remove</span>
            </div>
            <!-- item functionality -->
            <div>
                <i class="fas fa-chevron-up" data-id=${item.id}></i>
              <p class="item-amount">
                ${item.amount}
              </p>
                <i class="fas fa-chevron-down" data-id=${item.id}></i>
            </div>
          <!-- cart item -->
    `;
        this.cartContent.appendChild(div);
    }






    removeItem(id) {
        this.cart =  this.cart.filter(item => item.id !== id);
        this.setCartValues( this.cart);
        StorageController.saveCart( this.cart);
        let button = this.getSingleButton(id);
        button.disabled = false;
        button.innerHTML = `<i class="fas fa-shopping-cart"></i>add to bag`;
    }
    getSingleButton(id) {
        return  this.buttonsDOM.find(button => button.dataset.id === id);
    }


}
