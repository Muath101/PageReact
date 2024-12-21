import { useState } from "react";
import "./Home.css";
import Download from "../Downloaded/Download"; // استيراد الملف الجديد
import Login from "../Login/Login";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false); // حالة الشريط العلوي

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenDownloadModal = () => {
    setIsDownloadModalOpen(true);
  };

  const handleCloseDownloadModal = () => {
    setIsDownloadModalOpen(false);
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const handleHomeClick = (url) => {
    window.open(url, "_blank"); // فتح الرابط في صفحة جديدة
  };

  return (
    <section className="home" id="home">
      <nav
        className={`navbar ${isNavHovered ? "hovered" : "transparent"}`}
        onMouseEnter={() => setIsNavHovered(true)}
        onMouseLeave={() => setIsNavHovered(false)}
      >
        <h2>Web <span>Development</span></h2>
        <ul>
          <li onClick={() => scrollToSection("home")} className="nav-link"><a>Home</a></li>
          <li onClick={() => scrollToSection("about")} className="nav-link"><a>About Me</a></li>
          <li onClick={() => scrollToSection("skills")} className="nav-link"><a>Skills</a></li>
          <li onClick={() => scrollToSection("contact")} className="nav-link"><a>Contact Me</a></li>
        </ul>
        <button className="yt" onClick={handleOpenModal}>
          Subs
        </button>
        <Login />
      </nav>
      <div className="content">
        <div className="content-text">
          <h4>Hello, World</h4>
          <h1>My name <span>Muath</span></h1>
          <h3>We Can Change the World</h3>
          <button className="yt" onClick={handleOpenDownloadModal}>Download</button>
          <br />
          <br /><br />
          <div className="sociol">
            <div onClick={() => handleHomeClick("https://www.facebook.com/Mezo506/")}>
              <img src="/src/Tp/F.jpg" alt="Facebook" />
            </div>
            <div onClick={() => handleHomeClick("https://www.instagram.com/pg.claw/?next=%2F")}>
              <img src="/src/Tp/Insta.jpg" alt="Instagram" />
            </div>
            <div onClick={() => handleHomeClick("#")}>
              <img src="/src/Tp/Snap.jpg" alt="Snapchat" />
            </div>
            <div onClick={() => handleHomeClick("https://x.com/clan_t9")}>
              <img src="/src/Tp/T.jpg" alt="Twitter" />
            </div>
            <div onClick={() => handleHomeClick("https://www.youtube.com/@imuath20")}>
              <img src="/src/Tp/Y.jpg" alt="YouTube" />
            </div>
          </div>
        </div>
        <div className="cont-imags">
          <img src="/src/Tp/Moaz.png" alt="" className="mypic" />
        </div>
      </div>

      {/* نافذة الاشتراك */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>Subscription Plan</h2>
            <p>Choose the best plan that suits your needs:</p>
            <div className="plan-details">
              <h3>Premium Plan</h3>
              <p>Price: $10/month</p>
              <ul>
                <li>✔ Exclusive Content</li>
                <li>✔ 24/7 Support</li>
                <li>✔ Access to New Features</li>
              </ul>
            </div>
            <button className="close-btn" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* نافذة تحميل التطبيق */}
      <Download isDownloadModalOpen={isDownloadModalOpen} handleCloseDownloadModal={handleCloseDownloadModal} />
    </section>
  );
};

export default Home;
