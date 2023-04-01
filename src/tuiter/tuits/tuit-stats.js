import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {FaRegComment, FaHeart, FaRegThumbsDown} from "react-icons/fa";
import {FaRetweet} from "react-icons/fa";
import {FaRegShareSquare} from "react-icons/fa";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({post}) => {
	const dispatch = useDispatch();

	const [like, setLike] = useState(post.liked);
	const [likesCount, setLikesCount] = useState(post.likes);
	const likeTuitHandler = () => {
		if (like) {
			setLike(false);
			setLikesCount((likesCount) => likesCount - 1);
		} else {
			setLike(true);
			setLikesCount((likesCount) => likesCount + 1);
		}
		dispatch(updateTuitThunk({
			...post, liked: like, likes: likesCount
		}));
	};
	const likeColor = like ? "red" : "gray";

	const [dislike, setDislike] = useState(post.disliked);
	const [dislikesCount, setDislikesCount] = useState(post.dislikes);
	const dislikeTuitHandler = () => {
		if (dislike) {
			setDislike(false);
			setDislikesCount((dislikesCount) => dislikesCount - 1);
		} else {
			setDislike(true);
			setDislikesCount((dislikesCount) => dislikesCount + 1);
		}
		dispatch(updateTuitThunk({
			...post, disliked: dislike, dislikes: dislikesCount
		}));
	};
	const dislikeColor = dislike ? "blue" : "gray";


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
        <span>
          <FaHeart style={{color: likeColor}} onClick={likeTuitHandler}/>
        </span>
				<span className="wd-link-icon wd-font-family wd-icon-font wd-font-color-red ms-1">
          {/*{like}*/}
					{likesCount}
        </span>
			</div>
			{/*Likes: {post.likes}*/}
			{/*<i*/}
			{/*	onClick={() =>*/}
			{/*		dispatch(*/}
			{/*			updateTuitThunk({*/}
			{/*				...post,*/}
			{/*				likes: post.likes + 1,*/}
			{/*			})*/}
			{/*		)*/}
			{/*	}*/}
			{/*	className="bi bi-heart-fill me-2 text-danger"*/}
			{/*></i>*/}
			<div className="wd-pair-icon-number">
        <span>
          <FaRegThumbsDown style={{color: dislikeColor}} onClick={dislikeTuitHandler}/>
        </span>
				<span className="wd-link-icon wd-font-family wd-icon-font wd-font-color-red ms-1">
          {/*{dislike}*/}
					{dislikesCount}
        </span>
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
