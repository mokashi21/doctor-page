// import Ladys from "../images/Ladys.png";
function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              // src={Ladys}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVAnUCp6QiLVgL1OQRdWCBaJzUf_ZjdgpQVw&usqp=CAU"
              alt=""
              width={80}
              height={60}
              style={{
                padding: "10px 0",
                marginLeft: 30,
              }}
            />
          </a>
          <button
            className="navbar-toggler text-light bg-light "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-light bg-light "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                  style={{
                    fontWeight: 400,
                    color: "#27115f",
                  }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/about"
                  style={{
                    fontWeight: 400,
                    color: "#27115f",
                  }}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/contact"
                  style={{
                    fontWeight: 400,
                    color: "#27115f",
                  }}
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/services"
                  style={{
                    fontWeight: 400,
                    color: "#27115f",
                  }}
                >
                  Services
                </a>
              </li>
            </ul>
            <div className="mt-1 ms-lg-4">
              <a href="/booking-slot-ladycare-clinic">
                <button
                  type="button"
                  className="btn btn-danger btn-sm opacity-75"
                >
                  Book Slot
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
