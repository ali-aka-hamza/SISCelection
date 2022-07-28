import React from "react";
import "./register.css";
function RegisterPanel() {
    return(
        <div class="fdiv">
       <div class="form-style-10">
<h1>Register Panel Now!<span>Please provide details of everyone</span></h1>
<form>
    <div class="section"><span>1</span>Name and Address</div>
    <div class="inner-wrap">
        <label>Your Full Name <input type="text" name="field1" /></label>
        <label>Address <textarea name="field2"></textarea></label>
    </div>
    <div class="section"><span>2</span>Email and Phone</div>
    <div class="inner-wrap">
        <label>Email Address <input type="email" name="field3" /></label>
        <label>Phone Number <input type="text" name="field4" /></label>
    </div>

    <div class="section"><span>3</span>Personal Details</div>
        <div class="inner-wrap">
        <label>Department<input type="text" name="field5" /></label>
        <label>Semester<input type="text" name="field6" /></label>
        <label>CGPA<input type="text" name="field7" /></label>
    </div>
    <div class="button-section">
    {/* <span class="privacy-policy">
     <input type="checkbox" name="field7" placeholder="You agree to our Terms and Policy."></input>
     </span> */}
     <input type="Submit" name="Sign Up" />
    
    </div>
</form>
</div>
</div>
    );
  };
  
export default RegisterPanel;