from flask import Flask, request, jsonify
import base64
import numpy as np
from PIL import Image
from io import BytesIO
from flask import Flask
from flask_cors import CORS
from PIL import ImageFile
ImageFile.LOAD_TRUNCATED_IMAGES = True
import tensorflow as tf
from tensorflow.keras import models
import numpy as np

app = Flask(__name__)
CORS(app, supports_credentials=True, origins='http://localhost:3000')
@app.route('/predict', methods=['POST'])
def process_base64():
    data = request.get_json()
    base64url = data.get('base64url')
    if (not base64url):
        prediction = [[0,0,0,0,0,0,0,0,0,0]]
        return jsonify(prediction)

    
    base64_image = base64url.split(",")[1]
    padding = (4-len(base64_image) % 4)%4
    # Your processing logic here
    if padding > 0:
        base64_image += "=" * padding

    # Decode Base64 and open as image
    image_data = base64.b64decode(base64_image)
    image = Image.open(BytesIO(image_data))


    # Convert the image to grayscale
    grayscale_image = image.convert("L")
    resized_image = grayscale_image.resize((28, 28))
    

    flattened_image = np.array(resized_image).astype(np.uint8)  # Convert to unsigned integer
    flattened_image = np.invert(flattened_image)
    flattened_image = flattened_image.astype(np.float32) / 255.0
    model1 = tf.keras.models.load_model("Model\HWDR")
   
    if model1 :
        
    
        # Make predictions using the loaded model
        input_data = np.expand_dims(flattened_image, axis=0)
        
        prediction1 = model1.predict(input_data)
        return jsonify(prediction1.tolist())
    

@app.route('/', methods=['GET'])
def index():

    return "test ok"


if __name__ == '__main__':
    # Specify your desired port here
    port = 8000
    #app.run(debug=True, port=port)
    