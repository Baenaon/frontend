import React, { useEffect, useState, useCallback } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Header from "../pages/components/header";

const PostForm = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const mainPosts = useSelector((state) => state.post);

  const [contentText, setContentText] = useState("");
  const dispatch = useDispatch();

  const onChangeText = useCallback((e) => {
    setContentText(e.target.value);
    console.log(contentText);
  }, []);

  const onSubmit = useCallback(() => {
    dispatch(addPost);
  }, []);

  return (
    <div>
      <Header />
      <div class="flex items-center justify-center p-12">
        <div class="mx-auto w-full max-w-[700px]">
          <div className="mb-9">
            <label
              className="mb-3 block text-base font-light

             text-[#07074D]"
            >
              위치
            </label>

            <label className="mb-3 block text-base font-medium text-[#07074D]">
              GS 편의점
            </label>
          </div>
          <form onFinish={onSubmit}>
            <div class="mb-5">
              <label class="mb-3 block text-base font-medium text-[#07074D]">
                음식 종류
              </label>
            </div>
            <div class="mb-5">
              <label
                for="subject"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                제목
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="제목을 입력하세요."
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="mb-5">
              <label
                for="message"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                내용
              </label>
              <textarea
                onChange={onChangeText}
                rows="9"
                name="message"
                id="message"
                placeholder="내용을 입력하세요."
                class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>
            <div>
              <button class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
