'use strict';


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  name: 'Seattle',
  // the min number of customers per hour.
  minimunCustomersEachHour: 23,
  // the max number of customers per hour.
  maximumCustomerEachHour: 65,
  // the average number of cookies purchased per customer.
  avgerageCookieSoldPerCustomer: 6.3,

  cookiesSoldPerHourArray: [],
  // swill hold the calculated number of cookies sold in the store all day long

  dailyStoreTotal: 0,
  // a metho to calculate random number of customers per hour
  randomCustomersEachHour: function () {
    //console.log('Im in randomCustomerEachHour');
    // generates a random number of customers inclusive of the min and the max
    return Math.floor(Math.randon() * (this.maximumCustomerEachHour - this.minimunCustomersEachHour + 1) + this.minimunCustomersEachHour);
  }

  // a method to calculate and populate our number of cookies sold per hour array
  calcCookiesSoldEachHour: function () {
    for (var i = 0; i < hours.length; i++) {
      let cookiesSold = Math.ceil(this.randomCustomerEachHour() * this.avgerageCookieSoldPerCustomer);
      this.cookiesSoldPerHourArray.push(cookiesSold);
      //this.dailyStoreTotal[i] += cookiesSoldEachHour;
      console.log(this.cookiesSoldEachHour);
      }
    }
    //console.log(randomCustomerEachHour);

    // do something maybe use a for loop
    // multiply customer number by average
    // handle the number do some rounding
    // push into the cookieSoldPerHourArray 
  }

  // a method to render the list items
  render: function () {
    this.calcCookiesSoldEachHour();
    console.log('I an in the render method');
    // do something
  }
};

seattle.render();


/*let tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
}

let dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
}

let paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
}

let lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
}
*/