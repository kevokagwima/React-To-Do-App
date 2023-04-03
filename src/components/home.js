import React from "react";

function Home() {
  const [tasks, updateTask] = React.useState([]);
  const [inputValue, setInput] = React.useState("");
  const [inputStyle, setInputStyle] = React.useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      if (tasks.includes(inputValue)) {
        setInputStyle("2px solid red");
        alert(`Input '${inputValue}' already exists`);
      } else {
        updateTask([...tasks, inputValue]);
        setInput("");
        setInputStyle("2px solid teal");
      }
    }
    console.log(tasks);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log("typing...");
  };

  const editTask = (index) => {
    const oldTasks = [...tasks];
    let newTask = prompt(`You're editing task '${oldTasks[index]}'.`);
    if (newTask == null || newTask == "") {
      alert("Input cannot be empty");
    } else if (oldTasks.includes(newTask)) {
      alert(`Input '${newTask}' already exists`);
    } else {
      oldTasks[index] = newTask;
      updateTask(oldTasks);
    }
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    updateTask(newTasks);
  };

  const task = tasks.map((i, index) => (
    <li key={index}>
      {i} {""}
      <div>
        <button id="btn" onClick={() => editTask(index)}>
          Edit
        </button>{" "}
        <button onClick={() => removeTask(index)}>Remove</button>
      </div>
    </li>
  ));

  return (
    <div className="form">
      <h1>To Do App</h1>
      <hr />
      <form onSubmit={formSubmit}>
        <input
          style={{ outline: inputStyle }}
          required
          value={inputValue}
          type="text"
          placeholder="Enter Task"
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
      <div className="list">
        <ul>{task.length === 0 ? "No Task" : task}</ul>
      </div>
    </div>
  );
}

export default Home;
