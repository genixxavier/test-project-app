import React from "react";
import { Title } from "../elements/Titles";
import avatarImage from "../assets/images/avatar.png";
import styled from "styled-components";
import Container from "../elements/Container";
import { StyledText } from "../elements/StyledText";
import { CircleImage } from "../elements/CircleImage";
import { PrimaryButton, SecondaryButton } from "../elements/Buttons";
import { Row } from "../elements/Row";
import ArticlesLink from "../blocks/ArticlesLink";

const RowsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1em;
  align-items: center;
  div {
    flex: 1;
  }
  img {
    max-width: 350px;
  }
`;

const Header = ({ className }) => {
  return (
    <header className={className}>
      <Container>
        <RowsContainer>
          <div>
            <Title>
              Welcome to my site web <StyledText>Xavier</StyledText> developer
              software
            </Title>
            <Row>
              <PrimaryButton>My projects</PrimaryButton>
              <SecondaryButton>My CV</SecondaryButton>
            </Row>
            <ArticlesLink />
          </div>
          <CircleImage src={avatarImage} alt="avatar" />
        </RowsContainer>
      </Container>
    </header>
  );
};

export default styled(Header)`
  background-color: #fff;
  color: black;
  padding: 100px;
`;
