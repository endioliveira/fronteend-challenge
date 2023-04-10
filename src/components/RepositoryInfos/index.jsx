import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import {
  Container,
  BoxRepositories,
  TitleRepository,
  ResumeRepository,
  BoxRepositoryNumbersInfos,
} from "./styles";
import starRepo from "../../assets/star-repo.svg";

export function RepositoryInfos() {
  const [userRepos, setUserRepos] = useState([]);

  const { username } = useParams();

  useEffect(() => {
    fetchUserRepos();
  }, [username]);

  const fetchUserRepos = async () => {
    await axios
      .get(
        `https://api.github.com/users/${username}/repos?sort=stars&direction=desc&per_page=100`
      )
      .then((response) => {
        const sortRepo = response.data.sort(
          (a, b) => b.stargazers_count - a.stargazers_count
        );
        setUserRepos(sortRepo);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        {userRepos.map((repo) => (
          <BoxRepositories key={repo.id}>
            <TitleRepository>
              <NavLink
                to={`https://github.com/${repo.full_name}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                {repo.name}
              </NavLink>
            </TitleRepository>
            <ResumeRepository>{repo.description}</ResumeRepository>
            <BoxRepositoryNumbersInfos>
              <div className="stars">
                <img src={starRepo} alt="Ícone de estrela" />
                <span>{repo.stargazers_count} stars</span>
              </div>
              <div>
                <ul>
                  <li>Updated {moment(repo.updated_at).fromNow()}</li>
                </ul>
              </div>
            </BoxRepositoryNumbersInfos>
          </BoxRepositories>
        ))}
      </div>
    </>
  );
}
