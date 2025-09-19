const express = require("express");
const { v4: uuidv4 } = require("uuid");
const app = express();
app.use(express.json());

let notes = [];

app.post("/notes", (req, res) => {
  const { title, content } = req.body;
  const note = { 
    id: uuidv4(), 
    title, 
    content, 
    createdAt: new Date().toISOString() 
  };
  
  notes.push(note);
  res.status(201).json(note);
});

app.get("/notes", (req, res) => {
  res.json(notes);
});

app.get("/notes/:id", (req, res) => {
  //console.log("Chegou requisição GET /notes/:id com ID:", req.params.id);
  const id = req.params.id;
  const note = notes.find(n => n.id === id);

  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }

  res.json(note);
});

app.put("/notes/:id", (req, res) => {
  const id = req.params.id;
  const { title, content } = req.body;

  const note = notes.find(n => n.id === id);

  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }

  note.title = title !== undefined ? title : note.title;
  note.content = content !== undefined ? content : note.content;

  res.json(note);
});

app.delete("/notes/:id", (req, res) => {
  const id = req.params.id;
  const index = notes.findIndex(n => n.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Note not found" });
  }

  notes.splice(index, 1);
  res.json({ message: "Note deleted" });
});

app.listen(4000, () => console.log("Server running on port 4000"));
