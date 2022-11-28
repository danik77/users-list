import { Link } from "react-router-dom";
import UserList from "../components/Users/UserList";
import UserAdd from "../components/Users/UserAdd";
import UserSearch from "../components/Users/UserSearch";
import { Container, Typography } from "@mui/material";
import ROUTES from "../routes";

const Users = () => {
	return (
		<Container maxWidth="md" sx={{ p: 5, mb: 2, border: 1, borderColor: "grey.500", borderRadius: 1 }} >
			<Link to={ROUTES.HOME}>
				<Typography variant="body1" component="p" mb={2}>
					Home
				</Typography>
			</Link>
			<UserAdd />
			<UserSearch />
			<UserList />
		</Container>
	);
};

export default Users;
