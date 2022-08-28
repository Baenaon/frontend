import React, { useEffect, useState, useCallback } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Header from "../pages/components/header";
import PostCard from "../pages/postCard";

const PostCards = () => {
  const mainPosts = useSelector((state) => state.post.mainPosts);
  return (
    <div>
      <Header />
      {mainPosts.map((c) => {
        return <PostCard key={c.id} post={c} />;
      })}
    </div>
  );
};

export default PostCards;
