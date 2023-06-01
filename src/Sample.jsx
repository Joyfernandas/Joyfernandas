import React from "react";
import "./Sample.css";
import Footer from "./Footer";
function Sample() {
  return (
    <>
      {/* mhbhmnbhmb */}
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <h1 className="nav-text">DREAMS INN</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse align-items-end justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="h">
                <button className="nav-btn hvr-bounce-to-left">HOME</button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#About">
                <button className="nav-btn hvr-bounce-to-left">ABOUT</button>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#gallery"
              >
                <button className="nav-btn hvr-bounce-to-left">GALLERY</button>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#contact"
              >
                <button className="nav-btn hvr-bounce-to-left">CONTACT</button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* jhghjghjgbjj */}
      <br />
      <br />
      <br />

      <div className="car row">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://res.cloudinary.com/dalwduesr/image/upload/v1685018113/yelagirili_zb1kaf.jpg"
                className="gm d-block w-100 h-25 "
                style={{ width: 640, height: 350 }}
                alt="..."
              />
              <div className="carousel-caption  d-md-block">
                
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://res.cloudinary.com/dalwduesr/image/upload/v1685017790/360_F_464860075_a1rdJT6HFjoKxmp1sXIhpIurK9fFm8Ws_hyoeae.jpg"
                className="gm d-block w-100 h-25"
                style={{ width: 640, height: 350 }}
                alt="..."
              />
              <div className="carousel-caption  d-md-block mb">
                <h1 className="bm">Welcome to our place</h1>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://res.cloudinary.com/dalwduesr/image/upload/v1685017989/yelsgi_dcvjoo.jpg"
                className="gm d-block w-100 h-25"
                style={{ width: 640, height: 350 }}
                alt="..."
              />
              <div className="carousel-caption  d-md-block mb">
                <h1 className="bm">Welcome to our place</h1>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* bhmbhjvgcxcc */}
      <div className="co container-fluid mt-lg-5 p-lg-5 ">
        <h1 className="text-center fw-bolder display-4">OUR ROOMS</h1>
        <br />
        <br />
        {/* hjghjgj */}
        <div className="row row-cols-2 row-cols-lg-4  g-lg-3">
          <div className="col shadow card">
            <div className="p ">
              <img
                src="https://res.cloudinary.com/dalwduesr/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1685010399/photo_2023-05-25_11-33-44_dsqugi.jpg"
                className="card-img-top mt-2"
                alt="..."
              />
            </div>
            <div className="p-3">
              <h3>STANDARD ROOM</h3>
            </div>
          </div>
          <div className="col shadow card">
            <div className="p-  ">
              <img
                src="https://res.cloudinary.com/dalwduesr/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1685010396/photo_2023-05-25_11-34-27_tehpi4.jpg"
                className="card-img-top mt-2"
                alt="..."
              />
            </div>
            <div className="p-3">
              <h3>FAMILY ROOM</h3>
            </div>
          </div>
          <div className="col shadow card">
            <div className="p- ">
              <img
                src="https://res.cloudinary.com/dalwduesr/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1685010396/photo_2023-05-25_11-34-21_cabrrd.jpg"
                className="card-img-top mt-2"
                alt="..."
              />
            </div>
            <div className="p-3">
              <h3>SINGLE ROOM</h3>
            </div>
          </div>
          <div className="col shadow card">
            <div className="p-  ">
              <img
                src="https://res.cloudinary.com/dalwduesr/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1685010397/photo_2023-05-25_11-34-06_yeponh.jpg"
                className="card-img-top mt-2"
                alt="..."
              />
            </div>
            <div className="p-3">
              <h3>LUXURY ROOM</h3>
            </div>
          </div>
         
        
        </div>
        {/* nkjnjnjknkn */}
        <br />
        <br />
        <br />
        <div className="row">
          <div className="row g-0  position-relative  about">
            <div className="col-md-5  ">
              <img
                src="https://res.cloudinary.com/dalwduesr/image/upload/v1685074213/Screenshot_2023-05-26_092203_gxafwe.png"
                className="img-fluid mt-3 j"
                alt="..." 
              />
            </div>
            <div className="col-md-7 ">
              <h1 className="text-center fw-bolder  " id="About">
                ABOUT US
              </h1>
              <h5 className="text-start te">
                Another instance of placeholder content for this other custom
                component. It is intended to mimic what some real-world content
                would look like, and we're using it here to give the component a
                bit of body and size. Another instance of placeholder content
                for this other custom component. It is intended to mimic what
                some real-world content would look like, and we're using it here
                
              </h5>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <h1 className="text-center fw-bolder ">Tourists Places in Yelagiri</h1>
        <br />
        <br />
        <div className="row row-cols-2 row-cols-lg-4  g-lg-3">
          <div className="col shadow card">
            <div className="p ">
              <img
                src="https://res.cloudinary.com/dalwduesr/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1685010399/photo_2023-05-25_11-33-44_dsqugi.jpg"
                className="card-img-top mt-3"
                alt="..."
              />
            </div>
            <div className="">
              <h3>BOAT HOUSE</h3>
            </div>
          </div>
          <div className="col shadow card">
            <div className="p-  ">
              <img
                src="https://res.cloudinary.com/dalwduesr/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1685010396/photo_2023-05-25_11-34-27_tehpi4.jpg"
                className="card-img-top mt-3"
                alt="..."
              />
            </div>
            <div className="">
              <h3>NATURE PARK</h3>
            </div>
          </div>
          <div className="col shadow card">
            <div className="p- ">
              <img
                src="https://res.cloudinary.com/dalwduesr/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1685010396/photo_2023-05-25_11-34-21_cabrrd.jpg"
                className="card-img-top mt-3"
                alt="..."
              />
            </div>
            <div className="">
              <h3>Birds park</h3>
            </div>
          </div>
          <div className="col shadow card">
            <div className="p-  ">
              <img
                src="https://res.cloudinary.com/dalwduesr/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1685010397/photo_2023-05-25_11-34-06_yeponh.jpg"
                className="card-img-top mt-3"
                alt="..."
              />
            </div>
            <div className="">
              <h3>Temples</h3>
            </div>
          </div>
         
        
        </div>
        {/* <div className="row  position-relative row-cols-2 row-cols-lg-4 blt">
          <div className="col">
            <h3>Boat house </h3>
          </div>
          <div className="col">
            <h3>Nature park</h3>
          </div>
          <div className="col">
            <h3>Thrill valley</h3>
          </div>
          <div className="col">
            <h3>Birds park</h3>
          </div>
          <div className="col">
            <h3>Swamy malai</h3>
          </div>
          <div className="col">
            <h3>Jalagamparai hills</h3>
          </div>
        </div> */}
        <br />
        <br />
      
        <h1 className="text-center fw-bolder " id="gallery">
          OUR GALLERY
        </h1>
        <br />
        <br />
        <div className="row  position-relative row-cols-3 row-cols-lg-6 g-2 g-lg-3 roms ">
          <br />
          <br />
          <br />
          <br />
          {/* <div className="d-flex justify-content-between "> */}
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-2  bd-highlight">
            <img
              src="https://res.cloudinary.com/dalwduesr/image/upload/v1685078090/drm1_i1trhv.jpg"
              className="card-img-top"
              alt="..."
            />
          {/* </div>
          <div className="col bd-highlight"> */}
            <img
              src="https://res.cloudinary.com/dalwduesr/image/upload/v1685010398/photo_2023-05-25_11-34-10_q8kr5w.jpg"
              className="card-img-top"
              alt="..."
            />
             <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTEvl-XJuFYTXC9HVBUgxsnnkzHWCxaxa8zg&usqp=CAU"
            className="card-img-top"
            alt="..."
          />
          </div>
          <div className="col-lg-4 mb-4  mb-lg-0 bd-highlight">
            <img
              src="https://res.cloudinary.com/dalwduesr/image/upload/v1685078653/ydreams3_eiplxf.jpg"
              
              className="card-img-top mb-2"
              alt="..." 
            />
            
          {/* </div>
          <div className="col bd-highlight"> */}
            <img
              src="https://res.cloudinary.com/dalwduesr/image/upload/v1685078653/ydreams_riwhwb.jpg"
              className="card-img-top mb-2"
              alt="..."
            />
            <img
              src="https://res.cloudinary.com/dalwduesr/image/upload/v1685010397/photo_2023-05-25_11-34-15_qghj3a.jpg"
              className="card-img-top"
              alt="..."
            /> 
          
          </div>
          <div className="col-lg-4 mb-4 mb-lg-0 bd-highlight">
            <img
              src="https://res.cloudinary.com/dalwduesr/image/upload/v1685010397/photo_2023-05-25_11-34-15_qghj3a.jpg"
              className="card-img-top mb-3"
              alt="..."
            />
              <img
              src="https://res.cloudinary.com/dalwduesr/image/upload/v1685078653/ydreams2_prbfks.jpg"
              className="card-img-top mb-3"
              alt="..."
            />
          {/* </div>
          <div className="col bd-highlight"> */}
            <img
              src="https://res.cloudinary.com/dalwduesr/image/upload/v1685010395/photo_2023-05-25_11-34-34_fyroug.jpg"
              className="card-img-top mb-2"
              alt="..."
            />
             <img
              src="https://res.cloudinary.com/dalwduesr/image/upload/v1685010397/photo_2023-05-25_11-34-18_yn5kzd.jpg"
              className="card-img-top "
              alt="..."
            />
          </div>
          
        </div>
        
        
        {/* review page */}
        
        <div className="row align-items-end lijk">
          <h1 className="text-center fw-bolder" id="contact">
            CONTACT
          </h1>
          <br />
          <br />
          <br />
          <br />
          <div className="col align-items-end">
            <br />
            {/* <form action="" className="">
              <div>
                <label className="h1 " htmlFor="name">
                  Name
                </label>
                <br />
                <br />
                <input
                  className="in"
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  id="name"
                  required
                />
              </div>
              <br />
              <div>
                <label className="h1" htmlFor="">
                  E-mail
                </label>
                <br />
                <br />

                <input
                  className=" in"
                  type="email"
                  placeholder="Enter your E-mail"
                  name="email"
                  id="email"
                  required
                />
              </div>
              <br />
              <div>
                <label className="h1 " htmlFor="">
                  Feedback
                </label>
                <br />
                <br />
                <textarea
                  className="inp"
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Enter your Feedback"
                  required
                ></textarea>
              </div>
              <div>
                <label className="h1 " htmlFor="">
                  Message
                </label>
                <br />
                <br />
                <textarea
                  className="inp"
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <br />
              <br />
              <div>
                <button
                  className="send-btn hvr-bounce-to-left"
                  type="submit"
                  value="Send Message"
                >
                  Send Message
                </button>
              </div>
            </form> */}
            <form
              className=" row g-4 align-items-center"
              action="mailto:hatemylife001n@gmail.com" method="post" enctype="text/plain">

            
              <div>
                <label htmlFor="inputName4" className="h1 form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className=" form-control in ml-5"
                  id="inputName4"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="inputEmail4 in" className="h1 form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email "
                  className="form-control in"
                  id="inputemail4"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="h1 form-label "
                >
                  Feedback
                </label>
                <textarea
                  className="form-control inp"
                  name="message"
                  placeholder="@example:Everything was great at this hotel.. amazing staff that is friendly and makes customers feel welcome."
                  id="Textarea1"
                  rows={3}
                  required
                  defaultValue={""}
                />
              </div>
              <div>
                <button
                  type="submit"
                  name=""
                  className="btn  mb-3 send-btn hvr-bounce-to-left h-25"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* huhnjnb */}

        {/* jnknkjnkjnknk */}
      </div>
       <div className="row row-cols-1 text-end w-70">
        <div className="col-8 col-md-8 col-sm-6">
         <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3893.8035359003547!2d78.6366667!3d12.5951961!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3badab665013763b%3A0x91c05a975a7e608f!2sDreamsinn%20yelagiri!5e0!3m2!1sen!2sin!4v1684990278612!5m2!1sen!2sin"  allowFullScreen loading="lazy"  className="img-fluid" referrerPolicy="no-referrer-when-downgrade">
         </iframe>
        </div>
        <div className="col-4 col-md-4 col-sm-6 text-start  dream">
          <h1>Dreams Inn </h1>
          <p>yelagiri Kozzee Lanes,<br></br>
             Kottaiyur Forest Road,<br></br>
             Kottaiyur Village,<br></br>
             Tamil Nadu 635853</p>
        </div>
      </div> 
      
      
            <br></br>

      <Footer  />
    </>
  );
}

export default Sample;
