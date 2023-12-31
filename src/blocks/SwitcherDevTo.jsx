import React, { useContext } from "react";
import { SecondaryButton } from "../elements/Buttons";
import { ArticlesContext } from "../contexts/ArticlesContext";
import styled from "styled-components";

const SwitcherDevTo = ({ className }) => {
  const { username, setUsername } = useContext(ArticlesContext);
  const changeUsername = () => {
    let user = username === "uriel_hedz" ? "microsoft" : "uriel_hedz";
    setUsername(user);
  };
  return (
    <p className={className}>
      {username === "uriel_hedz"
        ? "We also can view post by company"
        : "We view my posts"}
      <SecondaryButton onClick={() => changeUsername()}>Change</SecondaryButton>
    </p>
  );
};

export default styled(SwitcherDevTo)`
  display: flex;
  gap: 1em;
  align-items: center;
`;
