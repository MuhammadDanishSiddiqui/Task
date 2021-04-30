import '../App.css'
import React from "react"
function Testimonials() {
  return (
      <React.Fragment>
   <h3 className="section_head">TESTIMONIALS</h3>
   <h1 style={{color:"white",marginBottom:"80px",textAlign:"center",fontSize:"25px",letterSpacing:"2px"}}>STUDENTS SUCCESS</h1>
    <div className="testimonials_wrapper">
        <div className="testimonials_card blu">
        <img src="/images/stu-1.jpg" className="stu"/>
        <div className="bio">
        <h1 >John Doe</h1>
        <p>"such an excellent platform, guided me throigh all the time."</p>
        </div>
            <div className="job">
            <h2>NOW AT</h2>
            <p>Google | Web Developer</p>
            </div>
        </div>
        <div className="testimonials_card org">
        <img src="/images/stu-2.jpg" className="stu"/>
        <div className="bio">
        <h1>Betty Cooper</h1>
        <p>"I am satisfied with ozen, they provide great courses at cheap rates"</p>
        </div>
            <div className="job">
            <h2>NOW AT</h2>
            <p>Apple | Lead Backend</p>
            </div>
        </div>
        <div className="testimonials_card grn">
        <img src="/images/stu-3.jpg" className="stu"/>
        <div className="bio">
        <h1>Archie Andrews</h1>
        <p>"such an excellent platform, guided me throigh all the time."</p>
        </div>
            <div className="job">
            <h2>NOW AT</h2>
            <p>Microsoft | SQA Engineer</p>
            </div>
        </div>
    </div>
   </React.Fragment>
  );
}

export default Testimonials;
