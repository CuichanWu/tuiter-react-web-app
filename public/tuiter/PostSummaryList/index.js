import PostSummaryItem from "./PostSummaryItem.js";
import post from "./post.js";

// $('#wd-post').append
const PostSummaryList = () => {
    return (
        `
          <div class="wd-news-content wd-margin-left ">
          <div class=" align-items-start ">
            ${post.map(post => {
            return (PostSummaryItem(post));
        }).join('')}
          </div>
        </div> 
    `);
}
export default PostSummaryList;

