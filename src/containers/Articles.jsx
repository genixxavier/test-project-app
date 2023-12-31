import React, { useContext } from "react";
import Container from "../elements/Container";
import { SubTitle } from "../elements/Titles";
import { StyledText } from "../elements/StyledText";
import Article from "../blocks/Article";
import { Row } from "../elements/Row";
import { ArticlesContext } from "../contexts/ArticlesContext";
import SwitcherDevTo from "../blocks/SwitcherDevTo";

const Articles = () => {
  const { articles } = useContext(ArticlesContext);
  return (
    <Container>
      <SubTitle>
        My posts in <StyledText>Dev.To</StyledText>
      </SubTitle>
      <SwitcherDevTo />
      <Row>
        {articles.map((article) => (
          <Article articleInfo={article} key={article.id} />
        ))}
      </Row>
    </Container>
  );
};

export default Articles;
