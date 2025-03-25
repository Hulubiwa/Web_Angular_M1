document.addEventListener("DOMContentLoaded", function() {
    const openModalBtn = document.querySelector(".no-note");
    const modal = document.getElementById("modal");
    const closeBtn = document.querySelector(".close");
    const saveNoteBtn = document.getElementById("saveNote");
    const notesContainer = document.getElementById("notes-container");

    const noteTitle = document.getElementById("noteTitle");
    const noteColor = document.getElementById("noteColor");
    const noteContent = document.getElementById("noteContent");

    // Ouvrir le modal
    openModalBtn.addEventListener("click", function() {
        modal.style.display = "block";
    });

    // Fermer le modal
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Sauvegarder une nouvelle note
    saveNoteBtn.addEventListener("click", function() {
        if (noteTitle.value.trim() === "" || noteContent.value.trim() === "") {
            alert("Veuillez remplir le titre et le contenu !");
            return;
        }

        const noteDiv = document.createElement("div");
        noteDiv.classList.add("note");
        noteDiv.style.backgroundColor = noteColor.value;

        const title = document.createElement("h3");
        title.textContent = noteTitle.value;

        const content = document.createElement("p");
        content.textContent = noteContent.value;

        noteDiv.appendChild(title);
        noteDiv.appendChild(content);
        notesContainer.appendChild(noteDiv);

        // Réinitialiser et fermer le modal
        noteTitle.value = "";
        noteContent.value = "";
        modal.style.display = "none";
    });

    // Fermer le modal si on clique en dehors
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
