import { useState } from "react";
import { Link } from "react-router-dom";
import UserDelete from "./UserDelete";
import UserEdit from "./UserEdit";
import { Container, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ROUTES from '../../routes'
import { User } from "../../app/interfaces";

const UserListItem = ({ user }: { user: User }) => {
	const [isEdited, setIsEdited] = useState(false);

	return (
		<TableRow
			key={user.id}
			sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
		>
			<TableCell component="th" scope="row">
				{user.id}
			</TableCell>
			<TableCell sx={{ fontStyle: isEdited ? "italic" : "normal" }}>
				<Link to={`${ROUTES.USERS}/${user.id}`}>{user.username}</Link>
			</TableCell>
			<TableCell sx={{ fontStyle: isEdited ? "italic" : "normal" }}>
				{user.name}
			</TableCell>
			<TableCell>
				<UserEdit user={user} setIsEdited={setIsEdited} />
			</TableCell>
			<TableCell>
				<UserDelete userId={user.id} />
			</TableCell>
		</TableRow>
	);
};

export default UserListItem;
