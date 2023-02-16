const PostSummaryItem = (post) => {
    return (`
<!--    <div class="wd-flex-container-flex ">-->
            <div>
                <div class=" wd-flex-container-flex wd-border-around wd-bg-dark">
                <div class="wd-news-content col-10 col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 ">
                ${post.topic ? `<span class="wd-topic">${post.topic}</span><br/>` : ``}
                ${post.userName ? `<span class="wd-topic-bold  ">${post.userName} </span>` : ``}
                    <i class="fa-solid fa-circle-check wd-checked"></i>
                <span class="wd-time ">- ${post.time}</span>
                ${post.title ? `<div class="wd-title ">${post.title}</div>` : ``}
                ${post.tweets ? `<div class="wd-topic ">${post.tweets}</div>` : ``}
                </div>
                <div class=" col-2 col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 ">
                    <img src="${post.image}" alt="" class="wd-news-img"></div>
                </div>
            </div>
            
    `)
}
export default PostSummaryItem;