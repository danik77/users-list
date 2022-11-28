import Pagination from "../Pagination";
import {
	Button,
	TextField,
	Container,
	Typography,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@mui/material";
import { useLocation } from "react-router";
import { fetchUser, clearUser, setUser } from "../../redux/dataSlice";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
 

const UserInfo = () => {
	let { userId } = useParams();

	const location = useLocation();
	const dispatch = useAppDispatch();
	const user = useAppSelector((state) => state.data.user);
	const loading = useAppSelector((state) => state.data.loading);
	const users = useAppSelector((state) => state.data.users);

	useEffect(() => {
		dispatch(setUser(userId));

		return () => {
			dispatch(clearUser());
		};
	}, [location.pathname, users]);

	return (
		<>
			{loading && <p>Loading...</p>}

			{user && !loading && (
				<>
					<Typography variant="h5" component="h5" mt={2}>
						Username: {user.username}
					</Typography>
					<Typography variant="body1" component="p" mt={2}>
						Name: {user.name}
					</Typography>
					<Typography variant="body1" component="p" mt={2}>
						Email: {user.email}
					</Typography>
					<Typography variant="body1" component="p" mt={2}>
						Phone: {user.phone}
					</Typography>
					<Typography variant="body1" component="p" mt={2}>
						Website: {user.website}
					</Typography>
					<Typography variant="body1" component="p" mt={2}>
						Address:{" "}
						{`${user.address?.zipcode} ${user?.address?.city}, ${user.address?.street}, ${user.address?.suite}. Geo: ${user.address?.geo?.lat}, ${user.address?.geo?.lng}`}
					</Typography>

					<Typography variant="body1" component="p" mt={2}>
						Company:{" "}
						{`"${user.company?.name}", ${user.company?.catchPhrase}. BS: ${user.company?.bs}`}
					</Typography>

					<Pagination userId={userId} />
				</>
			)}
		</>
	);
};

export default UserInfo;
 