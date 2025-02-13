const API_KEY = "live_VmcF0aWlEwnbJYzdPMb8furZHneDUzFRFfyxSyp5vz2VZ04DLQE4i3rGFAUg7nJB";
const CAT_API_URL = "https://api.thecatapi.com/v1/images/search?has_breeds=1";

const catImage = document.getElementById("catImage");
const catName = document.getElementById("catName");
const catDescription = document.getElementById("catDescription");
const catTemperament = document.getElementById("catTemperament");
const temperamentList = catTemperament.querySelector("ul");
const likeBtn = document.getElementById("like");
const dislikeBtn = document.getElementById("dislike");
const superLikeBtn = document.getElementById("superLike");

// Function to fetch a random cat
function fetchCat() {
    fetch("https://api.thecatapi.com/v1/images/search?has_breeds=1", {
        headers: { "x-api-key": API_KEY }
    })
    .then(response => response.json())
    .then(data => {
        if (data.length > 0) {
            const cat = data[0];
            catImage.src = cat.url;
            const breed = cat.breeds[0];
            catName.innerText = `${breed.name}`;
            catDescription.innerText = `${breed.description}`
            const temperament = breed.temperament
            temperamentList.innerHTML = "";
            const temperamentArray = temperament.split(",").map(item => item.trim());
            temperamentArray.forEach(temperamentItem => {
                const listItem = document.createElement("li");
                listItem.innerText = temperamentItem;
                temperamentList.appendChild(listItem);
            });
        }
    })
    .catch(error => console.error("Error fetching cat:", error));
}


// Event listeners for buttons
likeBtn.addEventListener("click", fetchCat);
dislikeBtn.addEventListener("click", fetchCat);
superLikeBtn.addEventListener("click", fetchCat);

// Initial fetch on page load
fetchCat();

document.addEventListener("DOMContentLoaded", () => {
    const savedProfile = JSON.parse(localStorage.getItem("userProfile"));
    if (savedProfile) {
        document.getElementById("profile-name").innerText = savedProfile.username || "User";
        document.getElementById("profile-image").src = savedProfile.image || "default.png";
    }
});
