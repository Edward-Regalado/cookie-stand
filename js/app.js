'use strict';
//console.log('hello world');

// global variables
// hours array
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// get elements by ID for the 5 list
let seatteList = document.getElementById('seattle');
let toykoList = document.getElementById('tokyo');
let dubaiList = document.getElementById('dubai');
let parisList = document.getElementById('paris');
let limaList = document.getElementById('lima');

// Object literals - we are creating 5 of these, but in theory, we can do this with just one object literal because they're dynamic
let seattle = {
  name: 'Seattle',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookieSale: 6.3,
  cookiesSoldPerHourArray: [],
  dailyStoreTotal: 0,

  // Methoods inside objects always use (method name): function(){}
  // This method generates random number of customers per hour.
  // https://www.w3schools.com/js/js_random.asp
  randomCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
  },

  // This method calculates average cookies sold per hour * random customer method, then pushes to the cookies array and daily store total
  calcCookiesSoldPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      // we are setting the function this.randomCustomerPerHour = to a variable, then feeding it to the hourlyTotal calc. We do this because it looks cleaner.
      let randomCustomer = this.randomCustomersPerHour();
      // this generates hourlyTotal by multiplying randomCusomter/this.randomCustPerHour * avgCookieSale
      let hourlyTotal = Math.ceil(randomCustomer * this.avgCookieSale);
      // pushing hourlyTotal to the cookies array
      this.cookiesSoldPerHourArray.push(hourlyTotal);
      // pushing the hourTotal to the dailyStoreTotal. This is shorthand for sum total and can also be written this.dailyStoreTotla = this.dailyStoreTotal + hourlyTotal;
      this.dailyStoreTotal += hourlyTotal;
    }
  },

  // This method renders the results- 
  render: function () {
    // render function is calling the this.calcCookiesSoldPerHour function because it responsible for all the calculations
    this.calcCookiesSoldPerHour();
    // this for loop cycles through the hours array index
    for (let i = 0; i < hours.length; i++) {
      // creates an element- takes a string and li.textContent gives it content/puts it on a page
      let li = document.createElement('li');
      // we are feeding the li element hours and cookies sold from the array
      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
      // this outputs/appends to the DOM
      seatteList.appendChild(li);
    }
    // total: 
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


// Executable Code- this runs stuff/make things happen. We are calling the render function because all of the methods are added to the next method(they build on each other), thus making the render function the only thing need to make the code run.
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

