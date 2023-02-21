import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/PostList.js";

function HomeScreen() {
    $('#wd-home').append(`
        <h2>Home</h2>
    <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
<!--   <h3>Navigation Sidebar</h3>-->
     ${NavigationSidebar('home')}
   </div>
   <div class="col-10 col-lg-7 col-xl-6 col-xxl-6">
<!--    <h3>Post List</h3>-->
     ${PostList()}
   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xxl-4">
<!--    <h3>Post Summary List </h3>-->
     ${PostSummaryList()}
   </div>
   <a href="../navigation.html">Back</a>
  </div>
    `)
}

$(HomeScreen);