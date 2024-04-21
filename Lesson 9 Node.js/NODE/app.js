import {heyvan} from './data.js'
import chalk from 'chalk';
const arr = ['Red','Green','Blue','Yellow']

function randomColor(){
    const randInt = Math.round(Math.random()*(arr.length-1))
    return `bg${arr[randInt]}`
    // if(randInt = 1){

    // }
    // else if(randInt = 2)
    // else if(randInt = 3)
    // else if(randInt = 4)
}
const ran = randomColor()

console.log(chalk[ran](heyvan));
