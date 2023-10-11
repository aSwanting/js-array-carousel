function loadImages() {

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

}


function carouselNavigation() {

    // Declare active image index
    const carouselImagesDOM = document.querySelectorAll(".carousel-img")
    const toolbarThumbnailDOM = document.querySelectorAll(".toolbar-thumbnail")
    const galleryBackgroundDOM = document.querySelectorAll(".bg-image")
    let activeCarouselImage = 0


    // Select image from thumbnail 
    document.querySelectorAll(".toolbar-thumbnail").forEach(function (thumbnail) {
        thumbnail.addEventListener("click", function () {

            carouselImagesDOM[activeCarouselImage].classList.remove("active")
            toolbarThumbnailDOM[activeCarouselImage].classList.remove("highlighted")
            galleryBackgroundDOM[activeCarouselImage].classList.remove("bg-active")

            activeCarouselImage = thumbnail.id

            carouselImagesDOM[activeCarouselImage].classList.add("active")
            toolbarThumbnailDOM[activeCarouselImage].classList.add("highlighted")
            galleryBackgroundDOM[activeCarouselImage].classList.add("bg-active")

        })
    })


    // Step backwards through images, looping back to front
    document.getElementById("arrow-btn-left").addEventListener("click", function () {

        carouselImagesDOM[activeCarouselImage].classList.remove("active")
        toolbarThumbnailDOM[activeCarouselImage].classList.remove("highlighted")
        galleryBackgroundDOM[activeCarouselImage].classList.remove("bg-active")

        if (activeCarouselImage > 0) {

            activeCarouselImage--

        } else {

            activeCarouselImage = carouselImagesDOM.length - 1

        }

        carouselImagesDOM[activeCarouselImage].classList.add("active")
        toolbarThumbnailDOM[activeCarouselImage].classList.add("highlighted")
        galleryBackgroundDOM[activeCarouselImage].classList.add("bg-active")

    })


    // Step forwards through images, looping front to back
    document.getElementById("arrow-btn-right").addEventListener("click", function () {

        carouselImagesDOM[activeCarouselImage].classList.remove("active")
        toolbarThumbnailDOM[activeCarouselImage].classList.remove("highlighted")
        galleryBackgroundDOM[activeCarouselImage].classList.remove("bg-active")

        if (activeCarouselImage < carouselImagesDOM.length - 1) {

            activeCarouselImage++

        } else {

            activeCarouselImage = 0

        }

        carouselImagesDOM[activeCarouselImage].classList.add("active")
        toolbarThumbnailDOM[activeCarouselImage].classList.add("highlighted")
        galleryBackgroundDOM[activeCarouselImage].classList.add("bg-active")

    })

}

document.addEventListener("load", loadImages())
document.addEventListener("click", carouselNavigation())
