import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Data from "./Data";


function AddRecord() {
  let navigate = useHistory();
  const [formData, setFormData] = useState({
    id: "",
    Name: "",
    Age: "",
    Contact: "",
    Email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if(formData.Name!=="" && formData.Age!=="" && formData.Contact!=="" && formData.Email!=="")
    {
      Data.push(formData);
      navigate('/admin/Dashboard')
    }
    else{
      alert("Kindly fill all the details");
    }
  };

  return (
    <div style={{ textAlign: "-webkit-center", paddingTop: "100px" }}>
      <div className="model_box" style={{ border: "solid", width: "50%" }}>
        <form style={{ padding: "40px" }}>
          <div class="form-group">
            <input required
              id="name"
              name="Name"
              type="string"
              class="form-control"
              placeholder="Enter Name"
              onChange={handleChange}
              
            />
          </div>
          <div class="form-group mt-3">
            <input required
              id="age"
              name="Age"
              type="number"
              class="form-control"
              placeholder="Enter Age"
              onChange={handleChange}
            />
          </div>
          <div class="form-group mt-3">
            <input required
              id="contact"
              name="Contact"
              type="Number"
              class="form-control"
              placeholder="Enter Contact Number"
              onChange={handleChange}
            />
          </div>
          <div class="form-group mt-3">
            <input required
              id="email"
              name="Email"
              type="string"
              class="form-control"
              placeholder="Enter Email"
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            class="btn btn-success mt-4"
            onClick={onSubmitHandler}
          >
            Add Record
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddRecord;
