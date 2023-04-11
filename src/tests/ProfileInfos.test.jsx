import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";
import { ProfileInfos } from "../components/ProfileInfos/index";

jest.mock("axios");

test("verificando se o componente está renderizando corretamente as informações do usuário.", async () => {
  const mockUser = {
    name: "Livia Oliver",
    login: "liviaoliv",
    bio: "Desenvolvedora Front End",
    avatar_url: "https://githuburl.com/avatar",
    followers: 10,
    following: 20,
    url: "https://githuburl.com",
    company: "Company",
    location: "Brasil",
    email: "liviaolivmock@email.com",
    blog: "https://blogmock.com",
    twitter_username: "liviaolivmock",
  };

  const mockResponse = { data: mockUser };
  axios.get.mockResolvedValue(mockResponse);

  render(
    <MemoryRouter>
      <ProfileInfos username="liviaoliv" />
    </MemoryRouter>
  );
  const name = await screen.findByText("Livia Oliver");
  const username = await screen.findByText("@liviaoliv");
  const bio = await screen.findByText("Desenvolvedora Front End");
  const followers = await screen.findByText("10 followers");
  const following = await screen.findByText("20 following");
  const company = await screen.findByText("Company");
  const location = await screen.findByText("Brasil");
  const email = await screen.findByText("liviaolivmock@email.com");
  const blog = await screen.findByText("https://blogmock.com");
  const twitter = await screen.findByText("liviaolivmock");

  expect(name).toBeInTheDocument();
  expect(username).toBeInTheDocument();
  expect(bio).toBeInTheDocument();
  expect(followers).toBeInTheDocument();
  expect(following).toBeInTheDocument();
  expect(company).toBeInTheDocument();
  expect(location).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(blog).toBeInTheDocument();
  expect(twitter).toBeInTheDocument();
});

test("verificando se o componente renderiza uma mensagem de erro quando o usuário não é encontrado", async () => {
  axios.get.mockRejectedValue({ message: "Usuário não encontrado" });

  const { findByText } = render(
    <MemoryRouter>
      <ProfileInfos />
    </MemoryRouter>
  );

  const notification = await findByText(/usuário não encontrado/i);

  expect(notification).toBeInTheDocument();
});
