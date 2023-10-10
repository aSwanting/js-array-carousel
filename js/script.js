const images = [
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp",
]


for (i = 0; i < images.length; i++) {

    const carousel = document.querySelector(".carousel")
    const newCarouselItem = document.createElement("img")
    newCarouselItem.className = "carousel-img"
    newCarouselItem.src = images[i]
    carousel.append(newCarouselItem)

    i === 0 ? newCarouselItem.classList.add("active") : newCarouselItem.classList.remove("active")

}

const leftArrowDOM = document.getElementById("arrow-btn-left")
const rightArrowDOM = document.getElementById("arrow-btn-right")
let activeCarouselImage = 0

leftArrowDOM.addEventListener("click", function () {

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

rightArrowDOM.addEventListener("click", function () {

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





/*     for (i = 0; i < carouselImagesDOM.length; i++) {
 
        if (carouselImagesDOM[i].classList.contains("active")) {
 
            if (i > 0) {
 
                console.log(i)
                carouselImagesDOM[i].classList.remove("active")
                carouselImagesDOM[i - 1].classList.add("active")
 
            }
 
        }
 
    } */
/*     for (i = carouselImagesDOM.length - 1; i >= 0; i--) {
 
        if (carouselImagesDOM[i].classList.contains("active")) {
 
            if (i < carouselImagesDOM.length - 1) {
 
                console.log(i)
                carouselImagesDOM[i].classList.remove("active")
                carouselImagesDOM[i + 1].classList.add("active")
 
            }
 
        }
 
    } */