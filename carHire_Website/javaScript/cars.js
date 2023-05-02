var Jeep = {
  car: "/images/jeep.jpg",
  name: "2023 Jeep Compass",
  price: 22299,
  itemId: "B001"
};

var Lexus = {
  car: "images/lexus.jpg",
  name: "2023 Lexus GX",
  price: 34499,
  itemId: "B002"
};

var RangeRover = {
  car: "images/range.jpg",
  name: "Range Rover 2023 SUV",
  price: 44499,
  itemId: "B003"
};

var Escalade = {
  car: "images/escalade.jpg",
  name: "Cadillac Escalade 2023 Sports Edition",
  price: 53499,
  itemId: "B004"
};
var Mercedes = {
  car: "images/wagon.jpg",
  name: "Mercedes G-Wagon",
  price: 53499,
  itemId: "B005"
};
var Urus = {
  car: "images/urus.jpg",
  name: "Lamborghini Urus Performante",
  price: 53499,
  itemId: "B006"
};
var Porsche = {
  car: "images/cayenne.jpg",
  name: "Porsche Cayene",
  price: 53499,
  itemId: "B007"
};

document.getElementById("car1").src = Jeep.car;
document.getElementById("name1").innerText = Jeep.name;
document.getElementById("price1").innerText = Jeep.price;

document.getElementById("car2").src = Lexus.car;
document.getElementById("name2").innerText = Lexus.name;
document.getElementById("price2").innerText = Lexus.price;

document.getElementById("car3").src = RangeRover.car;
document.getElementById("name3").innerText = RangeRover.name;
document.getElementById("price3").innerText = RangeRover.price;

document.getElementById("car4").src = Escalade.car;
document.getElementById("name4").innerText = Escalade.name;
document.getElementById("price4").innerText = Escalade.price;

document.getElementById("car5").src = Mercedes.car;
document.getElementById("name5").innerText = Mercedes.name;
document.getElementById("price5").innerText = Mercedes.price;

document.getElementById("car6").src = Urus.car;
document.getElementById("name6").innerText = Urus.name;
document.getElementById("price6").innerText = Urus.price;


document.getElementById("car7").src = Porsche.car;
document.getElementById("name7").innerText = Porsche.name;
document.getElementById("price7").innerText = Porsche.price;

var selectId = decodeURIComponent(window.location.search);

var selectedItem = selectId.substring(1);

console.log(selectedItem);

if (selectedItem == Jeep.itemId) {
  document.getElementById("car").src = Jeep.car;
  document.getElementById("name").innerText = Jeep.name;
  document.getElementById("price").innerText = Jeep.price;
} else if (selectedItem == Lexus.itemId) {
  document.getElementById("car").src = Lexus.car;
  document.getElementById("name").innerText = Lexus.name;
  document.getElementById("price").innerText = Lexus.price;
} else if (selectedItem == RangeRover.itemId) {
  document.getElementById("car").src = RangeRover.car;
  document.getElementById("name").innerText = RangeRover.name;
  document.getElementById("price").innerText = RangeRover.price;
} else if (selectedItem == Escalade.itemId) {
  document.getElementById("car").src = Escalade.car;
  document.getElementById("name").innerText = Escalade.name;
  document.getElementById("price").innerText = Escalade.price;
} else if (selectedItem == Mercedes.itemId) {
  document.getElementById("car").src = Mercedes.car;
  document.getElementById("name").innerText = Mercedes.name;
  document.getElementById("price").innerText = Mercedes.price;
} else if (selectedItem == Urus.itemId) {
  document.getElementById("car").src = Urus.car;
  document.getElementById("name").innerText = Urus.name;
  document.getElementById("price").innerText = Urus.price;
} else if (selectedItem == Porsche.itemId) {
  document.getElementById("car").src = Porsche.car;
  document.getElementById("name").innerText = Porsche.name;
  document.getElementById("price").innerText = Porsche.price;
}



function changeBackground() {
  var myDiv = document.getElementById("myDiv");
  if (window.scrollY > 0) {
    myDiv.classList.add("change-background");
  } else {
    myDiv.classList.remove("change-background");
  }
}
