"use client";
import AOS from "aos";
import { useEffect, useState } from "react";

const REPOS_PER_PAGE = 6;

// Add your GitHub username
const GITHUB_USERNAME = "sadhin28";

// Optional: Add a GitHub Personal Access Token (PAT) to avoid rate limits
const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN ; // "ghp_xxxxx..." or leave empty for public access

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
          GITHUB_TOKEN
            ? { headers: { Authorization: `token ${GITHUB_TOKEN}` } }
            : {}
        );

        const data = await res.json();
        console.log("GitHub response:", data); // Check in console

        if (Array.isArray(data)) {
          setRepos(data);
        } else {
          console.error("Unexpected GitHub response:", data);
          setError(data.message || "Could not load repositories from GitHub.");
          setRepos([]);
        }
      } catch (err) {
        console.error(err);
        setError("Error fetching repositories.");
        setRepos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);
    //Aos init    
    useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      once: true, // animation runs once
      easing: "ease-in-out", // smooth transition
    });
  }, []);

  if (loading)
    return (
      <p className="text-center text-gray-500 mt-10 dark:text-gray-400">
        Loading repositories...
      </p>
    );

  if (error)
    return (
      <p className="text-center text-red-500 mt-10 dark:text-red-400">
        {error}
      </p>
    );

  // Pagination logic
  const totalPages = Math.ceil(repos.length / REPOS_PER_PAGE);
  const indexOfLastRepo = currentPage * REPOS_PER_PAGE;
  const indexOfFirstRepo = indexOfLastRepo - REPOS_PER_PAGE;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

  return (
    <section id="projects" className="max-w-7xl mx-auto  py-10">
      
      <h2 className="text-3xl font-bold text-center mb-10 dark:text-white">
        My GitHub <span className="text-blue-500">Repositories</span>
      </h2>

      {/* Repos Grid */}
      <div data-aos="zoom-in" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentRepos.map((repo) => (
          <a
            data-aos="zoom-in"
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between p-6 border border-gray-700 bg-gray-800 rounded-xl shadow-lg hover:shadow-blue-500/50 hover:border-blue-500 transition-transform transform hover:-translate-y-1 duration-300"
          >
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-blue-400 mb-2 truncate">
                {repo.name}
              </h3>
              <p className="text-gray-300 text-sm md:text-base line-clamp-3 mb-4">
                {repo.description || "No description available."}
              </p>
            </div>

            <div className="flex justify-between items-center text-gray-400 text-sm border-t border-gray-700 pt-3 mt-auto">
              <span>{repo.language || "N/A"}</span>
              <span>⭐ {repo.stargazers_count}</span>
            </div>
          </a>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-2 flex-wrap">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx + 1}
              onClick={() => setCurrentPage(idx + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === idx + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-white"
              }`}
            >
              {idx + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}
