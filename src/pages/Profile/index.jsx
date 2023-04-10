import React from "react";
import { ProfileInfos } from "../../components/ProfileInfos/index";
import { RepositoryInfos } from "../../components/RepositoryInfos/index";
import {
  Container
} from "./styles";

export function Profile() {

  return (
    <>
      <Container>
      <ProfileInfos/>
      <RepositoryInfos/>
      </Container>
    </>
  );
}
