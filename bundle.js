(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/createNote.js
  var require_createNote = __commonJS({
    "src/createNote.js"(exports, module) {
      var createNote2 = (title, content) => {
        fetch("http://localhost:3000/notes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ title: `${title}`, content: `${content}` })
        }).then((response) => response.json()).then((data) => {
          const newNoteEl = document.createElement("div");
          const newTitle = document.createElement("span");
          const newContent = document.createElement("span");
          const newNoteId = document.querySelectorAll(".note").length - 1;
          newTitle.innerText = data.title + " ";
          newContent.innerText = data.content;
          newNoteEl.className = "note";
          newNoteEl.id = "note-" + newNoteId;
          document.body.appendChild(newNoteEl);
          newNoteEl.append(newTitle);
          newNoteEl.append(newContent);
          const substring = (newTitle.innerText + newContent.innerText).substring(0, 19) + "...";
          console.log(substring);
        });
      };
      module.exports = createNote2;
    }
  });

  // src/getNotes.js
  var require_getNotes = __commonJS({
    "src/getNotes.js"(exports, module) {
      var getNotes2 = () => {
        fetch("http://localhost:3000/notes").then((response) => response.json()).then((data) => {
          data.forEach((note) => {
            const newNoteEl = document.createElement("div");
            const noteTitle2 = document.createElement("span");
            const noteContent2 = document.createElement("span");
            const newNoteId = document.querySelectorAll(".note").length - 1;
            noteTitle2.innerText = note.title + " ";
            noteContent2.innerText = note.content;
            newNoteEl.className = "note";
            newNoteEl.id = "note-" + newNoteId;
            document.body.appendChild(newNoteEl);
            newNoteEl.append(noteTitle2);
            newNoteEl.append(noteContent2);
            const substring = (noteTitle2.innerText + noteContent2.innerText).substring(0, 19) + "...";
            console.log(substring);
          });
        });
      };
      module.exports = getNotes2;
    }
  });

  // index.js
  var createNote = require_createNote();
  var getNotes = require_getNotes();
  var noteTitle = document.querySelector("#title");
  var noteContent = document.querySelector("#content");
  var addNoteBtn = document.querySelector("#btn");
  addNoteBtn.addEventListener("click", () => {
    let title = noteTitle.value;
    let content = noteContent.value;
    createNote(title, content);
  });
  getNotes();
})();
