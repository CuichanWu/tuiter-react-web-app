import React from 'react';
import {FaRegComment} from "react-icons/fa";
import {FaRetweet} from "react-icons/fa";
import {FaRegHeart} from "react-icons/fa";
import {FaRegShareSquare} from "react-icons/fa";

const PostItem = ({post}) => {
    return (
        <div>
            <div className=" wd-border-around">
                <div className="wd-margin-left wd-margin-top wd-margin-right wd-flex-container-flex">
                    <div className="wd-photo-side">
                        <img src={`${post.image}`}
                             alt="" className="wd-user-img"/>
                    </div>

                    <div className=" wd-margin-left wd-margin-right">
                        {/*<div className="wd-content-side wd-margin-right ">*/}
                        <span className="wd-username wd-margin-top  wd-font-family">{post.userName}</span>
                        <span className="wd-user-handler wd-font-family">@{post.handle}</span><span
                        className="wd-user-handler wd-font-family">· {post.time}</span><span
                        className="wd-gray-dotdotdot wd-font-family  ">…</span><br/>
                        <span className="wd-content wd-font-family">{post.title}</span>


                        {/*<div className="wd-sharing-photo">*/}
                        {/*<span className="wd-link-part">*/}
                        <img src={`${post.sharingImg}`}
                             alt="" className="wd-link-photo"/>

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
                        <span> {post.comment}</span></div>
                    <div className="wd-pair-icon-number"><span><a href="/hello"
                                                                  className="wd-link-icon"><FaRetweet/></a></span><span
                        className="wd-link-icon wd-font-family wd-icon-font"> {post.repost}</span></div>
                    <div className="wd-pair-icon-number"><span><a href="/hello"
                                                                  className="wd-link-icon "><FaRegHeart/></a></span><span
                        className="wd-link-icon wd-font-family wd-icon-font wd-font-color-red"> {post.like}</span></div>
                    <div className="wd-pair-icon-number"><span><a href="/hello"
                                                                  className="wd-link-icon"><FaRegShareSquare/></a></span>
                    </div>
                </div>


            </div>
            {/*<div className="wd-break-line"></div>*/}
        </div>

    )
}
export default PostItem;