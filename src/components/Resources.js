import '../App.css'
import React from "react"
function Resources() {
  return (
      <React.Fragment>
   <h3 className="section_head">RESOURCES</h3>
   <h1 style={{color:"white",marginBottom:"80px",textAlign:"center",fontSize:"25px",letterSpacing:"2px"}}>EXPLORE OUR RESOURCES</h1>
    <div className="resources_wrapper">
    <div className="resource_img">
    <img src="/images/resources.jpg"/>
    </div>
    <div className="resource_detail">
      <h1 style={{fontSize:"25px",marginBottom:"15px"}}>Make the most of your online learning experience</h1>
   <p style={{color:"#A7BAD2",marginBottom:"15px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
   <button>EXPLORE RESOURCES</button>   
   </div>
    </div>
   </React.Fragment>
  );
}

export default Resources;
