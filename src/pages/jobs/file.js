import fs from 'fs/promises';

export async function updateFile() {
    try {
        const date = new Date();
        await fs.appendFile('FILE.txt', date.toISOString() + '\n');
    } catch(err) {
        console.error(err);
    }
}