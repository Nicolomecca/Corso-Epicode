const apiKey = 'Mwr68UJ5Wpe2apOFidE1MyQRRkAPJktMKvlBbGhL0ZFu8uSLHy39Hye4'; 
const imageContainer = document.getElementById('imagePexels');
const loadImagesBtn = document.getElementById('loadImages');
const loadSecondaryImagesBtn = document.getElementById('loadSecondaryImages');
const searchInput = document.getElementById('searchQuery');

const generateImage = function () {
    fetch('https://api.pexels.com/v1/search?query=wolf', {
        headers: {
            Authorization: apiKey
        }
    })
    .then((response) => {
        if (response.ok) {
            
            return response.json();
        } else {
            throw new Error('Network response was not ok');
        }
    })
    .then((imageData)=>{
        console.log(imageData)
        imageData.forEach((img)=>{
            const newImage = `
                 <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <img
                  src="${photo.src.medium}"
                  class="bd-placeholder-img card-img-top"
                />
                <div class="card-body">
                  <h5 class="card-title">${photo.alt}</h5>
                  <p class="card-text">
                  ${photo.description || 'No description available.'}
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small class="text-muted">${photo.id}</small>
                  </div>
                </div>
              </div>
            </div> `
        })
    })
    .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
    });
};

generateImage()

function hideCard(button) {
    const card = button.closest('.col-md-4');
    card.style.display = 'none'; // Hide the card
}

