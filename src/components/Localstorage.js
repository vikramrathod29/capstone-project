import React, { useState, useEffect } from "react";

function Localstorage() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  // Load data from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    if (data) {
      setList(data);
    }
  }, []);

  // Save data to localStorage
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(list));
  }, [list]);

  const addItem = () => {
    if (text.trim() === "") return;
    setList([...list, text]);
    setText("");
  };

  const deleteItem = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <div>
      <h2>Simple CRUD (No CSS)</h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter something"
      />

      <button onClick={addItem}>Add</button>

      <ul>
        {list.map((item, i) => (
          <li key={i}>
            {item}{" "}
            <button onClick={() => deleteItem(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Localstorage;
