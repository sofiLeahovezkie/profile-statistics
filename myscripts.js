const starEl = document.querySelectorAll(".fa-star");
console.log(starEl);
const emojEl = document.querySelectorAll(".fa-regular");
const colors = ('red', 'orange', 'blue', 'green', 'purpule');

starEl.forEach((starEl, index) => {
    starEl.addEventListener("click", () => {
        updateRating(index);
        console.log(index)
    });
});

function updateRating(index) {
    starEl.forEach((starEl, idxx) => {
        if (idxx < index + 1) {
            starEl.classList.add("active");
        }else{
            starEl.classList.remove('active');
        }

    });

    emojEl.forEach((emojEl) => {
        emojEl.style.transform = `translateX(-${index * 50}px)`;
        emojEl.style.colors = colors[index];
    });

}
