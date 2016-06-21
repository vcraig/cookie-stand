// cookie-stand

// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// Store the results for each location in a separate array... perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser

var hours = ['6:00am', '7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm', '1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'];
// Object template for cookie stand.
var shopAlki = {
  custMin: 23, // minimum number of customers per hour.
  custMax: 65, // max number of customers per hour.
  cookAvg: 6.3, // average number of cookies purchased per customer.
  hourlyCust: [], // array containing a random number of customers per hour.
  hourlyArray: [], // array containing number of cookies sold in an hour period.
  randNum: 0,
  custArray: [],
};

shopAlki.randNum = function() {
  return Math.floor(Math.random() * (shopAlki.custMax - shopAlki.custMin + 1)) + shopAlki.custMin;
};

shopAlki.custArray = function() {
  for (var i = 0; i < hours.length; i++) {
    shopAlki.hourlyCust[i] = shopAlki.randNum();
    shopAlki.hourlyArray.push(Math.floor(shopAlki.hourlyCust[i] * shopAlki.cookAvg));
  }
};

shopAlki.salesData = function() {
  //Access the Dom element for data position
  var dataList = document.getElementById('alkiData');
  for (var i = 0; i < hours.length; i++) {
    //create the html element
    var listItem = document.createElement('li');
    //distribute content to the element
    listItem.textContent = hours[i] + shopAlki.hourlyArray.push() + ' cookies';
    console.log(listItem.textContent);
    //append the element to the Dom
    alkiData.appendChild(listItem);
  }
};
shopAlki.salesData();

shopAlki.custArray();
// console.log(shopAlki.hourlyCust + ' shopAlki.hourlyCust');
console.log(shopAlki.hourlyArray + ' shopAlki.hourlyArray');
