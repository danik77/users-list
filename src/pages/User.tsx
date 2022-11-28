import Pagination from "../components/Pagination";
import {Container, Typography } from "@mui/material";
import { useLocation } from "react-router";
import { fetchUser, clearUser, setUser } from "../redux/dataSlice";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import ROUTES from '../routes'
import UserInfo from '../components/Users/UserInfo'

const UserPage = () => {
	return (
		<Container maxWidth="md" sx={{ p: 5, mb: 2, border: 1, borderColor: "grey.500", borderRadius: 1 }}>
			<Link to={ROUTES.USERS}>
				<Typography variant="body1" component="p" mb={2}>
					Users
				</Typography>
			</Link>
			<UserInfo />
		</Container>
	);
};

export default UserPage;
