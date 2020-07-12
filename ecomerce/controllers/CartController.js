import {StorageController} from "./StorageController";

export class CartController{
    constructor() {
        this.cartBtn = document.querySelector(".cart-btn");
        this.closeCartBtn = document.querySelector(".close-cart");
        this.clearCartBtn = document.querySelector(".clear-cart");
        this.cartItems = document.querySelector(".cart-items");
        this.cartTotal = document.querySelector(".cart-total");
    }

    setupAPP() {
        this.cart = StorageController.getCart();
        this.setCartValues(this.cart);
        this.populateCart(this.cart);
        this.cartBtn.addEventListener("click", this.showCart);
        this.closeCartBtn.addEventListener("click", this.hideCart);
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

    showCart() {
        document.querySelector(".cart-overlay").classList.add("transparentBcg");
        document.querySelector(".cart").classList.add("showCart");
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

    populateCart(cart) {
        cart.forEach(item => this.addCartItem(item));
    }
}
