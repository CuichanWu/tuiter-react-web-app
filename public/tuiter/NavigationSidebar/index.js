// const NavigationSidebar = () => {
function NavigationSidebar(active) {
    return (
// $('#wd-navigation-sidebar').append(
        `<div class="list-group " id="list-tab" role="tablist">
                <a class="list-group-item list-group-item-action " id="list-tuit-list"
                   data-bs-toggle="list"
                   href="../home.html" role="tab" aria-controls="list-tuit"><i
                        class="fa-brands fa-twitter "></i></a>
                <a class="list-group-item list-group-item-action wd-flex-container-flex ${active === 'home' ? `active` : ``}"
                   id="list-home-list"
                   href="../HomeScreen/index.html" role="tab" aria-controls="list-home"><i
                        class="fa-sharp fa-solid fa-house-chimney wd-nav-icon "></i> <span
                        class="d-none d-xl-block"> Home</span></a>
                <a class="list-group-item list-group-item-action wd-flex-container-flex ${active === 'explore' ? `active` : ``}"
                   id="list-explore-list"
                   href="../explore/index.html" role="tab">
                    <i
                        class="fa-solid fa-hashtag wd-nav-icon "></i>
                    <span class="d-none d-xl-block ">Explore</span>
                </a>
                <a class="list-group-item list-group-item-action wd-flex-container-flex wd-bg-dark"
                   id="list-notification-list"
                   href="../notifications.html" role="tab"
                   aria-controls="list-notification  "><i
                        class="fa-solid fa-bell wd-nav-icon  wd-bg-dark"></i> <span
                        class="d-none d-xl-block  ">Notification</span></a>
                <a class="list-group-item list-group-item-action wd-flex-container-flex wd-bg-dark"
                   id="list-message-list"
                   href="../messages.html" role="tab" aria-controls="list-message"><i
                        class="fa-solid fa-envelope wd-nav-icon "></i>
                    <span class="d-none d-xl-block ">Message</span></a>
                <a class="list-group-item list-group-item-action wd-flex-container-flex wd-bg-dark"
                   id="list-bookmark-list"
                   href="../bookmarks/index.html" role="tab" aria-controls="list-bookmark"><i
                        class="fa-solid fa-bookmark wd-nav-icon "></i>
                    <span class="d-none d-xl-block ">Bookmark</span></a>
                <a class="list-group-item list-group-item-action wd-flex-container-flex wd-bg-dark"
                   id="list-list-list"
                   href="../lists.html" role="tab" aria-controls="list-list"><i
                        class="fa-solid fa-list wd-nav-icon "></i>
                    <span class="d-none d-xl-block ">List</span></a>
                <a class="list-group-item list-group-item-action wd-flex-container-flex wd-bg-dark"
                   href="../profile.html"><i
                        class="fa-solid fa-user wd-nav-icon "></i> <span
                        class="d-none d-xl-block ">Profile</span></a>
                <a class="list-group-item list-group-item-action wd-flex-container-flex wd-bg-dark"
                   href="#"><i
                        class="fa-solid fa-ellipsis wd-nav-icon "></i>
                    <span class="d-none d-xl-block ">More</span></a>
                
                <button class="btn btn-primary wd-tuit-button " type="button" href="tuit.html">Tweet</button>
            </div>
 `);
}

export default NavigationSidebar;