from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)

# Load model & scaler
model = joblib.load("model.pkl")
scaler = joblib.load("scaler.pkl")

@app.route("/")
def home():
    return "API Running!"



@app.route("/predict", methods=["POST"])
def predict():
    data = request.json

    try:
        features = [
            float(data['balance']),      
            float(data['purchases']),
            float(data['cash']),
            float(data['limit']),
            float(data['payments'])
        ]

        input_data = np.array(features).reshape(1, -1)

        scaled = scaler.transform(input_data)

        cluster = model.predict(scaled)[0]

        return jsonify({
            "cluster": int(cluster)
        })

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run()