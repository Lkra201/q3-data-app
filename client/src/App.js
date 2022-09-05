import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';

function App() {

  const [articleList, setArticleList] = useState([]);

    // Using Axios send an http request to one of our custom routes created in the server index.js file
    useEffect(()=> {
      Axios.get("http://localhost:3001/read").then((response)=> {
        setArticleList(response.data);
      });
    }, []);

  return (
    <div className="App">
      <h1>Article List</h1>
      {articleList.map((value, key) => {
        return (
          <div key={key}>
          {/* <h3>{value.category}</h3> */}
          <h3>{value.name}</h3>
          </div>
        )
      })}
    </div>
  );
}

export default App;
