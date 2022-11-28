import { useEffect } from "react";
import UserListItem from "./UserListItem";
import { fetchUsers } from "../../redux/dataSlice";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";

import { useAppSelector, useAppDispatch } from "../../redux/hooks";

const UserList = () => {
	const dispatch = useAppDispatch();
	const users = useAppSelector((state) => state.data.users);
	const loading = useAppSelector((state) => state.data.loading);

	return (
		<Container sx={{ mt: 2 }}>

			{loading && <p>Loading...</p>}

			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell>Username</TableCell>
							<TableCell>Name</TableCell>
							<TableCell>Edit</TableCell>
							<TableCell>Delete</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{users && !loading &&	users.map((user) => <UserListItem key={user.id} user={user} />)}
					</TableBody>
				</Table>
			</TableContainer>
		</Container>
	);
};

export default UserList;
