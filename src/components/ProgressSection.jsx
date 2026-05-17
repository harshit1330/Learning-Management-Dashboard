function ProgressSection() {
  const weeklyProgress = [
    { day: "Mon", value: 53 },
    { day: "Tue", value: 68 },
    { day: "Wed", value: 47 },
    { day: "Thu", value: 93 },
    { day: "Fri", value: 65 },
    { day: "Sat", value: 61 },
    { day: "Sun", value: 79 },
  ];

  return (
    <section className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900">
      <h2 className="text-lg font-bold text-slate-900 dark:text-white">
        Weekly Learning Activity
      </h2>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
        Simple progress bars to show learning consistency.
      </p>

      <div className="mt-5 space-y-4">
        {weeklyProgress.map((item) => (
          <div key={item.day}>
            <div className="mb-1 flex justify-between text-sm">
              <span className="font-medium text-slate-600 dark:text-slate-300">
                {item.day}
              </span>
              <span className="text-slate-500 dark:text-slate-400">
                {item.value}%
              </span>
            </div>

            <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700">
              <div
                className="h-2 rounded-full bg-emerald-500"
                style={{ width: `${item.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProgressSection;
