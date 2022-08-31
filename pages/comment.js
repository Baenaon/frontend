import React, { useEffect, useState, useCallback } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Header from "../pages/components/header";
import PostCard from "../pages/postCard";
import { LOAD_POSTS_REQUEST } from "../reducers/post";

const Comment = () => {
  return (
    <div className="flex flex-wrap -m-4">
      <div className="flex  p-8 sm:flex-row flex-col">
        <div className="w-10 h-10 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-8 h-8"
            viewBox="0 0 24 24"
          >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
            지민
          </h2>
          <p className="leading-relaxed text-base">좋아요!</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
