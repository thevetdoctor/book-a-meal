# book-a-meal
Meal Booking App - an application that allows customers to make food orders and helps the food vendor know what the customers want to eat.


[![Build Status](https://travis-ci.org/thevetdoctor/book-a-meal.svg?branch=develop)](https://travis-ci.org/thevetdoctor/book-a-meal)
[![Coverage Status](https://coveralls.io/repos/github/thevetdoctor/book-a-meal/badge.svg?branch=develop)](https://coveralls.io/github/thevetdoctor/book-a-meal?branch=develop)
[![Test Coverage](https://api.codeclimate.com/v1/badges/6e4e2930dafba492d487/test_coverage)](https://codeclimate.com/github/thevetdoctor/book-a-meal/test_coverage)


## Introduction

book-a-meal is an application that works on the book-a-meal API that serves users(authenticated), meals, orders and menus through the following endpoints:

homepage: 'localhost:5000/

users: 'localhost:5000/api/v1/auth/users

meals: 'localhost:5000/api/v1/meals

orders: 'localhost:5000/api/v1/orders

menus: 'localhost:5000/api/v1/menus



## Using the application

+ Fork or clone into your local computer,

+ cd into server directory: (cd/server),

+ run npm start

+ open the localhost:5000 on your machine,

+ test the listed API endpoints with Postman (please install if not available on your machine).


Alternatively,

To use the remote version of the application,

+ Navigate to 'https://mealbookers.herokuapp.com/'

- or have a peep through 'https://thevetdoctor.github.io/book-a-meal/ui/index.html'


- Here, you can:

+ Signup as a new user/Login as a registered user

+ View available meals on the menu for the day

+ Make orders from the menu

+ Checkout your orders on the 'My Orders page'

+ Await your delivery (payment on delivery, please)


- As an Admin/Caterer, you can:

+ Login to the application,

+ You are immediately taken to your admin page, where you have access to the:

  - Meal page, for meal addtion, removal or mofification

  - Menu page, where you can view the menu for the day

  - Sales page, to view the summary of the sales for the particular day

  - User page, where you can view registered users, and modify their permissions


- More updates on this documentation coming soon.