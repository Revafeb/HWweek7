import { rectangle, rectanglePerimeter, square, squarePerimeter } from "./utils/mathFunction.js";

console.log(square(5))
console.log(squarePerimeter(10))
console.log(rectangle(18, 7))
console.log(rectanglePerimeter(18, 7))

import { readAndWriteFile } from './reader/readAndWrite.js'

await readAndWriteFile('log.txt', 'new_log.txt')
