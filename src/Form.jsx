import { useState, useEffect } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  // Load saved data when component mounts
  useEffect(() => {
    const savedUser = localStorage.getItem("registerUser");
    if (savedUser) {
      setFormData(JSON.parse(savedUser));
    }
  }, []);

  // Save data whenever form changes
  useEffect(() => {
    localStorage.setItem("registerUser", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing users array
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Add new user
    const updatedUsers = [...existingUsers, formData];

    // Save updated users list
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("User Registered Successfully!");

    // Clear form
    setFormData({
      name: "",
      email: "",
      password: ""
    });

    // Remove draft data
    localStorage.removeItem("registerUser");
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Register</h2>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to bottom right, #0f0c29, #302b63, #24243e)"
  },
  form: {
    background: "rgba(255,255,255,0.05)",
    padding: "30px",
    borderRadius: "10px",
    backdropFilter: "blur(10px)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "300px",
    color: "white"
  }
};

export default Form;