import React, {useEffect} from "react";
import TuitListItem from "./tuit-list-item";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitsList = () => {
	const {tuits, loading} = useSelector((state) => state.tuitsData);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(findTuitsThunk());
	}, []);
	// console.log(tuits);
	//   const tuitListItems = useSelector((state) => state.tuits);
	return (
		// <div className=" align-items-start ">
		//   {tuitListItems.map((post) => (
		//     <TuitListItem post={post} />
		//   ))}
		// </div>
		<ul className="list-group">
			{loading && <li className="list-group-item">Loading...</li>}
			{tuits.map((post) => (
				<TuitListItem post={post}/>
			))}
		</ul>
	);
};
export default TuitsList;
