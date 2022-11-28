import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import {
  Button,
  Box,
  TextField,
  Container,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { addUser } from "../../redux/dataSlice";

const initialUserData = {
  Name: "",
  Username: "",
  Email: "",
  Phone: "",
  Website: "",
  Street: "",
  Suite: "",
  City: "",
  Zipcode: "",
  Lat: "",
  Lng: "",
  "Company Name": "",
  "Catch Phrase": "",
  BS: "",
};

const UserAdd = () => {
  const [userData, setUserData] = useState(initialUserData);
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChange = (e: React.SyntheticEvent) => {
    setUserData({
      ...userData,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    });
  };

  const onCreate = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const newUser = {
      name: userData.Name,
      username: userData.Username,
      email: userData.Email,
      phone: userData.Phone,
      website: userData.Website,
      address: {
        street: userData.Street,
        city: userData.City,
        zipcode: userData.Zipcode,
        suite: userData.Suite,
        geo: {
          lat: userData.Lat,
          lng: userData.Lng,
        },
      },
      company: {
        name: userData["Company Name"],
        catchPhrase: userData["Catch Phrase"],
        bs: userData.BS,
      },
    };

    dispatch(addUser(newUser));
    setOpen(false);
    setUserData(initialUserData);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add user
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Box
          component="form"
          sx={{"& .MuiTextField-root": { m: 1, width: "25ch" }}}
          autoComplete="off"
          onSubmit={onCreate}
        >
          <DialogTitle>Add user</DialogTitle>
          <DialogContent>
            {Object.entries(userData).map((item) => (
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
            <Button type="submit">Add user</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
};

export default UserAdd;
