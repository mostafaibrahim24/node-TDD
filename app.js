const express = require("express");
const dotenv = require("dotenv");
const pool = require("./db");

const app = express();
app.use(express.json());

dotenv.config();
const port = process.env.PORT;

// Create a note
app.post("/notes", async (req, res, next) => {
  try {
    if (!req.body.note_title || !req.body.note_body) {
      return res.status(400).json({ message: "Error" });
    }
    await pool.query("INSERT INTO notes(note_title,note_body) VALUES($1,$2)", [
      req.body.note_title,
      req.body.note_body,
    ]);
    res.status(201).json({ message: "Note Added" });
  } catch (error) {
    console.log(error);
  }
});

// List an array of notes
app.get("/notes", async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
  }
});

// Get a note by id
app.get("/notes/:id", async (req, res, next) => {
  try {
  } catch (error) {}
});

// Update a note by id
app.put("/notes/:id", async (req, res, next) => {
  try {
  } catch (error) {}
});

// Delete a note by id
app.delete("/notes/:id", async (req, res, next) => {
  try {
  } catch (error) {}
});

app.listen(port, () => {
  console.log(`Up on ${port}`);
});

module.exports = app;