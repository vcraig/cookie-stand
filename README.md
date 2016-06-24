# cookie-stand

Attribution: Random number array generator code copied from MDN.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

## Thursday Tasks
FIXED 1) Error handling for form input.

FIXED 2) Stop the over-filling of data arrays. SOLUTION: a. In the cooksPerHr method, I replaced the push method with assignment. b. Examined flow of script. Rearranged pieces so that vars, functions, methods load in the order that they are needed.

FIXED. 3) The store hours run from 6-8pm, which means that there should be no cookies in the 8pm hour.

FIXED - And although I like that you linked the paged the index and the sales pages should not be connected because the sales data is internal data for company eyes only, not the public site.

* Style up the public facing page (index.html) to make it appealing to customers. NOTE: You must use all of the images in the adjacent asset directory. Your client insists that you use Every. Single. One.

* Apply a similar style to the sales.html page.

## Stretch Goals

* Need row of totals across the bottom.

Give your input form functionality to update the data for a location that is already in the table. This is going to require some additional pieces, such as:

Some kind of if statement to test whether the inputted cookie stand location name matches one that is already in the table (or other mechanism to indicate which location to update)
The new input numbers need to be run through the calculation methods as with the original creation of the instances
The individual rows will need id properties so that their values can be updated in place (or just build a mechanism to re-render the table but WITHOUT re-rolling the random numbers and changing the numbers for the rest of the locations)
Make a style guide, using this one that a team Brian was on made for Everlast as a model.

Make two additional pages:

Mock up an order form that would be public facing (store.html) so that visitors to the website can order salmon cookies and swag. That form would need to receive all of the things you'd expect on an order form: name, address, payment info, products to order, quantities, special instructions, and so on.
A second 'private' page (order-processing.html) that shows a list of pending orders and the individual order details. The business owner can then process the orders by clicking a button next to the order that then moves that list item to a 'Filled Orders' list at the bottom of the page.
