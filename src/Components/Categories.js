import React from "react";
import Navbar from "./Navbar";
import medical from "../images/medical.jpg";
export default function Categories() {
  return (
    <div>
      <Navbar />
      <div>
        {" "}
        <div class="container">
          <div class="row mt-5">
            <div class="col">
              <div class="card" style={{ width: "80%", borderRadius: "50px" }}>
                <img
                  src={medical}
                  class="card-img-top"
                  alt="..."
                  style={{ borderRadius: "50px" }}
                />
                <div
                  class="card-body "
                  style={{
                    backgroundColor: "#242F9B",
                    color: "white",

                    borderBottomLeftRadius: "50px",
                    borderBottomRightRadius: "50px",
                  }}
                >
                  <p class="card-text text-center">Medical</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style={{ width: "80%", borderRadius: "50px" }}>
                <img
                  src={medical}
                  class="card-img-top"
                  alt="..."
                  style={{ borderRadius: "50px" }}
                />
                <div
                  class="card-body "
                  style={{
                    backgroundColor: "#242F9B",
                    color: "white",

                    borderBottomLeftRadius: "50px",
                    borderBottomRightRadius: "50px",
                  }}
                >
                  <p class="card-text text-center">Medical</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style={{ width: "80%", borderRadius: "50px" }}>
                <img
                  src={medical}
                  class="card-img-top"
                  alt="..."
                  style={{ borderRadius: "50px" }}
                />
                <div
                  class="card-body "
                  style={{
                    backgroundColor: "#242F9B",
                    color: "white",

                    borderBottomLeftRadius: "50px",
                    borderBottomRightRadius: "50px",
                  }}
                >
                  <p class="card-text text-center">Medical</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container mt-5">
          <div class="row">
            <div class="col">
              <div class="card" style={{ width: "80%", borderRadius: "50px" }}>
                <img
                  src={medical}
                  class="card-img-top"
                  alt="..."
                  style={{ borderRadius: "50px" }}
                />
                <div
                  class="card-body "
                  style={{
                    backgroundColor: "#242F9B",
                    color: "white",

                    borderBottomLeftRadius: "50px",
                    borderBottomRightRadius: "50px",
                  }}
                >
                  <p class="card-text text-center">Medical</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style={{ width: "80%", borderRadius: "50px" }}>
                <img
                  src={medical}
                  class="card-img-top"
                  alt="..."
                  style={{ borderRadius: "50px" }}
                />
                <div
                  class="card-body "
                  style={{
                    backgroundColor: "#242F9B",
                    color: "white",

                    borderBottomLeftRadius: "50px",
                    borderBottomRightRadius: "50px",
                  }}
                >
                  <p class="card-text text-center">Medical</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style={{ width: "80%", borderRadius: "50px" }}>
                <img
                  src={medical}
                  class="card-img-top"
                  alt="..."
                  style={{ borderRadius: "50px" }}
                />
                <div
                  class="card-body "
                  style={{
                    backgroundColor: "#242F9B",
                    color: "white",

                    borderBottomLeftRadius: "50px",
                    borderBottomRightRadius: "50px",
                  }}
                >
                  <p class="card-text text-center">Medical</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
