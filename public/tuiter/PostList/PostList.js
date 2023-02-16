import PostItem from "./PostItem.js";
import homePost from "./homePost.js";

const PostList = () => {
    return (`
    <div class="wd-news-content wd-margin-left ">
          <div class=" align-items-start ">
        ${homePost.map(post => {
        return (PostItem(post));
    }).join('')}
          </div>
          
        </div> 
    `)
}

export default PostList;