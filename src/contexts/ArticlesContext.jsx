import { createContext, useEffect, useState } from "react";

export const ArticlesContext = createContext({});

export const ArticlesProvider = ({ children }) => {
  const [username, setUsername] = useState("uriel_hedz");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchDevTo().then((respond) => setArticles(respond));
    async function fetchDevTo() {
      let respond = await fetch(
        `https://dev.to/api/articles?username=${username}`
      );
      return await respond.json();
    }
  }, [username]);

  return (
    <ArticlesContext.Provider value={{ username, articles, setUsername }}>
      {children}
    </ArticlesContext.Provider>
  );
};
