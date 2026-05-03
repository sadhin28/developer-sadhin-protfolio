import { NextResponse } from "next/server";

export async function GET() {
  const username = "sadhin28"; // তোমার GitHub username
  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
    if (!res.ok) {
      console.error("GitHub API error:", res.status);
      return NextResponse.json({ error: "Failed to fetch repos" }, { status: res.status });
    }
    const data = await res.json();
    const repos = data.map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      language: repo.language,
      stargazers_count: repo.stargazers_count,
    }));
    return NextResponse.json(repos);
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
