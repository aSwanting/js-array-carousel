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

    i === 1 ? newCarouselItem.classList.add("active") :  newCarouselItem.classList.remove("active")

    carousel.append(newCarouselItem)

}





