const createNote = require("./src/createNote");

const noteTitle = document.querySelector("#title");
const noteContent = document.querySelector("#content");
const addNoteBtn = document.querySelector("#btn");

addNoteBtn.addEventListener("click", () => {
  createNote(noteContent.value);
});
