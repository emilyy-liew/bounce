import { useState, useEffect } from "react";

import { Header } from "../components/Headers";

const updatesText = "Create skeleton code for updates log page";

export default function UpdateLog() {
  return <Header title={updatesText} />;
}

function UpdateLogNew() {
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    // TODO: Replace these variables with your GitHub repository details
    const owner = "your_github_username";
    const repo = "your_repository_name";
    const accessToken = "your_personal_access_token";

    fetch(`https://api.github.com/repos/${owner}/${repo}/commits`, {
      headers: {
        Authorization: `token ${accessToken}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCommits(data);
      })
      .catch((error) => {
        console.error("Error fetching commit history:", error);
      });
  }, []);

  return (
    <div>
      <h2>Commit History:</h2>
      <ul>
        {commits.map((commit) => (
          <li key={commit.sha}>{commit.commit.message}</li>
        ))}
      </ul>
    </div>
  );
}
