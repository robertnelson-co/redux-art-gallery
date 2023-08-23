import {React, useState, useEffect} from 'react';
import logo from './logo.svg';
import Gallery from './gallery';
import ButtonBar from './buttonbar';
import './App.css';

function App() {
  let [artId, setArtId] = useState(12045)
  let [data, setData] = useState({})

  useEffect(() => {
    document.title="Welcome to Bob's Art Gallery"
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then (response => response.json())
    .then (resData => setData(resData))
}, [artId])

  return (
    <div className="App">
      <Gallery />
      <ButtonBar />
    </div>
  );
}

export default App;
