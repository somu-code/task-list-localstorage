import Content from "../components/Content";
import AddTask from "../components/AddTask";
import SearchTask from "../components/SearchTask";
import { useState, useEffect } from "react";

export default function Home() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("TaskList")) || []
  );

  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    localStorage.setItem("TaskList", JSON.stringify(tasks));
  }, [tasks]);

  const [search, setSearch] = useState("");

  const addTask = (task) => {
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const newInputTask = { id, checked: false, task };
    const taskList = [...tasks, newInputTask];
    setTasks(taskList);
  };

  const handleCheck = (id) => {
    const taskList = tasks.map((element) =>
      element.id === id ? { ...element, checked: !element.checked } : element
    );
    setTasks(taskList);
  };

  const handleDelete = (id) => {
    const taskList = tasks.filter((element) => element.id !== id);
    setTasks(taskList);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask) return;
    addTask(newTask);
    setNewTask("");
  };
  return (
    <>
      <main className="">
        <div className="max-w-sm mx-auto">
          {tasks.length > 0 ? (
            <SearchTask search={search} setSearch={setSearch} />
          ) : null}
          <Content
            tasks={tasks.filter((element) =>
              element.task.toLowerCase().includes(search.trim().toLowerCase())
            )}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
          <AddTask
            handleSubmit={handleSubmit}
            newTask={newTask}
            setNewTask={setNewTask}
          />
        </div>
      </main>
    </>
  );
}
