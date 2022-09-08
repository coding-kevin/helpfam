# Tickets

## Overview

This web app allows users to submit IT support tickets, to add worknotes, and to resolve or delete tickets as needed. Users are divided into two groups: customers and admins. The customer user represents a non-technical user requesting help with a problem, and the admin user represents a Help Desk staff member who works on the ticket until it is resolved.

This app is made in the MERN stack (MongoDB, Express, React, and Node), using Redux, JSON Web Tokens (JWT), and React Hook Form. It is hosted on Heroku.

## Permissions structure

Customers can only see tickets they have created. They can't edit, resolve or delete tickets.

Admins can view all tickets, sort by name, add worknotes, resolve and delete tickets.

## Guest accounts

Separate guest accounts are made available for both customer and admin users. Regular registration is also possible.

## Authentication

Accounts are authenticated with JSON Web Tokens and bcrypt. The passwords are salted and hashed with bcrypt and then signed using a JWT secret.

## Known Issues and Next Steps

Adding more tests

Improvements to scalability, especially the filter buttons.
