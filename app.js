// cookie-stand

// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// Store the results for each location in a separate array... perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser

var hours = ['6:00am', '7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm', '1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'];
// construct object for cookie stand.
function Shop(shopLoc, custPerHrMin, custPerHrMax, cookPerCustAvg) {
  this.shopLoc = shopLoc;
  this.custPerHrMin = custPerHrMin; // minimum number of customers per hour.
  this.custPerHrMax = custPerHrMax; // max number of customers per hour.
  this.cookPerCustAvg = cookPerCustAvg; // average number of cookies purchased per customer.
  console.log('The ' + shopLoc + ' store sells an avg of ' + cookPerCustAvg + 'cookies per customer.');
  this.custPerHrArray = []; // array containing a random number of customers per hour.
  this.cooksPerHrArray = []; // array containing number of cookies sold in an hour period.
  // this.randNum = 0;
  // custArray: [],
};
var firstAndPike = new Shop('1st and Pike', 23, 65, 6.3);
var seatacAirport = new Shop('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Shop('Seattle Center', 11, 38, 3.7);

Shop.prototype.randNum = function() {
  return Math.floor(Math.random() * (this.custPerHrMax - this.custPerHrMin + 1)) + this.custPerHrMin;
};

Shop.prototype.custPerHr = function() {
  for (var i = 0; i < hours.length; i++) {
    this.custPerHrArray[i] = this.randNum();
    console.log(this.custPerHrArray);
    this.cooksPerHrArray.push(Math.floor(this.custPerHrArray[i] * this.cookPerCustAvg));
  }
};
firstAndPike.custPerHr(); //calling the instance

Shop.prototype.renderData = function() {
  //Access the Dom element for data position
  var dataList = document.getElementById('salesData');
  for (var i = 0; i < hours.length; i++) {
    //create the html element
    var listItem = document.createElement('li');
    //distribute content to the element
    listItem.textContent = hours[i] + this.cooksPerHrArray.push() + ' cookies';
    console.log(listItem.textContent);
    //append the element to the Dom
    alkiData.appendChild(listItem);
  }
};
// Shop.salesData();

// console.log(Shop.custPerHrArray + ' Shop.custPerHrArray');
// console.log(Shop.cooksPerHrArray + ' Shop.cooksPerHrArray');
