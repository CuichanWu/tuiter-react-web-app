import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {TiDeleteOutline} from "react-icons/ti";
import {updateProfile} from "./profile-reducer";


function EditProfile() {
	const user = useSelector((state) => state.profile);
	const [profile, setProfile] = useState({
		firstName: user.firstName,
		lastName: user.lastName,
		website: user.website,
		bio: user.bio,
		location: user.location,
		dateOfBirth: user.dateOfBirth,
	});
	const dispatch = useDispatch();
	const handleChange = (event) => {
		const {name, value} = event.target;
		setProfile((prevProfile) => ({...prevProfile, [name]: value}));
	}
	const handleSave = (event) => {
		event.preventDefault();
		dispatch(updateProfile(profile));
	}

	return (
		<div>
			<div className="d-flex flex-row">
				<div className="d-flex flex-row" style={{width: '85%'}}>
					<div className="ms-2 fs-4 align-self-center">
						<a href="/tuiter/profile" style={{color: "black"}}>
							<TiDeleteOutline/>
						</a>
					</div>
					<div className="ms-5 align-self-center fw-bold fs-5">
						Edit profile
					</div>
				</div>
				<div className="align-self-center">
					<button className="mt-3 rounded-5 btn btn-dark"
									style={{marginBottom: 8}} onClick={handleSave}>
						Save
					</button>
				</div>
			</div>
			<img src="/images/banner.png" alt="banner" className="w-100"/>

			<div className="d-flex flex-row">
				<div style={{marginTop: -50, marginLeft: 20, width: '90%'}}>
					<img src="/images/cuichan.png" alt="profile"
							 className="rounded-circle w-25 border border-light border-3 z-1 position-absolute"/>
				</div>

			</div>

			<div className="ms-4 me-4">
				<div style={{marginTop: 100}}>

					<div className="input-group mb-3">
						<span className="input-group-text" id="inputGroup-sizing-default">FirstName</span>
						<input type="text" className="form-control" aria-label="Sizing example input"
									 aria-describedby="inputGroup-sizing-default" value={profile.firstName} name="firstName"
									 onChange={handleChange}/>
					</div>
					<div className="input-group mb-3">
						<span className="input-group-text" id="inputGroup-sizing-default">LastName</span>
						<input type="text" className="form-control" aria-label="Sizing example input"
									 aria-describedby="inputGroup-sizing-default" value={profile.lastName} name="lastName"
									 onChange={handleChange}/>
					</div>

					<div className="input-group mb-3">
						<span className="input-group-text">Bio</span>
						<textarea className="form-control" aria-label="With textarea" value={profile.bio} name="bio"
											onChange={handleChange}></textarea>
					</div>

					<div className="input-group mb-3">
						<span className="input-group-text" id="inputGroup-sizing-default">Location</span>
						<input type="text" className="form-control" aria-label="Sizing example input"
									 aria-describedby="inputGroup-sizing-default" value={profile.location} name="location"
									 onChange={handleChange}/>
					</div>

					<div className="input-group mb-3">
						<span className="input-group-text" id="inputGroup-sizing-default">Website</span>
						<input type="text" className="form-control" aria-label="Sizing example input"
									 aria-describedby="inputGroup-sizing-default" value={profile.website} name="website"
									 onChange={handleChange}/>
					</div>

					<div className="input-group mb-3">
						<span className="input-group-text" id="inputGroup-sizing-default">Date of Birth</span>
						<input type="text" className="form-control" aria-label="Sizing example input"
									 aria-describedby="inputGroup-sizing-default" value={profile.dateOfBirth} name="dateOfBirth"
									 onChange={handleChange}/>
					</div>

				</div>
			</div>
		</div>
	)
}

export default EditProfile;