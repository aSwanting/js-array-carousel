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

    const carouselDOM = document.querySelector(".carousel")
    const newCarouselItem = document.createElement("img")
    newCarouselItem.className = "carousel-img"
    newCarouselItem.src = images[i]
    carouselDOM.append(newCarouselItem)

    if (i === 0) { newCarouselItem.classList.add("active") }

}

// Add images to DOM, only first image visible
for (i = 0; i < images.length; i++) {

    const toolbarDOM = document.querySelector(".thumbnail-gallery")
    const newCarouselThumbnail = document.createElement("img")
    newCarouselThumbnail.className = "toolbar-thumbnail"
    newCarouselThumbnail.src = images[i]
    toolbarDOM.append(newCarouselThumbnail)

    if (i === 0) { newCarouselThumbnail.classList.add("highlighted") }

}


// Declare active image index
let activeCarouselImage = 0

// Step backwards through images, looping back to front
document.getElementById("arrow-btn-left").addEventListener("click", function () {

    const carouselImagesDOM = document.querySelectorAll(".carousel-img")
    const toolbarThumbnailDOM = document.querySelectorAll(".toolbar-thumbnail")

    carouselImagesDOM[activeCarouselImage].classList.remove("active")
    toolbarThumbnailDOM[activeCarouselImage].classList.remove("highlighted")

    if (activeCarouselImage > 0) {
        carouselImagesDOM[--activeCarouselImage].classList.add("active")
        toolbarThumbnailDOM[activeCarouselImage].classList.add("highlighted")

    } else {

        activeCarouselImage = carouselImagesDOM.length - 1
        carouselImagesDOM[activeCarouselImage].classList.add("active")
        toolbarThumbnailDOM[activeCarouselImage].classList.add("highlighted")
    }

    console.log(activeCarouselImage)

})

// Step forwards through images, looping front to back
document.getElementById("arrow-btn-right").addEventListener("click", function () {

    const carouselImagesDOM = document.querySelectorAll(".carousel-img")
    const toolbarThumbnailDOM = document.querySelectorAll(".toolbar-thumbnail")

    carouselImagesDOM[activeCarouselImage].classList.remove("active")
    toolbarThumbnailDOM[activeCarouselImage].classList.remove("highlighted")

    if (activeCarouselImage < carouselImagesDOM.length - 1) {
        carouselImagesDOM[++activeCarouselImage].classList.add("active")
        toolbarThumbnailDOM[activeCarouselImage].classList.add("highlighted")

    } else {

        activeCarouselImage = 0
        carouselImagesDOM[activeCarouselImage].classList.add("active")
        toolbarThumbnailDOM[activeCarouselImage].classList.add("highlighted")
    }

    console.log(activeCarouselImage)

})

