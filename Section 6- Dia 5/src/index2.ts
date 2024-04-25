interface Item {
    name: string;
    price: number;

    itemPurchased(message: string): void
}

let product1: Item;

product1 = {
    name: "Apple",
    price: 2,
    itemPurchased(message) {
        console.log(message + " " + this.name);
    },
}

console.log(product1.itemPurchased('You just bought a'));