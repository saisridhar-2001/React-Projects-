import React, { useState } from 'react';
import Footer from "../Footer/index";
import "./Data.css";
import axios from "axios";
import Datatable from "./data table.js";

function Data() {
  const [gender, setGender] = useState("");
  const [score1, setScore1] = useState("");
  const [score2, setScore2] = useState("");
  const [score3, setScore3] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post("http://localhost:3001/submit-form", {
      gender,
      score1,
      score2,
      score3,
    });
    console.log(response);
    if (response.status === 200) {
      window.location.reload();
    }
  };

  

  return (
    <div className='About_container'>
      <nav className='nav_container'>
        <h1 className='nav_heading'>Data</h1>
        <img src="/images/Badal_logo.png"
             alt="Badal_logo" className="Badal_logo"/>
      </nav>
      <div>
        <div className="data">
        <Datatable/>
          <div className="form-container">
            <form className='item'onSubmit={handleSubmit}>
              <div>
                <div>
                  <label>Gender - </label>
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      checked={gender === "male"}
                      onChange={(e) => setGender(e.target.value)}
                      required
                    />
                  <label htmlFor="male">Male</label>
                  <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        checked={gender === "female"}
                        onChange={(e) => setGender(e.target.value)}
                        required
                      />
                  <label htmlFor="female">Female</label>
 
                </div>

              </div>
              <div>
                <label>Subject A - </label>
                <input
                  type="number"
                  name="subject1"
                  min="0"
                  max="100"
                  step="1"
                  value={score1}
                  onChange={(e) => setScore1(e.target.value)}

                  required
                />
              </div>
              <div>
                <label>Subject B - </label>
                <input
                  type="number"
                  name="subject2"
                  min="0"
                  max="100"
                  step="1"
                  value={score2}
                  onChange={(e) => setScore2(e.target.value)}

                  required
                />
              </div>
              <div>
                <label>Subject C - </label>
                <input
                  type="number"
                  name="subject3"
                  min="0"
                  max="100"
                  step="1"
                  value={score3}
                  onChange={(e) => setScore3(e.target.value)}
                  required
                />
              </div>
              <button className='button' type="submit">Submit</button>
            </form>
          </div>
          
    </div>            
            </div>
             <Footer />
        </div>
    );
};
export default Data;