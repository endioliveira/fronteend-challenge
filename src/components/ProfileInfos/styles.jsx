import styled from "styled-components";

export const BoxProfile = styled.div`
  width: 400px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  padding-bottom: 2.5rem;
  background-color: #3b4252;
  color: #fafafa;

  overflow-x: hidden;
  overflow-y: auto;

  display: flex;
  flex-direction: column;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #a8a8a8;
    border-radius: 30px;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: max-content;
    position: initial;
  }
`;

export const BoxProfileImage = styled.div`
  padding: 2.5rem 3rem 0 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 12rem;
    border-radius: 0.2rem;
  }
`;

export const ResumeProfile = styled.div`
  padding: 0.2rem 1.25rem 1.25rem 1.25rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    padding: 0.2rem 1.5rem 1.25rem 1.5rem;
  }
`;

export const Name = styled.h1`
  padding-bottom: 0.1rem;
  font-style: italic;
  font-weight: 400;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const UserName = styled.h3`
  padding-bottom: 0.9rem;
  font-style: italic;
  font-weight: 300;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const AboutTheProfile = styled.p`
  color: #677386;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const BoxNumberInfos = styled.div`
  margin-top: 0.5rem;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;

  div {
    font-style: italic;
    font-weight: 300;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
  }

  span {
    font-size: 0.85rem;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0;

    img {
      width: 20px;
    }

    span {
      font-size: 0.8rem;
    }
  }
`;

export const BoxContactInformation = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;

  div {
    font-style: italic;
    font-weight: 300;
    font-size: 0.9rem;

    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  a {
    text-decoration: none;
    color: #fafafa;
  }
`;

export const BoxNotification = styled.div`
  padding: 4rem 2rem 9.6rem;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    text-align: center;
    font-size: 1.5rem;
  }
`;

export const BoxButton = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  .button-back {
    width: 8rem;
    padding: 0.5rem;
    border-radius: 0.2rem;
    border: none;
    font-family: "Quicksand", sans-serif;
    font-style: italic;
    font-weight: 300;
    color: #3b4252;
    background-color: #fafafa;
    text-decoration: none;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button-back:hover {
    background-color: #a8a8a8;
    transition: 0.3s ease-in-out;
  }
`;
