

export interface Mountain {
    name: string;
    height: number;
};


let mountain: Mountain[] = [{name: "Kilimanjaro", height: 19341}, {name: "Everest", height: 29029}, {name: "Denali", height: 20310}]

export function findNameOfTallestMountain(arr: Mountain[]):string {
    let highest_height: number = 0;
    let highest_name = "";
    for(let m of arr){
        if(m.height > highest_height){
            highest_height = m.height;
            highest_name = m.name;
        };
    };
    return highest_name;
}

let theHighest: string = findNameOfTallestMountain(mountain);

console.log(theHighest);
