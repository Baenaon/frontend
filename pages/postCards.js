import React, { useEffect, useState, useCallback } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Header from "../pages/components/header";
import PostCard from "../pages/postCard";
import { LOAD_POSTS_REQUEST } from "../reducers/post";

const PostCards = () => {
  const dispatch = useDispatch();
  const mainPosts = useSelector((state) => state.post);

  useEffect(() => {
    dispatch({
      type: LOAD_POSTS_REQUEST,
    });
  }, [mainPosts]);

  console.log(mainPosts);
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
