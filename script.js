const container = document.querySelector("#container")
const resetButton = document.querySelector('#reset')

//for creating the grid
for (let i = 0 ; i < 400;i++){
    const div = document.createElement('div')
    div.classList = "element"
    
   container[i]=container.appendChild(div)
}
//for hover 
const elements = document.querySelectorAll(".element")
elements.forEach((element)=>
element.addEventListener('mousemove', (e)=>{
    e.target.classList.add('highLight')
} )
)
// reset the code
let reset = ()=> {
    elements.forEach((element)=>resetButton.addEventListener('click',()=>
    {
        if(element.classList.contains('highLight')){
            element.classList.remove('highLight')
        }
}))
}

reset()

