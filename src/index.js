
document.addEventListener("DOMContentLoaded", () => {
    const baseUrl = "https://flatter-cuties-cyan.vercel.app/characters/";
  
    const characterBar = document.getElementById("character-bar");
    const characterName = document.getElementById("name");
    const characterImage = document.getElementById("image");
    const voteCount = document.getElementById("vote-count");
    const voteForm = document.getElementById("votes-form");
    const voteInput = document.getElementById("votes");
    const resetButton = document.getElementById("reset-btn");
  
    fetch(baseUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(character => {
                const span = document.createElement("span");
                span.textContent = character.name;
                span.style.cursor = "pointer";
                span.addEventListener("click", () => displayCharacter(character));
                characterBar.appendChild(span);
            });
  
            if (data.length > 0) {
                displayCharacter(data[0]);
            }
        });
  
    function displayCharacter(character) {
        characterName.textContent = character.name;
        characterImage.src = character.image;
        voteCount.textContent = character.votes;
    }
  
    voteForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const votesToAdd = parseInt(voteInput.value) || 0;
        const currentVotes = parseInt(voteCount.textContent);
        voteCount.textContent = currentVotes + votesToAdd;
        voteInput.value = "";
    });
  
    resetButton.addEventListener("click", () => {
        voteCount.textContent = "0";
    });
});