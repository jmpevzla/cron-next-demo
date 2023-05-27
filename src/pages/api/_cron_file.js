import { appendFile, readFile } from 'fs';

export async function updateFile() {
    const date = new Date();
    return new Promise((res, rej) => {
        appendFile('/tmp/FILE.txt', date.toISOString() + '\n', function(err) {
            if (err) {
                return rej(err);
            }
            res();
        });
    });
}

export async function loadFile() {
    return new Promise((res, rej) => {
        readFile('/tmp/FILE.txt', function(err, data) {
            if (err) {
                return rej(err);
            }
            res(data.toString());
        });
    });
}

export default async function handler(req, res) {
    await updateFile();
    const data = await loadFile();
    res.status(200).json({ status: 'ok', data });
}
