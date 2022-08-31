import React, { useEffect, useState, useCallback } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Header from "../pages/components/header";
import Comment from "../pages/comment";
import { ADD_POST_REQUEST, ADD_POST_SUCCESS } from "../reducers/post";
import PostCard from "./postCard";

const Content = () => {
  return (
    <div>
      <Header />
      <div className=" items-center justify-center p-12">
        {/*container*/}
        <div className="mx-auto w-full max-w-[700px]">
          <div className="mb-9">
            <h2 className="h-6 text-sm title-font text-gray-500 tracking-widest">
              GS 편의점 / 치킨
            </h2>
            <h1 className="h-11 text-gray-900 text-4xl title-font font-medium mb-1">
              치킨 같이 시키실 분
            </h1>
          </div>
          <div className="mb-40">
            <div className="h-5 flex-grow border-t-2 "></div>
            <p>12시에 교촌치킨 GS에서 시키실 분 찾습니다.</p>
          </div>
          <form action="" className="w-full ">
            <div className="mb-2">
              <label htmlFor="comment" className="text-lg text-gray-600">
                댓글
              </label>
              <textarea
                className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
                name="comment"
                placeholder=""
              ></textarea>
            </div>
            <div className="flex flex-row-reverse space-x-4 space-x-reverse ">
              <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-2 px-4 text-base font-semibold text-white outline-none">
                댓글 등록
              </button>
            </div>
          </form>
          <Comment />
          {/*{mainPosts.map((c) => {*/}
          {/*  return <Comment key={c.id} post={c} />;*/}
          {/*})}*/}
        </div>
      </div>
    </div>
  );
};

export default Content;
