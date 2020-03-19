import { StorageController } from "../controllers/StorageController.js";
import { CartController } from "../controllers/CartController.js";

export class ProductView {
    constructor() {
        this.cart = new CartController();
        this.cartBtn = document.querySelector(".cart-btn");
        this.closeCartBtn = document.querySelector(".close-cart");
        this.clearCartBtn = document.querySelector(".clear-cart");
        this.cartDOM = document.querySelector(".cart");
        this.cartItems = document.querySelector(".cart-items");
        this.cartTotal = document.querySelector(".cart-total");
        this.cartContent = document.querySelector(".cart-content");
        this.productsDOM = document.querySelector(".products-center");
        this.cart = [];
        this.buttonsDOM = [];
    }

    setupAPP() {
        this.cart = StorageController.getCart();
        this.setCartValues(this.cart);
        this.populateCart(this.cart);
        this.cartBtn.addEventListener("click", this.showCart);
        this.closeCartBtn.addEventListener("click", this.hideCart);
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
                // add to DOM
                this.setCartValues(this.cart);
                this.addCartItem(cartItem);
                this.showCart();
            });
        });
    }
    setCartValues(cart) {
        let tempTotal = 0;
        let itemsTotal = 0;
        cart.map(item => {
            tempTotal += item.price * item.amount;
            itemsTotal += item.amount;
        });
        this.cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
        this.cartItems.innerText = itemsTotal;
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
    showCart() {
        document.querySelector(".cart-overlay").classList.add("transparentBcg");
        document.querySelector(".cart").classList.add("showCart");
    }

    populateCart(cart) {
        cart.forEach(item => this.addCartItem(item));
    }
    hideCart() {
        document.querySelector(".cart-overlay").classList.remove("transparentBcg");
        document.querySelector(".cart").classList.remove("showCart");
    }
    cartLogic() {
        this.clearCartBtn.addEventListener("click", () => {
            this.clearCart();
        });
        this.cartContent.addEventListener("click", event => {
            if (event.target.classList.contains("remove-item")) {
                let removeItem = event.target;
                let id = removeItem.dataset.id;
                this.cartContent.removeChild(removeItem.parentElement.parentElement);
                // remove item
                this.removeItem(id);
            } else if (event.target.classList.contains("fa-chevron-up")) {
                let addAmount = event.target;
                let id = addAmount.dataset.id;
                let tempItem =  this.cart.find(item => item.id === id);
                tempItem.amount = tempItem.amount + 1;
                StorageController.saveCart(this.cart);
                this.setCartValues(this.cart);
                addAmount.nextElementSibling.innerText = tempItem.amount;
            } else if (event.target.classList.contains("fa-chevron-down")) {
                let lowerAmount = event.target;
                let id = lowerAmount.dataset.id;
                let tempItem =  this.cart.find(item => item.id === id);
                tempItem.amount = tempItem.amount - 1;
                if (tempItem.amount > 0) {
                    StorageController.saveCart( this.cart);
                    this.setCartValues( this.cart);
                    lowerAmount.previousElementSibling.innerText = tempItem.amount;
                } else {
                    this.cartContent.removeChild(lowerAmount.parentElement.parentElement);
                    this.removeItem(id);
                }
            }
        });
    }
    clearCart() {
        console.log(this);
        let cartItems = this.cart.map(item => item.id);
        cartItems.forEach(id => this.removeItem(id));
        while ( this.cartContent.children.length > 0) {
            this.cartContent.removeChild( this.cartContent.children[0]);
        }
        this.hideCart();
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
