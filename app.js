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
    }
    return this.hourlySales;
  }
};

shop1.calculateSales();
