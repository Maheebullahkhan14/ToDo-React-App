import React, { useState } from "react";
import List from "./Components.js/List";

let nextId = 0;
const Todo = () => {
  const [input, setInput] = useState("");
  const [Alllist, setData] = useState([]);

  const AddList = () => {
    if (!input) {
    } else {
      setData([...Alllist, input]);
      setInput("");
    }
  };

  const Delete = (id) =>{
    const upDatedValues = Alllist.filter((elem,index)=>{
        return index!= id
    })
    setData(upDatedValues)
}

    const RemoveAll = () =>{
        setData([])
    }

  return (
    <>
      <div className="listApp">
        <div className="inputcontent">
          <input
            name="list"
            type="text"
            value={input}
            className="input"
            placeholder="Add Item..."
            onChange={(e) => setInput(e.target.value)}
          ></input>
          <button className="Addbtn" onClick={AddList}>
            +
          </button>
        </div>

        <div className="list">
          <ul>
            {Alllist.map((elem, ind) => {
              return (
                <li key={ind}>{elem}
                  <i class="fa-solid fa-trash" onClick={() => Delete(ind)}></i>
                </li>
              );
            })}
          </ul>
        </div>
        <button onClick={RemoveAll}>Remove All</button>
      </div>
    </>
  );
};

export default Todo;
