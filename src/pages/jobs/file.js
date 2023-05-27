import fs from 'fs';

export function updateFile() {
    const date = new Date();
    fs.appendFile('FILE.txt', date.toISOString() + '\n');
}
