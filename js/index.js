//task 1 the shortest artist name
let popArtists = ['Usmonova', 'Morgenshtern', 'Baskov', 'Eldzhey', '50cent', 'Eminem', 'Oxy']
let shortestArtist = popArtists.find(artist => artist.length === Math.min(...popArtists.map(artist => artist.length)));///...pass arguments to map
alert(`Исполнитель с самым коротким именем: ${shortestArtist}`);


//task 2 the most expensive car
let cars = [
    {
        name: "malibu",
        price: 31000
    },
    {
        name: "nexia",
        price: 12000
    },
    {
        name: "onix",
        price: 21000
    },
    {
        name: "tahoe",
        price: 100000
    },
    {
        name: "cobalt",
        price: 13000
    },
    {
        name: "tracker",
        price: 26000
    },
    {
        name: "kia k5",
        price: 43000
    },
    {
        name: "Santa fe",
        price: 50000
    },
    {
        name: "elantra",
        price: 35000
    },
    {
        name: "tico",
        price: 2500
    }
]
let mostExpensiveCar = cars[0];
cars.forEach(car => {
  if (car.price > mostExpensiveCar.price) {
    mostExpensiveCar = car;
  }
});
alert(`Самая дорогой автомобиль: ${mostExpensiveCar.name} (Цена: ${mostExpensiveCar.price}$)`);

//task 3 the average price of cars

let total = 0;
cars.forEach(car => {
  total += car.price;
});

let averagePrice = total / cars.length;
alert(`Средняя цена всех автомобилей в наличии: ${averagePrice}$`);


