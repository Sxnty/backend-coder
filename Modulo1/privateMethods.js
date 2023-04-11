/**
 * @es11
 * @privates
 */

class Product {
  #unitCost;

  constructor(data) {
    this.name = data.name;
    this.price = data.price;
    this.#unitCost = data.price * 0.6;
    this.stock = data.stock;
  }

  #gain() {
    return this.price - this.#unitCost;
  }
  potentialGain() {
    return this.#gain() * this.stock;
  }
}

let bed = new Product({ name: "bed", price: 200, stock: 5 });

console.log(bed.price);
console.log(bed.potentialGain());
