const { db } = require("../db");
const Joi = require("joi");

const schemaUser = Joi.object({
  full_name: Joi.string().min(3).max(30).required(),
  job_title: Joi.string(),
  email: Joi.string().email().required(),
  photo: Joi.string().allow(""),
  phone_number: Joi.string()
    .length(20)
    .pattern(/^[0-9]+$/)
    .required(),
  start_date: Joi.date().required(),
  working_functions: Joi.string().min(20).max(70).required(),
  working_situation: Joi.string(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
});

exports.getUsers = (req, res) => {
  db.query("SELECT * FROM users", (err, rows, field) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
};

exports.getUser = (req, res) => {
  db.query(
    "SELECT * FROM users WHERE id = ?",
    [req.params.id],
    (err, rows, field) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
};

exports.createNewUser = (req, res) => {
  let user = req.body;
  let newUser = [
    user.full_name,
    user.job_title,
    user.email,
    user.photo,
    user.phone_number,
    user.start_date,
    user.working_functions,
    user.working_situation,
    user.password,
  ];
  const validation = schemaUser.validate(newUser);
  if (!validation) {
    res.status(422).json({
      message: "Invalid request",
      data: body,
    });
  } else {
    let sql =
      "INSERT INTO users (full_name, job_title, email, photo, phone_number,start_date,working_functions, working_situation, password) VALUES (?)";
    db.query(
      sql,
      [newUser],

      (err, rows, fields) => {
        console.log(rows);
        if (!err) res.send("User created successfully.");
        else console.log(err);
      }
    );
  }
};

exports.deleteUser = (req, res) => {
  db.query(
    "DELETE FROM users WHERE id = ?",
    [req.params.id],
    (err, rows, field) => {
      if (!err) res.send("User deleted successfully.");
      else console.log(err);
    }
  );
};

exports.updateUser = (req, res) => {
  let user = req.body;
  let sql =
    "UPDATE bookings SET full_name=?, job_title=?, email=?, photo=?, phone_number=?,start_date=?,working_functions=?, working_situation=? WHERE id =" +
    req.params.id;
  db.query(
    sql,
    [
      user.full_name,
      user.job_title,
      user.email,
      user.photo,
      user.phone_number,
      user.start_date,
      user.working_functions,
      user.working_situation,
      user.password,
    ],

    (err, rows, fields) => {
      if (!err) res.send("User updated successfully.");
      else console.log(err);
    }
  );
};
