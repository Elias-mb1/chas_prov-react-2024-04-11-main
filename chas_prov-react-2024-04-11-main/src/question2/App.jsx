// 2. Visa lista med Posts (Inlägg) via API-Anrop (3p)
// Hämta post-data från https://jsonplaceholder.typicode.com/posts.
// Komponenten ska visa titlarna på de första 10 posts.
// Varje titel ska ha en knapp märkt "Visa detaljer".
// När denna knapp klickas på, ska inläggets body visas under sin titel.

import React, { useState, useEffect } from "react";

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [showDetails, setShowDetails] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.slice(0, 10)); 
        setShowDetails(Array(data.length).fill(false)); 
      });
  }, []);

  const toggleDetails = (index) => {
    setShowDetails((prevDetails) => {
      const updatedDetails = [...prevDetails];
      updatedDetails[index] = !updatedDetails[index];
      return updatedDetails;
    });
  };

  return (
    <div>
      <h2>Posts List</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={post.id}>
            <div>
              <strong>{post.title}</strong>
              <button onClick={() => toggleDetails(index)}>
                {showDetails[index] ? "Hide Details" : "Show Details"}
              </button>
            </div>
            {showDetails[index] && <p>{post.body}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;

