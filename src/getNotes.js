const getNotes = () => {
    fetch('http://localhost:3000/notes')
    .then(response => response.json())
    .then(data => {
        data.forEach( note  => {
            const newNoteEl = document.createElement("div");
            const noteTitle = document.createElement("span");
            const noteContent = document.createElement("span");
            const newNoteId = document.querySelectorAll(".note").length - 1;

            noteTitle.innerText = note.title + " ";
            noteContent.innerText = note.content;
            newNoteEl.className = "note";
            newNoteEl.id = "note-" + newNoteId;
            document.body.appendChild(newNoteEl);
            newNoteEl.append(noteTitle);
            newNoteEl.append(noteContent);

            const substring = (noteTitle.innerText + noteContent.innerText).substring(0, 19) + "...";
            console.log(substring);
        });
    });
};

module.exports = getNotes;