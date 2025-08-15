export default function Header() {
  return (
    <header className="text-center mb-8">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-pink-400 to-cyan-400 rounded-full blur-xl opacity-40 animate-pulse"></div>
        <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
          <div className="text-5xl mb-3">🎯</div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-2">
            TaskMaster Pro
          </h1>
          <p className="text-gray-600 font-medium">Your Personal Productivity Hub</p>
          <div className="flex justify-center gap-2 mt-3">
            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">✨ Smart</span>
            <span className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-full">🚀 Fast</span>
            <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">💾 Auto-Save</span>
          </div>
        </div>
      </div>
    </header>
  );
}