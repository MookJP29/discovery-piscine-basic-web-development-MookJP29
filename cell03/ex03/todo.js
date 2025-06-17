function saveTodos() {
  const todos = [];
  document.querySelectorAll('#ft_list .todo').forEach(todo => {
    todos.push(todo.textContent);
  });
}

function addTodo(text, save = true) {
  if (!text) return;
  const ft_list = document.getElementById('ft_list');
  const div = document.createElement('div');
  div.className = 'todo';
  div.textContent = text;
  div.onclick = function() {
    if (confirm('Do you want to remove this TO DO?')) {
      div.remove();
      saveTodos();
    }
  };
  ft_list.insertBefore(div, ft_list.firstChild);
  if (save) saveTodos();
}

document.getElementById('new-btn').onclick = function() {
  const text = prompt('Enter a new TO DO:');
  if (text && text.trim() !== '') {
    addTodo(text.trim());
  }
};

window.onload = loadTodos;