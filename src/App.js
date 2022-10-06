import "./App.css";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState(["react를 배워 봅시다"]);

  const [converse, setConverse] = useState("");

  return (
    <div className="App">
      <input
        onChange={(e) => {
          setConverse(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          let copy = [...title];
          copy.push(converse);
          setTitle(copy);
        }}
      >
        추가하기
      </button>
      <div>
        <h4>Todo List</h4>
      </div>
      <div className="all">
        {title.map(function (a, i) {
          return (
            <div className="listTitle">
              <h4 className="listBox">{title[i]}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
