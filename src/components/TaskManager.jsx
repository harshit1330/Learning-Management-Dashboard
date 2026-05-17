import { useEffect, useState } from "react";
import { Plus, Trash2 } from "lucide-react";

function TaskManager() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("learningTasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    localStorage.setItem("learningTasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(event) {
    event.preventDefault();

    if (!newTask.trim()) {
      return;
    }

    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };

    setTasks([task, ...tasks]);
    setNewTask("");
  }

  function toggleTask(taskId) {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );

    setTasks(updatedTasks);
  }

  function deleteTask(taskId) {
    const remainingTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(remainingTasks);
  }

  return (
    <section className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900">
      <h2 className="text-lg font-bold text-slate-900 dark:text-white">
        Study Tasks
      </h2>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
        Tasks are saved in your browser using localStorage.
      </p>

      <form onSubmit={addTask} className="mt-4 flex gap-2">
        <input
          type="text"
          placeholder="Add a task..."
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
          className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-indigo-400 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
        />

        <button className="rounded-xl bg-indigo-600 px-3 text-white transition hover:bg-indigo-700">
          <Plus size={18} />
        </button>
      </form>

      <div className="mt-4 space-y-2">
        {tasks.length === 0 ? (
          <p className="rounded-xl bg-slate-50 p-3 text-sm text-slate-500 dark:bg-slate-800 dark:text-slate-400">
            No tasks yet. Add your first study task.
          </p>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between rounded-xl border border-slate-200 p-3 dark:border-slate-700"
            >
              <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />
                <span className={task.completed ? "line-through opacity-60" : ""}>
                  {task.text}
                </span>
              </label>

              <button
                onClick={() => deleteTask(task.id)}
                className="text-slate-400 transition hover:text-red-500"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default TaskManager;
