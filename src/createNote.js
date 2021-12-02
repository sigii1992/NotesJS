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
      const newNoteId = document.querySelectorAll(".note").length - 1;

      newNoteEl.innerText = data.title;
      newNoteEl.className = "note";
      newPostEl.id = "note-" + newNoteId;
      document.body.appendChild(newNoteEl);
    });
};

module.exports = createNote;
