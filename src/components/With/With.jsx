import { Link } from "react-router-dom";
import cl from './With.module.scss'
function With() {
  return (
    <div className={cl.With}>
      <aside>
        <img src="https://searchthisweb.com/wallpaper/forest_5120x2880_o7sgz.jpg" alt="" width={580} heigh={600} />
        <article>
          <h4>With us, it’s good trips only.</h4>
          <p>
            But what does that mean? Check out the first of our new film series
            that dives into why we travel and how we find good all over.
          </p>
          <Link to="/">See it first</Link>
        </article>
      </aside>
    </div>
  );
}

export default With;
