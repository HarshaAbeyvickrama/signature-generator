import React, { useState } from 'react';
import Form from './form';
import Signature from './signature';
import ReactDOMServer from 'react-dom/server';
import { Button } from 'flowbite-react';
import axios from 'axios';
import Footer from './navigation/Footer';

export default function Home() {

  const [url, setUrl] = useState('');

  const generateSignature = (data: any) => {
    saveData(ReactDOMServer.renderToString(<Signature data={data}></Signature>));
  }

  function saveData(data: any) {
    axios.post('/api/signature', {
      content: data
    }).then((response) => {
      console.log(response.data.link);
      setUrl(response.data.link);
    });

  }

  function download(uri:string, name:string) {
    let link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    link = void 0;
  }

  return (
    <>
      <div className='grid justify-center'>
        <Form
          onSubmit={generateSignature}
          downloadURL={url}
          onDownload={download}
        ></Form>

        {
          url != '' &&
          <iframe src={url} frameBorder="0"
            className='w-full h-[500px]'
          >
          </iframe>
        }

      </div>

      <Footer></Footer>

    </>

  )
}



