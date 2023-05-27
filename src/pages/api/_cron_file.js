import { appendFile } from 'fs';

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

export default async function handler(req, res) {
    await updateFile();
    res.status(200).json({ status: 'ok' });
}
