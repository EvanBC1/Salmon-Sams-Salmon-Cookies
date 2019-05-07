'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pikePlace = {
  minCustomers: 23,
  maxCustomers: 65,
  avgSales: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookies: 0,
  calcCustomersPerHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.customersPerHour.push(getRandomInt(this.minCustomers, this.maxCustomers));
    }
  },
  calcCookiesPerHour: function() {
    this.calcCustomersPerHour();
    for(var i = 0; i < hours.length; i++) {
      var hourWorthOfCookies = Math.ceil(this.customersPerHour[i] * this.avgSales);
      this.cookiesPerHour.push(hourWorthOfCookies);
      this.totalCookies += hourWorthOfCookies;
    }
  },
  render(){
    this.calcCookiesPerHour();
    var pikeUl = document.getElementById('pike');
    for(var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
      pikeUl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookies} cookies`;
    pikeUl.appendChild(liEl);
  },
};

pikePlace.render();

var seaTac = {
  minCustomers: 3,
  maxCustomers: 24,
  avgSales: 1.2,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookies: 0,
  calcCustomersPerHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.customersPerHour.push(getRandomInt(this.minCustomers, this.maxCustomers));
    }
  },
  calcCookiesPerHour: function() {
    this.calcCustomersPerHour();
    for(var i = 0; i < hours.length; i++) {
      var hourWorthOfCookies = Math.ceil(this.customersPerHour[i] * this.avgSales);
      this.cookiesPerHour.push(hourWorthOfCookies);
      this.totalCookies += hourWorthOfCookies;
    }
  },
  render(){
    this.calcCookiesPerHour();
    var pikeUl = document.getElementById('seaTac');
    for(var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
      pikeUl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookies} cookies`;
    pikeUl.appendChild(liEl);
  },
};

seaTac.render();

var seattleCenter = {
  minCustomers: 11,
  maxCustomers: 38,
  avgSales: 3.7,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookies: 0,
  calcCustomersPerHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.customersPerHour.push(getRandomInt(this.minCustomers, this.maxCustomers));
    }
  },
  calcCookiesPerHour: function() {
    this.calcCustomersPerHour();
    for(var i = 0; i < hours.length; i++) {
      var hourWorthOfCookies = Math.ceil(this.customersPerHour[i] * this.avgSales);
      this.cookiesPerHour.push(hourWorthOfCookies);
      this.totalCookies += hourWorthOfCookies;
    }
  },
  render(){
    this.calcCookiesPerHour();
    var pikeUl = document.getElementById('seattleCenter');
    for(var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
      pikeUl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookies} cookies`;
    pikeUl.appendChild(liEl);
  },
};

seattleCenter.render();

var capitolHill = {
  minCustomers: 20,
  maxCustomers: 38,
  avgSales: 2.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookies: 0,
  calcCustomersPerHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.customersPerHour.push(getRandomInt(this.minCustomers, this.maxCustomers));
    }
  },
  calcCookiesPerHour: function() {
    this.calcCustomersPerHour();
    for(var i = 0; i < hours.length; i++) {
      var hourWorthOfCookies = Math.ceil(this.customersPerHour[i] * this.avgSales);
      this.cookiesPerHour.push(hourWorthOfCookies);
      this.totalCookies += hourWorthOfCookies;
    }
  },
  render(){
    this.calcCookiesPerHour();
    var pikeUl = document.getElementById('capitolHill');
    for(var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
      pikeUl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookies} cookies`;
    pikeUl.appendChild(liEl);
  },
};

capitolHill.render();

var Alki = {
  minCustomers: 2,
  maxCustomers: 16,
  avgSales: 4.6,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookies: 0,
  calcCustomersPerHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.customersPerHour.push(getRandomInt(this.minCustomers, this.maxCustomers));
    }
  },
  calcCookiesPerHour: function() {
    this.calcCustomersPerHour();
    for(var i = 0; i < hours.length; i++) {
      var hourWorthOfCookies = Math.ceil(this.customersPerHour[i] * this.avgSales);
      this.cookiesPerHour.push(hourWorthOfCookies);
      this.totalCookies += hourWorthOfCookies;
    }
  },
  render(){
    this.calcCookiesPerHour();
    var pikeUl = document.getElementById('alki');
    for(var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
      pikeUl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookies} cookies`;
    pikeUl.appendChild(liEl);
  },
};

Alki.render();

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


