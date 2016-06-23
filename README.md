# cookie-stand

Attribution: Random number array generator code copied from MDN.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

## Thursday Tasks
From Nadia:
FIXED 1) There is no security on the form that blocks people from entering blank data.

2) The way that you are pushing things into your cookies array is causing your daily sales data to inflate. If you open up the console and open an object after adding more stores you will see that your arrays are growing beyond store hours. This is a pretty big issue, because your table will hold onto massive data amounts that it doe not need in the long run.

FIXED. 3) The store hours run from 6-8pm, which means that there should be no cookies in the 8pm hour.

4) Try to get some index.html CSS going with the images that the shop owner wanted. This is something that should be addressed.

FIXED - And although I like that you linked the paged the index and the sales pages should not be connected because the sales data is internal data for company eyes only, not the public site.
