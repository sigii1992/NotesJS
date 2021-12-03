const createNote = (title, content) => {
  fetch("http://localhost:3000/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: `${title}`, content: `${content}` }),
  })
    .then((response) => response.json())
    .then((data) => {
      // const substring =
      // (data.title + ": " + data.content).substring(0, 19) + "...";
      // (newTitle.innerText + newContent.innerText).substring(0, 19) + "...";
      // console.log(substring);

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
      newNoteEl.setAttribute(
        "onclick",
        "document.querySelector('#displayed-note').innerText = newContent.innerText;"
      );
      document.body.appendChild(newNoteEl);
    });
};

module.exports = createNote;
