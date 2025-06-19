const Count = document.querySelector(".count")

const Decreament = document.querySelector(".decrease")
const Increament = document.querySelector(".increase")
const changeBy = document.querySelector(".changeBy")

const ResetBtn = document.querySelector('.resetbtn')

Decreament.addEventListener('click', () => {
   const countValue = parseInt(Count.innerText);
   const changeByValue = parseInt(changeBy.value)
   Count.innerText = countValue - changeByValue

})
Increament.addEventListener('click', () => {
   const countValue = parseInt(Count.innerText);
   const changeByValue = parseInt(changeBy.value)
   Count.innerText = countValue + changeByValue

})

ResetBtn.addEventListener('click', () => {
   Count.innerText = 0
   changeBy.value=0
})
