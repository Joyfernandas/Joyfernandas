import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      {/* Navbar */}
      <nav className=" navbar navbar-expand-lg bg-dark fixed-top h-20 ">
        <div className=" container-fluid">
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="coll collapse navbar-collapse  gap-5"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav text-light text-center d-flex justify-content-between">
              <li className="nav-item">
                <a
                  className="nav-link active text-light"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active text-light" href="#">
                  About Me
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active text-light" href="#">
                  Portfolio
                </a>
              </li>
              <li className="nav-item dropdown ">
                <a
                  className="nav-link dropdown-toggle active text-light"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item " href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-light" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Introduction */}
      <div className="container-fluid">
        <div className="row bg-info ">
          <div className="col-sm-6 col-md-6 p-5 mt-60">
            <div className="">
              <h1 className="py display-1">Python Full Stack Developer</h1>
              <p className="h1 hi">
                <span className="sp">Hi,</span>
                <span className="sp">I am </span>
                <span className="sp">Felix</span>
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 img-fluid">
            <img
              className="img-fluid"
              src="..\..\Assets\Images\Fel.jpg"
              alt=""
            />
          </div>
        </div>
        {/* Competences */}
        <div className="row">
          <div className="ed col-sm-4 h1 text-center">
            <span>C</span>
            <span>O</span>
            <span>M</span>
            <span>P</span>
            <span>E</span>
            <span>T</span>
            <span>E</span>
            <span>N</span>
            <span>C</span>
            <span>I</span>
            <span>E</span>
            <span>S</span>
          </div>
          <div className="col mt-5">
            <div className="row">
              <div className="col-3">
                <img
                  className="img-fluid h-50"
                  src="..\..\Assets\Images\Python.png"
                  alt=""
                />
              </div>
              <div className="col-3">
                <img
                  className="img-fluid h-50"
                  src="..\..\Assets\Images\React.png"
                  alt=""
                />
              </div>
              <div className="col-3">
                <img
                  className="img-fluid h-50"
                  src="..\..\Assets\Images\HTML.png"
                  alt=""
                />
              </div>
              <div className="col-3">
                <img
                  className="img-fluid h-50"
                  src="..\..\Assets\Images\css.png"
                  alt=""
                />
              </div>
              <div className="col-3">
                <img
                  className="img-fluid h-50"
                  src="..\..\Assets\Images\Bootstrap.png"
                  alt=""
                />
              </div>
              <div className="col-3">
                <img
                  className="img-fluid h-50"
                  src="..\..\Assets\Images\django.png"
                  alt=""
                />
              </div>
              <div className="col-3">
                <img
                  className="img-fluid h-50"
                  src="..\..\Assets\Images\Js.png"
                  alt=""
                />
              </div>
              <div className="col-3">
                <img
                  className="img-fluid h-50 fade-in-left"
                  src="..\..\Assets\Images\api.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* Education */}
        <div className="row">
          <div className="ed col-sm-4 h1 text-center ">
            <span>E</span>
            <span>D</span>
            <span>U</span>
            <span>C</span>
            <span>A</span>
            <span>T</span>
            <span>I</span>
            <span>O</span>
            <span>N</span>
          </div>
          <div className="col-sm-8 mt-5">
            <hr></hr>
            <h1 className="com display-3">B.Sc Computer Science - 73%</h1>
            <p>June 2019 - July 2022</p>
            <p>
              At Thiruvalluvar University in Don Bosco College(Co-Ed) -
              Yelagiri,TN
            </p>
            <hr></hr>
            <h1 className="com display-3">HSC - 63%</h1>
            <p>June 2017 - April 2018</p>
            <p>Adaikkala Annai Hr.Sec School</p>
            <hr></hr>
            <h1 className="com display-3">SSLC - 81%</h1>
            <p>June 2016 - April 2017</p>
            <p>St.Michael's High School</p>
            <hr></hr>
          </div>
        </div>
        {/* Skillllllll */}
        <div className="row">
          <div className="ed col-sm-4 h1 text-center">
            <span>S</span>
            <span>K</span>
            <span>I</span>
            <span>L</span>
            <span>L</span>

            <span>H</span>
            <span>I</span>
            <span>G</span>
            <span>H</span>
            <span>L</span>
            <span>I</span>
            <span>G</span>
            <span>H</span>
            <span>T</span>
            <span>S</span>
          </div>
          <div className="col-sm-8 mt-5">
            <h1 className="display-4 fade-in-left">Ability to learn Quickly</h1>
            <h1 className="display-4"> Strong Decision Maker</h1>
            <h1 className="display-4"> Programming Skills</h1>
            <h1 className="display-4"> Complex Problem Solver</h1>
            <h1 className="display-4"> Team Player</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
