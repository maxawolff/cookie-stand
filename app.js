'use strict';

var storeHours = ['6AM','7AM','8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6AM', '7AM'];
var rowOne = ['      ', '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', 'Daily Location Total'];
var tableStart = document.getElementById('sales');
var tab = document.createElement('table');
tableStart.appendChild(tab);

var addTableRow = function(){
  var tr = document.createElement('tr');
  tableStart.appendChild(tr);
};

var addTableData = function(data, cName){
  var td = document.createElement('td');
  td.innerText = data;
  if(cName !== ''){
    td.className = cName;
  }
  tableStart.appendChild(td);
};

var makeHeader = function(){
  addTableRow();
  for(var i = 0; i < rowOne.length; i ++){
    addTableData(rowOne[i],'');
  }
};

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

  this.render = function(){
    addTableRow();
    addTableData(this.name,'');

    for(var i = 0; i < storeHours.length; i ++){
      this.hourlySales[i] = Math.round(this.cookiesPurchased());
      addTableData(this.hourlySales[i],'');
      this.totalSales += this.hourlySales[i];
    }

    addTableData(this.totalSales,'');
  };
}

var makeFoot = function(){
  addTableRow();
  addTableData('totals','footer');

  for(var i = 0; i < storeHours.length; i ++){
    var hourlyTotal = 0;
    for(var j = 0; j < shops.length; j ++){
      hourlyTotal += shops[j].hourlySales[i];
    }
    addTableData(hourlyTotal,'footer');
  }
  var finalTotal = 0;
  for(var i = 0; i < shops.length; i ++){
    finalTotal += shops[i].totalSales;
  }
  addTableData(finalTotal,'footer');
};

var pikeShop = new Shop('1st and Pike', 23, 65, 6.3);
var seatacShop = new Shop('SeaTac Airport', 3, 24, 1.2);
var seattleCenterShop = new Shop('Seattle Center', 11, 38, 3.7);
var capitolShop = new Shop('Capitol Hill', 20, 38, 2.3);
var alkiShop = new Shop('Alki', 2, 16, 4.6);
var shops = [pikeShop, seatacShop, seattleCenterShop, capitolShop, alkiShop];

makeHeader();
pikeShop.render();
seatacShop.render();
seattleCenterShop.render();
capitolShop.render();
alkiShop.render();

var form = document.getElementById('theForm');

function harvestAndPost(event){
  event.preventDefault();
  var newShop = new Shop();
  newShop.name = this.elements['address'].value;
  newShop.minCustomers = parseInt(this.elements['minCust'].value);
  newShop.maxCustomers = parseInt(this.elements['maxCust'].value);
  newShop.cookiesPerSale = parseFloat(this.elements['avgCook'].value);
  newShop.render();
  shops.push(newShop);
  for(var i = 15; i >= 0; i --){
    var allFooters = document.getElementsByClassName('footer');
    var oneFooter = allFooters[i];
    var container = oneFooter.parentNode;
    container.removeChild(oneFooter);
  }
  makeFoot();
}

form.addEventListener('submit', harvestAndPost);
makeFoot();
