import React, { useEffect, useState } from "react";
import List from "./Components.js/List";

const getLocalitems = () =>{
  let list = localStorage.getItem('Data')
  if(list){
    return JSON.parse(localStorage.getItem('Data'))
  }
  else {
    return []
  }
}


const Todo = () => {
  const [input, setInput] = useState("");
  const [Alllist, setData] = useState(getLocalitems());
  const [Togglesubmitbtn , settogglebtn] = useState(true)
  const [IsEditid , setIsEditid] = useState(null)

  const AddList = () => {
    if (!input) {
        alert('enter some data')
    }
    else if(input && !Togglesubmitbtn){
        setData(
          Alllist.map((elem) =>{
          if(elem.id === IsEditid){
            return { ...elem , name : input}
          }
          return elem;
        })
      )
      settogglebtn(true)
      setInput('')
      setIsEditid(null)
        
    } 
    else {
      const AllInputData = { id : new Date().getTime().toString() , name : input}
      setData([...Alllist, AllInputData]);
      setInput("");
    }
  };

  const Delete = (index) =>{
    const upDatedValues = Alllist.filter((elem)=>{
        return index!= elem.id
    })
    setData(upDatedValues)
}

  const EditItem = (id) =>{
    const newItems = Alllist.find((elem) =>{
      return elem.id === id
    })
    console.log(id)
    
    settogglebtn(false)
    setInput(newItems.name)
    setIsEditid(id)
  }


  useEffect( ()=>{
    localStorage.setItem('Data' , JSON.stringify(Alllist))
  },[Alllist])

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

          {Togglesubmitbtn ? <button className="Addbtn" onClick={AddList}>
            +
          </button> : <button className="Editbtn" onClick={AddList}>
          <i class="fa-solid fa-edit"></i>
          </button> }

          
        </div>

        <div className="list">
          <ul>
            {Alllist.map((elem) => {
              return (
                <li key={elem.id}>{elem.name}
                <div>
                  <i class="fa-solid fa-edit" onClick={() => EditItem(elem.id)}></i>
                  <i class="fa-solid fa-trash" onClick={() => Delete(elem.id)}></i>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <button onClick={RemoveAll} className="Removebtn">Remove All</button>
      </div>
    </>
  );
};

export default Todo;
