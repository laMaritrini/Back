Back from the Miranda project, with Node and Express

## MY SQL TABLES:

### USERS

CREATE TABLE users (
id: INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
full_name: VARCHAR(255) NOT NULL,
job_title: ENUM('Manager','Room Service','Reception')
email: VARCHAR(255) NOT NULL,
photo: VARCHAR(255) NOT NULL,
phone_number: VARCHAR(20) NOT NULL,
start_date: DATE NOT NULL,
working_functions: VARCHAR(255) NOT NULL,
working_situation: ENUM("ACTIVE", "INACTIVE")
)

### ROOMS

CREATE TABLE rooms (
id: INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
photo: VARCHAR(255) NOT NULL,
room_type: ENUM(('Double Superior','Single Bed','Suite','Double Bed') NOT NULL,
room_number: INT NOT NULL,
facilities: VARCHAR(255) NOT NULL,
price: DECIMAL(10,2) NOT NULL,
offer_price: DECIMAL(10,2)
description: VARCHAR(255) NOT NULL,
status: ENUM('AVAILABLE','BOOKED')

)

### BOOKINGS

CREATE TABLE bookings (
id: INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
full_name: VARCHAR(255) NOT NULL,
order_date: DATE,
check_in: DATE,
check_out: DATE,
special_request:VARCHAR(255) ,
status: ENUM(('In progress','Check In','Check Out')
idRoom: INT NULL,
CONSTRAIN id_foreign
FOREIGN KEY (idRoom) REFERENCES rooms(id)
ON UPDATE CASCADE
ON DELETE SET NULL
)

### CONTACTS

CREATE TABLE contacts (
id: INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
photo: VARCHAR(255) NOT NULL,
date: DATE,
customer: VARCHAR(255) NOT NULL,
email:VARCHAR(255) NOT NULL,
phone_number: VARCHAR(20) NOT NULL,
title: VARCHAR(255) NOT NULL,
comment: VARCHAR(255) NOT NULL,
)
