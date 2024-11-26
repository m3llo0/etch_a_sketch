function createGrid (){
    for (let i = 0; i < 20; i++){
        const row = document.createElement("div")
        row.className = "row"
        const container = document.querySelector(".container")
        container.appendChild(row)

        for (let j = 0; j < 20; j++){
            const square = document.createElement("div")
            square.className = "square"
            row.appendChild(square)
        }
    }
}

createGrid()

function etch() {
    const squares = document.querySelectorAll(".square")
    const container = document.querySelector(".container");
    let drawing = false //if this doesnt exist, it'll be like a leaking pen LOL

    // Store event listener functions to be removed later (i need them named in order to track them)
    const startDrawing = (event) => {
        drawing = true;
        event.target.style.backgroundColor = "black";
    };

    const draw = (event) => {
        if (drawing) {
            event.target.style.backgroundColor = "black";
        }
    };

    const stopDrawing = () => {
        drawing = false;
    };

    const stopDrawingOnLeave = () => {
        drawing = false;
    };

    const resetDrawing = () => {
        drawing = false;
    };

    // Add event listeners to each square
    squares.forEach((square) => {
        square.addEventListener("mousedown", startDrawing);
        square.addEventListener("mousemove", draw);
        square.addEventListener("mouseup", stopDrawing);
    });

    // Add event listeners for mouseleave and mouseenter on the container
    container.addEventListener("mouseleave", stopDrawingOnLeave);
    container.addEventListener("mouseenter", resetDrawing);

    return {
        startDrawing,
        draw,
        stopDrawing,
        stopDrawingOnLeave,
        resetDrawing,
    }
}

etch()

const listeners = etch() // To store the return values for the listeners


function reset(){
     // Removing the physical grid
    const resetButton = document.querySelector("button")
    resetButton.addEventListener("click", () => {
        const allRows = document.querySelectorAll(".row")
        allRows.forEach(row => row.remove())
        const container = document.querySelector(".container");

        // Remove listeners from each square
        const squares = document.querySelectorAll(".square");
        squares.forEach((square) => {
            square.removeEventListener("mousedown", listeners.startDrawing);
            square.removeEventListener("mousemove", listeners.draw);
            square.removeEventListener("mouseup", listeners.stopDrawing);
        });

        // Remove listeners from the container
        container.removeEventListener("mouseleave", listeners.stopDrawingOnLeave);
        container.removeEventListener("mouseenter", listeners.resetDrawing);

        //Reapplying grid and listeners
        createGrid()
        etch()
        })
    }

reset()