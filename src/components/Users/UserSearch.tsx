import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchUsers } from "../../redux/dataSlice";
import { TextField } from "@mui/material";

import { useAppSelector, useAppDispatch } from "../../redux/hooks";

const UserSearch = () => {
  const dispatch = useAppDispatch();

  const onChange = (e: React.SyntheticEvent) => {
    dispatch(searchUsers((e.target as HTMLInputElement).value));
  };

  return (
    <TextField
      margin="dense"
      id="search"
      label="Search by username"
      type="text"
      fullWidth
      variant="standard"
      name="search"
      onChange={onChange}
    />
  );
};

export default UserSearch;
