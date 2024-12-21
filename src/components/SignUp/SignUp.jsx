import { useState } from "react";
import "./SignUp.css";

const SignUp = ({ onSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    if (email && password) {
      onSignUp(email, password);
      setEmail("");
      setPassword("");
      alert("Account created successfully!");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="signup-container">
      <h2>Create New Account</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignUp;
