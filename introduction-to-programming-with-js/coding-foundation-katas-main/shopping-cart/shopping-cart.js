"use strict";
class ShoppingCart {
  constructor() {
    this.shoppingCartArray = [];
  }

  addToCart(desc, pri, quan) {
    //items hinzufügen, items = description, price, quantity

    const item = {
      description: desc,
      price: pri,
      quantity: quan,
    };

    return this.shoppingCartArray.push(item);
  }

  getCartPrice() {
    let price = 0;
    //durch die shoppingCartArray iterieren und von jedem objekt auf price zugreifen und aufaddieren

    for (let item of this.shoppingCartArray) {
      price += item.price * item.quantity;
    }
    return price;
  }
  removeFromCart(desc, quan) {
    //an welcher Position ist description = desc? im shoppingCartArray
    //shoppingCartArray.splice(Position, 1)

    this.shoppingCartArray.forEach((item, index) => {
      if (
        (quan === undefined && item.description === desc) ||
        (item.description === desc && item.quantity === quan)
      ) {
        this.shoppingCartArray.splice(index, 1);
      } else if (item.description === desc) {
        item.quantity -= quan;
      }
    });

    return this.shoppingCartArray;
  }
}

// Beispiellösung

/* class ShoppingCart {
  constructor() {
    this.cart = [];
  }

  addToCart(description, price, quantity) {
    this.cart.push({
      description,
      price,
      quantity,
    });
  }

  getCartPrice() {
    let totalPrice = 0;

    for (const item of this.cart) {
      totalPrice += item.price * item.quantity;
    }

    return totalPrice;
  }

  removeFromCart(description, quantity) {
    let index;
    for (let i = 0; i < this.cart.length; i++) {
      const item = this.cart[i];

      if (item.description === description) {
        index = i;
        break;
      }
    }

    if (quantity === undefined) {
      this.cart.splice(index, 1);
      return;
    }

    this.cart[index].quantity -= quantity;
  }
}

const cart = new ShoppingCart();
cart.addToCart("Shoes", 20, 2);
cart.addToCart("Apple", 2, 12);
cart.removeFromCart("Shoes", 2);
console.log(cart); */
