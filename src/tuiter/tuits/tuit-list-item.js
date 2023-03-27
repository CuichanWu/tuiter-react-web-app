import React, { useState } from "react";
import { FaRegComment, FaHeart } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteTuit } from "./tuits-reducer";
import TuitStats from "./tuit-stats.js";

const TuitListItem = ({ post }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };
  // const initialLiked = useSelector((state) => state.tuits.find(tuit => tuit._id === post._id).liked);
  // const [like, setLike] = useState(initialLiked);
  // const likeTuitHandler = () => {
  // 	setLike(!like);
  // 	dispatch(updateTuit(!like));
  // }
  // const likeColor = like ? "red" : "gray";

  return (
    <div>
      <li className="list-group-item">
        <div className=" wd-border-around">
          <div className="wd-margin-left wd-margin-top wd-margin-right wd-flex-container-flex">
            <div className="col-auto">
              <img
                src={`../../../images/${post.image}`}
                width={50}
                alt=""
                className="float-end rounded-circle"
              />
            </div>

            <div className="wd-margin-left wd-margin-right d-flex flex-row">
              <div>
                <span className="wd-username wd-margin-top  wd-font-family">
                  {post.userName}
                  <FaCheckCircle className="wd-checked" />
                </span>
                <span className="wd-user-handler wd-font-family">
                  {post.handle}
                </span>
                <span className="wd-user-handler wd-font-family">
                  · {post.time}
                </span>

                <div>
                  <div>{post.tuit}</div>
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  marginTop: 10,
                  marginRight: 10,
                }}
              >
                <i
                  className="bi bi-x-lg float-end"
                  onClick={() => deleteTuitHandler(post._id)}
                ></i>
              </div>
            </div>
          </div>

          <TuitStats post={post} />
        </div>
      </li>
    </div>
  );
};
export default TuitListItem;
