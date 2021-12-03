const getNotes = () => {
  fetch("http://localhost:3000/notes")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((note) => {
        // const substring = (note.title + ": " + note.content).substring(0, 19) + "...";
        // // (newTitle.innerText + newContent.innerText).substring(0, 19) + "...";
        // console.log(substring);

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
        newNoteEl.setAttribute(
          "onclick",
          "document.querySelector('#displayed-note').innerText = noteContent.innerText;"
        );
        document.body.appendChild(newNoteEl);
        // const substring = (noteTitle.innerText + noteContent.innerText).substring(0, 19) + "...";
        // console.log(substring);
      });
    });
};

module.exports = getNotes;
