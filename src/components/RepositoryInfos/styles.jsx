import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`;

export const BoxRepositories = styled.div`
  padding: 1rem;
  background-color: #fafafa;
  color: #3b4252;

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

export const TitleRepository = styled.h3`
  padding-bottom: 0.3rem;
  font-weight: 400;
  font-size: 1.5rem;
  font-style: italic;

  a {
    text-decoration: none;
    color: #3b4252;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;

    a {
      text-decoration: revert;
    }
  }
`;

export const ResumeRepository = styled.p`
  padding-bottom: 0.8rem;
  font-weight: 400;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
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

  @media (max-width: 768px) {
    font-size: 1rem;

    .stars {
      img {
        width: 20px;
      }

      span {
        font-size: 0.8rem;
      }
    }

    ul li {
      font-size: 0.8rem;
    }
  }
`;
