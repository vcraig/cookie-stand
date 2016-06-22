// cookie-stand

var hours = ['6:00am', '7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm', '1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'];
var shops = [];
var addStoreForm = document.getElementById('add_store_form');

// construct object for cookie stand.
function Shop(shopLoc, custPerHrMin, custPerHrMax, cookPerCustAvg) {
  this.shopLoc = shopLoc;
  this.custPerHrMin = custPerHrMin; // minimum number of customers per hour.
  this.custPerHrMax = custPerHrMax; // max number of customers per hour.
  this.cookPerCustAvg = cookPerCustAvg; // average number of cookies purchased per customer.
  // console.log('The ' + shopLoc + ' store sells an avg of ' + cookPerCustAvg + ' cookies per customer.');
  this.custPerHrArray = []; // array containing a random number of customers per hour.
  this.cooksPerHrArray = []; // array containing number of cookies sold in an hour period.
  this.totalDailyCookies = 0;
  shops.push(this);
  // this.randNum = 0;
}

addStoreForm.addEventListener('submit', function(event){
  event.preventDefault();
  var minCustPerHour = parseInt(document.getElementById('min_cust_per_hour').value),
    maxCustPerHour = parseInt(document.getElementById('max_cust_per_hour').value),
    avgCookiesPerCust = parseFloat(document.getElementById('avg_cookies_per_hour').value),
    storeName = document.getElementById('shop_location').value;
    //here is where data validation will go if we have time
  new Shop(storeName, minCustPerHour, maxCustPerHour, avgCookiesPerCust);
  var dataTable = document.getElementById('salesData');
  dataTable.textContent = '';
  headerRow();
  renderShopsArray();
});

var firstAndPike = new Shop('1st and Pike', 23, 65, 6.3);
var seatacAirport = new Shop('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Shop('Seattle Center', 11, 38, 3.7);
var capitolHill = new Shop('Capitol Hill', 20, 38, 2.3);
var alki = new Shop ('Alki', 2, 16, 4.6);

// Shop.prototype.randNumGen = function() {
//   // return Math.floor(Math.random() * (this.custPerHrMax - this.custPerHrMin + 1)) + this.custPerHrMin;
//   var randNum = 0;
//   randNum = Math.floor(Math.random() * (this.custPerHrMax - this.custPerHrMin + 1)) + this.custPerHrMin;
// //return Math.floor(Math.random() * (max - min + 1)) + min;
// };

Shop.prototype.cooksPerHr = function() {
  var randNum = 0;
  for (var i = 0; i < hours.length; i++) {
    randNum = Math.floor(Math.random() * (this.custPerHrMax - this.custPerHrMin + 1)) + this.custPerHrMin;
    this.custPerHrArray[i] = randNum;
    this.cooksPerHrArray.push(Math.floor(this.custPerHrArray[i] * this.cookPerCustAvg));
    this.totalDailyCookies += this.cooksPerHrArray[i];
  }
  // console.log(this.cooksPerHrArray);
};

// firstAndPike.cooksPerHr();
// seatacAirport.cooksPerHr();
// seattleCenter.cooksPerHr();
// capitolHill.cooksPerHr();
// alki.cooksPerHr();

//sams example of clearing comments, we will use to clear table
// clearChatList.addEventListener('click', function() {
//   chatList.innerHTML = '';
//   console.log('You just cleared the chat list!');
//   allComments = [];
// });

// render the table
Shop.prototype.renderData = function() {
  this.cooksPerHr();
  var dataTable = document.getElementById('salesData');
  var trEl = document.createElement('tr');  //create the html element
  var tdEl = document.createElement('td'); //create the html element
  tdEl.textContent = this.shopLoc;  // fill
  dataTable.appendChild(tdEl);  // append
  var tdEl = document.createElement('td');
  tdEl.textContent = this.totalDailyCookies;  // fill
  dataTable.appendChild(tdEl);  // append
  for (var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cooksPerHrArray[i];  // fill
    dataTable.appendChild(tdEl);  // append
  }
  dataTable.appendChild(trEl);  // append
};
// render the table heading row
var headerRow = function() {
  //Access the Dom element for data position
  var dataTable = document.getElementById('salesData');
  var trEl = document.createElement('tr');  //create the html element
  var thEl = document.createElement('th'); //create the html element
  thEl.textContent = '';  // fill
  dataTable.appendChild(thEl);  // append
  var thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Total';  // fill
  dataTable.appendChild(thEl);  // append
  for (var i = 0; i < hours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];  // fill
    dataTable.appendChild(thEl);  // append
  }
  dataTable.appendChild(trEl);  // append
};

var renderShopsArray = function() {
  for(var i = 0; i < shops.length; i++) {
    shops[i].renderData(); //you can add i later to shade even rows
  }
};
//call functions here
headerRow();
renderShopsArray();
