import { TaskContext } from "../context/taskContext";
import { useContext } from "react";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="bg-card-fondo text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p>{task.description}</p>
      <button className="bg-red-500 px-2 py-1 rounded-md mt-4" 
      onClick={() => deleteTask(task.id)}>Borrar Tarea</button>
    </div>
  );
}

export { TaskCard };
