import "./App.css";
import styled from "styled-components";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ChangeColor from "./components/ChangeColor";

function App() {
  return (
    <>
      <Container>
        <Profile />
        <Login />
        <ChangeColor />
      </Container>
    </>
  );
}

export default App;
const Container = styled.div``;
