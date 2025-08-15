import { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('taskmaster-todos');
    return saved ? JSON.parse(saved) : [
      { id: 1, text: "Complete React project", completed: false },
      { id: 2, text: "Review pull requests", completed: true },
      { id: 3, text: "Plan weekend trip", completed: false }
    ];
  });

  useEffect(() => {
    localStorage.setItem('taskmaster-todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, {
      id: Date.now(),
      text,
      completed: false
    }]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-pink-50 to-cyan-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-orange-300 to-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-4 w-72 h-72 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 py-8 px-4">
        <div className="max-w-md mx-auto">
          <Header />
          <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/40 p-8">
            <TodoForm onAdd={addTodo} />
            <TodoList 
              todos={todos} 
              onToggle={toggleTodo} 
              onDelete={deleteTodo} 
              onEdit={editTodo}
            />
          </div>
          <div className="text-center mt-6 text-gray-600 text-sm">
            💾 Auto-saves to your browser • 🌟 Always available offline
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
