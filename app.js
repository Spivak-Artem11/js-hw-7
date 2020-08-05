// 1

function Planet(name) {
  this.name = name;
  this.getName = function () {
    return "Planet name is " + this.name;
  };
}

function PlanetWithSatellite(name, satelliteName) {
  Planet.call(this, name);
  this.satelliteName = satelliteName;
  this.getName = function () {
    return `Planet name is ${this.name}. The satellite is ${satelliteName}`;
  };
}

const earth = new PlanetWithSatellite("earth", "moon");

// 2

function Building(numberOfFloors) {
  this.numberOfFloors = numberOfFloors;
  this.getFloors = function () {
    return this.numberOfFloors;
  };
}

function House(numberOfFloors, numberOfFlat) {
  Building.call(this, numberOfFloors);
  this.numberOfFlatPerFloor = numberOfFlat;
  this.getFloors = function () {
    return {
      numberOfFloors: this.numberOfFloors,
      numberOfFlat: this.numberOfFloors * this.numberOfFlat,
    };
  };
}

function ShoppingCenter(numberOfFloors, numberOfShop) {
  Building.call(this, numberOfFloors);
  this.numberOfShop = numberOfShop;
  this.getFloors = function () {
    return {
      numberOfFloors: this.numberOfFloors,
      totalStores: this.numberOfFloors * this.numberOfShop,
    };
  };
}

const house = new House(5, 2);
const shopCenter = new ShoppingCenter(2, 10);

// 3

function Furniture(name, price) {
  this.name = name;
  this.price = price;
}

Furniture.prototype.getInfo = function () {
  return `furniture: ${this.name}. Price:${this.price}$`;
};

function OfficeFurniture(name, price, additions) {
  Furniture.call(this, name, price);
  this.additions = additions;
  this.getInfo = function () {
    return `Furniture: ${this.name}. Price:${this.price}$. Additions: ${additions}`;
  };
}

OfficeFurniture.prototype = Object.create(Furniture.prototype);
OfficeFurniture.prototype.constructor = OfficeFurniture;

function HomeFurniture(name, price, additions) {
  Furniture.call(this, name, price);
  this.additions = additions;
  this.getInfo = function () {
    return `Furniture: ${this.name}. Price:${this.price}$. Additions: ${additions}`;
  };
}

HomeFurniture.prototype = Object.create(Furniture.prototype);
HomeFurniture.prototype.constructor = HomeFurniture;

const officeFurniture = new OfficeFurniture("asd", 1, "computer");
const homeFurniture = new HomeFurniture("dsa", 2, "TV");

// 4

class User {
  constructor(name, date) {
    this.name = name;
    this.date = date;
  }
}

User.prototype.getInfo = function () {
  return `Name: ${this.name}. Registration date: ${this.date}`;
};

class Admin extends User {
  constructor(name, date, isAdmin = false) {
    super(name, date);
    this.isAdmin = isAdmin;
  }
  getInfo() {
    const parent = super.getInfo();
    return `${parent}. Is Admin: ${this.isAdmin}`;
  }
}

const admin = new Admin("asd", "22.03");

class Guest extends User {
  constructor(name, date, validDate) {
    super(name, date);
    this.validDate = validDate;
  }
  getInfo() {
    const parent = super.getInfo();
    return `${parent}. Valid date: ${this.validDate}`;
  }
}

const guest = new Guest("asd", 22.03, 27.03);
