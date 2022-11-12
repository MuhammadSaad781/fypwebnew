import React from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <nav class="navbar navbar-expand-lg ">
          <div class="container-fluid">
            <div
              class="navbar-brand"
              style={{ color: "white", marginLeft: 100, cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              Funderrr
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-end"
              style={{ marginRight: 50 }}
              id="navbarText"
            >
              <ul class="navbar-nav m-1">
                <li class="nav-item">
                  <div
                    style={{
                      color: "white",
                      textDecoration: "none",
                      paddingRight: 40,
                      cursor: "pointer",
                    }}
                    onClick={() => navigate("/HowitWorks")}
                  >
                    How it works?
                  </div>
                </li>
                <li class="nav-item">
                  <div
                    style={{
                      color: "white",
                      textDecoration: "none",
                      paddingRight: 40,
                      cursor: "pointer",
                    }}
                    onClick={() => navigate("/Categories")}
                  >
                    Categories
                  </div>
                </li>
                <li class="nav-item">
                  <div
                    style={{
                      color: "white",
                      textDecoration: "none",
                      paddingRight: 40,
                      cursor: "pointer",
                    }}
                    onClick={() => navigate("/SignIn")}
                  >
                    Sign In
                  </div>
                </li>
                <li class="nav-item">
                  <div
                    style={{
                      color: "white",
                      textDecoration: "none",
                      paddingRight: 100,
                      cursor: "pointer",
                    }}
                    onClick={() => navigate("/SignUp")}
                  >
                    Sign Up
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
