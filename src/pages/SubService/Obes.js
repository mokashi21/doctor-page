import React from "react";
import Fade from "react-reveal/Fade";

function Obes() {
  return (
    <div class="container-fluid">
      <div class="d-flex justify-content-between flex-column">
        <div className="row  ">
          <div class="mt-5">
            <div class="mt-5">
              <img
                src="https://images.unsplash.com/photo-1513432001033-4a7b14b6d039?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8bmF0dXJlLGZsb3dlcnN8fHx8fHwxNzAyMTkyMTg1&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1800"
                alt=""
                className="  w-100 "
              />
            </div>
            <div className="">
              <div>
                <h3
                  style={{
                    padding: 10,
                    fontSize: 19,
                    fontFamily: "serif",
                    color: "#27115f",
                    wordSpacing: 10,
                    marginTop: 10,
                  }}
                >
                  <Fade left>PROMOTING FEMALE HEALTH AT EVERY STAGE</Fade>
                </h3>
                <h2
                  style={{
                    padding: 10,
                    fontSize: 53,
                    color: "#27115f",
                    fontWeight: 400,
                  }}
                >
                  <Fade left>We specialize in gynecologic care.</Fade>
                </h2>
                <p
                  style={{
                    padding: 10,
                    fontSize: 17,
                    color: "#27115f",
                    fontWeight: 300,
                  }}
                >
                  <Fade right>
                    Obstetrics care encompasses the specialized medical
                    attention provided to women during pregnancy, childbirth,
                    and the postpartum period. Dedicated to ensuring the health
                    and well-being of both mother and child, obstetric care
                    involves prenatal check-ups, monitoring fetal development,
                    and offering guidance on nutrition and lifestyle. Skilled
                    obstetricians guide women through the labor and delivery
                    process, addressing any complications that may arise.
                    Postpartum care involves monitoring the mother's recovery
                    and providing support for breastfeeding and emotional
                    well-being. Overall, obstetrics care focuses on promoting a
                    safe and healthy pregnancy experience, fostering the optimal
                    development of the baby, and ensuring the well-being of the
                    entire family.
                    <br />
                    <br />
                    Obstetrics care prioritizes maternal and fetal health,
                    emphasizing preventive measures, personalized birthing
                    plans, and medical interventions when necessary. It combines
                    medical expertise with emotional support to ensure a
                    positive pregnancy journey.
                  </Fade>
                </p>
              </div>
              <br />
              <div>
                <h3
                  className="mt-5"
                  style={{
                    padding: 10,
                    fontSize: 37,
                    color: "#27115f",
                    fontWeight: 500,
                  }}
                >
                  Lady-Care Clinic Health Consulting provides the following
                  women’s health services:
                </h3>

                <p
                  style={{
                    padding: 10,
                    fontSize: 17,
                    color: "#27115f",
                    fontWeight: 300,
                  }}
                >
                  <Fade right>
                    Our team is available to assist with women’s health
                    questions and connecting individuals with the right General
                    Practitioner (GP). Providing support and guidance for women
                    at all stages of their health journey is essential for
                    overall well-being. If you have any specific questions or
                    need assistance, please feel free to reach out or leave your
                    details, and the reception team will get in touch with you
                    to provide the help and information you need. Taking
                    proactive steps in managing women’s health is crucial for
                    maintaining a healthy and fulfilling life.
                  </Fade>
                </p>
              </div>
              <div className="d-flex flex-column">
                {/* Left Content */}
                <div className="w-100 p-2 rounded mb-3">
                  <div>
                    <ul className="checkbox-list">
                      <li>
                        <span className="checkbox-circle"></span>
                        <p
                          className="ml2"
                          style={{
                            marginTop: 15,
                            marginLeft: 10,
                            color: "#c11574",
                            fontSize: 20,
                          }}
                        >
                          Introduction
                        </p>
                      </li>
                    </ul>
                    <p
                      style={{
                        padding: 10,
                        fontSize: 17,
                        color: "#27115f",
                        fontWeight: 300,
                      }}
                    >
                      Obstetrics care, often simply referred to as obstetric
                      care, is a specialized branch of medicine that focuses on
                      the healthcare of pregnant women, encompassing prenatal,
                      childbirth, and postnatal care. The term "obstetrics" is
                      derived from the Latin word "obstetrix," meaning midwife,
                      highlighting the historical involvement of midwives in
                      maternal healthcare. Obstetric care is a crucial aspect of
                      women's health, ensuring the well-being of both the mother
                      and the developing fetus. This comprehensive overview will
                      delve into the definition, effects, and various facets of
                      obstetrics care, shedding light on its importance in
                      promoting healthy pregnancies and childbirth.
                      <br />
                      <br />
                      Obstetrics care is a medical discipline devoted to
                      managing the reproductive health of women during
                      pregnancy, childbirth, and the postpartum period. It
                      involves a multidisciplinary approach, integrating
                      medical, surgical, and supportive interventions to
                      safeguard the health of both the mother and the baby.
                      Obstetricians, healthcare providers specializing in
                      obstetrics, collaborate with a team of professionals,
                      including midwives, nurses, and neonatologists, to provide
                      comprehensive care throughout the entire reproductive
                      process.
                      <br />
                      <br />
                    </p>
                  </div>
                </div>

                {/* Right Content */}
                <div
                  className="w-100 p-2 rounded"
                  style={{ backgroundColor: "#EBF8FF" }}
                >
                  <div className="p-2">
                    <h6
                      className="p-1"
                      style={{
                        fontSize: 18,
                        fontWeight: 400,
                        color: "#27115f",
                      }}
                    >
                      Here are some of the check up and health screenings that
                      you should get done:
                    </h6>
                    <ul
                      className="p-1 m-lg-3"
                      style={{
                        color: "#c11574",
                      }}
                    >
                      <li className="p-2">
                        <Fade right>
                          Prenatal visits & Ultrasound examinations
                        </Fade>
                      </li>
                      <li className="p-2">
                        <Fade left>Gestational diabetes screening</Fade>
                      </li>
                      <li className="p-2">
                        <Fade right>Genetic disorder screenings</Fade>
                      </li>
                      <li className="p-2">
                        <Fade left>Blood Pressure Measurement </Fade>{" "}
                      </li>
                      <li className="p-2">
                        <Fade right>Cholesterol Screening</Fade>
                      </li>
                      <li className="p-2">
                        <Fade left>Regular blood pressure checks</Fade>
                      </li>
                      <li className="p-2">
                        <Fade right> Cholesterol level assessments</Fade>
                      </li>
                      <li className="p-2">
                        <Fade left> Physical examinations </Fade>
                      </li>
                      <li className="p-2">
                        <Fade right>
                          Screenings for obesity-related health risks
                        </Fade>
                      </li>
                    </ul>
                    <p
                      style={{
                        fontWeight: 300,
                        fontSize: 11,
                      }}
                    >
                      * The specific exams and screenings recommended can vary
                      based on a woman’s age, family history, personal health
                      history, and risk factors. It’s essential to discuss your
                      individual healthcare needs and screening schedule with
                      your healthcare provider.
                    </p>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-column mt-1 p-1">
                <div>
                  <ul className="checkbox-list">
                    <li>
                      <span className="checkbox-circle"></span>
                      <p
                        className="ml-2"
                        style={{
                          marginTop: 15,
                          marginLeft: 10,
                          color: "#c11574",
                          fontSize: 20,
                        }}
                      >
                        Prenatal Care
                      </p>
                    </li>
                  </ul>
                  <p
                    className=""
                    style={{
                      color: "#27115f",
                      fontWeight: 300,
                    }}
                  >
                    Prenatal care constitutes a fundamental aspect of
                    obstetrics, focusing on the health and well-being of the
                    pregnant woman and her unborn child. This phase involves
                    regular check-ups, diagnostic tests, and counseling to
                    monitor the progress of the pregnancy, detect any potential
                    complications, and offer guidance on maintaining a healthy
                    lifestyle.
                    <br />
                    <br />
                    Prenatal care aims to identify and address risk factors that
                    may impact pregnancy outcomes, allowing for timely
                    interventions and preventive measures.
                  </p>
                  <hr />
                </div>
                <div>
                  <ul className="checkbox-list">
                    <li>
                      <span className="checkbox-circle"></span>
                      <p
                        class="ml2"
                        style={{
                          marginTop: 15,
                          marginLeft: 10,
                          color: "#c11574",
                          fontSize: 20,
                        }}
                      >
                        Childbirth
                      </p>
                    </li>
                  </ul>
                  <p
                    className=""
                    style={{
                      color: "#27115f",
                      fontWeight: 300,
                    }}
                  >
                    <Fade left>
                      Childbirth, also known as labor and delivery, is a pivotal
                      event in obstetric care. Obstetricians and midwives play a
                      central role in assisting women during labor, ensuring a
                      safe and comfortable delivery. Various childbirth methods,
                      including vaginal delivery and cesarean section, are
                      employed based on individual health considerations and the
                      unique circumstances of each pregnancy. The obstetric team
                      is equipped to manage complications that may arise during
                      labor, employing medical interventions when necessary to
                      safeguard the health of both mother and baby.
                    </Fade>
                  </p>
                  <h5
                    style={{
                      color: "#27115f",
                    }}
                  >
                    <Fade right>Evaluation</Fade>
                  </h5>
                  <p
                    className=""
                    style={{
                      color: "#27115f",
                      fontWeight: 300,
                    }}
                  >
                    <Fade left>
                      Childbirth, a transformative and profound event, marks the
                      culmination of the pregnancy journey. During labor, the
                      uterus undergoes rhythmic contractions, guiding the baby
                      through the birth canal for a vaginal delivery.
                      Obstetricians and midwives provide essential support,
                      monitoring the progress and ensuring the well-being of
                      both mother and baby.
                    </Fade>
                  </p>
                  <h5
                    className="mt-3"
                    style={{
                      color: "#27115f",
                    }}
                  >
                    <Fade right>Treatment</Fade>
                  </h5>
                  <p
                    className=""
                    style={{
                      color: "#27115f",
                      fontWeight: 300,
                    }}
                  >
                    <Fade left>
                      Childbirth treatment involves expert obstetric care to
                      support women through labor and delivery. Obstetricians
                      and midwives guide the process, providing pain management,
                      monitoring vital signs, and ensuring a safe delivery.
                      Medical interventions, such as epidurals or cesarean
                      sections, may be employed when necessary, prioritizing the
                      health and well-being of both mother and baby.
                    </Fade>
                  </p>
                  <hr />
                  <ul className="checkbox-list">
                    <li>
                      <span className="checkbox-circle"></span>
                      <p
                        class="ml2"
                        style={{
                          marginTop: 15,
                          marginLeft: 10,
                          color: "#c11574",
                          fontSize: 20,
                        }}
                      >
                        <Fade right> Postnatal care</Fade>
                      </p>
                    </li>
                  </ul>
                  <p
                    className=""
                    style={{
                      color: "#27115f",
                      fontWeight: 300,
                    }}
                  >
                    <Fade left>
                      Postnatal care, also known as postpartum care, is a
                      critical phase in obstetric medicine that focuses on the
                      well-being of both the mother and the newborn after
                      childbirth. This period typically extends from delivery
                      until six weeks postpartum, although the exact duration
                      may vary. Postnatal care aims to support the physical and
                      emotional recovery of the mother while addressing the
                      unique needs of the newborn.
                    </Fade>
                  </p>
                  <hr />

                  <div className=" ">
                    <div>
                      <ul className="checkbox-list">
                        <li>
                          <span className="checkbox-circle"></span>
                          <p
                            className="ml-2"
                            style={{
                              marginTop: 15,
                              marginLeft: 10,
                              color: "#c11574",
                              fontSize: 20,
                            }}
                          >
                            <Fade right>Infections</Fade>
                          </p>
                        </li>
                      </ul>
                      <p
                        style={{
                          padding: 10,
                          fontSize: 17,
                          color: "#27115f",
                          fontWeight: 300,
                        }}
                      >
                        <Fade left>
                          According to a recent estimate from the World Health
                          Organization (WHO), at least 2.8 million of people die
                          per year due to complications related to overweight or
                          obesity. Moreover, an estimated 35.8 million (2.3%) of
                          global Disability-Adjusted Life Years (DALYs) are
                          caused by overweight or obesity. Worldwide, obesity
                          has nearly tripled since 1975: currently, more than
                          1.9 billion adults are overweight, and more than 650
                          million of them are obese (39% of adults are
                          overweight and 13% obese, according to the WHO)
                          although obesity is defined as a real pandemic
                        </Fade>
                      </p>
                      <h6
                        style={{
                          color: "#27115f",
                        }}
                      >
                        Here are some of the most common types of vaginal
                        infections:
                      </h6>
                      <ul
                        className="p-1 m-lg-3"
                        style={{
                          color: "#c11574",
                        }}
                      >
                        <li className="p-2">
                          <Fade left> Skin Infections</Fade>{" "}
                        </li>
                        <li className="p-2">
                          <Fade right> Urinary tract infections </Fade>
                        </li>
                        <li className="p-2">
                          <Fade left>Respiratory tract infections</Fade>
                        </li>
                        <li className="p-2">
                          <Fade right>Surgical site infections</Fade>
                        </li>
                      </ul>
                      <p
                        style={{
                          fontWeight: 400,
                          fontSize: 11,
                        }}
                      >
                        <Fade right>
                          It’s essential for individuals experiencing symptoms
                          of a vaginal infection to seek medical attention.
                          Accurate diagnosis is crucial because the treatment
                          for each type of infection varies. Additionally,
                          practicing safe sex, maintaining good hygiene, and
                          avoiding irritants can help prevent vaginal
                          infections.
                        </Fade>
                      </p>
                    </div>
                    <div className=" d-md-flex justify-content-between">
                      <div className="w-md-50 p-2 rounded">
                        {/* Left content */}
                      </div>
                      <div
                        className="w-md-50  "
                        style={{
                          maxHeight: 950,
                        }}
                      >
                        <img
                          className=" w-75 ms-5  img-fluid"
                          src="https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41366-021-01035-6/MediaObjects/41366_2021_1035_Fig1_HTML.png?as=webp"
                          alt=""
                          style={{
                            borderRadius: 4,
                            marginTop: 5,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="mt-5"
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
  );
}

export default Obes;
