const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item d-flex justify-content-between align-items-start ">
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-2"><img src=${who.avatarIcon}
                      class="wd-company-icon" alt=""></div>
            <div class="ms-2 me-auto col-xxl-7 col-xl-7 col-lg-7 col-md-6 col-7 wd-follow-content">
            <div class="fw-bold">${who.userName} <i class="fa-solid fa-circle-check"></i></div>
                      @${who.handle}
            </div>
            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-3 wd-follow-button">
            <button type="button"
                    class="btn btn-primary rounded-pill text-white my-auto wd-margin-right btn-sm mt-2">Follow
            </button>
            </div>
        </li>
`
    )
}
export default WhoToFollowListItem;