import { Moon, Sun, Search } from "lucide-react";

function Header({ darkMode, setDarkMode, searchText, setSearchText }) {
  return (
    <header className="flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Learning Dashboard
        </h1>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search courses..."
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm outline-none focus:border-indigo-400 dark:border-slate-700 dark:bg-slate-800 dark:text-white sm:w-60"
          />
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 dark:bg-white dark:text-slate-900"
        >
          {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          {darkMode ? "Light" : "Dark"}
        </button>
      </div>
    </header>
  );
}

export default Header;
