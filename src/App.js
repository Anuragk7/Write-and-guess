import './App.css';
import { useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs'


import Result from './Result';
import Canvas from './canvas';
function App() {

  const [res,setres] = useState([0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1])
  const [imgurl, setimgurl] = useState(null)
  const [model,setmodel] = useState(null)
  const [image,setImage] = useState(null)
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');


  
  
  useEffect(() => {
    
    let nimg = new Image()
    nimg.src = imgurl
    nimg.onload = ()=>{
      setImage(nimg)
    }
  }, [imgurl]);

 






  return (
    <div className="App ">
        <h1 className="text-6xl font-normal leading-normal mt-0 mb-6 text-purple-800 text-center">
            Tailwind Starter Kit
      </h1>
     <div className='flex justify-around items-center mt-2 flex-wrap p-6 '>
     <Canvas setimgurl = {setimgurl} className = "m-auto"/>
     <Result res = {res} model = {model}  />
     </div>
    
     
    </div>
  );
}

export default App;
