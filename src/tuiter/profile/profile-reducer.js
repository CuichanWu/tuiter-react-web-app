import {createSlice} from "@reduxjs/toolkit";
import profile from "./profile.json";

// const initialState={
// 	firstName: "Cuichan",
// 	lastName: "Wu",
// 	handle: "@cuichanwu",
// 	profilePicture: "cuichan.png",
// 	bannerPicture: "banner.png",
// 	bio: "Northeastern University Computer Science Student",
// 	website: "https://www.linkedin.com/in/cuichanwu/",
// 	location: "Santa Clara, CA",
// 	dateOfBirth: "10/11/1997",
// 	dateJoined: "3/2023",
// 	followingCount: 168,
// 	followersCount: 11
// }

const profileSlice = createSlice({
	name: 'profile',
	initialState: profile,
	reducers: {
		updateProfile: (state, action) => {
			return {...state, ...action.payload};
		}
	}
});


export default profileSlice.reducer;
export const {updateProfile} = profileSlice.actions;