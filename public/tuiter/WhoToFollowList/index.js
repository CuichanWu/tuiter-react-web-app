// import WhoToFollowListItem from "./WhoToFollowListItem";
// import who from "./who";
//
// const WhoToFollowList = () => {
//     return (`
//
//     <ul class="list-group">
//          ${
//         who.map(who => {
//             return (WhoToFollowListItem(who));
//         }).join('')
//     }
//       </ul>
//     `)
// }
//
// export default WhoToFollowList;


// alert("hihiihi")
import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

//$('#wd-follow').append(`
const WhoToFollowList = () => {
    return (
        `<div class="">
        <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-start fw-bold">
                Who to follow
            </li>
            ${
            who.map(who => {
                return (WhoToFollowListItem(who));
            }).join('')
        }
        </ul>
       </div>
    `);
}
export default WhoToFollowList;




