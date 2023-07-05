import { TextField, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useState } from "react";
import OverlayLoader from "src/common/OverlayLoader";
import "./RegisterUser.css";
import { Email } from "@mui/icons-material";
import { registerUser } from "src/services/ApiService";
import { size } from "lodash";

export default function RegisterUserPage() {
  const [firstName, setfirstName] = useState();
  const [middleName, setmiddleName] = useState();
  const [lastName, setlastName] = useState();
  const [dateOfBirth, setdateOfBirth] = useState();
  const [contactNumber, setcontactNumber] = useState();
  const [email, setEmail] = useState();
  const [address, setaddress] = useState();
  const [highestEducation, sethighestEducation] = useState();
  const [workExperience, setworkExperience] = useState();
  const [expectedSalary, setexpectedSalary] = useState();
  const [workAutherization, setworkAuthorization] = useState();
  const [preferredmodeofwork, setpreferredmodeofwork] = useState();
  const [preferredcountry, setpreferredcountry] = useState();
  const [jobSearchLocationPreference, setjobSearchLocationPreference] =useState();
  const [technology, settechnology] = useState();

  const [showLoading, setLoading] = useState(false);

  const handlefirstNameChange = (e) => {
    setfirstName(e.target.value);
  };
  const handlemiddleNameChange = (e) => {
    setmiddleName(e.target.value);
  };
  const handlelastNameChange = (e) => {
    setlastName(e.target.value);
  };
  const handledateOfBirthChange = (e) => {
    setdateOfBirth(e.target.value);
  };
  const handlecontactNumberChange = (e) => {
    setcontactNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleaddressChange = (e) => {
    setaddress(e.target.value);
  };
  const handlehighestEducationChange = (e) => {
    sethighestEducation(e.target.value);
  };
  const handleworkExperienceChange = (e) => {
    setworkExperience(e.target.value);
  };
  const handletechnologyChange = (e) => {
    settechnology(e.target.value);
  };
  const handleexpectedSalaryChange = (e) => {
    setexpectedSalary(e.target.value);
  };
  const workAutherizationChange = (e) => {
    setworkAuthorization(e.target.value);
  };
  const preferredcountryChange = (e) => {
    setpreferredcountry(e.target.value);
  };
  const preferredmodeofworkChange=(e)=>{
    setpreferredmodeofwork(e.target.value);
  }
  const handlejobSearchLocationPreferenceChange = (e) => {
    setjobSearchLocationPreference(e.target.value);
  };
  const handleSubmit = () => {
    const payload = {
      firstName: firstName,
      lastName: lastName,
      middleName: middleName,
      dateOfBirth: dateOfBirth,
      contactNumber: contactNumber,
      email: email,
       address: address,
      highestEducation: highestEducation,
      workExperience: workExperience,
      technology: technology,
     preferredmodeofwork:preferredmodeofwork,
     preferredcountry:preferredcountry,
      expectedSalary: expectedSalary,
      workAutherization: workAutherization,
      jobSearchLocationPreference: jobSearchLocationPreference,
    };

    console.log(payload);

    registerUser(payload)
      .then((res) => {
        console.log(res);
        // Have to show successful notification
        // Clearout all the input fields

      })
      .catch((err) => {
        console.log(err);
      });
   };

  return (
    <div style={{ maxWidth: 900, margin: "0 auto" ,backgroundColor:"#fff"}}>
      {showLoading && <OverlayLoader show={true} />}
      <div className="header">
        <Typography variant="h5">Placement-Registration</Typography>
      </div>
      {/* <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link
          to="/suchi/home"
          color="inherit"
          underline="hover"
          style={{ textDecoration: "none" }}
        >
          <Typography variant="label">Home</Typography>
        </Link>
        <Typography variant="h6">Register User</Typography>
      </Breadcrumbs> */}
      
      <div
        style={{
          
          display: "flex",
        
          justifyContent: "center",
          // padding: 20,
          backgroundColor:"#9e6f6f2b",
          color:"black",
          margin: 0,
          borderRadius:0,
    //       background: var(--office-form-aio-renderer-background);
    // color: var(--palette-text-primary);
    // padding: 1.25rem 1.875rem 4.375rem;
    // position: relative;
    // text-align: left;
    // outline: transparent solid 0.0625rem;
        
        }}
      >
        <div style={{ width: "70%", margin:"5" }}>
          <div className="form-property">
            <label className="form-label" >1.First Name *</label>
            <div className="form-field">
              <TextField style={{backgroundColor:"white" }}
                type="text"
                size="small"
                
                fullWidth
                sx={{ mb: 1 }}
                name="name"
                value={firstName}
                placeholder="Enter Your Answer"
                onChange={handlefirstNameChange}
              ></TextField>
            </div>
          </div>
          <div className="form-property">
            <label className="form-label">2.Middle Name </label>
            <div className="form-field">
              <TextField style={{backgroundColor:"white" }}
                type="text"
                size="small"
                fullWidth
                sx={{ mb: 1 }}
                name="MiddlenName"
                value={middleName}
                placeholder="Enter Your Answer"
                onChange={handlemiddleNameChange}
              ></TextField>
            </div>
          </div>
          <div className="form-property">
            <label className="form-label">3.Last Name *</label>
            <div className="form-field" >
              <TextField style={{backgroundColor:"white" }}
                type="text"
                size="small"
                fullWidth
                sx={{ mb: 1 }}
                name="Last Name"
                value={lastName}
                placeholder="Enter Your Answer"
                onChange={handlelastNameChange}
              ></TextField>
            </div>
          </div>
          <div className="form-property">
            <label className="form-label">4.Date Of Birth</label>
            <div className="form-field">
              <TextField style={{backgroundColor:"white" }}
                type="date"
                size="small"
                fullWidth
                sx={{ mb: 1 }}
                name="DateOfBirth"
                value={dateOfBirth}
                placeholder="Please Input Data (M/d/yyyy)"
                onChange={handledateOfBirthChange}
              ></TextField>
            </div>
          </div>
    <div className="form-property">
            <label className="form-label">5.Contact Number</label>
            <div className="form-field">
              <TextField style={{backgroundColor:"white" }}
                type="number"
                size="small"
                fullWidth
                sx={{ mb: 1 }}
                name="Contact Number"
                value={contactNumber}
                placeholder="The Value Must Be a Number"
                onChange={handlecontactNumberChange}
              ></TextField>
            </div>
          </div>

          <div className="form-property">
            <label className="form-label">6.E-mail</label>
            <div className="form-field">
              <TextField style={{backgroundColor:"white" }}
                type="email"
                size="small"
                fullWidth
                sx={{ mb: 1 }}
                name="email"
                value={email}
                placeholder="Enter Your Answer"
                onChange={handleEmailChange}
              ></TextField>
            </div>
          </div>
          <div className="form-property">
            <label className="form-label">7.Address</label>
            <div className="form-field">
              <TextField style={{backgroundColor:"white" }}
                type="text"
                size="small"
                fullWidth
                sx={{ mb: 1 }}
                name="address"
                value={address}
                placeholder="Enter Your Answer"
                onChange={handleaddressChange}
              ></TextField>
            </div>
          </div>
          <div className="form-property">
            <label className="form-label">8.Highest Education</label>
            <div className="form-field">
              <TextField style={{backgroundColor:"white" }}
                type="text"
                size="small"
                fullWidth
                sx={{ mb: 1 }}
                name="Highest Education
                "
                value={highestEducation}
                placeholder="Enter Your Answer"
                onChange={handlehighestEducationChange}
              ></TextField>
            </div>
          </div>
          <div className="form-property">
            <label className="form-label">9.Work Experience</label>
            <div className="form-field">
              <TextField style={{backgroundColor:"white" }}
                type="text"
                size="small"
                fullWidth
                sx={{ mb: 1 }}
                name="WorkExperience"
                value={workExperience}
                placeholder="Enter Your Answer"
                onChange={handleworkExperienceChange}
              ></TextField>
            </div>
          </div>
          <div className="form-property">
            <label className="form-label">10.Technology</label>
            <div className="form-field">
              <TextField style={{backgroundColor:"white" }}
                type="text"
                size="small"
                fullWidth
                sx={{ mb: 1 }}
                name="technology"
                value={technology}
                placeholder="Enter Your Answer"
                onChange={handletechnologyChange}
              ></TextField>
            </div>
          </div>
          <div className="form-property">
            <label className="form-label">11.Preferred Mode Of Work</label>
            <div className="form-field">
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Onsite"
                  name="radio-buttons-group"
                  onChange={preferredmodeofworkChange}
                >
                  <FormControlLabel
                    value="Onsite"
                    control={<Radio />}
                    label="Onsite"
                  />
                  <FormControlLabel
                    value="Remote"
                    control={<Radio />}
                    label="Remote"
                  />
                  <FormControlLabel
                    value="Hybrid"
                    control={<Radio />}
                    label="Hybrid"
                  />
                  <FormControlLabel
                    value="Other"
                    control={<Radio />}
                    label="Other"
                    type="text"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <div className="form-property">
            <label className="form-label">12.Preferred Country</label>
            <div className="form-field">
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="USA"
                  name="radio-buttons-group"
                  onChange={preferredcountryChange}
                >
                  <FormControlLabel
                    value="USA"
                    control={<Radio />}
                    label="USA"
                  />
                  <FormControlLabel
                    value="CANADA"
                    control={<Radio />}
                    label="CANADA"
                  />
                  <FormControlLabel
                    value="INDIA"
                    control={<Radio />}
                    label="INDIA"
                  />

                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <div className="form-property">
            <label className="form-label">13.Expected Salary(per annum / per hour) </label>
            <div className="form-field">
              <TextField style={{backgroundColor:"white" }}
                type="text"
                size="small"
                fullWidth
                sx={{ mb: 1 }}
                name="expectedSalary"
                value={expectedSalary}
                placeholder="Enter Your Answer"
                onChange={handleexpectedSalaryChange}
              ></TextField>
            </div>
          </div>
          <div className="form-property">
            <label className="form-label">14.Work authorization</label>
            <div className="form-field">
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="H1B (USA)"
                  name="radio-buttons-group"
                  onChange={workAutherizationChange}
                
                >
                  <FormControlLabel
                    value="H1B (USA)"
                    control={<Radio />}
                    label="H1B (USA)"
                  />
                  <FormControlLabel
                    value="EAD (USA)"
                    control={<Radio />}
                    label="EAD (USA)"
                  />
                  <FormControlLabel
                    value="GC (USA)"
                    control={<Radio />}
                    label="GC (USA)"
                  />
                  <FormControlLabel
                    value="Citizenship (USA / CANADA)"
                    control={<Radio />}
                    label="Citizenship (USA / CANADA)"
                  />
                   <FormControlLabel
                    value="TN Visa (USA))"
                    control={<Radio />}
                    label="TN Visa (USA)"
                  />
                   <FormControlLabel
                    value="Work Permit(CANADA)"
                    control={<Radio />}
                    label="Work Permit(CANADA)"
                  />
                  <FormControlLabel
                    value=" PR (CANADA)"
                    control={<Radio />}
                    label="PR (CANADA)"
                  />
                  <FormControlLabel
                    value="Other"
                    control={<Radio />}
                    label="Other"
                    type="text"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
       
          <div className="form-property">
            <label className="form-label"> 15.Job Search location preference (if any) </label>
            <div className="form-field">
              <TextField style={{backgroundColor:"white" }}
                type="text"
                size="small"
                fullWidth
                sx={{ mb: 1 }}
                name="job Search Location Preference"
                value={jobSearchLocationPreference}
                placeholder="Enter Your Answer"
                onChange={handlejobSearchLocationPreferenceChange}
              ></TextField>
            </div>
          </div>
          
          
        
      </div>
      </div>
      <div style={{ textAlign: "right",backgroundColor:"#9e6f6f2b" }}>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
        {/* <button className="btn btn-primary" onClick={() => handleSubmit(true)}>
          Sign and Submit
        </button> */}
      </div>
    </div>
  );
}
