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
    <div className='canvas'>
    <ReactSketchCanvas
      ref = {canvas}
        style={styles}
       
        strokeWidth={4}
        strokeColor="red"
        onChange={handlechange}
      />
      <button onClick={onclear}>Clear</button>
    </div>
   
    
    </>
      
    );
};