function CourseCard({ course }) {
  return (
    <article className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:bg-slate-900">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
            {course.category}
          </span>

          <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">
            {course.title}
          </h3>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {course.lessons} lessons · {course.level}
          </p>
        </div>
      </div>

      <div className="mt-5">
        <div className="mb-2 flex justify-between text-sm">
          <span className="font-medium text-slate-600 dark:text-slate-300">
            Progress
          </span>
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            {course.progress}%
          </span>
        </div>

        <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700">
          <div
            className="h-2 rounded-full bg-indigo-600"
            style={{ width: `${course.progress}%` }}
          ></div>
        </div>
      </div>

      <button className="mt-5 w-full rounded-xl border border-slate-200 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
        Continue Course
      </button>
    </article>
  );
}

export default CourseCard;
