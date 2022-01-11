import styled from "styled-components";
import { useDispatch } from "react-redux";
import { login } from "../redux/reducers/userReducer";
import { logout } from "../redux/reducers/userReducer";

export default function Login() {
  const dispatch = useDispatch();
  return (
    <>
      <Container>
        <Button
          onClick={() =>
            dispatch(
              login({ name: "Deepak", age: 12, email: "deepak@gmail.com" })
            )
          }
        >
          Login
        </Button>
        <Button onClick={() => dispatch(logout())}>Logout</Button>
      </Container>
    </>
  );
}
const Container = styled.div`
  text-align: center;
`;
const Button = styled.button`
  margin: 10px;
  padding: 10px;
`;
