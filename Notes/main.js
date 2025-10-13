const addBtn = document.getElementById("add-btn");
const notesContainer = document.getElementById("notes-container");
const noteText = document.getElementById("note-text");

// Load saved notes from localStorage
function showNotes() {
  notesContainer.innerHTML = "";
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.forEach((note, index) => {
    const noteDiv = document.createElement("div");
    noteDiv.classList.add("note");
    noteDiv.innerHTML = `
      <textarea>${note}</textarea>
      <div class="btns">
        <button onclick="deleteNote(${index})">🗑️</button>
        <button onclick="updateNote(${index})">💾</button>
      </div>
    `;
    notesContainer.appendChild(noteDiv);
  });
}

// Add new note
addBtn.addEventListener("click", () => {
  const text = noteText.value.trim();
  if (text === "") return alert("Please write something!");
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.push(text);
  localStorage.setItem("notes", JSON.stringify(notes));
  noteText.value = "";
  showNotes();
});

// Delete note
function deleteNote(index) {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
}

// Update note (save edited text)
function updateNote(index) {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  const updatedText = document.querySelectorAll(".note textarea")[index].value;
  notes[index] = updatedText;
  localStorage.setItem("notes", JSON.stringify(notes));
  alert("Note updated!");
}

// Initial load
showNotes();
