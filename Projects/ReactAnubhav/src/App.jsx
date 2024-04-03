import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import img from "../src/components/img"
import "./App.css";

function App() {
  return (
    <>
      <div id="main" className=" w-full">
        <nav
          class="navbar"
          className=" flex justify-between bg-slate-100 w-full m-0 "
        >
          <div id="logo">
            1st Hello
            {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="40"
            viewBox="0 0 45 40"
            fill="none"
          >
            <path
              d="M22.0122 0.5L10.9529 18.6788L12.6481 19.2122L0.000740229 40.0009L0 40.0021H5.0571C8.96308 40.0021 12.5656 37.8961 14.4818 34.4925L22.116 20.9211L22.7157 21.9718L29.7669 34.4925C31.683 37.8961 35.2855 40.0021 39.1915 40.0021H45L31.8871 19.1643L33.4525 18.6794L22.0122 0.5Z"
              fill="#414141"
            />
          </svg> */}
          </div>
          <ul className=" flex flex-wrap mr-10">
            <li
              class="item"
              className=" flex justify-center items-center list-none w-32 rounded-lg my-0 mx-1 hover:bg-slate-400 cursor-pointer"
            >
              <a href="#" classname=" no-underline font-bold">
                Trending
              </a>
            </li>
            <li
              class="item"
              className=" flex justify-center items-center list-none w-32 rounded-lg my-0 mx-1 hover:bg-slate-400 cursor-pointer"
            >
              <a href="#" classname="no-underline font-bold">
                Videos
              </a>
            </li>
            <li
              class="item"
              className=" flex justify-center items-center list-none w-32 rounded-lg my-0 mx-1 hover:bg-slate-400 cursor-pointer"
            >
              <a href="#" classname="no-underline font-bold">
                Guidelines
              </a>
            </li>
            <li
              class="item"
              className=" flex justify-center items-center list-none w-32 rounded-lg my-0 mx-1 hover:bg-slate-400 cursor-pointer"
            >
              <a href="#" classname="no-underline font-bold">
                Request Article
              </a>
            </li>
            <li
              class="item"
              id="last-item"
              className=" flex justify-center items-center list-none rounded-lg my-0 mx-1 cursor-pointer bg-black text-white h-10 w-36 ml-5 hover:bg-slate-900"
            >
              <a href="#" classname="no-underline font-bold text-white pl-2">
                Write Article
              </a>
              2nd Hello
              {/* <svg
              id="arrow-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="20"
              viewBox="0 0 10 19"
              fill="none"
            >
              <path
                d="M1.91003 17.171L8.43003 10.651C9.20003 9.88103 9.20003 8.62103 8.43003 7.85103L1.91003 1.33103"
                stroke="#fff"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg> */}
            </li>
          </ul>
        </nav>
        <div id="boss" className=" flex flex-col items-center">
          <h1 className=" text-8xl text-center">Piyush Jangra</h1>
          <p className=" text-4xl m-0 text-center">Stories of Success</p>
          <div class="main-search" className=" flex my-10 mx-0 w-96 h-12">
            <input
              className=" w-11/12 h-full bg-black rounded-bl-3xl rounded-tl-3xl rounded-r-sm border-solid border-white"
              type="text"
              name="search"
              id="search"
              placeholder="Search for your dreams"
              required
            />
            <div class="div-search-svg" className=" w-2/12">
              3rd Hello
              {/* <svg
              id="search-svg"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0,0,256,256"
            >
              <g transform="translate(42.24,42.24) scale(0.67,0.67)">
                <g
                  fill="#000000"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style="mix-blend-mode: normal"
                >
                  <path
                    d="M-63.04478,319.04478v-382.08955h382.08955v382.08955z"
                    id="bgRectangle"
                  ></path>
                </g>
                <g
                  fill="#ffffff"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style="mix-blend-mode: normal"
                >
                  <g transform="scale(4,4)">
                    <path
                      d="M24,2.88867c-11.63429,0 -21.11133,9.47705 -21.11133,21.11133c0,11.63428 9.47704,21.11133 21.11133,21.11133c5.03655,0 9.6647,-1.77999 13.29883,-4.73828l14.83203,18.58008c0,0 3.24862,0.48286 5.26563,-1.61914c2.031,-2.118 1.55469,-5.19922 1.55469,-5.19922l-18.57812,-14.83594c2.95829,-3.63413 4.73828,-8.26228 4.73828,-13.29883c0,-11.63428 -9.47704,-21.11133 -21.11133,-21.11133zM24,7.11133c9.35255,0 16.88867,7.53613 16.88867,16.88867c0,9.35254 -7.53612,16.88867 -16.88867,16.88867c-9.35255,0 -16.88867,-7.53613 -16.88867,-16.88867c0,-9.35254 7.53612,-16.88867 16.88867,-16.88867z"
                    ></path>
                  </g>
                </g>
              </g>
            </svg> */}
            </div>
          </div>
        </div>

        {/* <!-- SLIDER --> */}

        <div id="slider" className=" my-16 mx-auto flex justify-around">
          <div
            class="company"
            className=" flex items-center justify-center h-20 w-20 relative"
          >
            Hello
            <img
              src="img/instagram.png"
              alt=""
              classname=" h-3/4 w-3/4 transition-all duration-500 ease-in-out delay-0"
            />
          </div>
          <div
            class="company"
            className=" flex items-center justify-center h-20 w-20 relative"
          >
            Hello
            <img
              src="img/facebook.png"
              alt=""
              classname=" h-3/4 w-3/4 transition-all duration-500 ease-in-out delay-0"
            />
          </div>
          <div
            class="company"
            className=" flex items-center justify-center h-20 w-20 relative"
          >
            Hello
            <img
              src="img/google-1088004_1920.png"
              alt=""
              classname=" h-3/4 w-3/4 transition-all duration-500 ease-in-out delay-0"
            />
          </div>
          <div
            class="company"
            className=" flex items-center justify-center h-20 w-20 relative"
          >
            Hello
            <img
              src="img/instagram.png"
              alt=""
              classname=" h-3/4 w-3/4 transition-all duration-500 ease-in-out delay-0"
            />
          </div>
          <div
            class="company"
            className=" flex items-center justify-center h-20 w-20 relative"
          >
            Hello
            <img
              src="img/messenger.png"
              alt=""
              classname=" h-3/4 w-3/4 transition-all duration-500 ease-in-out delay-0"
            />
          </div>
          <div
            class="company"
            className=" flex items-center justify-center h-20 w-20 relative"
          >
            Hello
            <img
              src="img/telegram.png"
              alt=""
              classname=" h-3/4 w-3/4 transition-all duration-500 ease-in-out delay-0"
            />
          </div>
          <div
            class="company"
            className=" flex items-center justify-center h-20 w-20 relative"
          >
            Hello
            <img
              src="img/whatsapp.png"
              alt=""
              classname=" h-3/4 w-3/4 transition-all duration-500 ease-in-out delay-0"
            />
          </div>
          <div
            class="company"
            className=" flex items-center justify-center h-20 w-20 relative"
          >
            Hello
            <img
              src="img/twitter.png"
              alt=""
              classname=" h-3/4 w-3/4 transition-all duration-500 ease-in-out delay-0"
            />
          </div>
          <div
            class="company"
            className=" flex items-center justify-center h-20 w-20 relative"
          >
            Hello
            <img
              src="img/facebook2.png"
              alt=""
              classname=" h-3/4 w-3/4 transition-all duration-500 ease-in-out delay-0"
            />
          </div>
          <div
            class="company"
            className=" flex items-center justify-center h-20 w-20 relative"
          >
            Hello
            <img
              src="img/messenger.png"
              alt=""
              classname=" h-3/4 w-3/4 transition-all duration-500 ease-in-out delay-0"
            />
          </div>
        </div>

        {/* <!-- STORIES --> */}

        <h1 id="trending-stories" className=" text-center text-7xl">
          Trending Stories
        </h1>
        <div
          id="stories"
          className=" flex flex-wrap items-center mt-24 ml-0 mb-0 mr-0"
        >
          <div
            class="profile"
            className=" flex flex-wrap flex-col items-center w-1/2 h-full"
          >
            <img
              class="profile-img"
              src="img/google-1088004_1920.png"
              alt=""
              className=" h-auto w-3/5 border-2 border-solid border-black shadow-sm rounded-md duration-500 hover:cursor-pointer hover:shadow-sm"
            />
            <div
              class="about-profile"
              className=" flex flex-wrap items-center mt-10 mr-1 mb-2 ml-1 w-3/5"
            >
              <img src="img/facebook.png" alt="" />
              <a class="name" href="" className=" top-6 font-bold text-black">
                Piyush Dhamu
              </a>
              <span>|</span>
              <a
                href=""
                className=" my-0 mx-2 no-underline top-5 text-gray-500"
              >
                Company
              </a>
            </div>
            <h1 className="w-3/5">Google Step Interenship Decoded</h1>
            <p className="w-3/5 text-xl font-semibold">
              3 min read - 21/12/2022
            </p>
            <p className="w-3/5 text-xl font-semibold">
              STEP is a Google
              <span class="highlight" className=" text-blue-700 font-bold">
                Software Student Training in engineering Program
              </span>
            </p>
          </div>
          <div
            class="experience"
            className=" w-1/2 flex flex-wrap flex-col items-center"
          >
            <h1 className=" w-11/12 text-6xl text-center my-8 mx-0">
              Interview Experience
            </h1>
            <div
              class="exp"
              className=" w-4/6 rounded my-3 mx-0 shadow-sm p-4 duration-500 hover:shadow-md hover:cursor-pointer"
            >
              <div class="about-profile" className=" w-full my-4 mx-1">
                <img src="img/instagram.png" alt="" />
                <a class="name" href="">
                  Piyush Dhamu
                </a>
                <span>|</span>
                <a href="">Company</a>
              </div>
              <p className=" text-base font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                alias dolore ipsa placeat mollitia distinctio, dignissimos
                consequatur maiores iure at.
              </p>
              <p className=" text-base font-semibold">
                3 min read - 21/12/2022
              </p>
            </div>
            <div
              class="exp"
              className=" w-4/6 rounded my-3 mx-0 shadow-sm p-4 duration-500 hover:shadow-md hover:cursor-pointer"
            >
              <div class="about-profile" className=" w-full my-4 mx-1">
                <img src="img/instagram.png" alt="" />
                <a class="name" href="">
                  Piyush Dhamu
                </a>
                <span>|</span>
                <a href="">Company</a>
              </div>
              <p className=" text-base font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                alias dolore ipsa placeat mollitia distinctio, dignissimos
                consequatur maiores iure at.
              </p>
              <p className=" text-base font-semibold">
                3 min read - 21/12/2022
              </p>
            </div>
            <div
              class="exp"
              className=" w-4/6 rounded my-3 mx-0 shadow-sm p-4 duration-500 hover:shadow-md hover:cursor-pointer"
            >
              <div class="about-profile" className=" w-full my-4 mx-1">
                <img src="img/instagram.png" alt="" />
                <a class="name" href="">
                  Piyush Dhamu
                </a>
                <span>|</span>
                <a href="">Company</a>
              </div>
              <p className=" text-base font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                alias dolore ipsa placeat mollitia distinctio, dignissimos
                consequatur maiores iure at.
              </p>
              <p className=" text-base font-semibold">
                3 min read - 21/12/2022
              </p>
            </div>
          </div>
        </div>

        {/* <!-- FOOTER --> */}

        <footer
          class="footer"
          className=" mt-14 border-2 border-solid border-black bg-black"
        >
          <div class="footer-upper" className=" flex text-white">
            <div
              class="start"
              className=" flex flex-wrap flex-col items-center justify-center w-1/2"
            >
              <h1>Piyush Jangra</h1>
              <a href="#" className=" w-44 text-white text-lg">
                @2023 Piyush has all Rights Reserved
              </a>
            </div>
            <div class="mid" className=" flex w-1/2">
              <div class="midAll" className="w-1/2">
                <ul className=" list-none p-0">
                  <li className=" my-2 mx-1 hover:text-teal-400  hover:cursor-pointer">
                    <h2>Explore</h2>
                  </li>
                  <li className=" my-2 mx-1  hover:text-teal-400 hover:cursor-pointer">
                    Trending Stories
                  </li>
                  <li className=" my-2 mx-1  hover:text-teal-400 hover:cursor-pointer">
                    Recent Stories
                  </li>
                  <li className=" my-2 mx-1  hover:text-teal-400  hover:cursor-pointer">
                    Popular Videos
                  </li>
                </ul>
              </div>
              <div class="midAll" className="w-1/2">
                <ul className=" list-none p-0">
                  <li className=" my-2 mx-1  hover:text-teal-400  hover:cursor-pointer">
                    <h2>Contribute</h2>
                  </li>
                  <li className=" my-2 mx-1  hover:text-teal-400  hover:cursor-pointer">
                    Write
                  </li>
                  <li className=" my-2 mx-1  hover:text-teal-400  hover:cursor-pointer">
                    Request Article
                  </li>
                  <li className=" my-2 mx-1  hover:text-teal-400  hover:cursor-pointer">
                    Video with Us
                  </li>
                </ul>
              </div>
              <div class="midAll" className="w-1/2">
                <ul className=" list-none p-0">
                  <li className=" my-2 mx-1  hover:text-teal-400  hover:cursor-pointer">
                    <h2>Other</h2>
                  </li>
                  <li className=" my-2 mx-1  hover:text-teal-400  hover:cursor-pointer">
                    Guidelines
                  </li>
                  <li className=" my-2 mx-1  hover:text-teal-400  hover:cursor-pointer">
                    Our Story
                  </li>
                  <li className=" my-2 mx-1  hover:text-teal-400  hover:cursor-pointer">
                    About Us
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="end"
              className=" flex flex-col items-center justify-center w-1/2"
            >
              <p className=" text-2xl">Connect With Us</p>
              <div class="end-img">
                <img
                  class="ending-img"
                  src="img/facebook.png"
                  alt=""
                  className=" my-0 mx-1 w-7 h-7"
                />
                <img
                  class="ending-img"
                  src="img/instagram.png"
                  alt=""
                  className=" list-none p-0"
                />
                <img
                  class="ending-img"
                  src="img/whatsapp.png"
                  alt=""
                  className=" list-none p-0"
                />
                <img
                  class="ending-img"
                  src="img/twitter.png"
                  alt=""
                  className=" list-none p-0"
                />
              </div>
            </div>
          </div>
          <div
            class="made"
            className=" flex justify-center items-center
      text-white  text-3xl m-3 duration-500 hover:cursor-pointer hover:text-red-700 "
          >
            Made by ❤️ Piyush Jangra
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
