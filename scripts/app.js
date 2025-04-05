const accessKey = "FP6wu9hj8gLuaTmlMnoa9EADGDa2BVPaISeLNtd13Gc"; // Replace with your API key
const resultsDiv = document.getElementById("results");

// Function for text-based search
async function searchByText() {
    const query = document.getElementById("textSearch").value;
    if (!query) {
        alert("Please enter a search term!");
        return;
    }

    const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`);
    const data = await response.json();
    displayResults(data.results);
}

// Function for image-based search
async function searchByImage(event) {
    const file = event.target.files[0];
    if (!file) {
        alert("Please upload an image!");
        return;
    }

    // Image upload and sample image search logic (requires advanced server or ML integration)
    alert("Sample image search coming soon! Unsplash API doesn't directly support it.");
}

// Function to display results
function displayResults(images) {
    resultsDiv.innerHTML = ""; // Clear previous results

    images.forEach((image) => {
        const img = document.createElement("img");
        img.src = image.urls.small;
        img.alt = image.description || "Unsplash Image";
        resultsDiv.appendChild(img);
    });
}