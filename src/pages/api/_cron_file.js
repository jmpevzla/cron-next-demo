import { updateFile } from '../jobs/file';

export default async function handler(req, res) {
    await updateFile();
    res.status(200).json({ status: 'ok' });
}
