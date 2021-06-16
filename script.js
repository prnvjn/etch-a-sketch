const container = document.querySelector("#container")
const reset = document.querySelector('#reset')
//for creating the grid
for (let i = 0 ; i < 256;i++){
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

elements.forEach((element)=> 
reset.addEventListener('click',()=>{
    if(element.classList.contains('highLight')){
        element.classList.remove('highLight')
    }
})
)

