const ratingBtns = document.querySelectorAll("[data-rating-btn]")

const submitBtn = document.querySelector("[data-submit-btn]")

const ratingCard = document.querySelector("[data-rating-card]")

const thankYouCard = document.querySelector("[data-thank-you]")

const selectedRatingText = document.querySelector("[data-selected-rating-text]")

let selectedRating = 0

ratingBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    selectedRating = Number(btn.textContent)
    console.log(selectedRating)
    ratingBtns.forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
  })
})

submitBtn.addEventListener('click', () => {
  if (selectedRating === 0)  return alert('Please select a rating!') 
    ratingCard.classList.add('hidden')
    thankYouCard.classList.remove('hidden')
    selectedRatingText.textContent = `You selected ${selectedRating} out of 5`
})

