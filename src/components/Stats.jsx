export default function Stats({ todos }) {
  const total = todos.length;
  const completed = todos.filter(todo => todo.completed).length;
  const pending = total - completed;
  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded-xl border border-blue-200">
        <div className="text-2xl font-bold text-blue-700">{total}</div>
        <div className="text-sm text-blue-600">📝 Total Tasks</div>
      </div>
      <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-xl border border-green-200">
        <div className="text-2xl font-bold text-green-700">{completed}</div>
        <div className="text-sm text-green-600">✅ Completed</div>
      </div>
      <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-4 rounded-xl border border-orange-200">
        <div className="text-2xl font-bold text-orange-700">{pending}</div>
        <div className="text-sm text-orange-600">⏳ Pending</div>
      </div>
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-xl border border-purple-200">
        <div className="text-2xl font-bold text-purple-700">{completionRate}%</div>
        <div className="text-sm text-purple-600">🎯 Progress</div>
      </div>
    </div>
  );
}