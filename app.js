// cookie-stand
var hours = ['6-7am', '7-8am','8-9am','9-10am','10-11am','11-Noon','Noon-1pm', '1-2pm','2-3pm','3-4pm','4-5pm','5-6pm','6-7pm','7-8pm'];
var shops = [];
var addStoreForm = document.getElementById('add_store_form');

// construct object for cookie stand.
function Shop(shopLoc, custPerHrMin, custPerHrMax, cookPerCustAvg) {
  this.shopLoc = shopLoc;
  this.custPerHrMin = custPerHrMin; // minimum number of customers per hour.
  this.custPerHrMax = custPerHrMax; // max number of customers per hour.
  this.cookPerCustAvg = cookPerCustAvg; // average number of cookies purchased per customer.
  this.custPerHrArray = []; // array containing a random number of customers per hour.
  this.cooksPerHrArray = []; // array containing number of cookies sold in an hour period.
  this.totalDailyCookies = 0;
  this.cooksPerHr();
  shops.push(this);
};

addStoreForm.addEventListener('submit', function(event){
  event.preventDefault();
  var minCustPerHour =        parseInt(document.getElementById('min_cust_per_hour').value),
    maxCustPerHour = parseInt(document.getElementById('max_cust_per_hour').value),
    avgCookiesPerCust = parseFloat(document.getElementById('avg_cookies_per_hour').value),
    storeName = document.getElementById('shop_location').value;
    //data validation
  if (!minCustPerHour || !maxCustPerHour || !avgCookiesPerCust) {
    return alert('Please enter a number in the field.');
  };
  if (!storeName) {
    return alert('Please enter the store name.');
  };
  if (maxCustPerHour < minCustPerHour) {
    return alert('You entered a maximum number of customers per hour that is smaller than your minimum. Please enter a larger or equal number.');
  };
  new Shop(storeName, minCustPerHour, maxCustPerHour, avgCookiesPerCust);
  var dataTable = document.getElementById('salesData');
  dataTable.textContent = '';
  headerRow();
  renderShopsArray();
});

Shop.prototype.cooksPerHr = function() {
  var randNum = 0;
  for (var i = 0; i < hours.length; i++) {
    randNum = Math.floor(Math.random() * (this.custPerHrMax - this.custPerHrMin + 1)) + this.custPerHrMin;
    this.custPerHrArray[i] = randNum;
    this.cooksPerHrArray[i] = (Math.floor(this.custPerHrArray[i] * this.cookPerCustAvg));
    this.totalDailyCookies += this.cooksPerHrArray[i];
  }
};

// instances of Shop oject
var firstAndPike = new Shop('1st and Pike', 23, 65, 6.3);
var seatacAirport = new Shop('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Shop('Seattle Center', 11, 38, 3.7);
var capitolHill = new Shop('Capitol Hill', 20, 38, 2.3);
var alki = new Shop ('Alki', 2, 16, 4.6);

// render the table
Shop.prototype.renderData = function() {
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
    shops[i].renderData();
  }
};
//call functions here
headerRow();
renderShopsArray();
