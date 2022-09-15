import React, { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "C++", body: "Description" },
    { id: 3, title: "Python", body: "Description" },
  ]);
  const createPost = newPost => {
    setPosts([...posts, newPost]);
  };
  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
  };
  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList remove={removePost} posts={posts} title="Post Lists 1" />
    </div>
  );
};

export default App;
