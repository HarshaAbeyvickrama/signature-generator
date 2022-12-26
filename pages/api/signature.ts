import path from "path";
import fs from 'fs';

export default function handler(req: any, res: any) {
    const obj = JSON.parse(JSON.stringify(req.body)); 
    let host = req.headers.host;
    let filePath = '/signatures/signature.html';
    fs.writeFileSync(path.join('public',filePath), obj.content);
    res.status(200).json({ link: path.join(host, filePath) })
}
