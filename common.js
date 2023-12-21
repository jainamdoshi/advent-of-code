import * as fs from 'fs';

export async function loadData(year, day, name) {
    return fs.readFileSync(`./${year}/${day}/${name}.txt`, 'utf8');
}

export function convertToList(data) {
    return data.split('\n').filter(x => x);
}