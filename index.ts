interface car{
    make:string;
    model:string;
    year:number;
    honk():void
}

let car1:car ={
    make:"kia",
    model:"rio",
    year:2022,
    honk(){
        console.log(" Honk very good");
        
    }
   
}
let car2:car={
    make:"mazda",
    model:"rx-6",
    year:2018,
    honk(){
        console.log(" Honk very low");
        
    }
   
}
let car3:car={
    make:"GMC",
    model:"yokn",
    year:2015,
    honk(){
        console.log(" Honk very high");
        
    }
   
}

console.log(car1);
console.log(car2);
console.log(car3);

car1.honk();
car2.honk();
car3.honk();

console.log(car1.year);
console.log(car2.year);
console.log(car3.year);

console.log(car1.model);
console.log(car2.model);
console.log(car3.model);







