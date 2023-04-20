import React from "react";
import "./Port.css";

function Port() {
  return (
    <>
      <div id="colorlib-page">
        <div className="container-wrap">
          <a
            className="js-colorlib-nav-toggle colorlib-nav-toggle active"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="true"
            aria-controls="navbar"
            href="#"
          >
            <i></i>
          </a>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="d-flex flex-column">
              <div className="author-img">
                <img
                  className="author-img"
                  src="..\..\Assets\Images\Fel.jpg"
                  alt=""
                />
              </div>
              <h1 className="colorlib-logo">
                <a href="fg">Felix C</a>
              </h1>
              <span className="text-center">Python Full Stack Developer</span>
            </div>
            <nav id="colorlib-main-menu" className="navbar" role="navigation">
              <div id="navbar" className="collapse " aria-expanded="false">
                <ul>
                  <li className="active">
                    <a href="#" data-nav-section="Home">
                      "Home"
                    </a>
                  </li>
                  <li className="active">
                    <a href="#" data-nav-section="About">
                      "About"
                    </a>
                  </li>
                  <li className="active">
                    <a href="#" data-nav-section="service">
                      "Service"
                    </a>
                  </li>
                  <li className="active">
                    <a href="#" data-nav-section="Skill">
                      "Skill"
                    </a>
                  </li>
                  <li className="active">
                    <a href="#" data-nav-section="Skill">
                      "Skill"
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="colorlib-footer">
              <p>
                <small>Copyright @ 2023 all rights reserved</small>
                <br />
                <a href="#">felixdbccs@gmail.com</a>
                <p>91+ 6360070160</p>
              </p>
            </div>
          </aside>
          <div>
            <h1>gfhjghjghjgjg</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Port;
