
// Create array with image paths
const images = [
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp",
]

// Add images to DOM gallery, gallery background and thumbnail
for (i = 0; i < images.length; i++) {

    const carouselDOM = document.querySelector(".carousel")
    const toolbarDOM = document.querySelector(".thumbnail-gallery")
    const appBodyDOM = document.querySelector(".app-main")

    const newCarouselItem = document.createElement("img")
    const newCarouselThumbnail = document.createElement("img")
    const carouselBackground = document.createElement("img")

    newCarouselItem.className = "carousel-img"
    newCarouselThumbnail.className = "toolbar-thumbnail"
    carouselBackground.className = "bg-image"

    newCarouselItem.src = images[i]
    newCarouselThumbnail.src = images[i]
    carouselBackground.src = images[i]
    newCarouselThumbnail.id = i

    carouselDOM.append(newCarouselItem)
    toolbarDOM.append(newCarouselThumbnail)
    appBodyDOM.append(carouselBackground)

    if (i === 0) {
        newCarouselItem.classList.add("active")
        newCarouselThumbnail.classList.add("highlighted")
        carouselBackground.classList.add("bg-active")
    }

}

// Declare active image index
const carouselImagesDOM = document.querySelectorAll(".carousel-img")
const toolbarThumbnailDOM = document.querySelectorAll(".toolbar-thumbnail")
const galleryBackgroundDOM = document.querySelectorAll(".bg-image")

let activeCarouselImage = 0
let prevCarouselImage


document.getElementById("arrow-btn-left").addEventListener("click", function () {

    if (activeCarouselImage > 0) {

        activeCarouselImage--
        prevCarouselImage = activeCarouselImage + 1

    } else {

        activeCarouselImage = carouselImagesDOM.length - 1
        prevCarouselImage = 0
    }

    console.log(prevCarouselImage, activeCarouselImage)
    carouselNavigation(prevCarouselImage, activeCarouselImage)

})


document.getElementById("arrow-btn-right").addEventListener("click", function () {

    if (activeCarouselImage < carouselImagesDOM.length - 1) {

        activeCarouselImage++
        prevCarouselImage = activeCarouselImage - 1

    } else {

        activeCarouselImage = 0
        prevCarouselImage = carouselImagesDOM.length - 1

    }

    console.log(prevCarouselImage, activeCarouselImage)
    carouselNavigation(prevCarouselImage, activeCarouselImage)

})


toolbarThumbnailDOM.forEach(function (thumbnail) {

    thumbnail.addEventListener("click", function () {

        prevCarouselImage = activeCarouselImage
        activeCarouselImage = thumbnail.id

        console.log(prevCarouselImage, activeCarouselImage)
        carouselNavigation(prevCarouselImage, activeCarouselImage)

    })
})


function carouselNavigation(a, b) {

    carouselImagesDOM[a].classList.remove("active")
    toolbarThumbnailDOM[a].classList.remove("highlighted")
    galleryBackgroundDOM[a].classList.remove("bg-active")

    carouselImagesDOM[b].classList.add("active")
    toolbarThumbnailDOM[b].classList.add("highlighted")
    galleryBackgroundDOM[b].classList.add("bg-active")

}






































