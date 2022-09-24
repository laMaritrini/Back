const { faker } = require("@faker-js/faker");
const { db } = require("./db");

let sqlUser =
  "INSERT INTO users (full_name, job_title, email, photo, phone_number, password, start_date, working_functions, working_situation) VALUES (?)";
for (let i = 0; i <= 15; i++) {
  const users = [
    faker.name.fullName(),
    faker.helpers.arrayElement(["Manager", "Room Service", "Reception"]),
    faker.internet.email(),
    faker.image.avatar(),
    faker.phone.number("+34 ### ## ##"),
    faker.internet.password(),
    faker.date.recent(),
    faker.lorem.words(),
    faker.helpers.arrayElement(["ACTIVE", "INACTIVE"]),
  ];
  db.query(sqlUser, [users], function (err, result) {
    if (err) throw err;
    else console.dir("Successfully inserted the row in table.");
    console.log(result);
  });
}
let sqlRoom =
  "INSERT INTO rooms ( photo, room_type, room_number, facilities, price, offer_price, description, status) VALUES (?)";
for (let i = 0; i <= 20; i++) {
  const rooms = [
    faker.image.image(),
    faker.helpers.arrayElement([
      "Double Superior",
      "Single Bed",
      "Suite",
      "Double Bed",
    ]),
    faker.random.numeric(2),
    faker.helpers.fake("WiFi, Cleaning, Breakfast, AC... "),
    faker.finance.amount(200, 1000, 2),
    faker.finance.amount(200, 500, 2),

    faker.lorem.words(),
    faker.helpers.arrayElement(["AVAILABLE", "BOOKED"]),
  ];
  db.query(sqlRoom, [rooms], function (err, result) {
    if (err) throw err;
    else console.dir("Successfully inserted the row in table.");
    console.log(result);
  });
}

let sqlBooking =
  "INSERT INTO bookings (full_name, order_date, check_in, check_out, special_request, status) VALUES (?)";
for (let i = 0; i <= 35; i++) {
  const bookings = [
    faker.name.fullName(),
    faker.date.recent(),
    faker.date.between("2022-10-01T00:00:00.000Z", "2023-03-01T00:00:00.000Z"),
    faker.date.between("2023-03-01T00:00:00.000Z", "2023-04-22T00:00:00.000Z"),
    faker.lorem.words(),
    faker.helpers.arrayElement(["In progress", "Check In", "Check Out"]),
  ];
  db.query(sqlBooking, [bookings], function (err, result) {
    if (err) throw err;
    else console.dir("Successfully inserted the row in table.");
    console.log(result);
  });
}

let sqlContact =
  "INSERT INTO contacts (photo, date, customer, email, phone_number, title, comment) VALUES (?)";
for (let i = 0; i <= 15; i++) {
  const contacts = [
    faker.image.avatar(),
    faker.date.between("2015-10-01T00:00:00.000Z", "2022-07-01T00:00:00.000Z"),
    faker.name.fullName(),
    faker.internet.email(),
    faker.phone.number("+34 ### ## ##"),
    faker.lorem.words(),
    faker.lorem.words(50),
  ];
  db.query(sqlContact, [contacts], function (err, result) {
    if (err) throw err;
    else console.dir("Successfully inserted the row in table.");
    console.log(result);
  });
}
