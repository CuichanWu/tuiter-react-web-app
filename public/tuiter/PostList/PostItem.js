const PostItem = (homePost) => {
    return (`
    <div>
        <div class="wd-margin-bottom">
            <div class="wd-margin-left wd-margin-top wd-margin-right wd-flex-container-flex">
                <div class="wd-photo-side">
                    <img src="${homePost.image}"
                         alt="" class="wd-user-img">
                </div>

                <div class=" wd-margin-left">
                    <div class="wd-content-side wd-margin-right">
                        <span class="wd-username wd-margin-top  wd-font-family">${homePost.userName}</span>
                        <span class="wd-user-handler wd-font-family">@${homePost.handle}</span><span
                            class="wd-user-handler wd-font-family">· ${homePost.time}</span><span
                            class="wd-gray-dotdotdot wd-font-family wd-gray-dot ">…</span><br/>
                        <span class="wd-content wd-font-family">${homePost.title}</span>

                
                <div class="wd-sharing-photo">
                    <span class="wd-link-part">
                    <img src="${homePost.sharingImg}"
                         alt="" class="wd-link-photo">

                <div>
                <div class="wd-normal-content   wd-font-family">${homePost.sharingTitle}</div>
                <div class="wd-light-content  wd-font-family ">${homePost.sharingContent}</div>
<!--                <span class="wd-light-content ">◎ rt.com</span>-->
                    </div></span>
                        </div>
    
                    </div>
                </div>
            </div>
            
        

        <div class="wd-icon-part ">
            <div class="wd-pair-icon-number"><span><a href="#" class="wd-link-icon "><i class="fa-regular fa-comment-dots"></i></a></span>
                <span class="wd-link-icon wd-font-family wd-icon-font">${homePost.comment}</span></div>
            <div class="wd-pair-icon-number"><span><a href="#" class="wd-link-icon"><i class="fa-solid fa-repeat"></i></a></span><span
                    class="wd-link-icon wd-font-family wd-icon-font">${homePost.repost}</span></div>
            <div class="wd-pair-icon-number"><span><a href="#" class="wd-link-icon "><i class="fa-regular fa-heart"></i></a></span><span
                    class="wd-link-icon wd-font-family wd-icon-font wd-font-color-red">${homePost.like}</span></div>
            <div class="wd-pair-icon-number"><span><a href="#" class="wd-link-icon"><i class="fa-solid fa-arrow-up-right-from-square"></i></a></span></div>
        </div>
        
        
    </div>
    <div class="wd-break-line"></div>
    </div>
    `)
}
export default PostItem;