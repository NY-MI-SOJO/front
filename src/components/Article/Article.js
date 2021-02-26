import React from 'react';

const Article = ({ articleObj }) => {
  articleObj.imgOrientation =
    articleObj.imgOrientation === 'Top' ? 't-img' : 'r-img';
  articleObj.classNames = `${articleObj.isHero && 'hero'} `;
  articleObj.classNames += `${
    articleObj.articleOrientation === 'Vertical' ? 'v-article' : 'h-article'
  } t-article`;
  articleObj.imgOrientation =
    articleObj.imgOrientation === 'Top' ? 't-img' : 'r-img';
  return (
    <article className={articleObj.classNames}>
      <section className="img-container">
        <img
          className={articleObj.imgOrientation}
          src={articleObj.Image}
          alt={articleObj.imgAlt}
        />
      </section>

      <section className="type-container">
        <h1 className>{articleObj.Title}</h1>
        <p className="subheading">{articleObj.Source}</p>
        <p className="p-content">
          {articleObj.Description} <a href={articleObj.URI}>Read more...</a>
        </p>
      </section>
    </article>
  );
};

export default Article;
