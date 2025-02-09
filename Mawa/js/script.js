document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggle-genres"); // Botón "Géneros ▼"
    const genreList = document.getElementById("genre-list"); // Lista de géneros

    toggleButton.addEventListener("click", function() {
        // Alternar visibilidad de la lista de géneros
        if (genreList.style.display === "flex") {
            genreList.style.display = "none";
        } else {
            genreList.style.display = "flex";
        }
    });

    // Cierra la lista si se hace clic fuera de ella
    document.addEventListener("click", function(event) {
        if (!toggleButton.contains(event.target) && !genreList.contains(event.target)) {
            genreList.style.display = "none";
        }
    });
});

/*solo leveling pagina*/


function openManga(mangaId) {
    const manga = mangas[mangaId];
    if (manga) {
        document.getElementById("manga-title").textContent = manga.title;
        document.getElementById("creator").textContent = "Autor: " + manga.author;
        document.getElementById("description").textContent = manga.description;

        const episodeList = document.getElementById("episode-list");
        episodeList.innerHTML = "";
        manga.episodes.forEach(ep => {
            let li = document.createElement("li");
            li.textContent = ep;
            episodeList.appendChild(li);
        });

        document.getElementById("manga-details").style.display = "block";
    }
}

/*login*/
// script.js
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (email && password) {
        alert("Inicio de sesión exitoso para: " + email);
    } else {
        alert("Por favor, complete todos los campos.");
    }
});
