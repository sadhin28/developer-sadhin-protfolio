
"use client";

import { useEffect, useState } from "react";

const REPOS_PER_PAGE = 9;
const GITHUB_USERNAME = "sadhin28";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch public GitHub repositories
  useEffect(() => {
    const controller = new AbortController();

    const fetchRepos = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
          {
            signal: controller.signal,
            headers: {
              Accept: "application/vnd.github+json",
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || `GitHub API Error: ${response.status}`
          );
        }

        if (!Array.isArray(data)) {
          throw new Error("Invalid GitHub response.");
        }

        setRepos(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("GitHub fetch error:", err);
          setError(err.message || "Unable to load repositories.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchRepos();

    return () => controller.abort();
  }, []);

  // Pagination
  const totalPages = Math.ceil(repos.length / REPOS_PER_PAGE);

  const indexOfLastRepo = currentPage * REPOS_PER_PAGE;
  const indexOfFirstRepo = indexOfLastRepo - REPOS_PER_PAGE;

  const currentRepos = repos.slice(
    indexOfFirstRepo,
    indexOfLastRepo
  );

  if (loading) {
    return (
      <p className="text-center text-gray-400 py-10">
        Loading repositories...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-400 py-10">
        {error}
      </p>
    );
  }

  return (
    <section
      id="projects"
      className="w-full max-w-7xl mx-auto py-12 px-2"
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
        My GitHub{" "}
        <span className="text-blue-500">Repositories</span>
      </h2>

      {/* Empty State */}
      {repos.length === 0 ? (
        <p className="text-center text-gray-400">
          No public repositories found.
        </p>
      ) : (
        <>
          {/* Repository Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {currentRepos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col justify-between min-w-0 p-5 md:p-6 border border-gray-700 bg-gray-800 rounded-xl shadow-lg hover:shadow-blue-500/30 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-blue-400 mb-3 break-words">
                    {repo.name}
                  </h3>

                  <p className="text-gray-300 text-sm md:text-base line-clamp-3 mb-5">
                    {repo.description || "No description available."}
                  </p>
                </div>

                <div className="flex flex-wrap justify-between items-center gap-3 text-gray-400 text-sm border-t border-gray-700 pt-3 mt-auto">
                  <span>
                    {repo.language || "N/A"}
                  </span>

                  <span>
                    ⭐ {repo.stargazers_count}
                  </span>

                  <span>
                    Forks: {repo.forks_count}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center flex-wrap gap-2 mt-10">

              <button
                type="button"
                onClick={() =>
                  setCurrentPage((prev) => Math.max(prev - 1, 1))
                }
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-md bg-gray-700 text-white hover:bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition"
              >
                Prev
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  type="button"
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-4 py-2 rounded-md transition ${
                    currentPage === index + 1
                      ? "bg-blue-600 text-white"
                      : "bg-gray-700 text-white hover:bg-blue-600"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                type="button"
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.min(prev + 1, totalPages)
                  )
                }
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-md bg-gray-700 text-white hover:bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition"
              >
                Next
              </button>

            </div>
          )}
        </>
      )}
    </section>
  );
}
