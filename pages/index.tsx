import Form from './form';
import Signature from './signature';
import ReactDOMServer from 'react-dom/server';
import { Button } from 'flowbite-react';
import axios from 'axios';

export default function Home() {
  return (
    <div className='grid justify-center'>
      <Form onSubmit={download}></Form>
      <div>d</div>
    </div>
  )
}

const download = (data: any) => {
  saveData(ReactDOMServer.renderToString(<Signature data={data}></Signature>));
}

function saveData(data: any) {
   
  axios.post('/api/signature', {
    content: data
  }).then((response) => console.log(response.data.link));

}

