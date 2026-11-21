
"use client";

import { useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Github, CalendarDays } from "lucide-react";

export default function GitHubContributions() {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);

  const years = [currentYear, currentYear - 1];

  return (
    <section
      id="github-contributions"
      className="mx-auto w-full max-w-7xl overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      {/* Section Heading */}
      <div className="mb-8 text-center sm:mb-10">
        <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
          <Github size={14} />
          Open Source Activity
        </span>

        <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
          My GitHub{" "}
          <span className="text-blue-500">Contributions</span>
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
          A visual overview of my coding activity and contributions
          throughout the year.
        </p>
      </div>

      {/* Calendar Card */}
      <div className="rounded-2xl border border-white/10 bg-gray-800/40 p-4 shadow-xl shadow-black/10 backdrop-blur-lg transition-all duration-300 hover:border-blue-500/30 sm:p-6 lg:p-8">

        {/* Calendar Header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-2.5 text-blue-400">
              <CalendarDays size={22} />
            </div>

            <div>
              <h3 className="text-base font-semibold text-white sm:text-lg">
                Contribution Activity
              </h3>
              <p className="text-xs text-gray-400 sm:text-sm">
                GitHub contribution history
              </p>
            </div>
          </div>

          {/* Year Selector */}
          <div className="flex items-center gap-3 sm:w-auto">
            <label
              htmlFor="github-year"
              className="whitespace-nowrap text-sm font-medium text-gray-300"
            >
              Select Year
            </label>

            <select
              id="github-year"
              value={year}
              onChange={(event) => setYear(Number(event.target.value))}
              className="min-w-0 flex-1 cursor-pointer rounded-lg border border-white/10 bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white outline-none transition-all duration-300 hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 sm:flex-none"
            >
              {years.map((itemYear) => (
                <option
                  key={itemYear}
                  value={itemYear}
                  className="bg-gray-900 text-white"
                >
                  {itemYear}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* GitHub Calendar */}
        <div className="w-full overflow-x-auto rounded-xl border border-white/5 bg-gray-950/50 p-3 sm:p-4">
          <div className="mx-auto w-max min-w-full">
            <GitHubCalendar
              username="sadhin28"
              year={year}
              colorScheme="dark"
              blockSize={12}
              blockMargin={3}
              fontSize={12}
              blockRadius={2}
              labels={{
                totalCount: "{{count}} contributions in {{year}}",
              }}
            />
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-5 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-5 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-gray-500 sm:text-sm">
            Contribution data provided by GitHub.
          </p>

          <a
            href="https://github.com/sadhin28"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-colors duration-300 hover:text-blue-300"
          >
            <Github size={16} />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
