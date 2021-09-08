

import { Product } from "../src/products";


export interface InventoryItem{

    product: Product;
    quantity: number;

};



let Inventory: InventoryItem[] = [{product: {name: "motor", price: 10.00}, quantity: 10}, {product: {name: "sensor", price: 12.50}, quantity: 4}, {product: {name: "LED", price: 1.00}, quantity: 20}];



export function calcInventoryValue(arr: InventoryItem[]):number {

    let total: number = 0;

    for(let i of arr){

        total = total + i.product.price * i.quantity;
    };

    return total;
}




let myInventoryValue: number = calcInventoryValue(Inventory);
console.log(myInventoryValue);


