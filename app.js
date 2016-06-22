// cookie-stand

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
  this.randNum = 0;
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
    this.cooksPerHrArray.push(Math.floor(this.custPerHrArray[i] * this.cookPerCustAvg));
  }
};
// firstAndPike.custPerHr(); //calling the instance
//console.log(firstAndPike.cooksPerHrArray);

// // render the table heading row
// Shop.prototype.headerRow = function() {
//   //Access the Dom element for data position
//   var dataTable = document.getElementById('salesData');
//
//   var trEl = document.createElement('tr');  //create the html element
//
//   var thEl = document.createElement('th'); //create the html element
//   thEl.textContent = '';  // fill
//   dataTable.appendChild(thEl);  // append
//
//   var thEl = document.createElement('th');
//   thEl.textContent = 'Daily Location Total';  // fill
//   dataTable.appendChild(thEl);  // append
//
//   for (var i = 0; i < hours.length; i++) {
//     var thEl = document.createElement('th');
//     thEl.textContent = hours[i];  // fill
//     dataTable.appendChild(thEl);  // append
//   }
//   dataTable.appendChild(trEl);  // append
//
// };

// render the table
Shop.prototype.renderData = function() {
  //Access the Dom element for data position

  // SH change all 3 of textconent assignments to reflect indivudal locations. hint: THIS
  var dataTable = document.getElementById('salesData');

  var trEl = document.createElement('tr');  //create the html element

  var tdEl = document.createElement('td'); //create the html element
  tdEl.textContent = this.shopLoc;  // fill
  dataTable.appendChild(tdEl);  // append

  var tdEl = document.createElement('td');
  tdEl.textContent = 'PH total datum';  // fill
  dataTable.appendChild(tdEl);  // append

  for (var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cooksPerHrArray[i];  // fill
    dataTable.appendChild(tdEl);  // append
  }

  dataTable.appendChild(trEl);  // append

};
firstAndPike.renderData();
seatacAirport.renderData();
seattleCenter.renderData();
