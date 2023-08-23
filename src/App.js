import {React, useState, useEffect} from 'react';
import { useSelector, useDispatch, connect } from 'react-redux'
import { clearData, fetchData, incrementId, decrementId, inputId } from './features/dataSlice';
import './App.css';

function App(props) {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.data)

  const renderImg = () => {
    if (data.apiData) {
      return <img style={{'width': '100vw'}} src={data.apiData.primaryImage} alt={data.apiData.title} />
    } else {
      return <p>There's supposed to be something here...</p>
    }
  }


useEffect(() => {
  dispatch(fetchData())
}, [props.objectId], dispatch)

return (
  <div className="App">
    <div>
      <button onClick={() => dispatch(fetchData())}>Huh?</button>
      <button onClick={() => dispatch(clearData())}>Clear</button>
      <button onClick={() => dispatch(incrementId())}>Next</button>
      <button onClick={() => dispatch(decrementId())}>Back</button>
    </div>
    <input value={ data.objectId } onChange={(e) => {
      dispatch(inputId(Number(e.target.value)))
    }} />
    <div>
      {data.objectId}
      {renderImg()}
    </div>
  </div>
)
  }

  const mapStateToProps = (state, ownProps) => ({ objectId: state.data.objectId })

  export default connect(mapStateToProps)(App);

//function App() {
//  let [artId, setArtId] = useState(12045)
//  let [data, setData] = useState({})
//
//  useEffect(() => {
//    document.title="Welcome to Bob's Art Gallery"
//    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
//    .then (response => response.json())
//    .then (resData => setData(resData))
//}, [artId])
//
//  return (
//    <div className="App">
//      <Gallery />
//      <ButtonBar />
//    </div>
//  );
//}


