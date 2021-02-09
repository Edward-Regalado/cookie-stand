'use strict';


//Global variables
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm',
  '3pm', '4pm', '5pm', '6pm', '7pm'];

const dailyStoreTotal = [];

let table = document.getElementById('cookie-table');

let body = document.createElement('tbody');
table.appendChild(body);


function Store(name, minCust, maxCust, avgCookieSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.cookiesSoldPerHourArray = [];
  this.dailyStoreTotal = 0;
  dailyStoreTotal.push(this);
  this.locationRender();
}

Store.prototype.randomCustomersPerHour = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust +
    1) + this.minCust);
};

Store.prototype.calcCookiesSoldPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    let randomCustomer = this.randomCustomersPerHour();
    let hourlyTotal = Math.ceil(randomCustomer * this.avgCookieSale); +1;
    this.cookiesSoldPerHourArray.push(hourlyTotal);
    this.dailyStoreTotal += hourlyTotal;
  }
};

Store.prototype.locationRender = function () {
  this.calcCookiesSoldPerHour();
  let tr = document.createElement('tr');
  let th = document.createElement('th');

  th.textContent = this.name;
  tr.appendChild(th); // make td add text and put it to the row
  for (let i = 0; i < this.cookiesSoldPerHourArray.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.cookiesSoldPerHourArray[i];
    tr.appendChild(td);
  }
  let td = document.createElement('td');
  td.textContent = this.dailyStoreTotal;
  tr.appendChild(td);
  body.appendChild(tr);
};

function headerRender() {
  let head = document.createElement('thead');
  let tr = document.createElement('tr');
  let th = document.createElement('th');
  th.textContent = 'Stores';
  tr.appendChild(th);

  for (var i = 0; i < hours.length; i++) {
    th = document.createElement('th');
    th.textContent = hours[i];
    tr.appendChild(th);
  }

  th = document.createElement('th');
  th.textContent = 'Store Daily Totals';
  tr.appendChild(th);
  head.appendChild(tr);
  table.appendChild(head);
}

function footerRender() {
  let foot = document.createElement('tfoot');
  let tr = document.createElement('tr');
  let th = document.createElement('th');
  th.textContent = 'totals';
  tr.appendChild(th);
  foot.appendChild(tr);
  table.appendChild(foot);
}

let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

headerRender();
footerRender();