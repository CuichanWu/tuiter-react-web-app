import React, { useState } from "react";
import { updateTuit } from "./tuits-reducer";
import { useDispatch, useSelector } from "react-redux";
import { FaRegComment, FaHeart } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";

const TuitStats = ({ post }) => {
  const dispatch = useDispatch();

  const initialLiked = useSelector(
    (state) => state.tuits.find((tuit) => tuit._id === post._id).liked
  );
  const initialLikes = useSelector(
    (state) => state.tuits.find((tuit) => tuit._id === post._id).likes
  );
  const [like, setLike] = useState(initialLiked);
  const [likesCount, setLikesCount] = useState(initialLikes);
  const likeTuitHandler = () => {
    if (like) {
      setLike(false);
      setLikesCount((likesCount) => likesCount - 1);
    } else {
      setLike(true);
      setLikesCount((likesCount) => likesCount + 1);
    }
    dispatch(updateTuit(!like));
    dispatch(updateTuit(likesCount));
  };
  const likeColor = like ? "red" : "gray";

  return (
    <div className="wd-icon-part wd-flex-container-flex">
      <div className="wd-pair-icon-number">
        <span>
          <a href="/hello" className="wd-link-icon ">
            <FaRegComment />
          </a>
        </span>
        <span> {post.comment}</span>
        {post.replies}
      </div>

      <div className="wd-pair-icon-number">
        <span>
          <a href="/hello" className="wd-link-icon">
            <FaRetweet />
          </a>
        </span>
        <span className="wd-link-icon wd-font-family wd-icon-font">
          {post.repost}
          {post.retuits}
        </span>
      </div>

      <div className="wd-pair-icon-number">
        <span>
          <FaHeart style={{ color: likeColor }} onClick={likeTuitHandler} />
        </span>
        <span className="wd-link-icon wd-font-family wd-icon-font wd-font-color-red">
          {like}
          {likesCount}
        </span>
      </div>

      <div className="wd-pair-icon-number">
        <span>
          <a href="/hello" className="wd-link-icon">
            <FaRegShareSquare />
          </a>
        </span>
      </div>
    </div>
  );
};

export default TuitStats;
