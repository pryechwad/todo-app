export default function QuickActions({ todos, onClearCompleted, onMarkAllComplete, onClearAll }) {
  const hasCompleted = todos.some(todo => todo.completed);
  const hasIncomplete = todos.some(todo => !todo.completed);
  const hasTodos = todos.length > 0;

  if (!hasTodos) return null;

  return (
    <div className="flex gap-2 mb-6">
      {hasIncomplete && (
        <button
          onClick={onMarkAllComplete}
          className="flex-1 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors text-sm font-medium"
        >
          ✅ Complete All
        </button>
      )}
      {hasCompleted && (
        <button
          onClick={onClearCompleted}
          className="flex-1 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-sm font-medium"
        >
          🗑️ Clear Completed
        </button>
      )}
      <button
        onClick={onClearAll}
        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
      >
        🗑️ Clear All
      </button>
    </div>
  );
}