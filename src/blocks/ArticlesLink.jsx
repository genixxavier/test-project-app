import React, { useContext } from "react";
import { ArticlesContext } from "../contexts/ArticlesContext";
import { Link } from "../elements/Buttons";

const ArticlesLink = () => {
  const { articles } = useContext(ArticlesContext);
  return <Link href="#articles">You read my {articles.length} articles</Link>;
};

export default ArticlesLink;
