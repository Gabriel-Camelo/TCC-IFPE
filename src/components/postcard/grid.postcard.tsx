import {useState, useEffect} from "react";

import Postcard from "./index";
import Col from 'react-bootstrap/Col';

const Grid = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:3000/api/posts");
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  });
  return (
    <div className="postcard-grid">
      {posts.map((post) => (
        <Col xs={12} md={6} lg={4} xl={3}>
          <Postcard type="post" post={post} />
        </Col>
      ))}
    </div>
  );
}

export default Grid;