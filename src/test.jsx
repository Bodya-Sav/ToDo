import React, { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditStart = (todo) => {
    setEditingTodo(todo);
  };

  const handleEditChange = (event) => {
    setEditingTodo({ ...editingTodo, text: event.target.value });
  };

  const handleEditSave = () => {
    setTodos(
      todos.map((todo) =>
        todo.id === editingTodo.id ? editingTodo : todo
      )
    );
    setEditingTodo(null);
  };

  const handleEditCancel = () => {
    setEditingTodo(null);
  };

  return (
    <div className="todo-app">
      <h1>Список дел</h1>

      <div className="input-group">
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Добавить дело..."
        />
        <button onClick={addTodo}>Добавить</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            {editingTodo && editingTodo.id === todo.id ? (
              <div className="edit-input">
                <input
                  type="text"
                  value={editingTodo.text}
                  onChange={handleEditChange}
                />
                <button onClick={handleEditSave}>Сохранить</button>
                <button onClick={handleEditCancel}>Отмена</button>
              </div>
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleComplete(todo.id)}
                />
                <span
                  onClick={() => handleEditStart(todo)}
                  className={todo.completed ? "completed" : ""}
                >
                  {todo.text}
                </span>
                <button onClick={() => deleteTodo(todo.id)}>Удалить</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;