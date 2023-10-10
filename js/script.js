// Create array with image paths
const images = [
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp",
]

// Add images to DOM, only first image visible
for (i = 0; i < images.length; i++) {

    const carousel = document.querySelector(".carousel")
    const newCarouselItem = document.createElement("img")
    newCarouselItem.className = "carousel-img"
    newCarouselItem.src = images[i]
    carousel.append(newCarouselItem)

    if (i === 0) { newCarouselItem.classList.add("active") }

}


// Declare active image index
let activeCarouselImage = 0

// Step backwards through images, looping back to front
document.getElementById("arrow-btn-left").addEventListener("click", function () {

    const carouselImagesDOM = document.querySelectorAll(".carousel-img")
    carouselImagesDOM[activeCarouselImage].classList.remove("active")

    if (activeCarouselImage > 0) {
        carouselImagesDOM[--activeCarouselImage].classList.add("active")

    } else {

        activeCarouselImage = carouselImagesDOM.length - 1
        carouselImagesDOM[activeCarouselImage].classList.add("active")
    }

    console.log(activeCarouselImage)

})

// Step forwards through images, looping front to back
document.getElementById("arrow-btn-right").addEventListener("click", function () {

    const carouselImagesDOM = document.querySelectorAll(".carousel-img")
    carouselImagesDOM[activeCarouselImage].classList.remove("active")

    if (activeCarouselImage < carouselImagesDOM.length - 1) {
        carouselImagesDOM[++activeCarouselImage].classList.add("active")

    } else {

        activeCarouselImage = 0
        carouselImagesDOM[activeCarouselImage].classList.add("active")
    }

    console.log(activeCarouselImage)

})

