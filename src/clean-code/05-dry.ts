type Size = "" | "S" | "M" | "G";

class Product {
  constructor(public name = "", public price = 0, public size: Size = "") {}

  isProductReady() {
    for (const key in this) {
        
      switch (typeof this[key]) {
        case "number":
          if (this[key] <= 0) throw new Error("Not valid number");
          break;

        case "string":
          if ((this[key] as string).length <= 0)
            throw new Error(`${key} is not a valid string`);

          break;

        default:
          break;
      }
    }
  }

  toString() {
    // NOT DRY
    // if(this.name.length <= 0) throw new Error("name is empty");
    // if(this.price <= 0) throw new Error("price is 0");
    // if(this.size == "") throw new Error("size is empty");
    this.isProductReady();
    return `${this.name} $${this.price}, ${this.size}`;
  }
}

(() => {
  const bluePants = new Product("BLue Large Pants", 10, "M");
  console.log(bluePants.toString());
})();
