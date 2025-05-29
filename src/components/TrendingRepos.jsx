import React, { useState, useEffect } from 'react';
import './TrendingRepos.css';

const GITHUB_API = 'https://api.github.com/search/repositories';
const createdSince = '2024-07-15';

const TrendingRepos = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchRepos(page);
  }, [page]);

  const fetchRepos = async (page) => {
    try {
      const response = await fetch(
        `${GITHUB_API}?q=created:>${createdSince}&sort=stars&order=desc&page=${page}`
      );
      const data = await response.json();
      setRepos(data.items || []);
    } catch (error) {
      console.error('Error fetching repos:', error);
    }
  };

  return (
    <div className="container">
      {repos.map((repo) => (
        <div key={repo.id} className="repo-card">
          <h3 className="repo-name">{repo.name}</h3>
          <p className="repo-description">{repo.description}</p>
          <div className="repo-footer">
            <img src={repo.owner.avatar_url} alt="avatar" className="avatar" />
            <span className="username">{repo.owner.login}</span>
            <span className="stars">⭐ {repo.stargazers_count}</span>
          </div>
        </div>
      ))}

      <div className="pagination">
        <button onClick={() => setPage((p) => Math.max(p - 1, 1))}>
          <img src="/icons/previous.png" alt="Previous" className="pagination-icon" />
        </button>
        <span>Page {page}</span>
        <button onClick={() => setPage((p) => p + 1)}>
          <img src="/icons/nexts.png" alt="Next" className="pagination-icon" />
        </button>
      </div>
    </div>
  );
};

export default TrendingRepos;
