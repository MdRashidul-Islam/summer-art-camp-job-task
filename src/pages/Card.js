import React from "react";
import { RiShareForwardLine } from "react-icons/ri";
import { FcLike } from "react-icons/fc";
import { AiFillStar } from "react-icons/ai";

const Card = ({ item }) => {
  return (
    <div>
      <div className="px-10 ">
        <h4 className="md:text-5xl font-bold  sm:text-xl">{item.title}</h4>
        <h4 className="font-medium text-gray-400 mb-7 mt-2">
          {item.subTitle} <span>&#63;</span>
        </h4>
        <div className="flex justify-between items-center ">
          <div className="w-1/2 ">
            <p className="mb-6 leading-6 font-medium text-xl text-justify">
              {item.description}
            </p>
            <div className="flex ">
              <img
                className="h-6 w-6 rounded-full mr-2"
                src={item.profile.avatar}
                alt=""
              />
              <p className="mb-4 font-bold text-violet-900">
                {item.profile.name}
              </p>
            </div>
            <div className="flex mb-2">
              {Array(item.rating)
                .fill()
                .map((_, i) => (
                  <AiFillStar className="text-yellow-400 mt-1 text-2xl" />
                ))}
              <span className="ml-2 text-lg text-gray-500">
                467 total reviews for this teacher
              </span>
            </div>
            <div className="flex">
              {Array(item.rating)
                .fill()
                .map((_, i) => (
                  <AiFillStar className="text-yellow-400 text-2xl mt-1 " />
                ))}
              <span className="ml-2 text-lg text-gray-500">
                5 reviews for this class
              </span>
            </div>

            <p className="mb-8 mt-5 text-xl font-medium">
              Completed by 21 learners
            </p>
            <div className="flex  items-center h-10">
              <button className="bg-violet-900 text-white font-medium px-6 py-3 rounded-3xl">
                See Class Schedule <span> &#62;</span>
              </button>

              <div className="flex ml-7 cursor-pointer font-bold text-violet-900">
                <FcLike className="mt-1 mr-2 " />
                Save
              </div>
              <div className="flex ml-7 cursor-pointer font-bold text-violet-900">
                <RiShareForwardLine className="mt-1 mr-2 text-2xl" /> Share
              </div>
            </div>
          </div>

          <div className="w-1/2  flex  items-center px-10">
            <div className="h-96  mr-2">
              <img className="h-full py-3" src={item.img.link1} alt="" />
            </div>
            <div className="flex flex-col justify-between items-between h-1/2 w-1/2  ">
              <div className="h-44 mb-2">
                <img className="h-full w-full" src={item.img.link2} alt="" />
              </div>
              <div className="h-44">
                <img className="h-full w-full" src={item.img.link3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
