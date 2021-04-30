import '../App.css'
import React from "react"
import Carousel from 'react-elastic-carousel'
import Item from './Items'
import CourseCards from "./CourseCards"


function CourseComponent() {
    const breakPoints=[
        {width:1,itemsToShow:1},
        {width:551,itemsToShow:2},
        {width:700,itemsToShow:3},
        {width:1025,itemsToShow:4}
    ]
  return (
      <React.Fragment>
   <h3 className="section_head">COURSE</h3>
   <h1 style={{color:"white",marginBottom:"80px",textAlign:"center",fontSize:"25px",letterSpacing:"2px"}}>TRY OUR FREE COURSES</h1>
   <Carousel breakPoints={breakPoints}>
        <Item>
            <CourseCards brandsrc="/images/ibm.png" imgsrc="/images/course-1.png" title="
            DATA ANALYST" info="IBM" footer="Professional Certificate"/>
        </Item>
        <Item>
        <CourseCards brandsrc="/images/standfornd.png" imgsrc="/images/course-2.png" title="
        DATA SCIENTIST" info="Stanford University" footer="Degree Program"/>
        </Item>
        <Item>
        <CourseCards brandsrc="/images/google.png" imgsrc="/images/course-3.png" title="MACHINE LEARNING EXPERT" info="Google" footer="Professional Certificate"/>
        </Item>
        <Item>
        <CourseCards brandsrc="/images/ibm.png" imgsrc="/images/Degree-1.jpg" title="
        BACHELOR'S IN AI" info="IBM" footer="Degree Program"/>
        </Item>
        <Item>
        <CourseCards imgsrc="/images/course-4.jpg" title="
        PROGRAMMING EXPERT" info="Google" footer="Professional Certificate"/>
        </Item>
        
   </Carousel>
   </React.Fragment>
  );
}

export default CourseComponent;
