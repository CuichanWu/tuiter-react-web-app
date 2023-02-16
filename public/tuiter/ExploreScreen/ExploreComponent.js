import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
        <div>
            <div class="row">
              <div class="wd-margin-top">
                <form class="wd-searchbar ">
                    <input class="wd-searchbar" type="search" placeholder="Search Tuiter">
                    <a href="explore-setting.html"><span class="wd-setting-icon"><i class="fa-solid fa-gear"></i></span></a>
                </form>
              </div>
            </div>
           <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="#foryou">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#trending">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="#news">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#sports">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="#entertainment">Entertainment</a>
                </li>
           </ul>
           <!-- image with overlaid text -->
           <div class="wd-margin-top">
                <img src="../../images/spacex.jpg" alt="" class="wd-imagebackground">
                <p class="fw-bold fs-2 wd-title-text-space ">SpaceX's Starship</p>
           </div>
           ${PostSummaryList()}
        </div>
    `);
}
export default ExploreComponent;
