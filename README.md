# MusicFront

## Description

Musicfront is a speculative storefront for a music instrument seller. The site allows for a seller to create and showcase products with individualized pages. A customer is able to create an account, authenticate themselves, and have a shopping experience with a cart and a checkout.

## Background

The site is built using Node and express along with a MySQL database interfaced with sequelize and Handlebars for its view engine.

MusicFront's internal API has basic CRUD functionality for its several models. The models include data for products, product reviews, and users as well as a join table associating users with the products in their shopping cart through the order model.

Users are managed and authenticated through a passportjs local strategy and information is kept safe with bcryptjs encryption.

## Usage

The homepage of the site simply shows all available products and allows the user to filter through our products by category. Since we have focused on music instruments the categories on the site are types of instruments but there are many possibilities available to tailor the information displayed.

Each product links to an individualized page that shows user submitted reviews, product descriptions, and pricing. These product pages are templated consisitently via Handlebars.

The checkout loads to our page as an overlay and simply interacts with our database to keep track of customer orders.

## Authors

* __Jeffrey Mann__ - Database Management
* __Cesar Sanchez-Vegas__ - Interaction design
* __Nico Loparco__ - Front End design

## License

This project is licensed under the MIT License

Copyright 2019

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.