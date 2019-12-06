# musicfront
A new music instrument marketplace


## Pages

* Landing page: will have some products listed, maybe "hot products", @ "/"
* Product list page: navigated from instrument type in navbar, will have list of all products of one instrument type in product blocks, @ "/products/:instrumentFamily"
    * product blocks: contain name, image, brand, model, price and rating
* Individual product page: navigated from product list, will have more product information, @ "/products/:id"
    * product page: contain name, image, brand, model, price, rating, description, and reviews
* Cart page: will list all products conatined in user shopping cart will lead to checkout page
* (Login Page): login user, look into passport.js
* Checkout Page: prompt for credit card info from user