import React from "react";

function Home() {
  const [tasks, updateTask] = React.useState([]);
  const [inputValue, setInput] = React.useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      updateTask([...tasks, inputValue]);
      setInput("");
    }
    console.log(tasks);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log("typing...");
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    updateTask(newTasks);
  };

  const task = tasks.map((i, index) => (
    <li key={index}>
      {i} {""} <button onClick={() => removeTask(index)}>Remove</button>
    </li>
  ));

  return (
    <div className="form">
      <h1>To Do App</h1>
      <hr />
      <form onSubmit={formSubmit}>
        <input
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
