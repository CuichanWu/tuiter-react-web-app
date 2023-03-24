import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {TiDeleteOutline} from "react-icons/ti";
import {updateProfile} from "./profile-reducer";
import {useNavigate} from "react-router-dom";


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
	const navigate = useNavigate();
	const handleSave = (event) => {
		event.preventDefault();
		dispatch(updateProfile(profile));
		navigate("/tuiter/profile");
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

				{/*<span><Link to="/tuiter/profile" className="btn btn-dark fw-bold rounded-pill float-end mb-2"*/}
				{/*						onClick={handleSave}>Save*/}
				{/*        </Link></span>*/}

			</div>
			<img src="/images/banner.png" alt="banner" className="w-100"/>

			<div className="d-flex flex-row">
				<div style={{marginTop: -50, marginLeft: 20, width: '90%'}}>
					<img src="/images/cuichan.png" alt="profile"
							 className="rounded-circle w-25 border border-light border-3 z-1 position-absolute"/>
				</div>

			</div>

			<div className="ms-4 me-4">
				<div style={{marginTop: 150}}>

					<form className="form-floating mb-3">
						<input type="text" className="form-control" id="firstname" placeholder="enter your first name"
									 value={profile.firstName} name="firstName" onChange={handleChange}/>
						<label htmlFor="firstname">FirstName</label>
					</form>

					<form className="form-floating mb-3">
						<input type="text" className="form-control" id="lastname" placeholder="enter your last name"
									 value={profile.lastName} name="lastName" onChange={handleChange}/>
						<label htmlFor="lastname">LastName</label>
					</form>

					<div className="form-floating mb-3">
						<textarea className="form-control" placeholder="Leave your bio here" id="bio" value={profile.bio} name="bio"
											onChange={handleChange}></textarea>
						<label htmlFor="bio">Bio</label>
					</div>

					<form className="form-floating mb-3">
						<input type="text" className="form-control" id="location" placeholder="enter your location"
									 value={profile.location} name="location" onChange={handleChange}/>
						<label htmlFor="location">Location</label>
					</form>

					<form className="form-floating mb-3">
						<input type="text" className="form-control" id="website" placeholder="enter your website"
									 value={profile.website} name="website" onChange={handleChange}/>
						<label htmlFor="website">Website</label>
					</form>

					<form className="form-floating mb-3">
						<input type="text" className="form-control" id="dateOfBirth" placeholder="enter your date of birth"
									 value={profile.dateOfBirth} name="dateOfBirth" onChange={handleChange}/>
						<label htmlFor="dateOfBirth">Date of Birth</label>
					</form>

				</div>
			</div>
		</div>
	)
}

export default EditProfile;