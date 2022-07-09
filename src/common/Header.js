import { Link } from 'react-router-dom'
import logoSvg from '../images/main/m.svg'

function Header() {
  return (
    <>
      <div id="skipNav" className="skipNav">
        <Link to="#contents">skip to contents</Link>
      </div>

      <header id="header">
        <div className="row-w wrap-gnb">
          <div className="mb-bar">
            <button>=</button>
          </div>

          <nav className="gnb-left">
            <h1 className="logo">
              <img src={logoSvg} alt="로고svg" />
            </h1>
            <ul>
              <li>
                <Link to="/">Courses</Link>
              </li>
              <li>
                <Link to="/">Challenges</Link>
              </li>
              <li>
                <Link to="/">Community</Link>
              </li>
              <li>
                <Link to="/">FAQ</Link>
              </li>
              <li>
                <Link to="/">Roadmap</Link>
              </li>
            </ul>
          </nav>

          <div className="gnb-right">
            <Link to="" className="btn-login">
              Login
            </Link>
            <Link to="" className="btn-join nmdBtn">
              Join
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
