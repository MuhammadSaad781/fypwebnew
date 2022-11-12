import React from "react";
import Navbar from "./Navbar";
import signup from "../images/signup.png";
import SignUpform from "./forms/SignUpform";

export default function SignUp() {
  return (
    <div>
      <Navbar />
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <img src={signup} class="rounded img-fluid m-5" alt="..." />
          </div>
          <div class="col mt-5">
            <SignUpform />
          </div>
        </div>
      </div>
    </div>
  );
}
