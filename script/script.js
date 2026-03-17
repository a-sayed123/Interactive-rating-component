
// const ratingBtns = document.querySelectorAll('.card-btn')

// const submitBtn = document.querySelector('.submit')

// const ratingCard = document.querySelector('.card-1 ')

// const thankYouCard =   document.querySelector('.card-2')

// const selectedRatingText = document.querySelector('.card-result-text')

// let selectedRating = 0

const ratingBtns = document.querySelectorAll('[role="radio"]')

const submitBtn = document.querySelector("[data-submit-btn]")

const ratingCard = document.querySelector("[data-rating-card]")

const thankYouCard = document.querySelector("[data-thank-you]")

const selectedRatingText = document.querySelector("[data-selected-rating-text]")

let selectedRating = 0


ratingBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // إزالة aria-checked من كل الأزرار
    ratingBtns.forEach(b => { b.setAttribute('aria-checked', 'false'), b.classList.remove('active') })
    // تعيين الزر المختار
    btn.setAttribute('aria-checked', 'true')
    btn.classList.add('active')
    // هنا ممكن تخزن القيمة لاستخدامها في submit
    selectedRating = Number(btn.textContent)
  })
})

const container = document.querySelector('[role="radiogroup"]');

container.addEventListener('keydown', e => {
  const radios = Array.from(container.querySelectorAll('[role="radio"]'));
  let index = radios.findIndex(r => r.getAttribute('aria-checked') === 'true');

  if (e.key === "ArrowRight" || e.key === "ArrowDown") {
    index = (index + 1) % radios.length;
    radios.forEach(r => r.setAttribute('aria-checked', 'false'));
    radios[index].setAttribute('aria-checked', 'true');
    radios[index].focus();
    selectedRating = Number(radios[index].textContent);
    e.preventDefault();
  }

  if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
    index = (index - 1 + radios.length) % radios.length;
    radios.forEach(r => r.setAttribute('aria-checked', 'false'));
    radios[index].setAttribute('aria-checked', 'true');
    radios[index].focus();
    selectedRating = Number(radios[index].textContent);
    e.preventDefault();
  }
});


submitBtn.addEventListener('click', () => {
  if (selectedRating === 0) return alert('Please select a rating!')

  ratingCard.classList.add('hidden')
  thankYouCard.classList.remove('hidden')
  selectedRatingText.textContent = `You selected ${selectedRating} out of 5`

})

