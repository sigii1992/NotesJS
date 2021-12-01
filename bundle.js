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
        }).then((response) => response.json()).then((response) => {
          console.log(response);
        });
      };
      module.exports = createNote2;
    }
  });

  // index.js
  var createNote = require_createNote();
  var noteTitle = document.querySelector("#title");
  var noteContent = document.querySelector("#content");
  var addNoteBtn = document.querySelector("#btn");
  addNoteBtn.addEventListener("click", () => {
    createNote(noteTitle.value, noteContent.value);
  });
})();
