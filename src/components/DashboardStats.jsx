import { BookOpen, CheckCircle, Clock, Trophy } from "lucide-react";

const stats = [
  {
    title: "Courses",
    value: "6",
    icon: BookOpen,
  },
  {
    title: "Completed",
    value: "2",
    icon: CheckCircle,
  },
  {
    title: "Hours Learned",
    value: "34",
    icon: Clock,
  },
  {
    title: "Quiz Score",
    value: "80%",
    icon: Trophy,
  },
];

function DashboardStats() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {stat.title}
                </p>
                <h2 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                  {stat.value}
                </h2>
              </div>

              <div className="rounded-xl bg-indigo-100 p-3 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300">
                <Icon size={22} />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default DashboardStats;
