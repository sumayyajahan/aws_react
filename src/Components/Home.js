import React from "react";
//import manImage from "./images/man.jpg";

function Home(props) {
  return (
    <div>
      <div className="about-me" id="about">
        <h3 className="text-center slideanim">About My Skills</h3>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xs-12">
              <div className="mydetails slideanim text-center">
                <img
                  src="images/man.jpg"
                  className="img-circle img-responsive"
                  alt="Generic placeholder image"
                  width="200"
                  height="200"
                />
                <h3>Tzar Nicholas</h3>
                <p>Web Designer</p>
                <div className="social-icons">
                  <a href="#">
                    <span className="facebook"></span>
                  </a>
                  <a href="#">
                    <span className="twitter"></span>
                  </a>
                  <a href="#">
                    <span className="linkedin"></span>
                  </a>
                  <a href="#">
                    <span className="googleplus"></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-xs-12">
              <div className="myskills slideanim">
                <h3 className="text-center">My Skill Info</h3>
                <p className="skill-text">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
                <div className="skill-info">
                  <div className="table-responsive">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>
                            <h4>Photoshop</h4>
                          </td>
                          <td>
                            <span className="longline1"></span>
                            <span className="shortline1"></span>
                          </td>
                          <td>
                            <p>89%</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h4>Multimedia</h4>
                          </td>
                          <td>
                            <span className="longline2"></span>
                            <span className="shortline2"></span>
                          </td>
                          <td>
                            <p>90%</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h4>After-Effects</h4>
                          </td>
                          <td>
                            <span className="longline3"></span>
                            <span className="shortline3"></span>
                          </td>
                          <td>
                            <p>95%</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h4>Wordpress</h4>
                          </td>
                          <td>
                            <span className="longline4"></span>
                            <span className="shortline4"></span>
                          </td>
                          <td>
                            <p>92%</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h4>HTML5</h4>
                          </td>
                          <td>
                            <span className="longline5"></span>
                            <span className="shortline5"></span>
                          </td>
                          <td>
                            <p>96%</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="myportfolio" id="portfolio">
        <h3 class="text-center slideanim">My Portfolio</h3>
        <p class="text-center slideanim">
          My Recent Projects , Just "Click" on them to know More.
        </p>
        <section class="vertical" id="grid3d">
          <div class="grid-wrap">
            <div class="grid">
              <figure>
                <img class="slideanim" src="images/1.jpg" alt="img01" />
              </figure>
              <figure>
                <img class="slideanim" src="images/2.jpg" alt="img05" />
              </figure>
              <figure>
                <img class="slideanim" src="images/3.jpg" alt="img08" />
              </figure>
              <figure>
                <img class="slideanim" src="images/4.jpg" alt="img02" />
              </figure>
              <figure>
                <img class="slideanim" src="images/5.jpg" alt="img04" />
              </figure>
              <figure>
                <img class="slideanim" src="images/6.jpg" alt="img03" />
              </figure>
              <figure>
                <img class="slideanim" src="images/7.jpg" alt="img09" />
              </figure>
              <figure>
                <img class="slideanim" src="images/8.jpg" alt="img06" />
              </figure>
              <figure>
                <img class="slideanim" src="images/9.jpg" alt="img07" />
              </figure>
            </div>
          </div>
          <div class="content">
            <div>
              <div class="content-img">
                <img
                  src="images/1-1.jpg"
                  class="img-responsive"
                  alt="my projects"
                />
              </div>
              <h3 class="content-text">Classy Coming Soon</h3>
              <p class="content-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div>
              <div class="content-img">
                <img
                  src="images/2-2.jpg"
                  class="img-responsive"
                  alt="my projects"
                />
              </div>
              <h3 class="content-text">404 Error Page</h3>
              <p class="content-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div>
              <div class="content-img">
                <img
                  src="images/3-3.jpg"
                  class="img-responsive"
                  alt="my projects"
                />
              </div>
              <h3 class="content-text">Credit Card Validation</h3>
              <p class="content-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div>
              <div class="content-img">
                <img
                  src="images/4-4.jpg"
                  class="img-responsive"
                  alt="my projects"
                />
              </div>
              <h3 class="content-text">Eshop Product Detail Widget</h3>
              <p class="content-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div>
              <div class="content-img">
                <img
                  src="images/5-5.jpg"
                  class="img-responsive"
                  alt="my projects"
                />
              </div>
              <h3 class="content-text">Model Profile Widget</h3>
              <p class="content-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div>
              <div class="content-img">
                <img
                  src="images/6-6.jpg"
                  class="img-responsive"
                  alt="my projects"
                />
              </div>
              <h3 class="content-text">Flat Under Construction</h3>
              <p class="content-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div>
              <div class="content-img">
                <img
                  src="images/7-7.jpg"
                  class="img-responsive"
                  alt="my projects"
                />
              </div>
              <h3 class="content-text">Impressive Under Construction</h3>
              <p class="content-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div>
              <div class="content-img">
                <img
                  src="images/8-8.jpg"
                  class="img-responsive"
                  alt="my projects"
                />
              </div>
              <h3 class="content-text">Profile Widget</h3>
              <p class="content-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div>
              <div class="content-img">
                <img
                  src="images/9-9.jpg"
                  class="img-responsive"
                  alt="my projects"
                />
              </div>
              <h3 class="content-text">Travel Reservation Widget</h3>
              <p class="content-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <span class="loading"></span>
            <span class="icon close-content"></span>
          </div>
        </section>
      </div>
      <div class="mygallery" id="gallery">
        <h3 class="text-center slideanim">My Gallery</h3>
        <div class="text-center">
          <a href="images/me1-1.jpg" title="My Image Gallery">
            <img
              src="images/me1.jpg"
              alt="example-1"
              class="img-responsive slideanim"
            />
          </a>
          <a href="images/me2-2.jpg" title="My Image Gallery">
            <img
              src="images/me2.jpg"
              alt="example-2"
              class="img-responsive slideanim"
            />
          </a>
          <a href="images/me3-3.jpg" title="My Image Gallery">
            <img
              src="images/me3.jpg"
              alt="example-3"
              class="img-responsive slideanim"
            />
          </a>
          <a href="images/me4-4.jpg" title="My Image Gallery">
            <img
              src="images/me4.jpg"
              alt="example-3"
              class="img-responsive slideanim"
            />
          </a>
          <a href="images/me5-5.jpg" title="My Image Gallery">
            <img
              src="images/me5.jpg"
              alt="example-3"
              class="img-responsive slideanim"
            />
          </a>
          <a href="images/me6-6.jpg" title="My Image Gallery">
            <img
              src="images/me6.jpg"
              alt="example-3"
              class="img-responsive slideanim"
            />
          </a>
          <a href="images/me7-7.jpg" title="My Image Gallery">
            <img
              src="images/me7.jpg"
              alt="example-3"
              class="img-responsive slideanim"
            />
          </a>
          <a href="images/me8-8.jpg" title="My Image Gallery">
            <img
              src="images/me8.jpg"
              alt="example-3"
              class="img-responsive slideanim"
            />
          </a>
          <a href="images/me9-9.jpg" title="My Image Gallery">
            <img
              src="images/me9.jpg"
              alt="example-3"
              class="img-responsive slideanim"
            />
          </a>
          <a href="images/me10-10.jpg" title="My Image Gallery">
            <img
              src="images/me10.jpg"
              alt="example-3"
              class="img-responsive slideanim"
            />
          </a>
          <a href="images/me11-11.jpg" title="My Image Gallery">
            <img
              src="images/me11.jpg"
              alt="example-3"
              class="img-responsive slideanim"
            />
          </a>
          <a href="images/me12-12.jpg" title="My Image Gallery">
            <img
              src="images/me12.jpg"
              alt="example-3"
              class="img-responsive slideanim"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
