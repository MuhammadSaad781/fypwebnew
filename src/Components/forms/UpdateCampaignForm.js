import React from "react";
import { useForm } from "react-hook-form";
export default function UpdateCampaignForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div class="newcampaigninputs col-6 mx-auto" style={{ marginLeft: "5%" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="mb-3">
            <label
              for="exampleInputEmail1"
              class="form-label"
              style={{ color: "#242F9B", fontWeight: "bold" }}
            >
              Title
            </label>
            <input
              type="text"
              class="text form-control border border-2 "
              style={{ borderRadius: "50px" }}
              {...register("Title", { required: "true" })}
            />
            <p>
              {errors.To ? (
                <p style={{ color: "red" }}>This field is required</p>
              ) : null}
            </p>
          </div>
          <div class="mb-3">
            <label
              class="form-label"
              style={{ color: "#242F9B", fontWeight: "bold" }}
            >
              End Date
            </label>
            <input
              type="date"
              class="form-control border border-2"
              style={{ borderRadius: "50px" }}
              {...register("EndDate", { required: "true" })}
            />
            <p>
              {errors.From ? (
                <p style={{ color: "red" }}>This field is required</p>
              ) : null}
            </p>
          </div>
          <div class="mb-3">
            <label
              class="form-label"
              style={{ color: "#242F9B", fontWeight: "bold" }}
            >
              Wallet address
            </label>
            <input
              type="text"
              class="form-control border border-2"
              style={{ borderRadius: "50px" }}
              {...register("WalletAddress", { required: "true" })}
            />
            <p>
              {errors.Amount ? (
                <p style={{ color: "red" }}>This field is required</p>
              ) : null}
            </p>
          </div>
          <label
            class="form-label"
            style={{ color: "#242F9B", fontWeight: "bold" }}
          >
            Category
          </label>
          <div class="input-group mb-3 ">
            <select
              class="custom-select  border border-2 rounded-4"
              id="inputGroupSelect02"
              style={{
                height: 35,
                width: 300,
                color: "#242F9B",
                fontWeight: "bold",
              }}
              {...register("Category", { required: "true" })}
            >
              <option></option>
              <option value="Technical" style={{ fontWeight: "bold" }}>
                Technical
              </option>
              <option value="Art" style={{ fontWeight: "bold" }}>
                Art
              </option>
              <option value="Medical" style={{ fontWeight: "bold" }}>
                Medical
              </option>
              <option value="Music" style={{ fontWeight: "bold" }}>
                Music
              </option>
              <option value="Game" style={{ fontWeight: "bold" }}>
                Game
              </option>
            </select>
          </div>
          <div class="mb-3">
            <label
              class="form-label"
              style={{ color: "#242F9B", fontWeight: "bold" }}
            >
              Description
            </label>
            <textarea
              type="text"
              class="form-control border border-2"
              style={{ borderRadius: "30px", height: 300 }}
              {...register("Description", { required: "true" })}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              class="text-center"
              style={{
                width: "30%",
                height: "10%",
                backgroundColor: "#FFC107",
                borderRadius: "50px",
                marginBottom: 20,
              }}
            >
              <button
                type="submit"
                class="btn btn-lg btn-block "
                style={{
                  backgroundColor: "#FFC107",
                  color: "black",
                }}
              >
                Update Campaign
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
