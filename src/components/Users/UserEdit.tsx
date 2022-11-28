import React, { useState } from "react";
import {
  Button,
  TextField,
  Container,
  Typography,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { editUser } from "../../redux/dataSlice";

import { User } from "../../app/interfaces";

const UserEdit = ({
  user,
  setIsEdited,
}: {
  user: User;
  setIsEdited: Function;
}) => {
  const initialUserData = {
    Name: user.name,
    Username: user.username,
    Email: user.email,
    Phone: user.phone,
    Website: user.website,
    Street: user.address.street,
    Suite: user.address.suite,
    City: user.address.city,
    Zipcode: user.address.zipcode,
    Lat: user.address.geo.lat,
    Lng: user.address.geo.lng,
    "Company Name": user.company.name,
    "Catch Phrase": user.company.catchPhrase,
    BS: user.company.bs,
  };

  const [open, setOpen] = useState(false);
  const [userNewData, setUserNewData] = useState(initialUserData);
  const dispatch = useAppDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChange = (e: React.SyntheticEvent) => {
    setUserNewData({
      ...userNewData,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    });
  };

  const onSaveUser = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const editedUser = {
      id: user.id,
      name: userNewData.Name,
      username: userNewData.Username,
      email: userNewData.Email,
      phone: userNewData.Phone,
      website: userNewData.Website,
      address: {
        street: userNewData.Street,
        city: userNewData.City,
        zipcode: userNewData.Zipcode,
        suite: userNewData.Suite,
        geo: {
          lat: userNewData.Lat,
          lng: userNewData.Lng,
        },
      },
      company: {
        name: userNewData["Company Name"],
        catchPhrase: userNewData["Catch Phrase"],
        bs: userNewData.BS,
      },
    };

    dispatch(editUser(editedUser));

    setIsEdited(true);
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit user
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit User</DialogTitle>
        <Box
          component="form"
          sx={{"& .MuiTextField-root": { m: 1, width: "25ch" }}}
          autoComplete="off"
          onSubmit={onSaveUser}
        >
          <DialogContent>
            {Object.entries(userNewData).map((item) => (
              <TextField
                key={item[0]}
                margin="dense"
                id={item[0]}
                label={item[0]}
                type="text"
                fullWidth
                variant="standard"
                name={item[0]}
                onChange={onChange}
                defaultValue={item[1]}
                required={true}
              />
            ))}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Edit user</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
};

export default UserEdit;
