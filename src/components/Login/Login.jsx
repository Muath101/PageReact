import { useState } from "react";
import styles from "./Login.module.css";

const Login = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [users, setUsers] = useState([]); // تخزين المستخدمين الجدد
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newName, setNewName] = useState(""); // اسم المستخدم الجديد
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState("menu");

  const handleOpenLogin = () => {
    setIsLoginOpen(true);
  };

  const handleCloseLogin = () => {
    setIsLoginOpen(false);
  };

  const handleOpenSignUp = () => {
    setIsSignUpOpen(true);
  };

  const handleCloseSignUp = () => {
    setIsSignUpOpen(false);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setUserInfo({ name: user.name, email: user.email });
      setIsLoginOpen(false);
    } else {
      alert("Invalid email or password!");
    }
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (newEmail && newPassword && newName) {
      const newUser = { name: newName, email: newEmail, password: newPassword };
      setUsers([...users, newUser]);
      setNewEmail("");
      setNewPassword("");
      setNewName("");
      setIsSignUpOpen(false);
      alert("Account created successfully!");
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleLogout = () => {
    setUserInfo(null);
    setIsProfileMenuOpen(false);
    setCurrentView("menu");
  };

  const renderProfile = () => (
    <div className={styles.profileView}>
      <button className={styles.backBtn} onClick={() => setCurrentView("menu")}>
        Back
      </button>
      <h3>Profile</h3>
      <p>Name: {userInfo.name}</p>
      <p>Email: {userInfo.email}</p>
    </div>
  );

  const renderHelp = () => (
    <div className={styles.helpView}>
      <button className={styles.backBtn} onClick={() => setCurrentView("menu")}>
        Back
      </button>
      <h3>Help</h3>
      <ul>
        <li>How to reset my password?</li>
        <li>How to update my profile information?</li>
        <li>Why do I log in?</li>
        <li>How to contact support?</li>
      </ul>
    </div>
  );

  const renderSupport = () => (
    <div className={styles.supportView}>
      <button className={styles.backBtn} onClick={() => setCurrentView("menu")}>
        Back
      </button>
      <h3>Support</h3>
      <p>Contact us at:</p>
      <p>Phone: +123456789</p>
      <p>Email: support@example.com</p>
    </div>
  );

  return (
    <>
      {!userInfo ? (
        <>
          <button className={styles.loginBtn} onClick={handleOpenLogin}>
            Login
          </button>
          <button className={styles.signupBtn} onClick={handleOpenSignUp}>
            Register
          </button>

          {isLoginOpen && (
            <div className={styles.modalOverlay}>
              <div className={styles.modalBox}>
                <h2>Login</h2>
                <form onSubmit={handleLoginSubmit}>
                  <div className={styles.formGroup}>
                    <label>Email:</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Password:</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className={styles.loginSubmitBtn}>
                    Submit
                  </button>
                </form>
                <button onClick={handleCloseLogin} className={styles.closeBtn}>
                  Close
                </button>
              </div>
            </div>
          )}

          {isSignUpOpen && (
            <div className={styles.modalOverlay}>
              <div className={styles.modalBox}>
                <h2>Register</h2>
                <form onSubmit={handleSignUpSubmit}>
                  <div className={styles.formGroup}>
                    <label>Name:</label>
                    <input
                      type="text"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Email:</label>
                    <input
                      type="email"
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Password:</label>
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className={styles.signupSubmitBtn}>
                    Create Account
                  </button>
                </form>
                <button onClick={handleCloseSignUp} className={styles.closeBtn}>
                  Close
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className={styles.profile}>
          <div
            className={styles.profileIcon}
            onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
          >
            <img
              src="/src/ce4/Login.png"
              alt="Profile"
              className={styles.profilePic}
            />
          </div>
          {isProfileMenuOpen && (
            <div className={styles.sidebar}>
              {currentView === "menu" && (
                <>
                  <button
                    onClick={() => setCurrentView("profile")}
                    className={styles.menuItem}
                  >
                    Profile
                  </button>
                  <button
                    onClick={() => setCurrentView("help")}
                    className={styles.menuItem}
                  >
                    Help
                  </button>
                  <button
                    onClick={() => setCurrentView("support")}
                    className={styles.menuItem}
                  >
                    Support
                  </button>
                  <button onClick={handleLogout} className={styles.logoutBtn}>
                    Logout
                  </button>
                </>
              )}
              {currentView === "profile" && renderProfile()}
              {currentView === "help" && renderHelp()}
              {currentView === "support" && renderSupport()}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Login;
