/**
 * @author Adit Garg <adit.garg21k@gmail.com>
 * @description Generates the hompage
 * @Exports {@component Homepage}
 */
import React, { useState, useEffect } from 'react';
import Article from '../../components/Article/Article.js';

const HomePage = () => {
  /**
   * @description Homepage Component
   * @returns Homepage component
   * @example <Homepage />
   * @author Adit Garg <adit.garg21k@gmail.com>
   * @todo FOOTER, DYNAMIC ARTICLE BORDER, RESPONSIVE PAGE
   */
  const [articles, setArticles] = useState([]);
  // https://www.robinwieruch.de/react-hooks-fetch-data - fetch async data trick
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://nymisojo-back.herokuapp.com/Articles'
      );
      const data = await response.json();
      setArticles(
        data.map((articleObj, idx) => (
          <Article articleObj={articleObj} key={idx} />
        ))
      );
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="article-container">{articles}</div>
      <h1 className="container-h1">Health</h1>
      <div className="article-container">{articles}</div>
      <h1 className="container-h1">Life</h1>
      <div className="article-container">{articles}</div>
      <footer />
    </>
  );
};

export default HomePage;
