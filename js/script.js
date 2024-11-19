let currentIndex = 0;
const cards = document.querySelectorAll(".card");
const totalCards = cards.length;

document.querySelector(".next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalCards;
    updateCarousel();
});

document.querySelector(".prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    updateCarousel();
});

function updateCarousel() {
    cards.forEach((card, index) => {
        card.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
    });
}

updateCarousel();


document.getElementById("scrollToTop").addEventListener("click", function (event) {
    event.preventDefault(); 
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
});

