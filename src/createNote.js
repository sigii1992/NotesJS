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

      const substring =
      (data.title + ": " + data.content).substring(0, 19) + "...";
      // (newTitle.innerText + newContent.innerText).substring(0, 19) + "...";
      console.log(substring);

      const newNoteEl = document.createElement("div");
      const newTitle = document.createElement("a");
      // const newContent = document.createElement("span");
      const newNoteId = document.querySelectorAll(".note").length - 1;

      newTitle.innerText = substring;
      // newContent.innerText = data.content;
      newNoteEl.className = "note";
      newNoteEl.id = "note-" + newNoteId;
      document.body.appendChild(newNoteEl);
      newNoteEl.append(newTitle);
      // newNoteEl.append(newContent);

    });
};

module.exports = createNote;
