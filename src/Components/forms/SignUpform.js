import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useForm } from "react-hook-form";
export default function SignUpform() {
  const {
    register,
    formState: { errors },

    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div class="col" style={{ marginLeft: "10%", marginTop: "4%" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="mb-3">
            <label
              class="form-label"
              style={{ color: "#242F9B", fontWeight: "bold" }}
            >
              Name
            </label>
            <input
              type="text"
              className="emailbox form-control border border-2 "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              style={{ borderRadius: "50px" }}
              {...register("Name", { required: "true" })}
            />
            <p>
              {errors.Name ? (
                <p style={{ color: "red" }}>This field is required</p>
              ) : null}
            </p>
          </div>
          <div class="mb-3">
            <label
              class="form-label"
              style={{ color: "#242F9B", fontWeight: "bold" }}
            >
              Email address
            </label>
            <input
              type="email"
              class="emailbox form-control border border-2 "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              style={{ borderRadius: "50px" }}
              {...register("Email", { required: "true" })}
            />
            <p>
              {errors.Email ? (
                <p style={{ color: "red" }}>This field is required</p>
              ) : null}
            </p>
          </div>
          <div class="mb-3">
            <label
              class="form-label"
              style={{ color: "#242F9B", fontWeight: "bold" }}
            >
              Password
            </label>
            <input
              type="password"
              class="form-control border border-2"
              id="exampleInputPassword1"
              style={{ borderRadius: "50px" }}
              {...register("Password", { required: "true" })}
            />
            <p>
              {errors.Password ? (
                <p style={{ color: "red" }}>This field is required</p>
              ) : null}
            </p>
          </div>
          <div class="mb-3">
            <label
              class="form-label"
              style={{ color: "#242F9B", fontWeight: "bold" }}
            >
              Confirm Password
            </label>
            <input
              type="password"
              class="form-control border border-2"
              id="exampleInputPassword1"
              style={{ borderRadius: "50px" }}
              {...register("ConfirmPassword", { required: "true" })}
            />
            <p>
              {errors.ConfirmPassword ? (
                <p style={{ color: "red" }}>This field is required</p>
              ) : null}
            </p>
          </div>
          <div class="mb-3">
            <label
              class="form-label"
              style={{ color: "#242F9B", fontWeight: "bold" }}
            >
              Profile Picture
            </label>
            <input
              type="file"
              class="form-control border border-2"
              id="exampleInputPassword1"
              style={{ borderRadius: "50px" }}
              {...register("file", { required: "true" })}
            />
            <p>
              {errors.file ? (
                <p style={{ color: "red" }}>This field is required</p>
              ) : null}
            </p>
          </div>

          <a href="">
            <div
              style={{
                width: "100%",
                height: "10%",
                backgroundColor: "#242F9B",
                borderRadius: "50px",
              }}
            >
              <button
                type="submit"
                class="btn btn-lg btn-block"
                style={{
                  backgroundColor: "#242F9B",
                  color: "white",
                }}
              >
                Sign Up
              </button>
            </div>
          </a>
        </form>

        <p
          class="text-start"
          style={{
            fontWeight: "bold",
            marginTop: "1rem",
            color: "#242F9B",
            fontSize: 20,
          }}
        >
          Or Sign Up With
        </p>
        <h1 class="text-start">
          <a href="">
            <FcGoogle />
          </a>

          <a href="">
            <BsFacebook style={{ margin: "1rem", color: "#242F9B" }} />
          </a>
        </h1>
      </div>
    </div>
  );
}
