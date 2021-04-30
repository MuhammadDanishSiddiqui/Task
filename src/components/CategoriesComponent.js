import '../App.css'
import React from "react"
import Carousel from 'react-elastic-carousel'
import Item from './Items'
import CategoriesCards from "./CategoriesCards"


function CategoriesComponent(props) {
    const breakPoints=[
        {width:1,itemsToShow:1},
        {width:551,itemsToShow:2},
        {width:700,itemsToShow:3},
        {width:1025,itemsToShow:4}
    ]
  return (
      <React.Fragment>
   <h3 className="section_head">COURSES</h3>
   <h1 style={{color:"white",marginBottom:"80px",textAlign:"center",fontSize:"25px",letterSpacing:"2px"}}>EXPLORE OZEN COURSE CATEGORIES</h1>
   <Carousel breakPoints={breakPoints}>
        <Item>
            <CategoriesCards imgsrc="/images/category-1.png" course="MATHS & LOGICS" ncourses="100 courses" title="MASTERS IN ARTIFICIAL INTELLIGENCE" info="From Oxford University"/>
        </Item>
        <Item>
        <CategoriesCards imgsrc="/images/category-2.png" course="DATA SCIENCE" ncourses="420 courses"/>
        </Item>
        <Item>
        <CategoriesCards imgsrc="/images/category-3.png" course="COPMUTER SCIENCE" ncourses="500 courses"/>
        </Item>
        <Item>
        <CategoriesCards imgsrc="/images/category-4.png" course="ATRS & HUMANITIES" ncourses="12 courses"/>
        </Item>
        <Item>
        <CategoriesCards imgsrc="/images/category-6.png" course="PHISICAL SCIENCE & FITNESS" ncourses="300 courses"/>
        </Item>
        
   </Carousel>
   </React.Fragment>
  );
}

export default CategoriesComponent;
