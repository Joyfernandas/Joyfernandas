import React from "react";
import "./Sample.css";

function Footer() {
  return (
    <>
      <div className="bgh bg-dark w-100">
        <div className="row bg-dark foot text-center">
          <div className="col">
            <h2>+91 9884768564</h2>
            <h3>sample@gmail.com</h3>
            <h5>Yelagiri hills</h5>
            <a
              href="https://wa.me/919884768564?text=Hi%20There!"
              className="float"
              style={{
                position: "fixed",
                width: 40,
                height: 40,
                bottom: 60,
                right: 110,
                color: "#fff",
                borderRadius: 50,
                textAlign: "center",
                cursor: "pointer",
                boxShadow: "2px 2px 3px #999",
              }}
            >
              <img
                className="wa bg-image hover-overlay hover-zoom hover-shadow ripple"
                src="https://trickuweb.com/whatsapp.png"
                alt="j"
                style={{ Height: 80, width: 80 }}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
