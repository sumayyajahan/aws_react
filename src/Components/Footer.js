import React from "react";

function Footer(props) {
  return (
    <div className="contact-me" id="contact">
      <h3 className="text-center slideanim">Contact Me</h3>
      <p className="text-center slideanim">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div className="container">
        <footer>
          <div className="row">
            <div className="col-md-6 slideanim">
              <div className="contact-details">
                <form action="#" method="post">
                  <div className="row">
                    <div className="col-sm-12 form-group">
                      <input
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Name"
                        type="text"
                        required
                      />
                    </div>
                    <div className="col-sm-12 form-group">
                      <input
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="email"
                        required
                      />
                    </div>
                  </div>
                  <textarea
                    className="form-control"
                    id="comments"
                    name="comments"
                    placeholder="Comment"
                    rows="5"
                  ></textarea>
                  <br />
                  <div className="row">
                    <div className="col-sm-12 form-group">
                      <button className="btn btn-default btn-lg" type="submit">
                        Send{" "}
                        <span className="glyphicon glyphicon-menu-right"></span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6 slideanim">
              <div className="contact-info">
                <h4>Contact Info</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="footer-info">
                  <div>
                    <i className="glyphicon glyphicon-globe"></i>
                    <p className="p1">77 Jack Street</p>
                    <p className="p2">Chicago, USA</p>
                  </div>
                  <div>
                    <i className="glyphicon glyphicon-phone-alt"></i>
                    <p className="p1">+1 515 151515</p>
                    <p className="p2">+00 1010101010</p>
                  </div>
                  <div>
                    <i className="glyphicon glyphicon-envelope"></i>
                    <p className="p1">
                      <a href="mailto:myemail@something.com">
                        myemail1@example.com
                      </a>
                    </p>
                    <p className="p2">
                      <a href="mailto:myemail@nothing.com">
                        myemail2@example.com
                      </a>
                    </p>
                  </div>
                </div>
                <h5>Personal Profile</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="copyright">
            <p className="text-center">
              © 2016 My Profile. All Rights Reserved | Design by{" "}
              <a href="http://w3layouts.com">W3layouts</a>
            </p>
          </div>
          <a href="#myPage" title="To Top">
            <span className="glyphicon glyphicon-chevron-up"></span>
          </a>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
