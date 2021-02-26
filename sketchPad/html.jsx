const Article = (props) => {
    return (
      <article className={props.classNames}>
        <section class="img-container">
            <img class={props.imgOrientation} src={props.imgSrc} alt={props.imgAlt} />
        </section>
      
        <section class="type-container">
          <h1>{props.title}</h1>
          <p className="subheading">props.origin</p>
          <p>{props.article} <Link to={props.uri}>Read more...</Link></p>
        </section>
      </article>
    )
};


{/* <script src="to-title-case.js"></script>
<script>document.querySelector('h1').innerHTML = document.querySelector('h1').innerHTML.toTitleCase()</script> */}

