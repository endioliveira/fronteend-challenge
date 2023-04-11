import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const Title = styled.h1`
  font-family: "Quicksand", sans-serif;
  font-style: italic;
  font-weight: 400;
  color: #47525e;
`;

export const Box = styled.div`
  width: 100%;
  padding: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const Input = styled.input`
  max-width: 35rem;
  height: 3rem;
  padding: 1.2rem;
  border: 0.1rem solid #47525e;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-family: "Quicksand", sans-serif;
  font-style: italic;
  flex: 1;
`;

export const Button = styled.button`
  height: 3rem;
  padding: 1.2rem;
  border: none;
  border-radius: 0.5rem;
  text-align: center;
  font-size: 1rem;
  background-color: #47525e;
  color: #fafafa;
  font-family: "Quicksand", sans-serif;
  font-style: italic;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 0.4rem;

  img {
    width: 1rem;
  }

  :hover {
    background-color: #4c5762;
  }

  @media (max-width: 1050px) {
    span {
      display: none;
    }
  }
`;
