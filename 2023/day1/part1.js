import _ from "lodash";
import { convertToList, loadData } from "../../common.js";

const year = 2023
const day = "day1"
const name = 'part1'

const data = await loadData(year, day, name);
const words = convertToList(data);

const numbers = _.map(words, word => {
    let firstNumber = _.find(word, char => is_numeric(char))
    let lastNumber = _.findLast(word, char => is_numeric(char))
    return parseInt(firstNumber + lastNumber)
})

const total = _.sum(numbers)

function is_numeric(str){
    return /^\d+$/.test(str);
}

console.log(total)