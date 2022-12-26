import Form from './form';
import Signature from './signature';
import ReactDOMServer from 'react-dom/server';
import { Button } from 'flowbite-react';
import axios from 'axios';

export default function Home() {
  return (
    <div className='grid justify-center'>
      <Form onSubmit={download}></Form>
      <iframe></iframe>
      <Button onClick={download}>CLick</Button>
    </div>
  )
}

const download = () => {
  saveData(ReactDOMServer.renderToStaticMarkup(<Signature></Signature>));
}

function saveData(data: any) {
  axios.post('/api/signature', {
    content: data
  }).then((response) => console.log(response.data.link));
  
}

