const createNote = require("./src/createNote");
const getNotes = require("./src/getNotes");

const noteTitle = document.querySelector("#title");
const noteContent = document.querySelector("#content");
const addNoteBtn = document.querySelector("#btn");
const form = document.querySelector("#note-form");

addNoteBtn.addEventListener("click", () => {
  let title = noteTitle.value;
  let content = noteContent.value;

  createNote(title, content);
  form.reset();
  // console.log("hey");
});

getNotes();
