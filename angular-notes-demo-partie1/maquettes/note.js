document.addEventListener("DOMContentLoaded", createNote);

function createNote() {
    const openModalBtn = document.querySelector(".no-note");
    const modal = document.getElementById("modal");
    const closeBtn = document.querySelector(".close");
    const saveNoteBtn = document.getElementById("saveNote");
    const notesContainer = document.getElementById("notes-container");

    const noteTitle = document.getElementById("noteTitle");
    const noteColor = document.getElementById("noteColor");
    const noteContent = document.getElementById("noteContent");

    // Ouvrir le modal
    openModalBtn.addEventListener("click", function () {
        modal.style.display = "block";
    });

    // Fermer le modal
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Sauvegarder une nouvelle note
    saveNoteBtn.addEventListener("click", function () {
        if (noteTitle.value.trim() === "" || noteContent.value.trim() === "") {
            alert("Veuillez remplir le titre et le contenu !");
            return;
        }

        // Créer une nouvelle note avec les valeurs des champs
        const noteNew = {
            title: noteTitle.value,
            color: noteColor.value,
            content: noteContent.value
        };

        // Récupérer les notes existantes depuis localStorage
        let notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.push(noteNew);  // Ajouter la nouvelle note à la liste
        localStorage.setItem("notes", JSON.stringify(notes));  // Sauvegarder les notes dans localStorage

        // Réinitialiser les champs de la note et fermer le modal
        noteTitle.value = "";
        noteContent.value = "";
        modal.style.display = "none";
    });

    // Fermer le modal si on clique en dehors
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}

function affichage(noteTitle, noteContent, noteColor){
    // Créer la div pour afficher la note
    const noteDiv = document.createElement("div");
    noteDiv.classList.add("note");
    noteDiv.style.backgroundColor = noteColor.value;  // Appliquer la couleur de la note

    // Créer les éléments de la note
    const optDiv = document.createElement("div");
    optDiv.id = "opt";

    const title = document.createElement("h3");
    title.textContent = noteTitle.value;

    const content = document.createElement("p");
    content.textContent = noteContent.value;

    // Bouton pour modifier
    const modifie = document.createElement("button");
    modifie.classList.add("modifie");
    modifie.textContent = "📝";
    modifie.addEventListener("click", () => modifyNote(index));

    // Bouton pour supprimer
    const supprime = document.createElement("button");
    supprime.classList.add("supprime");
    supprime.textContent = "❌";
    supprime.addEventListener("click", () => deleteNote(index));

    // Bouton pour dupliquer
    const dupliquer = document.createElement("button");
    dupliquer.classList.add("dupliquer");
    dupliquer.textContent = "⮻";
    dupliquer.addEventListener("click", () => duplicateNote(index));

    // Ajouter les éléments à la div de la note
    noteDiv.appendChild(title);
    noteDiv.appendChild(content);
    optDiv.appendChild(modifie);
    optDiv.appendChild(dupliquer);
    optDiv.appendChild(supprime);
    noteDiv.appendChild(optDiv);

    // Ajouter la note au container
    notesContainer.appendChild(noteDiv);

}
