import { Link } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import  ROUTES from '../routes'

const Home = () => {
	return (
		<Container maxWidth="md"	sx={{ p: 5, mb: 2, border: 1, borderColor: "grey.500", borderRadius: 1 }}>
			<Typography variant="h4" component="h4" mt={2}>
				Home
			</Typography>
			<Typography variant="body1" component="p">List of users, with possibility to add, edit, delete and search users</Typography>
			<Link to={ROUTES.USERS}>
				<Typography variant="body1" component="p" mt={2}>
					Users
				</Typography>
			</Link>
		</Container>
	);
};

export default Home;
