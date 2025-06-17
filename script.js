const Count=document.querySelector(".count")

const Decreament=document.querySelector(".decrease")
const Increament=document.querySelector(".increase")
const  ResetBtn=document.querySelector('.resetbtn')
const changeBy=document.querySelector(".changeBy")
Decreament.addEventListener('click',()=>{
   const countValue=parseInt(Count.innerText);
    console.log(countValue)
   Count.innerText=countValue -1
            
})
Increament.addEventListener('click',()=>{
         const countValue=parseInt(Count.innerText);
   console.log(countValue)
   Count.innerText=countValue +1
           
})

changeBy.addEventListener("input",()=>{
    const changeByValue=parseInt(changeBy.value)
    console.log(inputValue)
   Count.value*inputValue
})

ResetBtn.addEventListener('click',()=>{
    Count.innerText=0
})
