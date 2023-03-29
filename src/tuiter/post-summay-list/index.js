import React, { useEffect } from "react";
// import postsArray from './posts.json';
import PostSummaryItem from "./post-summary-item";
import who from "../data/who.json";
import { useSelector, useDispatch } from "react-redux";
import { findTuitsThunk } from "../../services/tuits-thunks";

const PostSummaryList = () => {
  const { tuits, loading } = useSelector((state) => state.tuitsData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk());
  }, []);
  return (
    <ul className="list-group">
      {tuits.map((post) => (
        <PostSummaryItem key={who._id} post={post} />
      ))}
    </ul>
  );
};
export default PostSummaryList;
