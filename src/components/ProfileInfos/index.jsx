import React, { useEffect, useState } from "react";
import { useParams, Link, NavLink } from "react-router-dom";
import axios from "axios";
import {
  BoxProfile,
  BoxProfileImage,
  Name,
  UserName,
  AboutTheProfile,
  ResumeProfile,
  BoxNumberInfos,
  BoxContactInformation,
  BoxNotification,
  BoxButton,
} from "./styles";
import followers from "../../assets/followers.png";
import following from "../../assets/following.svg";
import stars from "../../assets/stars.svg";
import email from "../../assets/email.svg";
import link from "../../assets/link.svg";
import local from "../../assets/local.svg";
import organization from "../../assets/organization.png";
import twitter from "../../assets/twitter.svg";
import iconGithub from "../../assets/icon-github.png";

export function ProfileInfos() {
  const [user, setUser] = useState(null);

  const [countUsersStars, setCountUsersStars] = useState(0);

  const { username } = useParams();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    await axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
        axios
          .get(`${response.data.url}/starred`)
          .then((response) => {
            if (response.data.length > 0) {
              setCountUsersStars(response.data.length);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error.message, "error teste");
      });
  };

  return (
    <>
      <BoxProfile>
        <BoxProfileImage>
          {user ? (
            <img src={user.avatar_url} alt="Foto de Perfil" />
          ) : (
            <img src={iconGithub} alt="Foto de Perfil" />
          )}
        </BoxProfileImage>

        {user && (
          <ResumeProfile>
            <Name>{user.name}</Name>
            <UserName>@{user.login}</UserName>

            <AboutTheProfile>{user.bio}</AboutTheProfile>

            <BoxNumberInfos>
              <div>
                <img src={followers} alt="Ícone de seguidores" />
                <span>{user.followers} followers</span>
              </div>

              <div>
                <img src={following} alt="Ícone de coração" />
                <span>{user.following} following</span>
              </div>

              <div>
                <img src={stars} alt="Ícone de estrela" />
                <span>{countUsersStars} stars</span>
              </div>
            </BoxNumberInfos>

            <BoxContactInformation>
              {user.company && (
                <div>
                  <img src={organization} alt="Ícone de organização" />
                  <span>{user.company}</span>
                </div>
              )}

              {user.location && (
                <div>
                  <img src={local} alt="Ícone de local" />
                  <span>{user.location}</span>
                </div>
              )}

              {user.email && (
                <div>
                  <img src={email} alt="Ícone de email" />
                  <span>{user.email}</span>
                </div>
              )}

              {user.blog && (
                <div>
                  <img src={link} alt="Ícone de link" />
                  <NavLink to={`https://${user.blog}`} target="_blank">
                    {user.blog}
                  </NavLink>
                </div>
              )}

              {user.twitter_username && (
                <div>
                  <img src={twitter} alt="Ícone de twitter" />
                  <NavLink
                    to={`https://twitter.com/${user.twitter_username}`}
                    target="_blank"
                  >
                    {user.twitter_username}
                  </NavLink>
                </div>
              )}
            </BoxContactInformation>
          </ResumeProfile>
        )}

        {!user && (
          <BoxNotification>
            <span>
              OPS... <br /> Usuário não encontrado!
            </span>
          </BoxNotification>
        )}

        <BoxButton>
          <Link to="/" className="button-back">
            Voltar
          </Link>
        </BoxButton>
      </BoxProfile>
    </>
  );
}
