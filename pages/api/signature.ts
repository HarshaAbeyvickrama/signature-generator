import path, { resolve } from "path";
import fs from 'fs';
import { storage } from '../../config/firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

export default async function handler(req: any, res: any) {
    const obj = JSON.parse(JSON.stringify(req.body));
    let host = req.headers.host;
    let filePath = './tmp/signature.html';

    createSignatureFile(filePath, obj.content).then(() => {
        uploadFile(filePath).then((url) => {
            res.status(200).json({ link: url })
        });
    });



}

const createSignatureFile = async (filePath: string, data: any) => {
    fs.writeFileSync(filePath, data);
    return;
}

const uploadFile = (filePath: string) => {
    return new Promise((resolve, reject) => {
        const file = fs.readFileSync(filePath);
        const storageRef = ref(storage, 'signature.html');
        const uploadTask =
            uploadBytesResumable(
                storageRef,
                file,
                {
                    contentType: 'text/html',
                }
            );

        uploadTask.on("state_changed",
            (snapshot) => {

            },
            (error) => {
                reject(error);
                alert(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    resolve(downloadURL);
                });
            }
        );
    });

}


// createSignatureFile(filePath, obj.content).then(async () => {
//     uploadFile(filePath).then(async (resp) => {
//         console.log(resp);
//         res.status(200).json({ link: path.join(host, filePath) })
//     })
// }
// );