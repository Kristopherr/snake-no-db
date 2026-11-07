import { onSnake, expandSnake } from "./snake.js"
import { randomGridPosition } from "./grid.js"

// variables

// let food = {x:7, y: 14} this was the default variable for food spawn but adding the function creates a random spawn at start
let food = getRandomFoodPosition()
const Expansion_Rate = 1


export function update()
{
    if(onSnake(food))
    {
        expandSnake(Expansion_Rate)
        // this makes the food go to a random position each time
        food = getRandomFoodPosition()
    }
}

export function draw(gameBoard)
{
    const foodElement = document.createElement("div")
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add("food")
    gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition()
{
    let newFoodPosition
    // this stops food from going on same position as snake
    while (newFoodPosition == null || onSnake(newFoodPosition))
    {
        newFoodPosition = randomGridPosition()    
    }
    return newFoodPosition
}