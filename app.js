'use strict';
var shop1 = {
  name: '1st & Pike',
  minCustomers: 23,
  maxCustomers: 65,
  cookiesPerSale: 6.3,
  numCustomers: 0,
  cookiesSold: 0,
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
    var hour = 6;
    var time = 'AM';
    var totalSales = 0;
    for(var i = 0; i < 15; i++){
      var temp = Math.round(this.cookiesPurchased());
      this.hourlySales[i] = temp;
      if(hour > 11){
        time = 'PM';
      }
      if(hour > 12){
        hour = 1;
      }
      var el = document.getElementById('pike');
      var listTag = document.createElement('li');
      listTag.innerHTML = hour + time + ': ' + temp + ' cookies';
      el.appendChild(listTag);
      hour ++;
      totalSales += this.hourlySales[i];
      if(i === 14){
        var el = document.getElementById('pike');
        var listTag = document.createElement('li');
        listTag.innerHTML = 'Total: ' + totalSales + ' cookies';
        el.appendChild(listTag);
      }
    }
    return this.hourlySales;
  },

};

var shop2 = {
  name: 'SeaTac Airport',
  minCustomers: 3,
  maxCustomers: 24,
  cookiesPerSale: 1.2,
  numCustomers: 0,
  cookiesSold: 0,
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
    var hour = 6;
    var time = 'AM';
    var totalSales = 0;
    for(var i = 0; i < 15; i++){
      var temp = Math.round(this.cookiesPurchased());
      this.hourlySales[i] = temp;
      if(hour > 11){
        time = 'PM';
      }
      if(hour > 12){
        hour = 1;
      }
      var el = document.getElementById('seatac');
      var listTag = document.createElement('li');
      listTag.innerHTML = hour + time + ': ' + temp + ' cookies';
      el.appendChild(listTag);
      hour ++;
      totalSales += this.hourlySales[i];
      if(i === 14){
        var el = document.getElementById('seatac');
        var listTag = document.createElement('li');
        listTag.innerHTML = 'Total: ' + totalSales + ' cookies';
        el.appendChild(listTag);
      }
    }
    return this.hourlySales;
  }
};

var shop3 = {
  name: 'Seattle Center',
  minCustomers: 11,
  maxCustomers: 38,
  cookiesPerSale: 3.7,
  numCustomers: 0,
  cookiesSold: 0,
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
    var hour = 6;
    var time = 'AM';
    var totalSales = 0;
    for(var i = 0; i < 15; i++){
      var temp = Math.round(this.cookiesPurchased());
      this.hourlySales[i] = temp;
      if(hour > 11){
        time = 'PM';
      }
      if(hour > 12){
        hour = 1;
      }
      var el = document.getElementById('seacent');
      var listTag = document.createElement('li');
      listTag.innerHTML = hour + time + ': ' + temp + ' cookies';
      el.appendChild(listTag);
      hour ++;
      totalSales += this.hourlySales[i];
      if(i === 14){
        var el = document.getElementById('seacent');
        var listTag = document.createElement('li');
        listTag.innerHTML = 'Total: ' + totalSales + ' cookies';
        el.appendChild(listTag);
      }
    }
    return this.hourlySales;
  }
};

var shop4 = {
  name: 'Capitol Hill',
  minCustomers: 20,
  maxCustomers: 38,
  cookiesPerSale: 2.3,
  numCustomers: 0,
  cookiesSold: 0,
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
    var hour = 6;
    var time = 'AM';
    var totalSales = 0;
    for(var i = 0; i < 15; i++){
      var temp = Math.round(this.cookiesPurchased());
      this.hourlySales[i] = temp;
      if(hour > 11){
        time = 'PM';
      }
      if(hour > 12){
        hour = 1;
      }
      var el = document.getElementById('cap');
      var listTag = document.createElement('li');
      listTag.innerHTML = hour + time + ': ' + temp + ' cookies';
      el.appendChild(listTag);
      hour ++;
      totalSales += this.hourlySales[i];
      if(i === 14){
        var el = document.getElementById('cap');
        var listTag = document.createElement('li');
        listTag.innerHTML = 'Total: ' + totalSales + ' cookies';
        el.appendChild(listTag);
      }
    }
    return this.hourlySales;
  }
};

var shop5 = {
  name: 'Alki',
  minCustomers: 2,
  maxCustomers: 16,
  cookiesPerSale: 4.6,
  numCustomers: 0,
  cookiesSold: 0,
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
    var hour = 6;
    var time = 'AM';
    var totalSales = 0;
    for(var i = 0; i < 15; i++){
      var temp = Math.round(this.cookiesPurchased());
      this.hourlySales[i] = temp;
      if(hour > 11){
        time = 'PM';
      }
      if(hour > 12){
        hour = 1;
      }
      var el = document.getElementById('alki');
      var listTag = document.createElement('li');
      listTag.innerHTML = hour + time + ': ' + temp + ' cookies';
      el.appendChild(listTag);
      hour ++;
      totalSales += this.hourlySales[i];
      if(i === 14){
        var el = document.getElementById('alki');
        var listTag = document.createElement('li');
        listTag.innerHTML = 'Total: ' + totalSales + ' cookies';
        el.appendChild(listTag);
      }
    }
    return this.hourlySales;
  }
};

shop1.calculateSales();
shop2.calculateSales();
shop3.calculateSales();
shop4.calculateSales();
shop5.calculateSales();
