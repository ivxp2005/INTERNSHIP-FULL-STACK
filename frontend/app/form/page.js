"use client"; // For Next.js 13+ App Router

import { useEffect, useState } from "react";
import axios from "axios";
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Fetch /about endpoint from backend and log the response
    axios.get('http://localhost:3001/about')
      .then((response) => {
        console.log('About endpoint response:', response.data);
        if (response.data && response.data.data) {
          console.log('Person:', response.data.data);
        }
      })
      .catch((error) => {
        console.log('Backend error:', error);
      });
  }, []);

  const handleNameChange = (e) => {
    //console.log(e,"event");
    console.log(name, "name");
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    console.log(email, "email");
    setEmail(e.target.value);
  };



  const handleSubmit = async(e) => {
    e.preventDefault();
    let data = {name,email};
    const submit = await axios.post('http://localhost:3001/submit', data);
    console.log(submit.data, "submit response");
    console.log(name, email); // Log form data to frontend console
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #181824 0%, #23243a 100%)",
        fontFamily: "Inter, sans-serif",
        position: "relative",
      }}
    >
      {/* Left emoji pattern */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          pointerEvents: "none",
          userSelect: "none",
          fontSize: "2rem",
          opacity: 0.55,
        }}
      >
        <span>🎮</span>
        <span>🕹️</span>
        <span>🕶️</span>
        <span>🎮</span>
        <span>🕹️</span>
      </div>

      {/* Right emoji pattern */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          pointerEvents: "none",
          userSelect: "none",
          fontSize: "2rem",
          opacity: 0.55,
        }}
      >
        <span>🕶️</span>
        <span>🎮</span>
        <span>🕹️</span>
        <span>🕶️</span>
        <span>🎮</span>
      </div>

      <form
        onSubmit={handleSubmit}
        style={{
          background: "#23243a",
          borderRadius: "18px",
          boxShadow: "0 6px 32px 0 rgba(0,0,0,0.40)",
          padding: "40px 32px 32px 32px",
          minWidth: "340px",
          maxWidth: "90vw",
          display: "flex",
          flexDirection: "column",
          gap: "22px",
          border: "1.5px solid #282a36",
          zIndex: 1,
        }}
      >
        <h2
          style={{
            margin: 0,
            marginBottom: "10px",
            fontWeight: 700,
            fontSize: "2rem",
            color: "#f8f8f2",
            letterSpacing: "-1px",
            textAlign: "center",
            textShadow: "0 2px 12px #18182499",
          }}
        >
          Simple Form
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label htmlFor="name" style={{ fontWeight: 500, color: "#bfc7d5", letterSpacing: "0.5px" }}>Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
            required
            placeholder="Your name"
            style={{
              padding: "12px 14px",
              borderRadius: "8px",
              border: "1.5px solid #35364a",
              fontSize: "1rem",
              outline: "none",
              transition: "border 0.2s, background 0.2s",
              background: "#181824",
              color: "#f8f8f2",
              boxShadow: "0 1px 4px 0 #0002",
            }}
            onFocus={e => (e.target.style.border = "1.5px solid #7c3aed")}
            onBlur={e => (e.target.style.border = "1.5px solid #35364a")}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label htmlFor="email" style={{ fontWeight: 500, color: "#bfc7d5", letterSpacing: "0.5px" }}>Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
            placeholder="you@email.com"
            style={{
              padding: "12px 14px",
              borderRadius: "8px",
              border: "1.5px solid #35364a",
              fontSize: "1rem",
              outline: "none",
              transition: "border 0.2s, background 0.2s",
              background: "#181824",
              color: "#f8f8f2",
              boxShadow: "0 1px 4px 0 #0002",
            }}
            onFocus={e => (e.target.style.border = "1.5px solid #7c3aed")}
            onBlur={e => (e.target.style.border = "1.5px solid #35364a")}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "13px 0",
            background: "linear-gradient(90deg, #7c3aed 0%, #23243a 100%)",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontWeight: 600,
            fontSize: "1.1rem",
            cursor: "pointer",
            boxShadow: "0 2px 8px 0 #7c3aed33",
            transition: "background 0.2s, transform 0.1s",
            letterSpacing: "0.5px",
            marginTop: "10px",
          }}
          onMouseOver={e => (e.target.style.background = "linear-gradient(90deg, #23243a 0%, #7c3aed 100%)")}
          onMouseOut={e => (e.target.style.background = "linear-gradient(90deg, #7c3aed 0%, #23243a 100%)")}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
