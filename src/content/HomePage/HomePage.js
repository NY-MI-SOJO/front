/**
 * @author Adit Garg <adit.garg21k@gmail.com>
 * @description Generates the hompage
 * @Exports {@component Homepage}
 */
import React, { useState, useEffect } from 'react';
import Article from '../../components/Article/Article.js';
import getArticles from './query';

const HomePage = () => {
  /**
   * @description Homepage Component
   * @returns Homepage component
   * @example <Homepage />
   * @author Adit Garg <adit.garg21k@gmail.com>
   * @todo FOOTER, DYNAMIC ARTICLE BORDER
   */
  const [articlesByTag, setArticlesByTag] = useState([]);
  // https://www.robinwieruch.de/react-hooks-fetch-data - fetch async data trick
  useEffect(() => {
    const fetchArticles = async () => {
      setArticlesByTag(await getArticles());
    };
    fetchArticles();
  }, []);

  const generateArticleList = (articles) => {
    let heroSeen = false;
    return articles.map((article, idx) => {
      if (article.isHero) {
        article.isHero = !heroSeen;
        heroSeen = true;
      }
      return <Article articleObj={article} key={idx} />
    })
  }

  const generateSections = (articlesByTag) => {
    const resultJsx = [];
    for (const articleGroup in articlesByTag) {
      if (articleGroup === "Main"){
         resultJsx.unshift(
          <section key={articleGroup}>
            <section className="article-container">{generateArticleList(articlesByTag[articleGroup])}</section>
          </section>
         )
      }
      else {
        resultJsx.push(
          <section key={articleGroup} id={articleGroup.replace(/ /g,"_")}>
            <h1 className="container-h1">{articleGroup}</h1>
            <section className="article-container">{generateArticleList(articlesByTag[articleGroup])}</section>
          </section>
        );
      }
      
    }
    return resultJsx;
  };

  const sections = generateSections(articlesByTag);
  return <>{sections}</>;
};

export default HomePage;
