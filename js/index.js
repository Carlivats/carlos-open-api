const API_URL = "https://api.thecatapi.com/v1/images/search/";
const catImage = document.getElementById("catImage");
const likeBtn = document.getElementById("like");
const dislikeBtn = document.getElementById("dislike");
const superLikeBtn = document.getElementById("superLike");

// Fetch a random cat image
function fetchCat() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            catImage.src = data[0].url;
        })
        .catch(error => console.error("Error fetching cat:", error));
}

// Event listeners for buttons
likeBtn.addEventListener("click", fetchCat);
dislikeBtn.addEventListener("click", fetchCat);
superLikeBtn.addEventListener("click", fetchCat);

// Load first cat
fetchCat();
