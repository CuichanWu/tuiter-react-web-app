import React, {useState} from "react";
// import { updateTuit } from "./tuits-reducer";
import {useDispatch} from "react-redux";
import {FaRegComment} from "react-icons/fa";
import {FaRetweet} from "react-icons/fa";
import {FaRegShareSquare} from "react-icons/fa";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({post}) => {
	const dispatch = useDispatch();
	//   const initialLiked = useSelector(
	//     (state) => state.tuits.find((tuit) => tuit._id === post._id).liked
	//   );
	//   const initialLikes = useSelector(
	//     (state) => state.tuits.find((tuit) => tuit._id === post._id).likes
	//   );
	// const [like, setLike] = useState(post.liked);
	// const [likesCount, setLikesCount] = useState(post.likes);
	//
	// const likeColor = like ? "red" : "gray";

	return (
		<div className="wd-icon-part wd-flex-container-flex">
			<div className="wd-pair-icon-number">
        <span>
          <a href="/hello" className="wd-link-icon me-1">
            <FaRegComment/>
          </a>
        </span>
				<span className="wd-link-icon wd-font-family wd-icon-font">
          {post.replies}
        </span>
			</div>

			<div className="wd-pair-icon-number">
        <span>
          <a href="/hello" className="wd-link-icon  me-1">
            <FaRetweet/>
          </a>
        </span>
				<span className="wd-link-icon wd-font-family wd-icon-font">
          {post.retuits}
        </span>
			</div>

			<div className="wd-pair-icon-number">
				{/* <span>
          <FaHeart
            style={{ color: likeColor }}
            onClick={() =>
              dispatch(
                updateTuitThunk({
                  ...post,
                  likes: post.likes + 1,
                })
              )
            }
          />
        </span>
        <span className="wd-link-icon wd-font-family wd-icon-font wd-font-color-red">
          {like}
          {likesCount}
        </span> */}
				Likes: {post.likes}
				<i
					onClick={() =>
						dispatch(
							updateTuitThunk({
								...post,
								likes: post.likes + 1,
							})
						)
					}
					className="bi bi-heart-fill me-2 text-danger"
				></i>
			</div>

			<div className="wd-pair-icon-number">
        <span>
          <a href="/hello" className="wd-link-icon">
            <FaRegShareSquare/>
          </a>
        </span>
			</div>
		</div>
	);
};

export default TuitStats;
