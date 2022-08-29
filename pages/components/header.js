import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { logInAction } from "../../reducers/user";

export default function Header() {
  const { isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // const onloginevent = useCallback(() => {
  //   dispatch(logInAction());
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get("https://6849b5a2-f64f-4b03-894c-a27639674297.mock.pstmn.io/login")
  //     .then(function (result) {
  //       console.log("통신결과:", result);
  //     })
  //     .catch(function (error) {
  //       console.log("error", error);
  //     });
  // }, []);

  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">배나온</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">Home</a>
            <a className="mr-5 hover:text-gray-900" href="/map">
              지도
            </a>
            <a className="mr-5 hover:text-gray-900" href="/postCard">
              게시판
            </a>
            {isLoggedIn ? (
              <a className="mr-5 hover:text-gray-900">마이페이지</a>
            ) : (
              <a
                className="mr-5 hover:text-gray-900"
                href="/login"
                // onClick={onloginevent}
              >
                로그인
              </a>
            )}
          </nav>
        </div>
      </header>
    </>
  );
}
