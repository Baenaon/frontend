import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../pages/components/header"

const Post = () => {
  return (
    <div>
      <Header />
      <div class="flex items-center justify-center p-12">
        <div class="mx-auto w-full max-w-[700px]">
          <form action="https://formbold.com/s/FORM_ID" method="POST">
            <div class="mb-5">
              <label class="mb-3 block text-base font-medium text-[#07074D]">
                위치
              </label>
              <input
                type="text"
                placeholder="위치를 선택하세요"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="mb-5">
              <label class="mb-3 block text-base font-medium text-[#07074D]">
                음식 종류
              </label>
              <input
                placeholder="음식 종류"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
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

export default Post;
