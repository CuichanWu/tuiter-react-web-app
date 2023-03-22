import React from "react";
import {useSelector} from "react-redux";
import {HiOutlineLocationMarker} from "react-icons/hi";
import {FaBirthdayCake} from "react-icons/fa";
import {BsCalendar3} from "react-icons/bs";
import {BiLeftArrowAlt} from "react-icons/bi";

function ProfileComponent() {
	const profile = useSelector((state) => state.profile);
	return (
		<div>
			<div className="d-flex flex-row">
				<div className="ms-2 fs-4 align-self-center">
					<BiLeftArrowAlt/>
				</div>
				<div className="ms-5">
					<div className="fs-5 fw-bold">Cuichan Wu</div>
					<div className="fs-6 text-muted">6,114 Tweets</div>
				</div>
			</div>
			<img src="/images/banner.png" alt="banner" className="w-100"/>

			<div className="d-flex flex-row">
				<div style={{marginTop: -50, marginLeft: 20, width: '90%'}}>
					<img src="/images/cuichan.png" alt="profile"
							 className="rounded-circle w-25 border border-light border-3 z-1 position-absolute"/>
				</div>

				<div style={{width: '40%'}}>
					{/*<button className="mt-3 rounded-5 btn btn-light border border-2 border-light-subtle">Edit Profile</button>*/}
					<a href="/tuiter/edit-profile" className="mt-3 rounded-5 btn btn-light border border-2 border-light-subtle">Edit
						Profile</a>
				</div>
			</div>

			<div className="ms-4 me-4">
				<div style={{marginTop: 100}}>
					<div className="fs-4 fw-bold">
						{profile.firstName} {profile.lastName}
					</div>
					<div className="fs-6 text-muted">
						{profile.handle}
					</div>
					<div className="mt-2">
						{profile.bio}
					</div>
					<div className="mt-2 text-muted">
						<HiOutlineLocationMarker/> {profile.location} <span className="ms-3"/>
						<FaBirthdayCake/> {profile.dateOfBirth} <span className="ms-3"/>
						<BsCalendar3/> {profile.dateJoined}
					</div>
					<div className="mt-2 text-muted ">
						<span className="fw-bold">{profile.followingCount}</span> Following <span className="ms-3"/>
						<span className="fw-bold">{profile.followersCount}</span> Followers
					</div>
					<div className="mt-2">a
						{profile.websitea}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileComponent;