'use strict';

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
    var location = document.getElementById('sales');
    var locationName = document.createElement('h2');
    locationName.innerText = this.name;
    location.appendChild(locationName);

    var list = document.createElement('ul');
    location.appendChild(list);
    for(var i = 0; i < storeHours.length; i++){
      this.hourlySales[i] = Math.round(this.cookiesPurchased());
      var listItems = document.createElement('li');
      listItems.innerText = storeHours[i] + ': ' + this.hourlySales[i] + ' cookies';
      list.appendChild(listItems);
      this.totalSales += this.hourlySales[i];
    }
    var listItems = document.createElement('li');
    listItems.innerText = 'Total ' + this.totalSales + ' cookies';
    list.appendChild(listItems);
  };
}

var pikeShop = new Shop('1st and Pike', 23, 65, 6.3);
var seatacShop = new Shop('SeaTac Airport', 3, 24, 1.2);
var seattleCenterShop = new Shop('Seattle Center', 11, 38, 3.7);
var capitolShop = new Shop('Capitol Hill', 20, 38, 2.3);
var alkiShop = new Shop('Alki', 2, 16, 4.6);
pikeShop.calculateSales();
seatacShop.calculateSales();
seattleCenterShop.calculateSales();
capitolShop.calculateSales();
alkiShop.calculateSales();
