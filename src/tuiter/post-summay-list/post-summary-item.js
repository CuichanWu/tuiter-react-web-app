import React from "react";

const PostSummaryItem = ({
  post = {
    topic: "Space",
    userName: "SpaceX",
    time: "2h",
    title:
      "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
    image: "tesla.jpg",
  },
}) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-10">
          <div>
            {post.username} . {post.time}
          </div>
          <div className="fw-bolder">{post.topic}</div>
          {post.title ? <div>{post.title}</div> : <div>{post.tuit}</div>}
        </div>
        <div className="col-2">
          <img
            width={70}
            className="float-end rounded-3"
            src={`../../../images/${post.image}`}
            alt="post"
          />
        </div>
      </div>
    </li>
  );
};
export default PostSummaryItem;
