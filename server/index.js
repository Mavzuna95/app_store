"use strict";
const express = require("express");
const app = express();
const cors = require("cors");
const pg = require("pg");
const port = 3003;
const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    password: '1111',
    host: 'localhost',
    port: 5432,
    database: 'alif_shop' 
})
var LocalStorage = require("node-localstorage").LocalStorage;
const localStorage = new LocalStorage("./scratch");

app.use(cors());
app.use(express.json());

let user = localStorage.getItem("user");
if (user) {
    user = JSON.parse(user)
} else { 
    user = []
}

app.get("/register", (req, res) => {
  localStorage.setItem("user", JSON.stringify(user));
  res.send(JSON.stringify(user));
});

app.post("/register_new", (req, res) => {
  user.push(req.body);
  localStorage.setItem("user", JSON.stringify(user));
  res.send(JSON.stringify(user));
});

app.delete("/register/:id", (req, res) => {
    const {id} = req.params;
    user = user.filter((use) => {
        return use.id !== +id
    })
    localStorage.removeItem("user")
    res.send(JSON.stringify("file deleted"))
})



app.get("/all_category", (req, res) => {
  pool.query(`SELECT * FROM "all_category"`, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
});
app.get("/popular_category", (req, res) => {
  pool.query(`SELECT * FROM "popular_category"`, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
});
app.get("/category_phone", (req, res) => {
  pool.query(`SELECT * FROM "category_phone"`, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
});
app.get("/airpods", (req, res) => {
  pool.query(`SELECT * FROM "airpods"`, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
});
app.get("/watch", (req, res) => {
  pool.query(`SELECT * FROM "watch"`, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
});
app.get("/laptops", (req, res) => {
  pool.query(`SELECT * FROM "laptops"`, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
});
app.get("/category_tv", (req, res) => {
  pool.query(`SELECT * FROM "category_tv"`, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
});
// app.get("/messages", (req, res) => {
//     // const {id} = req.params;
//     pool.query(`SELECT * FROM messages`, (error, results) => {
//         if (error)
//             throw error;
//         res.status(200).json(results.rows);
//     });
// });

// app.post('/new-message', (req, res) => {
//     const { recieverId, name, content } = req.body;
//     pool.query(`INSERT INTO messages ("recieverId", "senderId", "content") VALUES ($1, $2, $3)`, [recieverId, senderId, content], (error, results) => {
//         if (error)
//             throw error;
//         res.status(201).json("Message created!");
//     });
// });

app.get("/", (req, res) => {
  res.json("server working");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
