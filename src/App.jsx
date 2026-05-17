import { useMemo, useState } from "react";
import Header from "./components/Header";
import DashboardStats from "./components/DashboardStats";
import CourseCard from "./components/CourseCard";
import ProgressSection from "./components/ProgressSection";
import QuizBox from "./components/QuizBox";
import TaskManager from "./components/TaskManager";
import { courses } from "./data/courses";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Frontend", "Programming", "Design", "Tools"];

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch = course.title
        .toLowerCase()
        .includes(searchText.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || course.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchText, selectedCategory]);

  return (
    <main className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-slate-100 p-4 transition dark:bg-slate-950 md:p-8">
        <div className="mx-auto max-w-7xl space-y-6">
          <Header
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            searchText={searchText}
            setSearchText={setSearchText}
          />

          <DashboardStats />

          <section className="grid gap-6 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                      My Courses
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Search and filter courses by category.
                    </p>
                  </div>

                  <select
                    value={selectedCategory}
                    onChange={(event) => setSelectedCategory(event.target.value)}
                    className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  >
                    {categories.map((category) => (
                      <option key={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {filteredCourses.length > 0 ? (
                    filteredCourses.map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))
                  ) : (
                    <p className="rounded-xl bg-slate-50 p-4 text-sm text-slate-500 dark:bg-slate-800 dark:text-slate-400 md:col-span-2">
                      No courses found. Try another search or category.
                    </p>
                  )}
                </div>
              </div>

              <ProgressSection />
            </div>

            <div className="space-y-6">
              <QuizBox />
              <TaskManager />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;
