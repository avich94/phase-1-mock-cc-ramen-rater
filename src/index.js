function fetchAllRamen() {
fetch('http://localhost:3000/ramens')
.then(resp => resp.json())
.then(data => {
    const ramenImageDataDiv = document.getElementById('ramen-menu')
    data.forEach(ramen => {
    const ramenImages = document.createElement('img')
    ramenImages.src = ramen.image
    ramenImageDataDiv.append(ramenImages)

    const ramenDetails = document.getElementById('ramen-detail')
    ramenImages.addEventListener('click', () => {

        const imageDetails = document.getElementById('detail-image')
        imageDetails.src = ramen.image

        const ramenName = document.getElementById('ramen-name')
        ramenName.textContent = ramen.name

        const ramenRestaurant = document.getElementById('restaurant')
        ramenRestaurant.textContent = ramen.restaurant

        const ramenRating = document.getElementById('rating-display')
        ramenRating.innerText = ramen.rating

        const ramenComment = document.getElementById('comment-display')
        ramenComment.innerText = ramen.comment

        ramenDetails.append(ramenName)
    })
    })
    })
};

fetchAllRamen()

function inputAllRamen() {
    const addRamenForm = document.getElementById('new-ramen')
        addRamenForm.addEventListener('submit', (e) => {
            e.preventDefault()

            const newName = document.getElementById('new-name').value
            const newRestaurant = document.getElementById('new-restaurant').value
            const newImage = document.getElementById('new-image').value
            const newRating = document.getElementById('new-comment').value
            const newComment = document.getElementById('new-comment').value
            
            const newRamen = {
                name: newName,
                restaurant: newRestaurant,
                image: newImage,
                rating: newRating,
                comment: newComment
            }

            fetch('http://localhost:3000/ramens', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(newRamen)
              })
                .then(resp => resp.json())
                .then(data => {
                  const ramenMenu = document.getElementById('ramen-detail');
                  const newRamenElement = document.createElement('div');
                  newRamenElement.innerText = data.name;
                  ramenMenu.appendChild(newRamenElement);
                });
            });
          };

inputAllRamen()

//Click on an image from the #ramen-menu div and see all
    //addeventListener('click') to the images in the ramen-menudiv
        //have that click event? that displays ramen info in
        //ramen-detail div and insert comment/insert rating

// the info about that ramen displayed inside the
// #ramen-detail div and where it says insert comment here and
//insert rating here.