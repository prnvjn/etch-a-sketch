const container = document.querySelector("#container")
const resetButton = document.querySelector('#reset')
let slider = document.querySelector("#myRange")
//for creating the grid


function gridSystem(value){
    grid = value*value
    for (let i = 0 ; i < grid ;i++){
        const div = document.createElement('div')
        div.classList = "element"
        div.style.width= `${480/value}px`
        div.style.height= `${480/value}px`
       container[i]=container.appendChild(div)
    }
}

//for hover 
function hover(){
    const elements = document.querySelectorAll(".element")
    elements.forEach((element)=>
    element.addEventListener('mousemove', (e)=>{
        e.target.classList.add('highLight')
    } )
    )
}

// reset the code
let reset = ()=> {
    const elements = document.querySelectorAll(".element")
    elements.forEach((element)=>resetButton.addEventListener('click',()=>
    {
        if(element.classList.contains('highLight')){
            element.classList.remove('highLight')
        }
    }))
      
}



gridSystem(20)

hover()
reset()
newGrid()
function newGrid() {
    slider.addEventListener("input", () => {
        let grid = slider.value;
    });
    return grid
}

