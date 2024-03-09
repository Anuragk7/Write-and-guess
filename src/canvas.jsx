import { useRef, useState } from 'react';
import {ReactSketchCanvas} from 'react-sketch-canvas'



const styles = {
    border: '5px solid black',
    borderRadius: '5px',
  };
export default function Canvas(props) {
    const canvas =  useRef()
    
    const onclear = ()=>{
        canvas.current.clearCanvas()
    }
    const handlechange = async ()=> {
      const imgurl = await canvas.current.exportImage('png')
      props.setimgurl((prev)=> {
        let a = prev
        return (imgurl)
      }) 
      console.log(imgurl)
    }
   

    return (<>
    <div>

    </div>
    <div className='flex flex-col m-4'>
    <ReactSketchCanvas
      ref = {canvas}
        style={styles}
        strokeWidth={30}
        strokeColor="black"
        onChange={handlechange}
        height={280}
        width={280}
      />
      <button onClick={onclear} className='text-cyan-600' >Clear</button>
    </div>
    
   
    
    </>
      
    );
};