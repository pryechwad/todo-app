import { useState } from 'react';

export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (editText.trim() && editText !== todo.text) {
      onEdit(todo.id, editText.trim());
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSave();
    if (e.key === 'Escape') handleCancel();
  };

  return (
    <div className={`p-4 rounded-xl shadow-sm border-2 transition-all duration-200 ${
      todo.completed 
        ? 'bg-green-50 border-green-200' 
        : 'bg-white border-gray-200 hover:border-orange-300'
    }`}>
      <div className="flex items-center gap-3 mb-2">
        <button
          onClick={() => onToggle(todo.id)}
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
            todo.completed 
              ? 'bg-green-500 border-green-500 text-white' 
              : 'border-gray-300 hover:border-green-400'
          }`}
          title={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
        >
          {todo.completed && '✓'}
        </button>
        
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyPress}
            className="flex-1 px-3 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            autoFocus
          />
        ) : (
          <span 
            className={`flex-1 font-medium ${
              todo.completed 
                ? 'line-through text-gray-500' 
                : 'text-gray-800'
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>
      
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="px-3 py-1 bg-green-500 text-white text-sm rounded-lg hover:bg-green-600 transition-colors"
              >
                ✓ Save
              </button>
              <button
                onClick={handleCancel}
                className="px-3 py-1 bg-gray-400 text-white text-sm rounded-lg hover:bg-gray-500 transition-colors"
              >
                ✕ Cancel
              </button>
            </>
          ) : (
            !todo.completed && (
              <button
                onClick={() => setIsEditing(true)}
                className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-lg hover:bg-blue-200 transition-colors"
              >
                ✏️ Edit
              </button>
            )
          )}
        </div>
        
        <button
          onClick={() => onDelete(todo.id)}
          className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-lg hover:bg-red-200 transition-colors"
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}