import styled from "styled-components";
import { useSelector } from "react-redux";

export default function Profile() {
  const user = useSelector((state) => state.user.value);
  const themeColor = useSelector((state) => state.theme.value);
  console.log(user);
  return (
    <Container style={{ color: themeColor }}>
      <h1>Profile Page</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </Container>
  );
}
const Container = styled.div`
  text-align: center;
  margin: 10px;
  h1 {
    margin-bottom: 20px;
    font-size: 25px;
    font-weight: 600;
  }
  p {
    font-size: 18px;
    margin: 10px;
  }
`;
