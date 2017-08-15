'use strict';

var tableStart = document.getElementById('sales');
var tab = document.createElement('table');
tableStart.appendChild(tab);

var rowOne = ['      ', '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', 'Daily Location Total'];
var tr = document.createElement('tr');
tableStart.appendChild(tr);

for(var i = 0; i < rowOne.length; i ++){
  var td = document.createElement('td');
  td.innerText = rowOne[i];
  tableStart.appendChild(td);
}

var storeHours = ['6AM','7AM','8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6AM', '7AM'];

function Shop(name, minCustomers, maxCustomers, cookiesPerSale){
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.cookiesPerSale = cookiesPerSale;
  this.cookiesSold = 0;
  this.totalSales = 0;
  this.hourlySales = [];

  this.customersPerHour = function() {
    this.numCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
    return this.numCustomers;
  };

  this.cookiesPurchased = function() {
    this.cookiesSold = this.customersPerHour() * this.cookiesPerSale;
    return this.cookiesSold;
  };

  this.calculateSales = function(){
    var tr = document.createElement('tr');
    tableStart.appendChild(tr);

    var td = document.createElement('td');
    td.innerText = this.name;
    tableStart.appendChild(td);

    for(var i = 0; i < storeHours.length; i ++){
      this.hourlySales[i] = Math.round(this.cookiesPurchased());
      var td = document.createElement('td');
      td.innerText = this.hourlySales[i];
      tableStart.appendChild(td);
      this.totalSales += this.hourlySales[i];
    }

    var td = document.createElement('td');
    td.innerText = this.totalSales;
    tableStart.appendChild(td);
  };
}

var pikeShop = new Shop('1st and Pike', 23, 65, 6.3);
var seatacShop = new Shop('SeaTac Airport', 3, 24, 1.2);
var seattleCenterShop = new Shop('Seattle Center', 11, 38, 3.7);
var capitolShop = new Shop('Capitol Hill', 20, 38, 2.3);
var alkiShop = new Shop('Alki', 2, 16, 4.6);
var shops = [pikeShop, seatacShop, seattleCenterShop, capitolShop, alkiShop];
pikeShop.calculateSales();
seatacShop.calculateSales();
seattleCenterShop.calculateSales();
capitolShop.calculateSales();
alkiShop.calculateSales();

var tr = document.createElement('tr');
tableStart.appendChild(tr);

var td = document.createElement('td');
td.innerText = 'totals';
tableStart.appendChild(td);

for(var i = 0; i < storeHours.length; i ++){
  var hourlyTotal = 0;
  for(var j = 0; j < shops.length; j ++){
    hourlyTotal += shops[j].hourlySales[i];
  }
  var td = document.createElement('td');
  td.innerText = hourlyTotal;
  tableStart.appendChild(td);
}
var finalTotal = 0;
for(var i = 0; i < shops.length; i ++){
  finalTotal += shops[i].totalSales;
}
var td = document.createElement('td');
td.innerText = finalTotal;
tableStart.appendChild(td);
