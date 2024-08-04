import { useState } from "react";
import SearchForm from "./SearchForm";
import NewsList from "./NewsList";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const Ejercicio11 = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchNews = async (query) => {
    setIsLoading(true);

    try {
      const res = await fetch(
        "https://newsapi.org/v2/everything?q=tesla&from=2024-07-04&sortBy=publishedAt&apiKey=API_KEY"
      );
      const data = await res.json();

      if (data.articles) {
        setNews(data.articles);
      }
    } catch (error) {
      alert("Ocurrio un error al buscar la noticia");
    }
    setIsLoading(false);
  };

  return (
    <>
        <h1>Noticias</h1>
        <SearchForm 
        fetchNews={fetchNews}
        isLoading={isLoading} 
        type="news"
        />
        <NewsList news={news} isLoading={isLoading}/>
    </>
  );
};
export default Ejercicio11;
