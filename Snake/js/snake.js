import { getinputDirection } from "./input.js"



// control snake speed below
export const SNAKE_SPEED = 25
const snakeBody=[{ x:11, y:11}]
let newSegments = 0


export function update()
{
    addSegemnts()
    const inputDirection = getinputDirection()
    for (let i = snakeBody.length - 2; i>=0; i--)
    {
        // i = second to last element, +1 will be last element
        snakeBody[i+1] = {...snakeBody[i]}
    }
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y;

   
}

export function draw(gameBoard)
{
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement("div")
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add("snake")
        gameBoard.appendChild(snakeElement)
    })
}

export function expandSnake(amount)
{
    newSegments += amount
}

export function onSnake(position, {ignoreHead = false} ={} )
{
    return snakeBody.some((segment, index) =>{
        if(ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}

export function getSnakeHead()
{
    return snakeBody[0]
}

export function snakeIntersection(){
    return onSnake(snakeBody[0], {ignoreHead: true})
}

function equalPositions(pos1, pos2)
{
    return pos1.x === pos2.x && pos1.y === pos2.y
}

// taking last segment of snake and duplicating it + adding to the end of snake.
function addSegemnts()
{
    for( let i =0; i< newSegments; i++){
        snakeBody.push({...snakeBody[snakeBody.length - 1]})
    }

    // this stops the constant growth of snake (without this snake continuously grows).
    newSegments = 0

    
}
