import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


import Result from './Result';
import Canvas from './canvas';
function App() {

  const [res,setres] = useState([0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1])
  const [imgurl, setimgurl] = useState(null)
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');


  async function send (){
    const response = await axios.post('http://127.0.0.1:8000/predict', {"base64url": imgurl})
    setres(response.data[0])
    console.log(response.data[0])
    
  }
  
 
// useEffect (() => {send()}, [imgurl])
 






  return (
    <div className="App ">
        <h1 className="text-6xl font-normal leading-normal mt-0 mb-6 text-purple-800 text-center">
            Tailwind Starter Kit
      </h1>
     <div className='flex justify-around items-center mt-2 flex-wrap p-6 '>
     <Canvas setimgurl = {setimgurl} className = "m-auto"/>
     <Result res = {res}  />
     </div>
     <button onClick={send} className='text-cyan-600 text-center' >Predict</button>
     
    </div>
  );
}

export default App;
