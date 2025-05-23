import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SelectCatagory from "../sidebar/selectCatagory";

const HeaderTwo = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [headerFiexd, setHeaderFiexd] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFiexd(true);
    } else {
      setHeaderFiexd(false);
    }
  });

  return (
    <header
      className={`header-section style-2 ${
        headerFiexd ? "header-fixed fadeInUp" : ""
      }`}
    >
      <div className="header-bottom">
        <div className="header-wrapper">
          <div className="logo-search-acte">
            <div className="logo ">
              <div style={{ display: "flex" }} className="flex gap-2">
                <Link to="/">
                  <img src="assets/images/logo/02.png" alt="logo" />
                </Link>
                <h3>EduVibe</h3>
              </div>
            </div>
            <div className="cate-search d-none d-xxl-block">
              <div className="d-flex flex-wrap align-items-center">
                <div className="header-cate">
                  <SelectCatagory select={"all"} />
                </div>
                <div className="header-search">
                  <form action="/">
                    <input type="text" placeholder="Search Here....." />
                    <button type="submit">
                      <i className="icofont-search"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-area">
            <div className="menu">
              <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                <li className="menu-item-has-children">
                  <Link to="/">Home</Link>
                  <ul className="lab-ul dropdown-menu">
                    {/* <li>
                      <NavLink to="/">Home One</NavLink>
                    </li> */}
                    {/* <li><NavLink to="/index-2">Home Two</NavLink></li>
                                        <li><NavLink to="/index-3">Home Three</NavLink></li>
                                        <li><NavLink to="/index-4">Home Four</NavLink></li>
                                        <li><NavLink to="/index-5">Home Five</NavLink></li>
                                        <li><NavLink to="/index-6">Home Six</NavLink></li>
                                        <li><NavLink to="/index-7">Home Seven</NavLink></li> */}
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-bs-offset="0,0"
                  >
                    Courses
                  </a>
                  <ul className="lab-ul dropdown-menu">
                    <li>
                      <NavLink to="/course">Course</NavLink>
                    </li>
                    <li>
                      <NavLink to="/course-single">Course Details</NavLink>
                    </li>
                    <li>
                      <NavLink to="/course-view">Course View</NavLink>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <Link to="/blog">Blog</Link>
                  <ul className="lab-ul dropdown-menu">
                    {/* <li>
                      <NavLink to="/blog">Blog Grid</NavLink>
                    </li> */}
                    {/* <li>
                      <NavLink to="/blog-2">Blog Style 2</NavLink>
                    </li>
                    <li>
                      <NavLink to="/blog-3">Blog Style 3</NavLink>
                    </li> */}
                    {/* <li>
                      <NavLink to="/blog-single">Blog Single</NavLink>
                    </li> */}
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-bs-offset="0,0"
                  >
                    Pages
                  </a>
                  <ul className="lab-ul dropdown-menu">
                    <li>
                      <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                      <NavLink to="/team">Team</NavLink>
                    </li>
                    <li>
                      <NavLink to="/instructor">Instructor</NavLink>
                    </li>
                    <li>
                      <NavLink to="/shop">Shop Page</NavLink>
                    </li>
                    <li>
                      <NavLink to="/shop-single">Shop Details Page</NavLink>
                    </li>
                    <li>
                      <NavLink to="/cart-page">Shop Cart Page</NavLink>
                    </li>
                    <li>
                      <NavLink to="/search-page">Search Page</NavLink>
                    </li>
                    <li>
                      <NavLink to="/search-none">Search None</NavLink>
                    </li>
                    <li>
                      <NavLink to="/404">404</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>

            <Link to="/login" className="login">
              <i className="icofont-user"></i> <span>LOG IN</span>{" "}
            </Link>
            <Link to="/signup" className="signup">
              <i className="icofont-users"></i> <span>SIGN UP</span>{" "}
            </Link>

            <div
              className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
              onClick={() => setMenuToggle(!menuToggle)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTwo;
