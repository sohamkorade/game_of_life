# Game of Life

This is a simple implementation of **Conway's Game of Life** in JavaScript using `canvas` to render the cells.

![Game of Life](https://upload.wikimedia.org/wikipedia/commons/e/e5/Gospers_glider_gun.gif)

## How to run

Visit https://sohamapps.rf.gd/gameoflife/

or

Simply open [index.html](index.html) in your browser.

## How to use

- Click on the cells to toggle their state.
- Click on the `Next` button to advance the game by one step.
- Check the `Play` checkbox to start the simulation.
- Use the `Speed` slider to change the speed of the simulation.

## Rules

1. Any live cell with two or three live neighbours survives.
2. Any dead cell with three live neighbours becomes a live cell.
3. All other live cells die in the next generation. Similarly, all other dead cells stay dead.

Source: [Wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)


## TODO
- [ ] `Reset` button to reset the game
- [ ] Options to save and load game states
- [ ] Option to load a `pattern` from [this](https://www.conwaylife.com/wiki/Category:Patterns) list

## License

[MIT](LICENSE)

## Author

Soham Korade
