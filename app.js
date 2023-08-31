
const finalValue = document.querySelector('.finalValue')

const maxValue = document.querySelector('.maxValue')

const stick = document.querySelector('.stick')

let max = 0;
let final = 0;

function changeWidth(){
    stick.style.width = `${final / max * 100}%`
    stick.innerHTML = `${final/ max * 100}%`

}
finalValue.addEventListener('keyup',()=>{
    final = Number(finalValue.value)
    changeWidth()
})

maxValue.addEventListener('keyup',()=>{
    max =  Number(maxValue.value)
    changeWidth()    

})

