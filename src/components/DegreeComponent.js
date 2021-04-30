import '../App.css'
import React from "react"
import Carousel from 'react-elastic-carousel'
import Item from './Items'
import DegreeCards from "./DegreeCards"


function DegreeComponent(props) {
    const breakPoints=[
        {width:1,itemsToShow:1},
        {width:551,itemsToShow:2},
        {width:700,itemsToShow:3},
        {width:1025,itemsToShow:4}
    ]
  return (
      <React.Fragment>
   <h3 className="section_head">{props.title}</h3>
   <h1 style={{color:"white",marginBottom:"80px",textAlign:"center",fontSize:"25px",letterSpacing:"2px"}}>{props.info}</h1>
   <Carousel breakPoints={breakPoints}>
        <Item>
            <DegreeCards imgsrc="/images/Degree-1.jpg" title="MASTERS IN ARTIFICIAL INTELLIGENCE" info="From Oxford University"/>
        </Item>
        <Item>
        <DegreeCards imgsrc="/images/Degree-2.jpg" title="DEPARTMENT OF DEVELOPMENT" info="From Stanford University"/>
        </Item>
        <Item>
        <DegreeCards imgsrc="/images/Degree-3.jpg" title="MASTERS IN MARKETTING MANAGEMENT" info="From Turkish University"/>
        </Item>
        <Item>
        <DegreeCards imgsrc="/images/Degree-4.webp" title="DATA ARCHITECT" info="From Oxford University"/>
        </Item>
        <Item>
        <DegreeCards imgsrc="/images/Degree-5.jpg" title="DATA SCIENTIST/ANALYS" info="From London University"/>
        </Item>
        
   </Carousel>
   </React.Fragment>
  );
}

export default DegreeComponent;
