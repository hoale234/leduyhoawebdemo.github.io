import React from "react";
import "./style.css";

export default function Demo() {
  return (
    <div>
      <h1>To-Do List</h1>
      <p>Enter text into the input field to add items to your list.</p>

      <p>Click the "X" to remove the item from your list.</p>

      <p>Click the item to mark it as complete</p>
      <div class="input-todo">
        <input type="text" class="input" placeholder="Input to do" />
        <button class="button">
          <span>+</span>
        </button>
      </div>
      <div class="todo-list">
        <div class="todo-item">
          Todo 1<button class="btn-delete">X</button>
        </div>
      </div>
    </div>
  );
}
