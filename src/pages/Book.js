import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { DatePicker, Space } from "antd";
import { TimePicker } from "antd";
import { Modal, Button } from "react-bootstrap";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";

function Book() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [symptomps, setSymptomps] = useState("");
  const [city, setCity] = useState("");
  const [reports, setReports] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [storedData, setStoredData] = useState([]);
  const navigate = useNavigate();
  const handleClose = () => {
    setShowModal(false);
    navigate("/");
  };
  const generateRandomNumber = () => {
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const digits = "0123456789";

    const randomID =
      alphabets[Math.floor(Math.random() * alphabets.length)] +
      Array.from(
        { length: 4 },
        () => digits[Math.floor(Math.random() * digits.length)]
      ).join("");

    return randomID;
  };
  const formRef = useRef();
  const onDateChange = (newDate, dateString) => {
    console.log(newDate, dateString);
    setDate(newDate);
  };
  const onTimeChange = (newTime, timeString) => {
    console.log(newTime, timeString);
    setTime(newTime);
  };
  const format = "HH:mm";
  const handleClear = () => {
    setName("");
    setEmail("");
    setMessage("");
    setAge("");
    setPhone("");
    setSymptomps("");
    setCity("");
    setReports("");
    setDate(null);
    setTime(null);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const data = {
      user_name: name,
      user_email: email,
      user_age: age,
      message: message,
      user_phone: phone,
      user_city: city,
      user_symptomps: symptomps,
      user_reports: reports,
      user_date: date?.format("YYYY-MM-DD"),
      user_time: time?.format("HH:mm"),
    };
    localStorage.setItem("formData", JSON.stringify(data));

    // Log storedData before updating the state
    console.log("storedData before update:", storedData);
    setStoredData([data, ...storedData]);

    // Log storedData after updating the state
    console.log("storedData after update:", storedData);

    const serviceID = "service_u0o900n";
    const templateID = "template_dpg6l5u";
    const key = "t1uVebSD3WU1JEZdR";

    emailjs
      .send(serviceID, templateID, data, key)
      .then((response) => {
        console.log("Data sent successfully", response);
        setShowModal(true);
        handleClear();
        formRef.current.reset();
      })
      .catch((error) => {
        alert("Error sending data", error);
      });
  };
  useEffect(() => {
    const fetchData = JSON.parse(localStorage.getItem("formData")) || [];
    console.log("storedData type after useEffect:", typeof fetchData);
    setStoredData(Array.isArray(fetchData) ? fetchData : []);
  }, []);
  return (
    <div class="container-fluid mt-5 p-4">
      <div
        className="border border-1"
        style={{
          backgroundColor: "#EBF8FF",
        }}
      >
        <div className="container">
          <form
            enctype="multipart/form-data"
            method="post"
            ref={formRef}
            onSubmit={sendEmail}
            className="mt-4 p-3 "
          >
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="fullName">Full Name*</label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  placeholder="Ful Name"
                  required
                  name="user_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col-md-1">
                <label htmlFor="age">Age*</label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  placeholder="Age"
                  required
                  name="user_age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="col-md-8 mt-4">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Female
                  </label>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="inputEmail">Email*</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword">Phone*</label>
                <input
                  type="number"
                  className="form-control"
                  id="inputPassword"
                  placeholder="phone number"
                  required
                  name="user_phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="inputAddress2">Symptoms</label>
              <textarea
                className="form-control"
                style={{
                  height: 90,
                }}
                id="inputAddress2"
                placeholder="Please Enter Health Issues"
                required
                name="user_symtomps"
                value={symptomps}
                onChange={(e) => setSymptomps(e.target.value)}
              ></textarea>
            </div>
            {/*  */}

            <div className="input-group mb-3">
              <label className="p-2">Upload Reports</label>
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input border border-secondary rounded w-100"
                  id="inputGroupFile01"
                  name="my_file"
                  value={reports}
                  onChange={(e) => setReports(e.target.value)}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="inputCity">City*</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  name="user_city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-4">
                <label
                  style={{
                    color: "#27115f",
                    fontWeight: "bold",
                    padding: 5,
                  }}
                >
                  {" "}
                  <h6>Select Date</h6>
                  <Space direction="vertical">
                    <DatePicker
                      onChange={onDateChange}
                      required
                      name="user_date"
                      value={date}
                    />
                  </Space>
                </label>
              </div>
              <div className="col-md-2">
                <label
                  style={{
                    color: "#27115f",
                    fontWeight: "bold",
                    padding: 5,
                  }}
                >
                  {" "}
                  <h6>Select Time</h6>
                  <TimePicker
                    onChange={onTimeChange}
                    defaultValue={time || dayjs("12:08", format)}
                    format={format}
                    value={time}
                  />
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div className="text-center">
                <img
                  className="w-25 h-25"
                  src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png"
                  alt=""
                />
              </div>
              <h6
                style={{
                  color: "#27155f",
                  fontSize: 26,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Order Booked
              </h6>
              <ul>
                {storedData.map((item, id) => (
                  <div key={id}>
                    <li>Booking ID : {generateRandomNumber()} </li>
                    <li>Name: {item.user_name}</li>
                    <li>Age : {item.user_age}</li>
                    <li>Symptom : {item.user_symptomps}</li>
                    <li>
                      Date : {item.user_date} | Time : {item.user_time}
                    </li>
                  </div>
                ))}
              </ul>
              <p
                style={{
                  color: "red",
                }}
              >
                *Please visit on time
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default Book;
