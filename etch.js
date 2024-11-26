function createGrid (){
    for (let i = 0; i < 20; i++){
        const row = document.createElement("div")
        row.className = "row"
        const container = document.querySelector(".container")
        container.appendChild(row)

        for (let i = 0; i < 20; i++){
            const square = document.createElement("div")
            square.className = "square"
            row.appendChild(square)
        }
    }
}

createGrid()

function etch() {
    const squares = document.querySelectorAll(".square")
    let drawing = false //if this doesnt exist, it'll be like a leaking pen LOL

    //when you put your pen to the paper
    squares.forEach((square) => {
        square.addEventListener("mousedown", () =>{
            drawing = true
            square.style.backgroundColor = "black"
        })
    

    //when you move the pen (ie.drawing)
        square.addEventListener("mousemove", () =>{
            if (drawing == true){
                square.style.backgroundColor = "black"
            }  
        })
    

    //when you lift the pen and stop drawing
        square.addEventListener("mouseup", () =>{
            drawing = false
        })

    })

    //to stop drawing if mouse leaves grid
    container.addEventListener("mouseleave", () =>{
        drawing = false
    })

    // to ensure drawing state is reset
    container.addEventListener("mouseenter", () => {
        drawing = false; 
    })
}

etch()

function reset(){
    const reset = document.querySelector("button")
    reset.addEventListener("click", () => {
        
    })
}