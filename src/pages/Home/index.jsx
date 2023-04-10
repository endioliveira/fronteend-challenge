import React, { useState } from 'react';
import { Container, Title, Box, Input, Button } from "./styles";
import searchIcon from "../../assets/search.svg";
import { useNavigate } from "react-router-dom";


export function Home() {

  const [ search, setSearch ] = useState("")
  const navigate = useNavigate();

const handleGetUser = () => {
  navigate(`/profile/${search}`)
}

  return (
    <>
    <Container>
        <Title>Search Devs</Title>
        <Box>
          <Input placeholder="Type the username here..." onChange={(e) => setSearch(e.target.value)}>
          </Input>
          <Button onClick={handleGetUser}>
            <img src={searchIcon} alt="imagem de uma lupa"/>
            Buscar
            </Button>
        </Box>
    </Container>
    </>
  )
}
