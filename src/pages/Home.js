import React from "react";
import First from "../images/First.jpeg";
import second from "../images/second.jpeg";
import third from "../images/third.jpeg";
import miniFirst from "../images/miniFirst.jpeg";
import minisecond from "../images/miniSecond.jpeg";
import minithird from "../images/miniThird.jpeg";
import demoP from "../images/Demo.png";
import derma from "../images/Dermatology.png";
import menopause from "../images/menopasue.png";
import infertility from "../images/infertility.png";
import pregnancy from "../images/pregnancy.png";
import bladder from "../images/bladder.png";
import midWif from "../images/midWif.png";
import mentalWeb from "../images/mentalweb.png";
import sexualHealth from "../images/sexualh.png";
import experts from "../images/Ex1.png";
import "./Home.css";
import Fade from "react-reveal/Fade";
import RubberBand from "react-reveal/RubberBand";
import mainLogo from "../images/FLogo.png";
import Contact from "./Contact";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleBook = () => {
    navigate("/booking-slot-ladycare-clinic");
  };
  return (
    <div class=" container-fluid  ">
      <div class="row  ">
        <div class="container">
          <Fade left>
            <div
              id="carouselExampleIndicators"
              className="  carousel slide mt-5 pt-5 "
              data-bs-ride="carousel"
            >
              <div className="carousel-inner  ">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100 img-fluid"
                    src={First}
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100 img-fluid"
                    src={second}
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100 img-fluid"
                    src={third}
                    alt="Third slide"
                  />
                </div>
              </div>
            </div>
          </Fade>
        </div>

        {/*  */}
        <br />
        <div class="container mt-4">
          <div class="row">
            <div class="col-md-6">
              <img
                src="https://narihealth.tanshcreative.com/wp-content/uploads/2023/10/img-3.jpg"
                alt=""
                class="img-fluid"
              />
            </div>

            <div class="col-md-6">
              <Fade left>
                {" "}
                <h6
                  style={{
                    marginLeft: 20,
                    marginTop: 20,
                    color: "#27115f",
                  }}
                >
                  About Lady Care Clinic
                </h6>{" "}
              </Fade>
              <Fade left>
                <h2
                  style={{
                    marginTop: 40,
                    color: "#27115f",
                    fontSize: 30,
                    marginLeft: 16,
                  }}
                >
                  We're committed to your <br /> health and well-being
                </h2>
              </Fade>
              <Fade left>
                <p
                  class=""
                  style={{
                    marginTop: 40,
                    color: "#27115f",
                    marginLeft: 40,
                    wordSpacing: 7,
                  }}
                >
                  We are dedicated to providing comprehensive healthcare
                  services tailored specifically to address the unique needs of
                  women. Our clinics are committed to promoting and safeguarding
                  women’s health at every stage of life. Our team of experienced
                  healthcare professionals specializes in a wide range of
                  women’s health issues, from routine check-ups and preventive
                  care to specialized treatments and interventions. We
                  understand that women’s health encompasses not only physical
                  well-being but also emotional and mental health. That’s why we
                  offer a holistic approach to healthcare that emphasizes
                  education, prevention, and personalized care.
                </p>
              </Fade>
              <div>
                <button
                  type="button"
                  className="btn btn-white btn-lg opacity-100 "
                  style={{
                    color: "#fff",
                    backgroundColor: "#27115f",
                    marginTop: 40,
                    marginLeft: 40,
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div
          data-aos="fade-zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <div class="container">
            <div class="row">
              <div class="col-md-12 mt-5 text-center">
                <Fade left>
                  <h3
                    class="w-75"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "clamp(1.8rem, 4vw, 2.3rem)",
                      letterSpacing: "1.2px",
                      fontWeight: 200,
                      color: "#27115f",
                      margin: "0 auto", // Center the text
                      maxWidth: "600px", // Limit the maximum width
                    }}
                  >
                    “Our mission is to empower women to take control of their
                    health, making informed decisions that lead to happier,
                    healthier lives.”
                  </h3>
                </Fade>

                <h5
                  className="mt-5"
                  style={{
                    color: "#27115f",
                    fontSize: "clamp(1rem, 2vw, 1.5rem)",
                  }}
                >
                  Dr. Swatika Kumari, MBBS - Gyn
                </h5>
                <div
                  class="bg-danger mt-5 mb-3"
                  style={{
                    height: "2px",
                    backgroundColor: "pink",
                    width: "50%", // Adjust the width as needed
                    margin: "0 auto", // Center the div
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="">
          <div className="">
            <Fade left>
              <div className="col-md-12 col-sm-12">
                <h5
                  className=" fs-8 text-decoration-line text-center mt-4 "
                  style={{
                    color: "#27115f",
                  }}
                >
                  Our Services
                </h5>
                <h2
                  className="fs-12 text-center w-100 "
                  style={{
                    color: "#27115f",
                  }}
                >
                  Services and Treatments
                </h2>
              </div>
            </Fade>
          </div>
        </div>
        {/* mini carosel */}
        <div class="container">
          <div
            class="row p-3"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {/* 1st Card */}

            <div
              class="col-lg-4 col-md-6 mb-3"
              style={{
                maxWidth: "420px",
              }}
            >
              <div class="card">
                <img
                  class="bg-image hover-zoom"
                  src={miniFirst}
                  alt=""
                  style={{
                    cursor: "pointer",
                    transition: "transform 0.3s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(0.990)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
                <div class="card-body">
                  <h3
                    class="card-title"
                    style={{
                      color: "#27115f",
                      marginLeft: "40px",
                      fontSize: "35px",
                    }}
                  >
                    <Fade left>Gynecology</Fade>
                  </h3>
                  <p
                    class="card-text"
                    style={{
                      color: "#27115f",
                      marginLeft: "40px",
                      wordSpacing: "5px",
                      fontWeight: 300,
                    }}
                  >
                    <Fade right>
                      Gynecologists diagnose and manage various gynecological
                      conditions such as menstrual disorders, endometriosis, and
                      infections.
                    </Fade>
                  </p>
                  <a
                    href="/gyncology"
                    class="text-danger mt-3"
                    style={{
                      marginLeft: "40px",
                    }}
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            {/* 2nd Card */}

            <div
              class="col-lg-4 col-md-6 mb-3"
              style={{
                maxWidth: "420px",
              }}
            >
              <div class="card">
                <img
                  src={minisecond}
                  alt=""
                  style={{
                    cursor: "pointer",
                    transition: "transform 0.3s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(0.990)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
                <div class="card-body">
                  <h3
                    class="card-title"
                    style={{
                      color: "#27115f",
                      marginLeft: "40px",
                      fontSize: "35px",
                    }}
                  >
                    <Fade left>Obstetrics</Fade>
                  </h3>
                  <p
                    class="card-text"
                    style={{
                      color: "#27115f",
                      marginLeft: "40px",
                      wordSpacing: "5px",
                      fontWeight: 300,
                    }}
                  >
                    <Fade right>
                      Gynecologists diagnose and manage various gynecological
                      conditions such as menstrual disorders, endometriosis, and
                      infections.
                    </Fade>
                  </p>
                  <a
                    href="/obesity"
                    class="text-danger mt-3"
                    style={{
                      marginLeft: "40px",
                    }}
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            {/* 3rd Card */}

            <div
              class="col-lg-4 col-md-6 mb-3"
              style={{
                maxWidth: "420px",
              }}
            >
              <div class="card">
                <img
                  src={minithird}
                  alt=""
                  style={{
                    cursor: "pointer",
                    transition: "transform 0.3s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(0.990)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
                <div class="card-body">
                  <h3
                    class="card-title"
                    style={{
                      color: "#27115f",
                      marginLeft: "40px",
                      fontSize: "35px",
                    }}
                  >
                    <Fade left>Preventive Care</Fade>
                  </h3>
                  <p
                    class="card-text"
                    style={{
                      color: "#27115f",
                      marginLeft: "40px",
                      wordSpacing: "5px",
                      fontWeight: 300,
                    }}
                  >
                    <Fade right>
                      Gynecologists diagnose and manage various gynecological
                      conditions such as menstrual disorders, endometriosis, and
                      infections.
                    </Fade>
                  </p>
                  <a
                    href="/preventive-care"
                    class="text-danger mt-3"
                    style={{
                      marginLeft: "40px",
                    }}
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <Fade left>
          <div
            id="data"
            style={{
              backgroundColor: "#EBF8FF",
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <img
              width="170"
              height="160"
              src={mainLogo}
              alt=""
              style={{
                marginTop: 30,
              }}
            />
            <h2
              class="display-4 text-center"
              style={{
                color: "#27115f",
                marginTop: 40,
                fontWeight: "lighter",
                fontFamily: "cursive",
              }}
            >
              Secure your exclusive health consultation today..!
            </h2>
            <h2
              class="display-6 text-center"
              style={{
                color: "#27115f",
                marginTop: 40,
                fontWeight: "lighter",
                fontSize: "clamp(2rem, 5vw, 4rem)",
                wordSpacing: 5,
              }}
            >
              Your journey to optimal health begins here.
              <br />
              Take the first step towards a healthier
            </h2>
            <div class="mt-3 text-center">
              <RubberBand>
                <button
                  type="button"
                  class="btn btn-danger btn-lg"
                  onClick={handleBook}
                >
                  Book a consultation
                </button>
              </RubberBand>
            </div>
          </div>
        </Fade>

        {/*  */}
        <br />
        <br />
        <div className="container mt-4" style={{ backgroundColor: "#EBF8FF" }}>
          <div className="row justify-content-center align-items-center">
            <Fade left>
              <div className="col-md-6 text-center">
                <h2
                  className="mb-4"
                  style={{
                    fontSize: "clamp(2rem, 8vw, 4rem)",
                    marginTop: 50,
                    fontWeight: "lighter",
                    color: "#27155f",
                  }}
                >
                  Our Specialties
                </h2>
                <h6
                  className="mb-4"
                  style={{
                    fontSize: "clamp(1rem, 4vw, 2rem)",
                    marginTop: 50,
                    fontWeight: "lighter",
                    color: "#27155f",
                  }}
                >
                  Tailored care for every stage of life
                </h6>
              </div>
            </Fade>
            <div className="col-md-6 text-center">
              <img
                className="w-50"
                src={demoP}
                alt=""
                style={{ maxWidth: "100%" }}
              />
            </div>
          </div>
        </div>
        {/*  */}
        <br />
        <br />
        <div className="container mt-5 p-4">
          <div className="row row-cols-1 row-cols-md-4 g-3 mb-5 ">
            {/* First Card */}
            <div className="col">
              <div className="card border-primary">
                <div
                  className="card-body d-flex justify-content-center align-items-center flip-card"
                  style={{ height: 170, backgroundColor: "#EBF8FF" }}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={derma} alt="" />
                    </div>
                    <div className="flip-card-back">
                      <p
                        class=""
                        style={{
                          fontSize: 13,
                          fontWeight: 300,
                          color: "#27115f",
                          fontFamily: "revert",
                          padding: 5,
                          marginBottom: 5,
                          marginTop: 20,
                        }}
                      >
                        Women's dermatology addresses skin-related concerns
                        unique to women.
                        <a
                          href="/"
                          style={{
                            color: "#c11574",
                            marginTop: 40, // Adjusted margin top
                            display: "block", // Set to block to move to a new line
                            textAlign: "center", // Center the link
                          }}
                        >
                          Read More
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Second Card */}
            <div className="col">
              <div className="card border-primary">
                <div
                  className="card-body d-flex justify-content-center align-items-center flip-card"
                  style={{ height: 170, backgroundColor: "#EBF8FF" }}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={menopause} alt="" />
                    </div>
                    <div className="flip-card-back d-flex flex-column ">
                      <p
                        className=""
                        style={{
                          fontSize: 13,
                          fontWeight: 300,
                          color: "#27115f",
                          fontFamily: "revert",
                          padding: 5,
                        }}
                      >
                        A natural biological process in a woman's life, marking
                        the end of her reproductive years.
                      </p>
                      <a
                        href="/"
                        style={{
                          color: "#c11574",
                        }}
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Third Card */}
            <div className="col">
              <div className="card border-primary">
                <div
                  className="card-body d-flex justify-content-center align-items-center flip-card"
                  style={{ height: 170, backgroundColor: "#EBF8FF" }}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front  ">
                      <img src={infertility} alt="" />
                    </div>
                    <div className="flip-card-back d-flex flex-column ">
                      <p
                        style={{
                          fontSize: 13,
                          fontWeight: 300,
                          color: "#27115f",
                          fontFamily: "revert",
                          padding: 5,
                        }}
                      >
                        Infertility is a medical condition characterized by the
                        inability to conceive or carry a pregnancy.
                      </p>
                      <a
                        href="/"
                        style={{
                          color: "#c11574",
                        }}
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Fourth Card */}
            <div className="col">
              <div className="card border-primary">
                <div
                  className="card-body d-flex justify-content-center align-items-center flip-card"
                  style={{ height: 170, backgroundColor: "#EBF8FF" }}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={pregnancy} alt="" />
                    </div>
                    <div className="flip-card-back d-flex flex-column ">
                      <p
                        style={{
                          fontSize: 13,
                          fontWeight: 300,
                          color: "#27115f",
                          fontFamily: "revert",
                          padding: 5,
                        }}
                      >
                        A painful medical condition where tissue similar to the
                        lining of the uterus grows outside the uterus.
                      </p>
                      <a
                        href="/"
                        style={{
                          color: "#c11574",
                        }}
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 5 */}
            <div className="col">
              <div className="card border-primary">
                <div
                  className="card-body d-flex justify-content-center align-items-center flip-card"
                  style={{ height: 170, backgroundColor: "#EBF8FF" }}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={bladder} alt="" />
                    </div>
                    <div className="flip-card-back d-flex flex-column ">
                      <p
                        style={{
                          fontSize: 13,
                          fontWeight: 300,
                          color: "#27115f",
                          fontFamily: "revert",
                        }}
                      >
                        It encompass a range of issues, including urinary
                        incontinence, urinary tract infections and interstitial
                        cystitis.
                      </p>
                      <a
                        href="/"
                        style={{
                          color: "#c11574",
                        }}
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 6 Card */}
            <div className="col">
              <div className="card border-primary">
                <div
                  className="card-body d-flex justify-content-center align-items-center flip-card"
                  style={{ height: 170, backgroundColor: "#EBF8FF" }}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={midWif} alt="" />
                    </div>
                    <div className="flip-card-back d-flex flex-column ">
                      <h4
                        style={{
                          fontSize: 13,
                          fontWeight: 300,
                          color: "#27115f",
                          fontFamily: "revert",
                        }}
                      >
                        A healthcare profession focused on providing
                        personalized care and support to expectant mothers
                        throughout pregnancy.
                      </h4>
                      <a
                        href="/"
                        style={{
                          color: "#c11574",
                          marginTop: 10,
                        }}
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 7 Card */}
            <div className="col">
              <div className="card border-primary">
                <div
                  className="card-body d-flex justify-content-center align-items-center flip-card"
                  style={{ height: 170, backgroundColor: "#EBF8FF" }}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={mentalWeb} alt="" />
                    </div>
                    <div className="flip-card-back d-flex flex-column ">
                      <p
                        style={{
                          fontSize: 13,
                          fontWeight: 300,
                          color: "#27115f",
                          fontFamily: "revert",
                        }}
                      >
                        Mental well-being in women is crucial and encompasses
                        emotional, psychological, and social aspects of mental
                        health.
                      </p>
                      <a
                        href="/"
                        style={{
                          color: "#c11574",
                        }}
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 8 Card */}
            <div className="col">
              <div className="card border-primary">
                <div
                  className="card-body d-flex justify-content-center align-items-center flip-card"
                  style={{ height: 170, backgroundColor: "#EBF8FF" }}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={sexualHealth} alt="" />
                    </div>
                    <div className="flip-card-back d-flex flex-column ">
                      <p
                        style={{
                          fontSize: 13,
                          fontWeight: 300,
                          color: "#27115f",
                          fontFamily: "revert",
                        }}
                      >
                        Sexual health in women addressing aspects like
                        reproductive health, contraception, STI prevention, and
                        healthy relationships.
                      </p>
                      <a
                        href="/"
                        style={{
                          color: "#c11574",
                        }}
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            class="d-flex justify-content-center align-content-center "
            href="/"
            style={{
              color: "#c11574",
            }}
          >
            Click here to View More
          </a>
        </div>
        {/*  */}
        <div class="container mb-5">
          <div class="row">
            <Fade left>
              <div
                class="d-flex justify-content-center align-items-center mt-5"
                style={{
                  color: "#27115f",
                }}
              >
                <h6>WHY US</h6>
              </div>
            </Fade>
            <div>
              <h3
                class="d-flex justify-content-center align-items-center mt-2 w-100"
                style={{
                  color: "#27115f",
                  fontSize: "60px",
                }}
              >
                Our Advantage
              </h3>
              <div class="d-flex flex-wrap justify-content-center align-items-center mt-5 space">
                <Fade left>
                  <div
                    class="p-3"
                    style={{
                      width: "100%",
                      maxWidth: "270px",
                      margin: "0 20px",
                    }}
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/3974/3974805.png"
                      alt=""
                      width="50"
                    />
                    <h5
                      style={{
                        color: "#27155f",
                        fontSize: "15px",
                        marginTop: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      Personalized Treatment
                    </h5>
                    <p
                      style={{
                        color: "#27155f",
                        fontWeight: 300,
                      }}
                    >
                      We understand that every woman is different, and so are
                      her health concerns. Our experienced healthcare
                      professionals take the time to listen, understand, and
                      assess your individual health goals and challenges.
                    </p>
                  </div>
                </Fade>
                <Fade left>
                  <div
                    class="p-3"
                    style={{
                      width: "100%",
                      maxWidth: "270px",
                      margin: "0 20px",
                    }}
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/8867/8867589.png"
                      alt=""
                      width="50"
                    />
                    <h5
                      style={{
                        color: "#27155f",
                        fontSize: "15px",
                        marginTop: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      Confidentiality
                    </h5>
                    <p
                      style={{
                        color: "#27155f",
                        fontWeight: 300,
                      }}
                    >
                      We hold your privacy and confidentiality in the highest
                      regard. We are committed to safeguarding all your personal
                      and medical information with the utmost care and
                      professionalism. Our healthcare team adheres to strict
                      privacy practices and complies with all relevant laws and
                      regulations.
                    </p>
                  </div>
                </Fade>
                <Fade left>
                  <div
                    class="p-3"
                    style={{
                      width: "100%",
                      maxWidth: "270px",
                      margin: "0 20px",
                    }}
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/681/681494.png"
                      alt=""
                      width="50"
                    />
                    <h5
                      style={{
                        color: "#27155f",
                        fontSize: "15px",
                        marginTop: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      Practitioners Network
                    </h5>
                    <p
                      style={{
                        color: "#27155f",
                        fontWeight: 300,
                      }}
                    >
                      A practitioner's network in women's healthcare is a
                      critical component of the medical landscape, focused on
                      delivering comprehensive and specialized care to women at
                      every stage of life.
                    </p>
                  </div>
                </Fade>
                <Fade left>
                  <div
                    class="p-3"
                    style={{
                      width: "100%",
                      maxWidth: "270px",
                      margin: "0 20px",
                    }}
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/4608/4608193.png"
                      alt=""
                      width="50"
                    />
                    <h5
                      style={{
                        color: "#27155f",
                        fontSize: "15px",
                        marginTop: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      Comfortable Clinic
                    </h5>
                    <p
                      style={{
                        color: "#27155f",
                        fontWeight: 300,
                      }}
                    >
                      Comfort plays a crucial role in your overall healthcare
                      experience. Our commitment to your well-being extends
                      beyond medical expertise to create a warm and inviting
                      environment that puts your comfort at the forefront. We
                      ensure that your time at our clinic is as pleasant and
                      reassuring as possible.
                    </p>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>

        {/* items */}
        <Fade left>
          <div
            class="p-4 rounded-bottom-5"
            style={{ marginTop: "30px", backgroundColor: "#EBF8FF" }}
          >
            <div class="row">
              <div class="col-lg-6 p-3">
                <img src={experts} alt="" class="img-fluid" />
              </div>
              <div class="col-lg-6">
                <h5 class="p-3 ml-md-4" style={{ color: "#27115f" }}>
                  Our Experts
                </h5>
                <h1 class="p-3 ml-md-4" style={{ color: "#27115f" }}>
                  Top-class providers
                </h1>
                <p
                  class="p-3 ml-md-4"
                  style={{ color: "#27115f", fontWeight: 300 }}
                >
                  As top-class women's health providers, we are committed to
                  delivering the highest standard of care to our patients. Our
                  dedicated team of experts combines years of experience with
                  cutting-edge medical knowledge to ensure that you receive the
                  best possible treatment. We understand the unique healthcare
                  needs of women and offer comprehensive services tailored to
                  address those needs.
                </p>
                <button
                  type="button"
                  class="btn text-white btn-lg ml-md-4 mb-3"
                  style={{ backgroundColor: "#c11574" }}
                >
                  View Providers
                </button>
              </div>
            </div>
          </div>
        </Fade>

        {/* carousel */}
        <br />
        <div
          class="container"
          style={{
            marginTop: 60,
          }}
        >
          <div
            class="row"
            style={{
              marginBottom: 100,
            }}
          >
            <div class="col-lg-5 col-md-12">
              <h6 class="ml-4" style={{ color: "#27155f" }}>
                REVIEWS
              </h6>
              <br />
              <h2
                style={{
                  fontSize: 40, // Adjusted font size for better responsiveness
                  color: "#27155f",
                  marginLeft: 20,
                }}
              >
                See what our patients are saying
              </h2>
              <br />
              <div class="d-flex flex-column flex-md-row justify-content-md-between align-items-md-center">
                <h5 class="p-3" style={{ color: "#27115f", marginLeft: 20 }}>
                  4.90 rating
                </h5>
                <span style={{ fontSize: 14, color: "#27115f" }}>
                  based on 23K+ reviews
                </span>
              </div>
              <a
                href="/"
                style={{
                  color: "#c11574",
                  marginLeft: 20,
                  marginTop: 20,
                  display: "block", // Ensure the link takes the full width on small screens
                }}
              >
                More Testimonials
              </a>
              <img
                class="w-25 mt-3"
                src="https://narihealth.tanshcreative.com/wp-content/uploads/2023/09/hand-drawn-arrow1.png"
                alt=""
                style={{
                  marginLeft: 20,
                  maxWidth: "100%", // Ensure the image is responsive
                }}
              />
            </div>

            <div class="col-lg-7">
              <div class="container mt-5">
                <div
                  id="myCarousel"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <div
                    class="carousel-inner  "
                    style={{
                      backgroundColor: "#EBF8FF",
                      minHeight: 350,
                      borderRadius: 30,
                    }}
                  >
                    <div class="carousel-item active">
                      <div class="d-flex flex-column ">
                        <div>
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/11447/11447211.png"
                            class=""
                            style={{
                              width: 30,
                              marginTop: 40,
                              marginLeft: 20,
                            }}
                            alt="Slide 1"
                          />
                          <h5
                            style={{
                              marginLeft: 50,
                              fontFamily: "sans-serif",
                              fontWeight: "bold",
                              color: "#27115f",
                            }}
                          >
                            Kavita Patil , Pune
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
                            marginLeft: 50,
                          }}
                        >
                          <p
                            class=""
                            style={{
                              color: "#27115f",
                              fontWeight: 300,
                              fontSize: 18,
                              maxWidth: 800,
                              marginRight: 80,
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
                    <div class="carousel-item ">
                      <div class="d-flex flex-column ">
                        <div>
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/11447/11447211.png"
                            class=""
                            style={{
                              width: 30,
                              marginTop: 40,
                              marginLeft: 20,
                            }}
                            alt="Slide 1"
                          />
                          <h5
                            style={{
                              marginLeft: 50,
                              fontFamily: "sans-serif",
                              fontWeight: "bold",
                              color: "#27115f",
                            }}
                          >
                            Anuradha Chawla , Delhi
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
                            marginLeft: 50,
                          }}
                        >
                          <p
                            class=""
                            style={{
                              color: "#27115f",
                              fontWeight: 300,
                              fontSize: 18,
                              maxWidth: 800,
                              marginRight: 80,
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
                    <div class="carousel-item ">
                      <div class="d-flex flex-column ">
                        <div>
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/11447/11447211.png"
                            class=""
                            style={{
                              width: 30,
                              marginTop: 40,
                              marginLeft: 20,
                            }}
                            alt="Slide 1"
                          />
                          <h5
                            style={{
                              marginLeft: 50,
                              fontFamily: "sans-serif",
                              fontWeight: "bold",
                              color: "#27115f",
                            }}
                          >
                            Jeeni Souza , Mumbai
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
                            marginLeft: 50,
                          }}
                        >
                          <p
                            class=""
                            style={{
                              color: "#27115f",
                              fontWeight: 300,
                              fontSize: 18,
                              maxWidth: 800,
                              marginRight: 80,
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
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#myCarousel"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only"></span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#myCarousel"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only"></span>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-12 d-flex flex-column flex-md-row justify-content-between align-items-md-center mt-5">
              <button
                class="btn btn-lg w-50  text-white"
                style={{
                  backgroundColor: "#27115f",
                  marginTop: "10px", // Added margin for better spacing
                }}
              >
                VIEW ALL
              </button>
            </div>
            <div class="">
              <Fade left>
                <div class="row">
                  <div class="col-lg-12 col-md-12 d-flex flex-column flex-md-row justify-content-between align-items-md-center mt-5">
                    <h4
                      style={{
                        color: "#27115f",
                        fontSize: 20,
                        wordSpacing: 5,
                        fontWeight: 400,
                        marginBottom: "10px", // Added margin for better spacing
                      }}
                    >
                      FROM THE BLOG
                    </h4>
                  </div>

                  <div>
                    <div>
                      <h3
                        class="display-6"
                        style={{
                          color: "#27115f",
                          fontWeight: "bold",
                          wordSpacing: 5,
                          marginTop: "20px", // Added margin for better spacing
                        }}
                      >
                        POSTS & ARTICLES
                      </h3>
                    </div>
                    <div class="mt-5 row justify-content-around">
                      <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card">
                          <img
                            class="card-img-top w-100 h-100"
                            src="https://narihealth.tanshcreative.com/wp-content/uploads/2023/10/post-img2-600x450.jpg"
                            alt=""
                          />
                          <div class="card-body">
                            <h5
                              class="card-title"
                              style={{
                                color: "#27115f",
                                fontSize: 15,
                                fontFamily: "sans-serif",
                              }}
                            >
                              Dr. Apple Jones - October 12 2022
                            </h5>
                            <br />
                            <a
                              class="text-decoration-none w-75"
                              style={{
                                color: "#27115f",
                                fontSize: 22,
                                fontWeight: "bold",
                              }}
                              href="/"
                            >
                              Understanding PCOS: Causes, symptoms, and
                              management.
                            </a>
                            <br />
                            <p
                              class=""
                              style={{
                                color: "#27115f",
                                fontWeight: "300",
                                marginTop: 10,
                              }}
                            >
                              Polycystic Ovary Syndrome (PCOS) is a common
                              hormonal disorder that affects people with
                              ovaries, often during their reproductive years.
                              It…
                            </p>
                            <a
                              href="/"
                              style={{
                                color: "#c11574",
                              }}
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card">
                          <img
                            class="card-img-top w-100 h-100"
                            src="https://narihealth.tanshcreative.com/wp-content/uploads/2023/10/post-img4-600x450.jpg"
                            alt=""
                          />
                          <div class="card-body">
                            <h5
                              class="card-title"
                              style={{
                                color: "#27115f",
                                fontSize: 15,
                                fontFamily: "sans-serif",
                              }}
                            >
                              Dr. Apple Jones - October 12 2022
                            </h5>
                            <br />
                            <a
                              class="text-decoration-none w-75"
                              style={{
                                color: "#27115f",
                                fontSize: 22,
                                fontWeight: "bold",
                              }}
                              href="/"
                            >
                              Menstrual health: Understanding your cycle and
                              common issues
                            </a>
                            <br />
                            <p
                              class=""
                              style={{
                                color: "#27115f",
                                fontWeight: "300",
                                marginTop: 10,
                              }}
                            >
                              Menstruation is a natural and essential aspect of
                              a person's reproductive health. Understanding your
                              menstrual cycle and the common issues…
                            </p>
                            <a
                              href="/"
                              style={{
                                color: "#c11574",
                              }}
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card">
                          <img
                            class="card-img-top w-100 h-100"
                            src="https://narihealth.tanshcreative.com/wp-content/uploads/2023/10/post-img1-600x450.jpg"
                            alt=""
                          />
                          <div class="card-body">
                            <h5
                              class="card-title"
                              style={{
                                color: "#27115f",
                                fontSize: 15,
                                fontFamily: "sans-serif",
                              }}
                            >
                              Dr. Apple Jones - October 12 2022
                            </h5>
                            <br />
                            <a
                              class="text-decoration-none w-75"
                              style={{
                                color: "#27115f",
                                fontSize: 22,
                                fontWeight: "bold",
                              }}
                              href="/"
                            >
                              A journey to motherhood: Comprehensive pregnancy
                              care guide
                            </a>
                            <br />
                            <p
                              class=""
                              style={{
                                color: "#27115f",
                                fontWeight: "300",
                                marginTop: 10,
                              }}
                            >
                              Becoming a mother is a transformative and
                              awe-inspiring journey. From the moment a woman
                              learns that she's expecting, to the…
                            </p>
                            <a
                              href="/"
                              style={{
                                color: "#c11574",
                              }}
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
              <br />
            </div>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
// #6EC1E4
// #EBF8FF
//"#c11574"
