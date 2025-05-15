import React, { useState, useEffect } from "react";
import { Container, Postcard } from "../components";
import service from "../appwrite/awconfig";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    service.getPostss([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="py-2 w-1/4">
              <Postcard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
