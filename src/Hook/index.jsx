import { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import CardHook from "./Component/CardHook";
import NavbarHook from "./Component/NavbarHook";
import SearchHook from "./Component/SearchHook";

const Hook = () => {
  let [keyword, setKeyword] = useState("girl");
  let [news, setNews] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("get API");
    const fetchNews = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${keyword}&from=2022-03-22&sortBy=publishedAt&apiKey=91e74ba9da6848108edc52ecbf1a8951`);
        const news = await response.json();
        setNews(news.articles);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, [keyword]);

  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div>
      <NavbarHook />
      <SearchHook seacrhText={(text) => setKeyword(text)} />
      {isLoading ? (
        <div style={style}>
          <RotatingLines />
        </div>
      ) : (
        <CardHook cardHook={news} />
      )}
    </div>
  );
};

export default Hook;
