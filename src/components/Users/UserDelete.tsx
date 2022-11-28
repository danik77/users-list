import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/dataSlice";
import { Button } from "@mui/material";

import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { deleteUser } from "../../redux/dataSlice";

const UserDelete = ({ userId }: {userId: number}) => {
  const dispatch = useAppDispatch();

  const onDeleteUser = () => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteUser(userId));
    }
  };

  return (
    <Button variant="contained" onClick={onDeleteUser} sx={{ mr: 1 }}>
      Delete
    </Button>
  );
};

export default UserDelete;
