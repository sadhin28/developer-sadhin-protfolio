"use client";
import { useEffect, useState } from "react";

const REPOS_PER_PAGE =12;

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/sadhin28/repos?sort=updated&per_page=100")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading) return <p className="text-white text-center mt-10">Loading...</p>;

  const indexOfLastRepo = currentPage * REPOS_PER_PAGE;
  const indexOfFirstRepo = indexOfLastRepo - REPOS_PER_PAGE;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);
  const totalPages = Math.ceil(repos.length / REPOS_PER_PAGE);

  return (
    <section id="projects" className="max-w-7xl mx-auto p-4 mt-10">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">My GitHub <span className="text-blue-600">Projects</span></h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentRepos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 duration-300"
          >
            <h3 className="text-xl font-semibold text-blue-500 mb-2">{repo.name}</h3>
            <p className="text-gray-300 mb-4">{repo.description || "No description"}</p>
            <div className="flex justify-between text-gray-400 text-sm">
              <span>{repo.language || "N/A"}</span>
              <span>⭐ {repo.stargazers_count}</span>
            </div>
          </a>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center mt-8 gap-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx + 1}
            onClick={() => setCurrentPage(idx + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === idx + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-white hover:bg-blue-600"
            }`}
          >
            {idx + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
}
