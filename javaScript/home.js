var Jeep = {
  car: "/images/jeep.jpg",
  name: "2023 Jeep Compass",
  price: 22299,
  itemId: "B001",
};

var Lexus = {
  car: "images/lexus.jpg",
  name: "2023 Lexus GX",
  price: 34499,
  itemId: "B002",
};

var RangeRover = {
  car: "images/range.jpg",
  name: "Range Rover 2023 SUV",
  price: 44499,
  itemId: "B003",
};

var Escalade = {
  car: "images/escalade.jpg",
  name: "Cadillac Escalade 2023 Sports Edition",
  price: 53499,
  itemId: "B004",
};
var Mercedes = {
  car: "images/wagon.jpg",
  name: "Mercedes G-Wagon",
  price: 53499,
  itemId: "B005",
};
var Urus = {
  car: "images/urus.jpg",
  name: "Lamborghini Urus Performante",
  price: 53499,
  itemId: "B006",
};
var Porsche = {
  car: "images/cayenne.jpg",
  name: "Porsche Cayene",
  price: 53499,
  itemId: "B007",
};
var selectId = decodeURIComponent(window.location.search);

var selectedItem = selectId.substring(1);
if (selectedItem == Jeep.itemId) {
  document.getElementById("car1").src = Jeep.car;
  document.getElementById("name1").innerText = Jeep.name;
  document.getElementById("price1").innerText = Jeep.price;
} else if (selectedItem == Lexus.itemId) {
  document.getElementById("car1").src = Lexus.car;
  document.getElementById("name1").innerText = Lexus.name;
  document.getElementById("price1").innerText = Lexus.price;
} else if (selectedItem == RangeRover.itemId) {
  document.getElementById("car1").src = RangeRover.car;
  document.getElementById("name1").innerText = RangeRover.name;
  document.getElementById("price1").innerText = RangeRover.price;
} else if (selectedItem == Escalade.itemId) {
  document.getElementById("car1").src = Escalade.car;
  document.getElementById("name1").innerText = Escalade.name;
  document.getElementById("price1").innerText = Escalade.price;
} else if (selectedItem == Mercedes.itemId) {
  document.getElementById("car1").src = Mercedes.car;
  document.getElementById("name1").innerText = Mercedes.name;
  document.getElementById("price1").innerText = Mercedes.price;
} else if (selectedItem == Urus.itemId) {
  document.getElementById("car1").src = Urus.car;
  document.getElementById("name1").innerText = Urus.name;
  document.getElementById("price1").innerText = Lexus.price;
} else if (selectedItem == Porsche.itemId) {
  document.getElementById("car1").src = Porsche.car;
  document.getElementById("name1").innerText = Porsche.name;
  document.getElementById("price1").innerText = Porsche.price;
}
