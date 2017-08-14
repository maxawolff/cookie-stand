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
    for(var i = 0; i < 15; i++){
      var temp = this.cookiesPurchased();
      this.hourlySales[i] = temp;
    }
    return this.hourlySales;
  }
};

var el = document.getElementById('example');
el.innerHTML = 'This is working';
