import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../redux/reducers/themeReducer";

export default function Login() {
  const dispatch = useDispatch();
  const [color, setColor] = useState("");
  return (
    <>
      <Container>
        <input
          onChange={(e) => setColor(e.target.value)}
          placeholder="Type color"
          type="text"
        />
        <Button
          onClick={() => {
            dispatch(changeColor(color));
          }}
        >
          Change Color
        </Button>
      </Container>
    </>
  );
}
const Container = styled.div`
  text-align: center;
  margin: 10px;
  input {
    padding: 10px;
    font-size: 14px;
  }
`;
const Button = styled.button`
  font-size: 14px;
  padding: 10px;
`;
