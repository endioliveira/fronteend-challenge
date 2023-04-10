import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BoxRepositories = styled.div`
  background-color: #fafafa;
  color: #3b4252;
  padding: 1rem;

`;

export const TitleRepository = styled.h3`
  font-weight: 400;
  font-size: 1.5rem;
  font-style: italic;
  padding-bottom: 0.3rem;

  a {
    text-decoration: none;
    color: #3b4252;
  }
`;

export const ResumeRepository = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  padding-bottom: 0.8rem;
`;

export const BoxRepositoryNumbersInfos = styled.div`
  font-weight: 300;
  font-size: 1.2rem;
  font-style: italic;

  display: flex;
  align-items: center;
  gap: 5rem;

  div {
    display: flex;
    align-items: center;
  }

  .stars {
    gap: 0.5rem;
  }

`;
