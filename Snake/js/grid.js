const Grid_Size = 21

export function randomGridPosition()
{
    return{
    // math.floor(math.random) gives number between 0 - 0.99 so adding +1 makes it between 1 - 1.99 x grid size which is 21 is the scale of our grid.
        x: Math.floor(Math.random() *Grid_Size) +1,
        y: Math.floor(Math.random() *Grid_Size) +1
    }
}

export function outsideGrid(position)
{
    return (position.x <1 || position.x > Grid_Size || position.y <1 || position.y > Grid_Size)
}