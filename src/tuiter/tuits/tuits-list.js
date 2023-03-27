import React from "react";
// import postItems from '../post-list/posts-item.json';
import TuitListItem from "./tuit-list-item";
import { useSelector } from "react-redux";
// import tuits from "../tuits/tuits.json";

const TuitList = () => {
  const tuitListItems = useSelector((state) => state.tuits);
  return (
    <div className=" align-items-start ">
      {tuitListItems.map((post) => (
        <TuitListItem post={post} />
      ))}
    </div>
  );
};
export default TuitList;
