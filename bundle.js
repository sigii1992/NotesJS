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
          newNoteEl = document.createElement("a");
          newTitle = document.createElement("span");
          newContent = document.createElement("span");
          lineBr = document.createElement("br");
          newNoteId = document.querySelectorAll(".note").length - 1;
          newTitle.innerText = data.title + ": ";
          newContent.innerText = data.content;
          newNoteEl.className = "note";
          newNoteEl.id = "note-" + newNoteId;
          newNoteEl.append(newTitle);
          newNoteEl.append(newContent);
          newNoteEl.append(lineBr);
          newNoteEl.href = "#";
          newNoteEl.setAttribute("onclick", "document.querySelector('#displayed-note').innerText = newContent.innerText;");
          document.body.appendChild(newNoteEl);
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
            newNoteEl = document.createElement("a");
            noteTitle = document.createElement("span");
            noteContent = document.createElement("span");
            lineBr = document.createElement("br");
            newNoteId = document.querySelectorAll(".note").length - 1;
            noteTitle.innerText = note.title + ": ";
            noteContent.innerText = note.content;
            newNoteEl.className = "note";
            newNoteEl.id = "note-" + newNoteId;
            newNoteEl.append(noteTitle);
            newNoteEl.append(noteContent);
            newNoteEl.append(lineBr);
            newNoteEl.href = "#";
            newNoteEl.setAttribute("onclick", "document.querySelector('#displayed-note').innerText = noteContent.innerText;");
            document.body.appendChild(newNoteEl);
          });
        });
      };
      module.exports = getNotes2;
    }
  });

  // index.js
  var createNote = require_createNote();
  var getNotes = require_getNotes();
  var noteTitle2 = document.querySelector("#title");
  var noteContent2 = document.querySelector("#content");
  var addNoteBtn = document.querySelector("#btn");
  var form = document.querySelector("#note-form");
  addNoteBtn.addEventListener("click", () => {
    let title = noteTitle2.value;
    let content = noteContent2.value;
    createNote(title, content);
    form.reset();
  });
  getNotes();
})();
