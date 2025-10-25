"use client";
import { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";

const GitHubContributions = () => {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);
  const [blockSize, setBlockSize] = useState(15);
  const [fontSize, setFontSize] = useState(16);
  const [blockMargin, setBlockMargin] = useState(4);
  const [containerPadding, setContainerPadding] = useState("px-6");
  const [selectFullWidth, setSelectFullWidth] = useState(false);

  // Responsive adjustments
  useEffect(() => {
    const updateSizes = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setBlockSize(8);
        setFontSize(10);
        setBlockMargin(2);
        setContainerPadding("px-2");
        setSelectFullWidth(true);
      } else if (width < 1024) {
        setBlockSize(12);
        setFontSize(14);
        setBlockMargin(3);
        setContainerPadding("px-4");
        setSelectFullWidth(false);
      } else {
        setBlockSize(15);
        setFontSize(16);
        setBlockMargin(4);
        setContainerPadding("px-6");
        setSelectFullWidth(false);
      }
    };

    updateSizes();
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, []);

  const years = [currentYear, currentYear - 1];

  return (
    <section className="text-center px-4 max-w-7xl">
      <h2 className="text-xl md:text-2xl font-bold py-5 mb-4 text-white">
        My GitHub <span className="text-blue-600">Contributions</span>
      </h2>

      <div className="flex flex-col md:flex-row-reverse md:justify-between  gap-4 ">
        {/* Year Selector */}
        <div className="md:w-1/5 flex md:flex-row-reverse items-center md:items-start gap-3">
          <label
            htmlFor="year-select"
           
          >
            <h1  className="visible  text-xl   font-bold text-blue-500">Year</h1>
          </label>
          <select
            id="year-select"
            value={year}
            onChange={(e) => setYear(parseInt(e.target.value))}
            className={`border-2 p-2 border-gray-600 bg-gray-800 rounded-xl shadow-2xl hover:shadow-blue-500 hover:border-blue-500 hover:shadow-lg transition transform hover:-translate-y-1 duration-600 ${
              selectFullWidth ? "w-full" : "w-full"
            }`}
          >
            {years.map((y) => (
              <option  key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>

        {/* GitHub Calendar */}
        <div
          className={` p-5 border-2 border-gray-600 bg-gray-800 rounded-xl shadow-2xl hover:shadow-blue-500 hover:border-blue-500 hover:shadow-lg transition transform hover:-translate-y-1 duration-600 overflow-x-auto md:w-full ${containerPadding} w-full max-w-4xl`}
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <GitHubCalendar
            username="sadhin28"
            blockSize={blockSize}
            blockMargin={blockMargin}
            fontSize={fontSize}
            year={year}
            colorScheme="light"
          />
        </div>
      </div>
    </section>
  );
};

export default GitHubContributions;
