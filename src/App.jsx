import { useState, useEffect } from "react";
import * as d3 from "d3";
import { feature } from "topojson";
import "./App.css";
import LinePlot from "./components/LinePlot";
import GeoMap from "./components/GeoMap";
import { Marks } from './components/earth';
import Coordinate from './components/coordinate'

const jsonUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json'
const jsonUrl1 = 'http://127.0.0.1:5501/china.json'
const jsonUrl2 = 'http://127.0.0.1:5501/world.json'

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(() => d3.ticks(-2, 2, 200).map(Math.sin));
  const [mapData, setMapData] = useState(null);

  useEffect(() => {
    d3.json(jsonUrl).then(topojsonData => {
      console.log('@@@', topojsonData)
      setMapData(feature(topojsonData, topojsonData.objects.countries))
    })
  }, [])

  function onMouseMove(event) {
    const [x, y] = d3.pointer(event);
    setData(data.slice(-200).concat(Math.atan2(x, y)));
  }

  return (
    <>
      <div onMouseMove={onMouseMove}>
        <LinePlot data={data} />
      </div>
      <div>
        <Coordinate />
      </div>
      <Marks data={mapData} ></Marks>
      {/* <GeoMap></GeoMap> */}
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
