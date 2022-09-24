const { db } = require("../db");

exports.getRooms = (req, res) => {
  db.query("SELECT * FROM rooms", (err, rows, field) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
};

exports.getRoom = (req, res) => {
  db.query(
    "SELECT * FROM rooms WHERE id = ?",
    [req.params.id],
    (err, rows, field) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
};

exports.createNewRoom = (req, res) => {
  let room = req.body;
  let newRoom = [
    room.photo,
    room.room_type,
    room.room_number,
    room.facilities,
    room.price,
    room.offer_price,
    room.description,
    room.status
  ];
  let sql =
    "INSERT INTO rooms (photo, room_type, room_number, facilities, price, offer_price, description, status) VALUES (?)";
  db.query(
    sql,
    [newRoom],

    (err, rows, fields) => {
      console.log(rows);
      if (!err) res.send("Room created successfully.");
      else console.log(err);
    }
  );
};

exports.deleteRoom = (req, res) => {
   db.query(
     "DELETE FROM rooms WHERE id = ?",
     [req.params.id],
     (err, rows, field) => {
       if (!err) res.send("Room deleted successfully.");
       else console.log(err);
     }
   );
};

exports.updateRoom = (req, res) => {
   let room = req.body;
   let sql =
     "UPDATE rooms SET photo=?, room_type=?, room_number=?, facilities=?, price=?, offer_price=?, description=?, status=? WHERE id =" +
     req.params.id;
   db.query(
     sql,
     [
       room.photo,
       room.room_type,
       room.room_number,
       room.facilities,
       room.price,
       room.offer_price,
       room.description,
       room.status,
     ],

     (err, rows, fields) => {
       if (!err) res.send("Room updated successfully.");
       else console.log(err);
     }
   );
};
