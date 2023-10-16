import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/data")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">React And Flask API</h1>
        <p>{data.message}</p>
      </div>
    </div>
  );
}

export default App;
