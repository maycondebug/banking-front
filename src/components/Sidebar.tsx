const menuItems = [
  { label: "Market overview", active: true },
  { label: "Watchlist", active: false },
  { label: "Comparador", active: false },
];

function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-slate-900 border-r border-slate-800 p-4 flex flex-col">
      <div className="mb-10 flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
        <span className="text-xl font-bold text-white">Cripto<span className='text-slate-600'>Desk</span></span>
      </div>
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center p-3 rounded-lg text-sm font-medium transition-colors ${
              item.active
                ? 'bg-blue-600/10 text-blue-500'
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
