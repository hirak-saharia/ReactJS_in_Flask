from flask import Flask, jsonify
from flask_cors import CORS


app = Flask(__name__)
# cors = CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000/"}})
cors = CORS(app, resources={r"/api/*": {"origin": "http://localhost:3000/"}})


@app.route('/api/data')
def get_data():
    data = {'message': 'Hello from Flask - API data'}
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)
