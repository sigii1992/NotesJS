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
      // console.log(response);
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

      const substring =
        (newTitle.innerText + newContent.innerText).substring(0, 19) + "...";
      console.log(substring);
    });
};

module.exports = createNote;
