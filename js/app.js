'use strict';
console.log('hello world');


const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seatteList = document.getElementById('seattle');
var toykoList = document.getElementById('tokyo');
var dubaiList = document.getElementById('dubai');
var parisList = document.getElementById('paris');
let limaList = document.getElementById('lima');


let seattle = {
  name: 'Seattle',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookieSale: 6.3,
  cookiesSoldPerHourArray: [],
  dailyStoreTotal: 0,

  randomCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
  },

  calcCookiesSoldPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let randomCustomer = this.randomCustomersPerHour();
      let hourlyTotal = Math.ceil(randomCustomer * this.avgCookieSale);
      this.cookiesSoldPerHourArray.push(hourlyTotal);
      this.dailyStoreTotal += hourlyTotal;
    }
  },

  render: function () {
    this.calcCookiesSoldPerHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
      seatteList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
    seatteList.appendChild(li);
  }
};

let tokyo = {
  name: 'Tokyo',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookieSale: 1.2,
  cookiesSoldPerHourArray: [],
  dailyStoreTotal: 0,

  randomCustomerPerHour: function () {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
  },

  calcCookiesSoldPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let randomCustomer = this.randomCustomerPerHour();
      let hourlyTotal = Math.ceil(randomCustomer * this.avgCookieSale);
      this.cookiesSoldPerHourArray.push(hourlyTotal);
      this.dailyStoreTotal += hourlyTotal;
    }
  },

  render: function () {
    this.calcCookiesSoldPerHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
      toykoList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
    toykoList.appendChild(li);
  }
};

let dubai = {
  name: 'Dubai',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookieSale: 3.7,
  cookiesSoldPerHourArray: [],
  dailyStoreTotal: 0,

  randomCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) +
      this.minCustPerHour);
  },

  calcCookiesSoldPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let randomCustomer = this.randomCustomersPerHour();
      console.log(randomCustomer);
      let hourlyTotal = Math.ceil(randomCustomer * this.avgCookieSale);
      console.log(hourlyTotal);
      this.cookiesSoldPerHourArray.push(hourlyTotal);
      this.dailyStoreTotal += hourlyTotal;
    }
  },

  render: function () {
    this.calcCookiesSoldPerHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
      dubaiList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
    dubaiList.appendChild(li);
  }
};

let paris = {
  name: 'Paris',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookieSale: 2.3,
  cookiesSoldPerHourArray: [],
  dailyStoreTotal: 0,

  randomCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) +
      this.minCustPerHour);
  },

  calcCookiesSoldPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let randomCustomer = this.randomCustomersPerHour();
      console.log(randomCustomer);
      let hourlyTotal = Math.ceil(randomCustomer * this.avgCookieSale);
      console.log(hourlyTotal);
      this.cookiesSoldPerHourArray.push(hourlyTotal);
      this.dailyStoreTotal += hourlyTotal;
    }
  },

  render: function () {
    this.calcCookiesSoldPerHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
      parisList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
    parisList.appendChild(li);
  }
};

let lima = {
  name: 'Lima',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookieSale: 4.6,
  cookiesSoldPerHourArray: [],
  dailyStoreTotal: 0,

  randomCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) +
      this.minCustPerHour);
  },

  calcCookiesSoldPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let randomCustomer = this.randomCustomersPerHour();
      console.log(randomCustomer);
      let hourlyTotal = Math.ceil(randomCustomer * this.avgCookieSale);
      console.log(hourlyTotal);
      this.cookiesSoldPerHourArray.push(hourlyTotal);
      this.dailyStoreTotal += hourlyTotal;
    }
  },

  render: function () {
    this.calcCookiesSoldPerHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
      limaList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
    limaList.appendChild(li);
  }
};



seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

