import { useContext, useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { Link } from "react-router-dom";
import { Button, Container } from "@mui/material";
import  ROUTES from '../../routes'

const Pagination = ({ userId }: any) => {
  const users = useAppSelector((state) => state.data.users);
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    if (users.length) {
      const index = users.findIndex((i) => i.id === +userId);

      if (index === 0) {
        setPrev(null);
        setNext(users[index + 1].id);
      }

      if (index === users.length - 1) {
        setPrev(users[index - 1].id);
        setNext(null);
      }

      if (index !== 0 && index !== users.length - 1) {
        setPrev(users[index - 1].id);
        setNext(users[index + 1].id);
      }
    }
  });

  return (
    <Container sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
      {prev && (
        <Link to={`${ROUTES.USERS}/${prev}`}>
          <Button variant="outlined">Prev user</Button>
        </Link>
      )}
      {next && (
        <Link to={`${ROUTES.USERS}/${next}`}>
          <Button variant="outlined">Next user</Button>
        </Link>
      )}
    </Container>
  );
};

export default Pagination;
