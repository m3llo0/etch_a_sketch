function createGrid (){
    for (let i = 0; i < 16; i++){
        const row = document.createElement("div")
        row.className = "row"
        const container = document.querySelector(".container")
        container.appendChild(row)

        for (let i = 0; i < 16; i++){
            const square = document.createElement("div")
            square.className = "square"
            row.appendChild(square)
        }
    }
}

createGrid()

function etch() {
    const squares = document.querySelectorAll(".square")
}