// Fonction pour créer et afficher une note
function getNote(note, index) {
    const noteDiv = document.createElement("div");
    noteDiv.classList.add("note");
    noteDiv.style.backgroundColor = note.color; // Appliquer la couleur si elle existe

    // Titre de la note
    const title = document.createElement("h3");
    title.textContent = note.title;

    // Contenu de la note
    const content = document.createElement("p");
    content.textContent = note.content;

    // Options (modification, suppression, duplication)
    const optDiv = document.createElement("div");
    optDiv.id = "opt";

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

    // Ajouter les boutons à la div des options
    optDiv.appendChild(modifie);
    optDiv.appendChild(supprime);
    optDiv.appendChild(dupliquer);

    // Ajouter tous les éléments à la div de la note
    noteDiv.appendChild(title);
    noteDiv.appendChild(content);
    noteDiv.appendChild(optDiv);

    // Ajouter la note à la page
    document.getElementById("notesContainer").appendChild(noteDiv);
}

// Fonction pour afficher toutes les notes
function displayNotes() {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const notesContainer = document.getElementById("notesContainer");
    notesContainer.innerHTML = ""; // Vider l'affichage avant de le recréer

    notes.forEach((note, index) => {
        getNote(note, index); // Créer et afficher la note
    });
}

// Charger les notes au démarrage de la page
window.onload = displayNotes;
