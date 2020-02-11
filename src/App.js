import React, { useRef, useEffect, useState, useCallback } from "react";
import useWindowSize from "./useWindowSize";
import "./App.css";

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function App() {
  const cont = useRef(null);
  const size = useWindowSize();
  const [gridColumns, setGridColumns] = useState(`repeat(5, 1fr)`);

  const calcGridColumns = useCallback(() => {
    const childs = cont.current.childNodes;
    const itemWidth = getComputedStyle(childs[0].childNodes[0]).width;
    const gridColumns = `repeat(auto-fill, ${itemWidth})`;
    setGridColumns(gridColumns);
  }, []);

  useEffect(() => {
    calcGridColumns();
  }, [size]);

  return (
    <div className="App">
      <div
        className="grid-wrapper"
        ref={cont}
        style={{ gridTemplateColumns: gridColumns }}
      >
        {arr.map(ix => (
          <div key={ix}>
            <div className="card">
              <h2>{ix}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
