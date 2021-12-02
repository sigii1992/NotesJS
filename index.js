const createNote = require("./src/createNote");

const noteTitle = document.querySelector("#title");
const noteContent = document.querySelector("#content");
const addNoteBtn = document.querySelector("#btn");

addNoteBtn.addEventListener("click", () => {
  let title = noteTitle.value;
  let content = noteContent.value;

  createNote(title, content);
  // console.log("hey");
});
