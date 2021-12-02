/**
 * @jest-environment jsdom
 */

test("adds a note", () => {
  // given we're calling addNewPost...
  document.body.innerHTML = `<form>
  <input type="text" id="title" placeholder="Title"></input>
  <p>
  <textarea id="content" placeholder="Your content..." rows="8" cols="30"></textarea>
  </p>
  <button id="btn" type="button">Add note!</button>
  </form>`;

  require("../index.js");

  document.querySelector("#title").value = "Monday";
  document.querySelector("#content").value = "Good day";
  document.querySelector("#btn").click();

  expect(document.querySelectorAll("#title").innerText.toBe("Monday"));
});
