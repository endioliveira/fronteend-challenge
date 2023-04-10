import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Title = styled.h1`
  font-family: "Quicksand", sans-serif;
  font-style: italic;
  font-weight: 400;
  color: #47525e;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const Input = styled.input`
  width: 35rem;
  height: 3rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  padding: 1.2rem;
  border: 0.1rem solid #47525e;
  font-family: "Quicksand", sans-serif;
  font-style: italic;
`;

export const Button = styled.button`
  border: none;
  height: 3rem;
  border-radius: 0.5rem;
  padding: 1.2rem;
  text-align: center;
  font-size: 1rem;
  background-color: #47525e;
  color: #fafafa;
  font-family: "Quicksand", sans-serif;
  font-style: italic;

  display: flex;
  align-items: center;
  gap: 0.4rem;

  img {
    width: 1rem;
  }
`;
