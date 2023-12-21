import * as fs from 'fs';

export async function loadData(path) {
    return fs.readFileSync(path, 'utf8');
}