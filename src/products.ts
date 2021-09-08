

export interface Product{

    name: string;
    price: number;


}

export function calcAverageProductPrice(arr: Product[]):number {

    let sum: number = 0;
    let count: number = 0;

    for(let p of arr){

        sum = sum + p.price;
        count++;
    };

    if(count === 0){
        return count;
    } else {
        return sum/count;
    }

}

let products: Product[] = [{name: "horseshoes", price: 27}, {name: "traincase", price: 60}, {name: "chocolate bar", price: 2}, {name: "double boiler", price: 45}];

let ave: number = calcAverageProductPrice(products);
console.log(ave);




