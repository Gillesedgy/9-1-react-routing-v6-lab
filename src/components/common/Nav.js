import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <header>
      <article>
        <Link to="/" className="HeaderLink">
          <h1>
            {/* <a href="/"> */}
            Northwest <span>Animal Hospital</span>
            {/* </a> */}
          </h1>{" "}
        </Link>
      </article>
      <aside>
        <ul>
          <li>

            <a href="/staff">All Staff</a>
          </li>
          <li>
            <a href="/pets">All Pets</a>
          </li>
        </ul>
      </aside>
    </header>
  );
}

export default Nav;
