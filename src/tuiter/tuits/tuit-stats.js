import React, { useState } from "react";

const TuitStats = ({ tuit }) => {
  const [isLiked, setIsLiked] = useState(tuit.liked);
  const [likesCount, setLikesCount] = useState(tuit.likes);

  const handleLike = () => {
    if (isLiked) {
      setIsLiked(false);
      setLikesCount((count) => count - 1);
    } else {
      setIsLiked(true);
      setLikesCount((count) => count + 1);
    }
  };
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
          {" "}
          {post.repost}
          {post.retuits}
        </span>
      </div>

      {/* <div className="wd-pair-icon-number">
        <span>
          <FaHeart style={{ color: likeColor }} onClick={likeTuitHandler} />
        </span>
        <span className="wd-link-icon wd-font-family wd-icon-font wd-font-color-red">
          {" "}
          {like}
          {post.likes}
        </span>
      </div> */}

      <div>
        Likes: {tuit.likes}
        <i
          onClick={() =>
            dispatch(
              updateTuitThunk({
                ...tuit,
                likes: tuit.likes + 1,
              })
            )
          }
          className="bi bi-heart-fill me-2 text-danger"
        ></i>
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
