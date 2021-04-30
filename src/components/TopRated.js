import '../App.css'
import React from "react"
import Carousel from 'react-elastic-carousel'
import Item from './Items'
import TopRatedCards from "./TopRatedCards"


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
   <h1 style={{color:"white",marginBottom:"80px",textAlign:"center",fontSize:"25px",letterSpacing:"2px"}}>TOP RATED COURSES</h1>
   <Carousel breakPoints={breakPoints}>
        <Item>
            <TopRatedCards offer="FREE" bg="#F7B63A" brandsrc="/images/ibm.png" imgsrc="/images/course-1.png" />
        </Item>
        <Item>
        <TopRatedCards offer="FREE" bg="#D65108" brandsrc="/images/standfornd.png" imgsrc="/images/course-2.png" />
        </Item>
        <Item>
        <TopRatedCards offer="FREE" bg="#D65108" brandsrc="/images/google.png" imgsrc="/images/course-3.png" />
        </Item>
        <Item>
        <TopRatedCards offer="FREE" bg="#F7B63A" brandsrc="/images/ibm.png" imgsrc="/images/Degree-1.jpg" />
        </Item>
        <Item>
        <TopRatedCards offer="FREE" bg="#D65108" imgsrc="/images/course-4.jpg" />
        </Item>
        
   </Carousel>
   </React.Fragment>
  );
}

export default CourseComponent;
