// Fonction pour supprimer une note
function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.splice(index, 1); // Supprimer la note à l'index donné
    localStorage.setItem("notes", JSON.stringify(notes)); // Mettre à jour localStorage
    displayNotes(); // Rafraîchir l'affichage des notes
}

// Fonction pour dupliquer une note
function duplicateNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    const noteToDuplicate = { ...notes[index] }; // Créer une copie de la note
    notes.push(noteToDuplicate); // Ajouter la note dupliquée
    localStorage.setItem("notes", JSON.stringify(notes)); // Mettre à jour localStorage
    displayNotes(); // Rafraîchir l'affichage des notes
}

// Fonction pour modifier une note
function modifyNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    const newTitle = prompt("Entrez un nouveau titre : ", notes[index].title);
    const newContent = prompt("Entrez un nouveau contenu : ", notes[index].content);

    // Si l'utilisateur a entré quelque chose, on met à jour la note
    if (newTitle && newContent) {
        notes[index].title = newTitle;
        notes[index].content = newContent;
        localStorage.setItem("notes", JSON.stringify(notes)); // Mettre à jour localStorage
        displayNotes(); // Rafraîchir l'affichage des notes
    }
}
