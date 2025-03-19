const images = [
    "https://source.unsplash.com/500x300/?nature",
    "https://source.unsplash.com/500x300/?mountains",
    "https://source.unsplash.com/500x300/?ocean",
    "https://source.unsplash.com/500x300/?forest",
    "https://source.unsplash.com/500x300/?city"
];

let currentIndex = 0;
const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateImage() {
    sliderImage.style.opacity = 0; 
    setTimeout(() => {
        sliderImage.src = images[currentIndex];
        sliderImage.style.opacity = 1; 
    }, 300);
}

updateImage();

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});


prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});
