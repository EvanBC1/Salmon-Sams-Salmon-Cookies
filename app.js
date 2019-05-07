'use strict';
var cookiesList = document.getElementById('cookiesList');
var openingHour = 6;
var closingHour = 20;
var hoursOpen = (closingHour + 1) - openingHour;

var pike = {
  minCustomers: 23,
  maxCustomers: 65,
  avgSales: 6.3,
  avgCookies: [],
  
  cookiesPerHour: function() {
    var totalCookies = 0;
    var time = openingHour;
    for(var i = 0; i < hoursOpen; i++){
      this.avgCookies.push(Math.ceil(getRandomInt(this.minCustomers , this.maxCustomers) * this.avgSales));
      totalCookies += this.avgCookies[i];
      
      if(time < 12){
        console.log(time + 'am: ' + this.avgCookies[i] + ' cookies');
      }else if(time === 12){
        console.log((time) + 'pm: ' + this.avgCookies[i] + ' cookies');
      }else{
        console.log((time - 12) + 'pm: ' + this.avgCookies[i] + ' cookies');
      }
      time++;
    }
    console.log('Total: ' + totalCookies + ' cookies');
  }
  // render: function() {
  //   var liEl = document.createElement('li');
  //   liEl.textContent = this.avgCookies;
  //   cookiesList.appendChild(liEl);
}; 

pike.cookiesPerHour();

var seaTac = {
  minCustomers: 3,
  maxCustomers: 24,
  avgSales: 1.2,
  avgCookies: [],
  
  cookiesPerHour: function() {
    var totalCookies = 0;
    var time = openingHour;
    for(var i = 0; i < hoursOpen; i++){
      this.avgCookies.push(Math.ceil(getRandomInt(this.minCustomers , this.maxCustomers) * this.avgSales));
      totalCookies += this.avgCookies[i];
      
      if(time < 12){
        console.log(time + 'am: ' + this.avgCookies[i] + ' cookies');
      }else if(time === 12){
        console.log((time) + 'pm: ' + this.avgCookies[i] + ' cookies');
      }else{
        console.log((time - 12) + 'pm: ' + this.avgCookies[i] + ' cookies');
      }
      time++;
    }
    console.log('Total: ' + totalCookies + ' cookies');
  }
}; 

seaTac.cookiesPerHour();

var seattleCenter = {
  minCustomers: 3,
  maxCustomers: 24,
  avgSales: 1.2,
  avgCookies: [],
  
  cookiesPerHour: function() {
    var totalCookies = 0;
    var time = openingHour;
    for(var i = 0; i < hoursOpen; i++){
      this.avgCookies.push(Math.ceil(getRandomInt(this.minCustomers , this.maxCustomers) * this.avgSales));
      totalCookies += this.avgCookies[i];
      
      if(time < 12){
        console.log(time + 'am: ' + this.avgCookies[i] + ' cookies');
      }else if(time === 12){
        console.log((time) + 'pm: ' + this.avgCookies[i] + ' cookies');
      }else{
        console.log((time - 12) + 'pm: ' + this.avgCookies[i] + ' cookies');
      }
      time++;
    }
    console.log('Total: ' + totalCookies + ' cookies');
  }
}; 

seattleCenter.cookiesPerHour();

var CapitolHill = {
  minCustomers: 3,
  maxCustomers: 24,
  avgSales: 1.2,
  avgCookies: [],
  
  cookiesPerHour: function() {
    var totalCookies = 0;
    var time = openingHour;
    for(var i = 0; i < hoursOpen; i++){
      this.avgCookies.push(Math.ceil(getRandomInt(this.minCustomers , this.maxCustomers) * this.avgSales));
      totalCookies += this.avgCookies[i];
      
      if(time < 12){
        console.log(time + 'am: ' + this.avgCookies[i] + ' cookies');
      }else if(time === 12){
        console.log((time) + 'pm: ' + this.avgCookies[i] + ' cookies');
      }else{
        console.log((time - 12) + 'pm: ' + this.avgCookies[i] + ' cookies');
      }
      time++;
    }
    console.log('Total: ' + totalCookies + ' cookies');
  }
}; 

CapitolHill.cookiesPerHour();

var Alki = {
  minCustomers: 3,
  maxCustomers: 24,
  avgSales: 1.2,
  avgCookies: [],
  
  cookiesPerHour: function() {
    var totalCookies = 0;
    var time = openingHour;
    for(var i = 0; i < hoursOpen; i++){
      this.avgCookies.push(Math.ceil(getRandomInt(this.minCustomers , this.maxCustomers) * this.avgSales));
      totalCookies += this.avgCookies[i];
      
      if(time < 12){
        console.log(time + 'am: ' + this.avgCookies[i] + ' cookies');
      }else if(time === 12){
        console.log((time) + 'pm: ' + this.avgCookies[i] + ' cookies');
      }else{
        console.log((time - 12) + 'pm: ' + this.avgCookies[i] + ' cookies');
      }
      time++;
    }
    console.log('Total: ' + totalCookies + ' cookies');
  }
}; 

Alki.cookiesPerHour();

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// for (var i = 0; i < avgCookies.length; i++) {
//   avgCookies[i].render();
// }
