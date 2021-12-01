const createNote = (title, content) => {
  fetch("http://localhost:3000/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: `${title}`, content: `${content}` }),
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    });
};

module.exports = createNote;
