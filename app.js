'use strict';

var storeHours = ['6AM','7AM','8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6AM', '7AM'];

var shop1 = {
  name: '1st & Pike',
  minCustomers: 23,
  maxCustomers: 65,
  cookiesPerSale: 6.3,
  numCustomers: 0,
  cookiesSold: 0,
  totalSales: 0,
  hourlySales: [],

  customersPerHour : function(){
    this.numCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
    return this.numCustomers;
  },
  cookiesPurchased : function(){
    this.cookiesSold = this.customersPerHour() * this.cookiesPerSale;
    return this.cookiesSold;
  },

  calculateSales : function(){
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
  },

};

var shop2 = {
  name: 'SeaTac',
  minCustomers: 3,
  maxCustomers: 24,
  cookiesPerSale: 1.2,
  numCustomers: 0,
  cookiesSold: 0,
  totalSales: 0,
  hourlySales: [],

  customersPerHour : function(){
    this.numCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
    return this.numCustomers;
  },
  cookiesPurchased : function(){
    this.cookiesSold = this.customersPerHour() * this.cookiesPerSale;
    return this.cookiesSold;
  },

  calculateSales : function(){
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
  },

};

var shop3 = {
  name: 'Seattle Center',
  minCustomers: 11,
  maxCustomers: 38,
  cookiesPerSale: 3.7,
  numCustomers: 0,
  cookiesSold: 0,
  totalSales: 0,
  hourlySales: [],

  customersPerHour : function(){
    this.numCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
    return this.numCustomers;
  },
  cookiesPurchased : function(){
    this.cookiesSold = this.customersPerHour() * this.cookiesPerSale;
    return this.cookiesSold;
  },

  calculateSales : function(){
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
  },

};

var shop4 = {
  name: 'Capitol Hill',
  minCustomers: 20,
  maxCustomers: 38,
  cookiesPerSale: 2.3,
  numCustomers: 0,
  cookiesSold: 0,
  totalSales: 0,
  hourlySales: [],

  customersPerHour : function(){
    this.numCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
    return this.numCustomers;
  },
  cookiesPurchased : function(){
    this.cookiesSold = this.customersPerHour() * this.cookiesPerSale;
    return this.cookiesSold;
  },

  calculateSales : function(){
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
  },

};

var shop5 = {
  name: 'Alki',
  minCustomers: 2,
  maxCustomers: 16,
  cookiesPerSale: 4.6,
  numCustomers: 0,
  cookiesSold: 0,
  totalSales: 0,
  hourlySales: [],

  customersPerHour : function(){
    this.numCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
    return this.numCustomers;
  },
  cookiesPurchased : function(){
    this.cookiesSold = this.customersPerHour() * this.cookiesPerSale;
    return this.cookiesSold;
  },

  calculateSales : function(){
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
  },

};

shop1.calculateSales();
shop2.calculateSales();
shop3.calculateSales();
shop4.calculateSales();
shop5.calculateSales();
