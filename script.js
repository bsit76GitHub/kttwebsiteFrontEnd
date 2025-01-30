document.addEventListener("DOMContentLoaded",function(){
    const menuBtn = document.getElementById("menu-btn");
    const menuModal = document.getElementById("menu-modal")
     // Open Login Modal
     menuBtn.addEventListener("click", function() {
        menuModal.style.display = "flex";
    });
});

const ratingBar = document.getElementById('ratingBar');
const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('ratingValue');
let currentRating = 0;

stars.forEach((star) => {
  star.addEventListener('mouseover', () => {
    clearHover();
    star.classList.add('hover');
    highlightStars(star.dataset.value);
  });

  star.addEventListener('mouseleave', () => {
    clearHover();
  });

  star.addEventListener('click', () => {
    currentRating = star.dataset.value;
    updateRating(currentRating);
  });
});

const highlightStars = (value) => {
  stars.forEach((star) => {
    if (star.dataset.value <= value) {
      star.classList.add('hover');
    }
  });
};

const clearHover = () => {
  stars.forEach((star) => star.classList.remove('hover'));
};

const updateRating = (value) => {
  stars.forEach((star) => {
    star.classList.remove('active');
    if (star.dataset.value <= value) {
      star.classList.add('active');
    }
  });
  ratingValue.textContent = `Rating: ${value}`;
};

