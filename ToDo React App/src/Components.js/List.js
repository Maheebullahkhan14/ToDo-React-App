import React from "react";

const List = () => {
    const Delete = () =>{
        alert('deleted')
    }
  return (
    <li>
      Apple<i class="fa-solid fa-trash" onClick={Delete}></i>
    </li>
  );
};

export default List;
