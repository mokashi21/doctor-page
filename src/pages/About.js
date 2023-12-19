import React from "react";
// import derma from "../images/Dermatology.png";
// import menopause from "../images/menopasue.png";
// import infertility from "../images/infertility.png";
// import pregnancy from "../images/pregnancy.png";
// import bladder from "../images/bladder.png";
// import midWif from "../images/midWif.png";
// import mentalWeb from "../images/mentalweb.png";
// import sexualHealth from "../images/sexualh.png";

import CountUp from "react-countup";
import Fade from "react-reveal/Fade";
import { useNavigate } from "react-router-dom";

function About() {
  const dispatch = useNavigate();
  const handleBook = () => {
    dispatch("/booking-slot-ladycare-clinic");
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          data-aos="fade-right"
          className="col-lg-8 col-sm-12 col-md-6 mt-5  "
        >
          <div class="mt-5">
            <img
              src="https://images.unsplash.com/photo-1674049406176-021807a2802e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8ZmVtYWxlLGRvY3Rvcnx8fHx8fDE3MDA0MDUwNTY&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1800"
              alt=""
              className="w-50 h-100 rounded"
            />
            <h2
              className="mt-3 text-center"
              style={{
                fontFamily: "serif",
                fontWeight: 300,
                wordSpacing: 5,
                color: "#27115f",
                textShadow: "0px 0px 10px #fff",
              }}
            >
              Dr. Swatika Kumari
            </h2>
            <p
              className="text-center mb-4"
              style={{
                color: "#c11574",
              }}
            >
              M.B.B.S, DGO & DNO- Gyn @ Pune
            </p>
          </div>
        </div>
        <div className="col-lg-12 mt-3" style={{ backgroundColor: "#EBF8FF" }}>
          <div className="container">
            <div className="d-flex justify-content-around">
              <p
                className="display-4"
                style={{
                  marginLeft: 10,
                  fontSize: "2rem", // Adjusted font size for better responsiveness
                  color: "#c11574",
                  marginTop: 10,
                }}
              >
                Specialization & Expertise
              </p>
            </div>
            <div
              data-aos="zoom-in"
              className="mt-2 p-3 p-md-5" // Adjusted padding for different screen sizes
              style={{
                color: "#27115f",
                fontWeight: 300,
              }}
            >
              <ul>
                <li>Gynaecological Endoscopy (Laparoscopy & Hysteroscopy)</li>
                <li>
                  Hysteroscopic polyectomy, Myomectomy, Synechiotomy Canulation
                  of tube
                </li>
                <li>
                  Endoscopic management in infertility & Minimal invasive
                  surgery in gynaecological procedures.
                </li>
                <li>
                  Laparoscopic hysterectomy, ovarian cystectomy, salpingectomy &
                  Ectopic pregnancy, surgery for endometriosis, adhesiolysis.
                </li>
                <li>
                  All gynaecological procedures - Abdominal Hysterectomy,
                  laparotomy
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-12 mt-5">
          <div className=" mb-3">
            <h3
              className=""
              style={{
                fontWeight: 300,
                marginLeft: 15,
                color: "#27115f",
              }}
            >
              Attached Hospitals
            </h3>
            <img
              src="https://images.unsplash.com/photo-1580720303302-45fab288b88b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8aG9zcGl0YWxzLGNsaW5pY3MsZG9jdG9yc3x8fHx8fDE3MDA0MTYwMjQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1800"
              alt=""
              className="w-100 p-4 rounded"
            />
          </div>
          <div
            className=" mt-3"
            style={{
              fontSize: "1rem",
              fontWeight: 300,
              color: "#27115f",
            }}
          >
            <div className="d-flex flex-column flex-lg-row justify-content-around">
              <div className="mb-3">
                <ul>
                  <li>Ruby Hospital</li>
                  <hr className="my-1" />
                  <li>ABC Hospital</li>
                  <hr className="my-1" />
                  <li>Lorem ipsum dolor sit amet. Hospital</li>
                  <hr className="my-1" />
                </ul>
              </div>
              <div>
                <ul>
                  <li>Lorem, ipsum dolor. Hospital</li>
                  <hr className="my-1" />
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing. Hospital
                  </li>
                  <hr className="my-1" />
                  <li>Lorem ipsum dolor sit amet. Hospital</li>
                  <hr className="my-1" />
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Countup */}
        <div
          className="container mt-3"
          style={{ backgroundColor: "#EBF8FF", maxHeight: "30em" }}
        >
          <div className="p-2 d-flex flex-wrap justify-content-around">
            <div className="p-3 text-center mb-3">
              <div style={{ fontSize: "2rem", color: "#c11574" }}>
                <CountUp end={12} duration={5} enableScrollSpy={true} />
                <span>+</span>
              </div>
              <h4>Years With You</h4>
            </div>
            <div className="p-3 text-center mb-3">
              <div style={{ fontSize: "2rem", color: "#c11574" }}>
                <CountUp end={70} duration={5} enableScrollSpy={true} />
                <span>+</span>
              </div>
              <h4>Successful Delivery</h4>
            </div>
            <div className="p-3 text-center mb-3">
              <div style={{ fontSize: "2rem", color: "#c11574" }}>
                <CountUp end={1800} duration={5} enableScrollSpy={true} />
                <span>+</span>
              </div>
              <h4>More than Patients</h4>
            </div>
          </div>
        </div>

        {/* memmbership */}
        <Fade left>
          <div className="col-lg-12 p-5 mt-5">
            <div style={{ fontWeight: "lighter", color: "#27115f" }}>
              <h2>Memberships</h2>
              <hr />
              <ul className="list-unstyled">
                <li>
                  International Society of Gynaecological Endoscopy (ISGE)
                </li>
                <hr />
              </ul>
              <ul className="list-unstyled">
                <li>
                  National Association of Voluntary Sterilization and Family
                  Welfare of India (NAVSFWI)
                  <hr />
                </li>
              </ul>
              <ul className="list-unstyled">
                <li>Delhi Gynaecological Endoscopy Society (DGES)</li>
                <hr />
              </ul>
              <ul className="list-unstyled">
                <li>
                  Association of Obstetricians & Gynaecologists of India (AOGD)
                  <hr />
                </li>
              </ul>
              <ul className="list-unstyled">
                <li>
                  Federation of International Obstetrics & Gynaecological
                  Society of India (FOGSI)
                  <hr />
                </li>
              </ul>
            </div>
          </div>
        </Fade>
        <div className="text-center mt-5">
          <p
            style={{
              color: "#c11574",
              fontWeight: 300,
            }}
          >
            Click here to book
          </p>
          <hr
            className="mx-auto"
            style={{
              maxWidth: "80%",
            }}
          />
          <button
            className="btn btn-primary px-4 py-2 rounded"
            style={{
              fontSize: "clamp(1.5rem, 1vw, 2.5rem)",
            }}
            onClick={handleBook}
          >
            Consult
          </button>
        </div>
        <div
          class="container"
          style={{
            marginTop: 60,
            padding: 50,
          }}
        >
          <div
            class="row"
            style={{
              marginBottom: 50,
            }}
          >
            <div className="col-lg-5">
              <h6 className="ml-4" style={{ color: "#27155f" }}>
                REVIEWS
              </h6>
              <br />
              <h2
                style={{ fontSize: "2rem", color: "#27155f", marginLeft: 20 }}
              >
                See what our patients are saying
              </h2>
              <br />
              <div className="d-flex justify-content-between">
                <h5
                  className="p-3"
                  style={{ color: "#27115f", marginLeft: 20 }}
                >
                  4.90 rating
                </h5>
                <span
                  className="p-3"
                  style={{ fontSize: "0.9rem", color: "#27115f" }}
                >
                  based on 23K+ reviews
                </span>{" "}
              </div>
              <a
                href="/"
                style={{
                  color: "#c11574",
                  marginLeft: 20, // Adjusted margin for better alignment
                  marginTop: 3, // Adjusted margin for better alignment
                  display: "block", // Ensures the entire width is clickable
                }}
              >
                More Testimonials
              </a>
              <img
                className="w-25 mt-5" // Adjusted width for responsiveness
                src="https://narihealth.tanshcreative.com/wp-content/uploads/2023/09/hand-drawn-arrow1.png"
                alt=""
                style={{
                  marginLeft: 20, // Adjusted margin for better alignment
                  maxWidth: "100%", // Ensures the image does not exceed its container width
                }}
              />
            </div>

            <div className="col-lg-7">
              <div className="container mt-5">
                <div
                  id="myCarousel"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div
                    className="carousel-inner"
                    style={{
                      backgroundColor: "#EBF8FF",
                      minHeight: 350,
                      borderRadius: 30,
                    }}
                  >
                    <div className="carousel-item active">
                      <div className="d-flex flex-column">
                        <div>
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/11447/11447211.png"
                            className=""
                            style={{
                              width: 30,
                              marginTop: 40,
                              marginLeft: 10,
                            }}
                            alt="Slide 1"
                          />
                          <h5
                            style={{
                              marginLeft: 30,
                              fontFamily: "sans-serif",
                              fontWeight: "bold",
                              color: "#27115f",
                            }}
                          >
                            Kavita Patil, Pune
                            <img
                              src="https://cdn-icons-png.flaticon.com/128/10801/10801392.png"
                              alt=""
                              style={{
                                width: 80,
                              }}
                            />
                          </h5>
                        </div>
                        <div
                          style={{
                            marginLeft: 15,
                          }}
                        >
                          <p
                            className="p-2"
                            style={{
                              color: "#27115f",
                              fontWeight: 300,
                              fontSize: "1rem",
                              maxWidth: 800,
                            }}
                          >
                            As someone dealing with a chronic women’s health
                            issue, I’ve relied on the Women’s Health Clinic for
                            ongoing support and treatment. The team has been a
                            lifeline for me, offering not only medical expertise
                            but also emotional support. They’ve truly improved
                            my quality of life.
                          </p>
                          <img
                            src="https://narihealth.tanshcreative.com/wp-content/uploads/2023/10/google-logo.png"
                            alt=""
                          />
                          <h4
                            style={{
                              marginTop: 5,
                              color: "#27155f",
                            }}
                          >
                            Posted on Google
                          </h4>
                          <p
                            style={{
                              marginTop: 5,
                              color: "#c11574",
                            }}
                          >
                            March 21, 2023
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item ">
                      <div className="d-flex flex-column">
                        <div>
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/11447/11447211.png"
                            className=""
                            style={{
                              width: 30,
                              marginTop: 40,
                              marginLeft: 10,
                            }}
                            alt="Slide 1"
                          />
                          <h5
                            style={{
                              marginLeft: 30,
                              fontFamily: "sans-serif",
                              fontWeight: "bold",
                              color: "#27115f",
                            }}
                          >
                            Saba Khan, Pune
                            <img
                              src="https://cdn-icons-png.flaticon.com/128/10801/10801392.png"
                              alt=""
                              style={{
                                width: 80,
                              }}
                            />
                          </h5>
                        </div>
                        <div
                          style={{
                            marginLeft: 15,
                          }}
                        >
                          <p
                            className="p-2"
                            style={{
                              color: "#27115f",
                              fontWeight: 300,
                              fontSize: "1rem",
                              maxWidth: 800,
                            }}
                          >
                            As someone dealing with a chronic women’s health
                            issue, I’ve relied on the Women’s Health Clinic for
                            ongoing support and treatment. The team has been a
                            lifeline for me, offering not only medical expertise
                            but also emotional support. They’ve truly improved
                            my quality of life.
                          </p>
                          <img
                            src="https://narihealth.tanshcreative.com/wp-content/uploads/2023/10/google-logo.png"
                            alt=""
                          />
                          <h4
                            style={{
                              marginTop: 5,
                              color: "#27155f",
                            }}
                          >
                            Posted on Google
                          </h4>
                          <p
                            style={{
                              marginTop: 5,
                              color: "#c11574",
                            }}
                          >
                            june 21, 2023
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item ">
                      <div className="d-flex flex-column">
                        <div>
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/11447/11447211.png"
                            className=""
                            style={{
                              width: 30,
                              marginTop: 40,
                              marginLeft: 10,
                            }}
                            alt="Slide 1"
                          />
                          <h5
                            style={{
                              marginLeft: 30,
                              fontFamily: "sans-serif",
                              fontWeight: "bold",
                              color: "#27115f",
                            }}
                          >
                            Nilam kulkarni, Pune
                            <img
                              src="https://cdn-icons-png.flaticon.com/128/10801/10801392.png"
                              alt=""
                              style={{
                                width: 80,
                              }}
                            />
                          </h5>
                        </div>
                        <div
                          style={{
                            marginLeft: 15,
                          }}
                        >
                          <p
                            className="p-2"
                            style={{
                              color: "#27115f",
                              fontWeight: 300,
                              fontSize: "1rem",
                              maxWidth: 800,
                            }}
                          >
                            As someone dealing with a chronic women’s health
                            issue, I’ve relied on the Women’s Health Clinic for
                            ongoing support and treatment. The team has been a
                            lifeline for me, offering not only medical expertise
                            but also emotional support. They’ve truly improved
                            my quality of life.
                          </p>
                          <img
                            src="https://narihealth.tanshcreative.com/wp-content/uploads/2023/10/google-logo.png"
                            alt=""
                          />
                          <h4
                            style={{
                              marginTop: 5,
                              color: "#27155f",
                            }}
                          >
                            Posted on Google
                          </h4>
                          <p
                            style={{
                              marginTop: 5,
                              color: "#c11574",
                            }}
                          >
                            Feb 1, 2021
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#myCarousel"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only"></span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#myCarousel"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only"></span>
                  </a>
                </div>
              </div>
            </div>
            <br />
          </div>
          <br />
        </div>
        {/* Form */}
        <div className="d-flex flex-row">
          <div className="col-lg-5 offset-lg-1 w-100 mt-5">
            <h4 className="text-primary">Opening Hours</h4>
            <div className="mt-4">
              <ul className="list-unstyled">
                <li className="text-secondary">
                  Monday to Saturday : 10.00am - 01.30pm & 06.00pm - 10.00pm
                </li>
                <li className="text-danger">Sunday : Off</li>
              </ul>
            </div>
            <hr />
          </div>
        </div>
        <div class="">
          <div
            class="  mt-5 rounded "
            style={{
              backgroundColor: "#27115f",
            }}
          >
            <div class="row">
              <div class="col-md-6">
                <div
                  class="d-flex flex-column align-items-center text-center"
                  style={{
                    marginTop: "clamp(3rem, 10vw, 6rem)",
                    marginLeft: "clamp(10px, 5vw, 10px)",
                  }}
                >
                  <img
                    src="https://narihealth.tanshcreative.com/wp-content/uploads/2023/09/logo-light.png"
                    alt=""
                    class="w-50"
                  />
                  <p
                    class="text-white p-2 mt-3"
                    style={{
                      fontWeight: "lighter",
                    }}
                  >
                    Empowering Her Health. Every Step of the Way
                  </p>
                  <h5 class="text-secondary mt-5 ">Services Lines</h5>
                  <div
                    class="d-flex flex-wrap justify-content-around align-items-center"
                    style={{
                      wordSpacing: "clamp(2px, 1vw, 5px)",
                      marginTop: "clamp(2rem, 5vw, 4rem)",
                      padding: "15px",
                    }}
                  >
                    <div
                      style={{
                        flex: "1",
                        maxWidth: "300px",
                        textAlign: "center",
                      }}
                    >
                      <a
                        class="text-white"
                        href="/gyncology"
                        style={{
                          display: "block",
                          marginBottom: "clamp(20px, 5vw, 40px)",
                          fontSize: "18px",
                          fontFamily: "Arial, sans-serif",
                          letterSpacing: "1px",
                          fontWeight: "bold",
                          textDecoration: "none",
                        }}
                      >
                        Gynecology
                      </a>
                      <a
                        class="text-white"
                        href="/dermatology"
                        style={{
                          display: "block",
                          marginBottom: "clamp(20px, 5vw, 40px)",
                          fontSize: "18px",
                          fontFamily: "Arial, sans-serif",
                          letterSpacing: "1px",
                          fontWeight: "bold",
                          textDecoration: "none",
                        }}
                      >
                        Dermatology
                      </a>
                      <a
                        class="text-white"
                        href="/preventive-care"
                        style={{
                          display: "block",
                          marginBottom: "clamp(20px, 5vw, 40px)",
                          fontSize: "18px",
                          fontFamily: "Arial, sans-serif",
                          letterSpacing: "1px",
                          fontWeight: "bold",
                          textDecoration: "none",
                        }}
                      >
                        Preventive Care
                      </a>
                      <a
                        class="text-white"
                        href="/surgery"
                        style={{
                          display: "block",
                          marginBottom: "clamp(20px, 5vw, 40px)",
                          fontSize: "18px",
                          fontFamily: "Arial, sans-serif",
                          letterSpacing: "1px",
                          fontWeight: "bold",
                          textDecoration: "none",
                        }}
                      >
                        Surgery
                      </a>
                    </div>
                    <div
                      style={{
                        flex: "1",
                        maxWidth: "300px",
                        textAlign: "center",
                      }}
                    >
                      <a
                        class="text-white"
                        href="/pregnancy"
                        style={{
                          display: "block",
                          marginBottom: "clamp(20px, 50vw, 40px)",
                          fontSize: "18px",
                          fontFamily: "Arial, sans-serif",
                          letterSpacing: "1px",
                          fontWeight: "bold",
                          textDecoration: "none",
                        }}
                      >
                        Pregnancy
                      </a>
                      <a
                        class="text-white"
                        href="/obesity"
                        style={{
                          display: "block",
                          marginBottom: "clamp(20px, 5vw, 40px)",
                          fontSize: "18px",
                          fontFamily: "Arial, sans-serif",
                          letterSpacing: "1px",
                          fontWeight: "bold",
                          textDecoration: "none",
                        }}
                      >
                        Obstetrics
                      </a>
                      <a
                        class="text-white"
                        href="/mental-wellbeing"
                        style={{
                          display: "block",
                          marginBottom: "clamp(10px, 5vw, 40px)",
                          fontSize: "18px",
                          fontFamily: "Arial, sans-serif",
                          letterSpacing: "1px",
                          fontWeight: "bold",
                          textDecoration: "none",
                        }}
                      >
                        Mental Wellbeing
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div
                  className="d-flex flex-column align-items-center text-center"
                  style={{
                    marginTop: "clamp(3rem, 10vw, 6rem)",
                    marginLeft: "clamp(10px, 5vw, 180px)",
                  }}
                >
                  <div style={{ marginBottom: "1rem" }}>
                    <button
                      className="btn btn-lg d-flex flex-row"
                      style={{
                        backgroundColor: "#c11574",
                        width: "100%",
                        maxWidth: "260px",
                        height: "70px",
                      }}
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/12506/12506000.png"
                        alt=""
                        style={{ width: "40px", marginTop: "5px" }}
                      />
                      <div className="ms-3">
                        <h6 className="text-white" style={{ fontSize: "15px" }}>
                          Give us a call
                        </h6>
                        <h2 className="text-white" style={{ fontSize: "18px" }}>
                          123-456-0000
                        </h2>
                      </div>
                    </button>
                  </div>
                  <div>
                    <button
                      className="btn btn-lg d-flex flex-row"
                      style={{
                        backgroundColor: "#c11574",
                        width: "100%",
                        maxWidth: "260px",
                        height: "70px",
                      }}
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/9068/9068642.png"
                        alt=""
                        style={{ width: "40px", marginTop: "5px" }}
                      />
                      <div className="ms-3">
                        <h6 className="text-white" style={{ fontSize: "15px" }}>
                          Send Message
                        </h6>
                        <h2
                          className="text-white"
                          style={{ fontSize: "18px", marginLeft: "20px" }}
                        >
                          hello@example.com
                        </h2>
                      </div>
                    </button>
                  </div>
                </div>
                <div
                  className="d-flex flex-column "
                  style={{
                    marginTop: "clamp(3rem, 10vw, 6rem)",
                  }}
                >
                  <h5 className="text-secondary mt-5 text-center ">
                    Our Locations
                  </h5>
                  <div
                    className="d-flex flex-wrap justify-content-around mt-3"
                    style={{
                      marginLeft: "clamp(30px, 5vw, 30px)",
                    }}
                  >
                    <div className="mt-3">
                      <h3 className="text-white">Pune</h3>
                      <p
                        className="text-white mt-3 "
                        style={{
                          fontSize: "clamp(12px, 2vw, 16px)",
                          fontWeight: 300,
                        }}
                      >
                        02, Abc Housing Society, Near Main Chowk Pune
                        <p className="text-white">phone: 9090129090</p>
                      </p>
                      <p className="mt-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="26"
                          fill="currentColor"
                          className="bi bi-pin-map-fill"
                          viewBox="0 0 16 16"
                          color="white"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"
                          />
                          <path
                            fillRule="evenodd"
                            d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"
                          />
                        </svg>
                        <span className="text-white p-3">View Map</span>
                      </p>
                    </div>
                    <div className="mt-3">
                      <h3 className="text-white">Pune</h3>
                      <p
                        className="text-white mt-3 "
                        style={{
                          fontSize: "clamp(12px, 2vw, 16px)",
                          fontWeight: 300,
                        }}
                      >
                        02, Abc Housing Society, Near Main Chowk Pune
                        <p className="text-white">phone: 9090129090</p>
                      </p>
                      <p className="mt-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="26"
                          fill="currentColor"
                          className="bi bi-pin-map-fill"
                          viewBox="0 0 16 16"
                          color="white"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"
                          />
                          <path
                            fillRule="evenodd"
                            d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"
                          />
                        </svg>
                        <span className="text-white p-3">View Map</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr class="text-secondary" />
            <div className="row">
              <div className="col-md-6">
                <div
                  className="d-flex flex-row justify-content-around align-items-center"
                  style={{
                    maxWidth: "clamp(300px, 30vw, 650px)",
                  }}
                >
                  <div className="d-flex justify-content-evenly w-50">
                    <a href="/" className="text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        fill="currentColor"
                        className="bi bi-whatsapp"
                        viewBox="0 0 16 16"
                        color="#fff"
                      >
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                      </svg>
                    </a>
                    <a href="/" className="text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        fill="currentColor"
                        className="bi bi-facebook"
                        viewBox="0 0 16 16"
                        color=" #fff"
                      >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg>
                    </a>
                  </div>
                  <div className="mt-1">
                    <p
                      className="text-white"
                      style={{ fontSize: "clamp(12px, 2vw, 16px)" }}
                    >
                      © ladycare clinic 2023.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
