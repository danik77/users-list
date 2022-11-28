import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import User from "./pages/User";
import { useAppSelector, useAppDispatch } from "./redux/hooks";
import { fetchUsers } from "./redux/dataSlice";
import ROUTES from './routes'

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => { 
    dispatch(fetchUsers()); 
  }, []);

  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.USERS} element={<Users />} />
        <Route path={ROUTES.USER} element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
