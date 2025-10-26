"use client";
import { useEffect, useState } from "react";

const REPOS_PER_PAGE = 15;

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.github.com/users/sadhin28/repos?sort=updated&per_page=100"
    )
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading)
    return <p className="text-white text-center mt-10">Loading...</p>;

  const indexOfLastRepo = currentPage * REPOS_PER_PAGE;
  const indexOfFirstRepo = indexOfLastRepo - REPOS_PER_PAGE;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);
  const totalPages = Math.ceil(repos.length / REPOS_PER_PAGE);

  return (
    <section id="projects" className="max-w-7xl mx-auto p-4 mt-10">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-8 text-center">
        My GitHub <span className="text-blue-600">Repositories</span>
      </h2>

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {currentRepos.map((repo) => (
    <a
      key={repo.id}
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col justify-between w-full h-full p-6 border border-gray-700 bg-gray-800 rounded-xl shadow-lg hover:shadow-blue-500/50 hover:border-blue-500 transition-transform transform hover:-translate-y-1 duration-300"
    >
      <div>
        <h3 className="text-lg md:text-xl font-semibold text-blue-500 mb-2 truncate">
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


      {/* Pagination Buttons */}
      <div className="flex justify-center mt-8 gap-2 text-xs md:text-[18px]">
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
          className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
}
