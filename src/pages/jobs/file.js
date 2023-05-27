const fs = require('fs');

export async function updateFile() {
    const date = new Date();
    return new Promise((res, rej) => {
        fs.appendFile('/tmp/FILE.txt', date.toISOString() + '\n', function(err) {
            if (err) {
                return rej(err);
            }
            res();
        });
    });
}