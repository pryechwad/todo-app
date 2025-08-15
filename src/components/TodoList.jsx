import TodoItem from './TodoItem';

export default function TodoList({ todos, onToggle, onDelete, onEdit }) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📋</div>
        <h3 className="text-lg font-medium text-gray-600 mb-2">No tasks yet</h3>
        <p className="text-gray-400">Add your first todo above to get started!</p>
      </div>
    );
  }

  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div>
      <div className="flex items-center justify-between mb-4 px-1">
        <h2 className="text-lg font-semibold text-gray-700">
          📋 Tasks ({todos.length})
        </h2>
        {completedCount > 0 && (
          <span className="text-sm text-green-600 bg-green-100 px-3 py-1 rounded-full">
            ✓ {completedCount} completed
          </span>
        )}
      </div>
      <div className="space-y-3">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>
    </div>
  );
}