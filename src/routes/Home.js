import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { add, remove } from "../Store";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");
  const input = document.querySelector(".input");
  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
    input.value = "";
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input
          className="input"
          type="text"
          placeholder="write what you has to do"
          onChange={onChange}
        />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(add(text)),
    deleteToDo: (id) => dispatch(remove(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
