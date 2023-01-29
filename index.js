var car1 = {
    make: "kia",
    model: "rio",
    year: 2022,
    honk: function () {
        console.log(" Honk very good");
    }
};
var car2 = {
    make: "mazda",
    model: "rx-6",
    year: 2018,
    honk: function () {
        console.log(" Honk very low");
    }
};
var car3 = {
    make: "GMC",
    model: "yokn",
    year: 2015,
    honk: function () {
        console.log(" Honk very high");
    }
};
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
