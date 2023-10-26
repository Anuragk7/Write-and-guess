import './App.css';
import { useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs'
import Result from './Result';
import Canvas from './canvas';
function App() {
  const [res,setres] = useState([1,2,3,4,5,6,7,8,9,10])
  const [imgurl, setimgurl] = useState(null)
  const [model,setmodel] = useState(null)
  const [image,setImage] = useState(null)

  
  useEffect(() => {
    const loadModel = async () => {
      try {
        const loadedModel = await tf.loadLayersModel('./model.json');
        setmodel(loadedModel)
       
      } catch (error) {
        console.error('Error loading the model:', error);
      }
    };

    loadModel();
    
  }, []);


  // useEffect ( () => {
  //   const img = new Image()
  //   img.src  = imgurl
  //       img.onload = ()=> {
  //         const canvas = document.createElement('canvas');
  //         canvas.width = img.width;
  //         canvas.height = img.height;
         
  //         // Draw the loaded image onto the canvas
  //         const ctx = canvas.getContext('2d');
  //         ctx.drawImage(img, 0, 0);
        
  //         // Get pixel data from the canvas
  //         const pixelData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          
        
  //         let tensor = tf.tidy(() => {
  //           let ts = tf.browser.fromPixels(pixelData, 1);
  //           ts = tf.cast(ts, 'float32');
  //           // invert the image as: -x + 1
  //           ts = ts.div(tf.scalar(-255))
  //           ts.print()
  //           ts = ts.add(tf.scalar(1))
  //           ts = tf.image.resizeBilinear(ts, [28, 28]).mean(2).expandDims(-1).expandDims()
  //           return ts;
  //       });
  //         console.log(tensor)
  //         const ct = tf.reshape(tensor, [1, 28 , 28]);
  //         ct.print()
         
  //         if (model!=null) {
         
  //           const abc = model.predict(ct)
  //           let preds = abc.dataSync().map((num) => {
  //             return  Math.ceil((num * 100).toPrecision(4))
             
  //         })
  //         let curr = [1,1,1,1,1,1,1,1,1,1]
  //         for(let i=0; i<10; i++){
  //           curr[i] = preds[i]
  //         }

  //         setres((prev)=> {
  //           return curr
  //         })
          
  //         console.log(preds)
  //         }
          
         

  //       }
  //   }

  // ,[imgurl])



 
  
 function preprocess(img) {
  // Load the image from the URL
  
  const image = tf.browser.fromPixels(img);


  // Resize the image to 28x28
  const grayimage = tf.image.rgbToGrayscale(image)
  const resizedImage = tf.image.resizeBilinear(grayimage, [28, 28]);

  

  // Return the preprocessed image as a tensor of [null, 28, 28]
  const abc = tf.reshape(resizedImage,[28,28])
  return abc.expandDims(0);
}
  useEffect(() => {
    let nimg = new Image()
    nimg.src = imgurl
    nimg.onload = ()=>{
      setImage(nimg)
    }
  }, [imgurl]);

  useEffect(() => {
    if (model && image) {
      async function predict() {
        const preprocessedImage = preprocess(image)
        const prediction = await model.predict(preprocessedImage);
        
        let preds = prediction.dataSync().map((num) => {
        return  Math.ceil((num * 100).toPrecision(4))
      })
      setres(preds)
      console.log(preds)
    }
      predict();
    }
  }, [model, image]);






  return (
    <div className="App">
     <div>
     <Canvas setimgurl = {setimgurl}/>
    <Result res = {res} model = {model}  />
     </div>
     
    </div>
  );
}

export default App;
