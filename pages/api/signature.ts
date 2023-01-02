import path, { resolve } from "path";
import fs from 'fs';
import { storage } from '../../config/firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

export default function handler(req: any, res: any) {
    const obj = JSON.parse(JSON.stringify(req.body));
    let host = req.headers.host;
    let filePath = './tmp/signature.html';
    // res.send()

    createSignatureFile(filePath, obj.content).then(() => {
        uploadFile(filePath).then((resp) => {
            console.log(resp);

        })
        res.status(200).json({ link: path.join(host, filePath) })

    }
    );
}

const createSignatureFile = async (filePath: string, data: any) => {
    fs.writeFileSync(filePath, data);
}


const uploadFile = async (filePath: string) => {
    const file = fs.readFileSync(filePath);
    const storageRef = ref(storage, 'signature.html');
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed",
        (snapshot) => {
            // const progress =
            //     Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            // console.log(progress);

        },
        (error) => {
            alert(error);
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log(downloadURL);
                resolve(downloadURL);
            });
        }
    );
}
