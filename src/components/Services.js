import '../App.css'
import React from "react"
function Services() {
  return (
      <React.Fragment>
   <h3 className="section_head">FEATURES</h3>
   <h1 style={{color:"white",marginBottom:"80px",textAlign:"center",fontSize:"25px",letterSpacing:"2px"}}>SERVICES WE OFFER</h1>
   <div className="Service_wrapper">
    <div className="services grn">
        <h3 style={{color:"#60D69A",margin:"20px 0"}}>Service LOGO</h3>
        <h2 style={{marginBottom:"20px"}}>Get employement skills</h2>
        <p>Our quality curriculum is designed with top-tier industry partners, not academics, so you learn the high-impact skills that top companies want</p>
        </div>
        <div className="services org">
        <h3 style={{color:"#F7B63A",margin:"20px 0"}}>Service LOGO</h3>
        <h2 style={{marginBottom:"20px"}}>Learn to work on schedule</h2>
        <p>Self-paced learning - whenever and wherever you want. Graduate while learning part-time for 10 hrs/week.</p>
        </div>
        <div className="services blu">
        <h3 style={{color:"#4C569E",margin:"20px 0"}}>Service LOGO</h3>
        <h2 style={{marginBottom:"20px"}}>Project Based Learning</h2>
        <p>Learn by doing with real-world projects and other hands-on exercises that lead to real skills mastery.</p>
        </div>
   </div>
   
   </React.Fragment>
  );
}

export default Services;
