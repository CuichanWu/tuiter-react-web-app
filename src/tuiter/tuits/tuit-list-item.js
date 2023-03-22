import React from 'react';
import {FaRegComment, FaHeart} from "react-icons/fa";
import {FaRetweet} from "react-icons/fa";
import {FaRegHeart} from "react-icons/fa";
import {FaRegShareSquare} from "react-icons/fa";
import {FaCheckCircle} from "react-icons/fa";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";

const TuitListItem = ({post}) => {
	const dispatch = useDispatch();
	const deleteTuitHandler = (id) => {
		dispatch(deleteTuit(id))
	}
	return (
		<div>
			<li className="list-group-item">
				<div className=" wd-border-around">
					<div className="wd-margin-left wd-margin-top wd-margin-right wd-flex-container-flex">
						<div className="col-auto">
							<img src={`../../../images/${post.image}`} width={50}
									 alt="" className="float-end rounded-circle"/>
						</div>

						<div className="wd-margin-left wd-margin-right ">
						<span className="wd-username wd-margin-top  wd-font-family">{post.userName}
							<FaCheckCircle className="wd-checked"/></span>
							<span className="wd-user-handler wd-font-family">{post.handle}</span><span
							className="wd-user-handler wd-font-family">· {post.time}</span>
							<i className="bi bi-x-lg float-end"
								 onClick={() => deleteTuitHandler(post._id)}></i>
							<div className="col-11">
								<div>{post.tuit}</div>
							</div>


							{/*<div className="wd-sharing-photo">*/}
							{/*<span className="wd-link-part">*/}


							{/*<img src={`${post.sharingImg}`}*/}
							{/*		 alt="" className="wd-link-photo"/>*/}

							{/*<div>*/}
							{/*<div className="wd-normal-content   wd-font-family">{post.sharingTitle}</div>*/}
							{/*<div className="wd-light-content  wd-font-family ">{post.sharingContent}</div>*/}
							{/*    </div>*/}
							{/*</span>*/}
							{/*</div>*/}


						</div>
					</div>


					<div className="wd-icon-part wd-flex-container-flex">
						<div className="wd-pair-icon-number"><span><a href="/hello"
																													className="wd-link-icon "><FaRegComment/></a></span>
							<span> {post.comment}</span>{post.replies}</div>

						<div className="wd-pair-icon-number"><span><a href="/hello"
																													className="wd-link-icon"><FaRetweet/></a></span><span
							className="wd-link-icon wd-font-family wd-icon-font"> {post.repost}{post.retuits}</span></div>
						{post.liked ?
							<div className="wd-pair-icon-number"><span><a href="/hello"
																														className="wd-link-icon "><FaHeart
								style={{color: "red"}}/></a></span><span
								className="wd-link-icon wd-font-family wd-icon-font wd-font-color-red"> {post.like}{post.likes}</span>
							</div> :
							<div className="wd-pair-icon-number"><span><a href="/hello"
																														className="wd-link-icon "><FaRegHeart/></a></span><span
								className="wd-link-icon wd-font-family wd-icon-font wd-font-color-red"> {post.like}{post.likes}</span>
							</div>}

						<div className="wd-pair-icon-number"><span><a href="/hello"
																													className="wd-link-icon"><FaRegShareSquare/></a></span>
						</div>
					</div>


				</div>
			</li>
			{/*<div className="wd-break-line"></div>*/}
		</div>

	)
}
export default TuitListItem;