import { useState } from 'react';

const tips = [
  "🎯 Break large tasks into smaller, manageable steps",
  "⏰ Set specific deadlines for your tasks",
  "🌟 Prioritize your most important tasks first",
  "🔄 Review and update your tasks regularly",
  "🎉 Celebrate completing your tasks!",
  "📱 Use this app offline - it saves automatically",
  "✏️ Double-click any task to edit it quickly",
  "🚀 Stay consistent with your daily planning"
];

export default function Tips() {
  const [currentTip, setCurrentTip] = useState(0);

  const nextTip = () => {
    setCurrentTip((prev) => (prev + 1) % tips.length);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-4 rounded-xl border border-indigo-200 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-indigo-700 mb-1">💡 Productivity Tip</h3>
          <p className="text-sm text-indigo-600">{tips[currentTip]}</p>
        </div>
        <button
          onClick={nextTip}
          className="ml-3 px-3 py-1 bg-indigo-200 text-indigo-700 rounded-lg hover:bg-indigo-300 transition-colors text-sm"
        >
          Next →
        </button>
      </div>
    </div>
  );
}