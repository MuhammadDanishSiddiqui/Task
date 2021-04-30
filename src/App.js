import React from "react"
import './App.css';
import Header from "./components/Header"
import BannerCards from "./components/BannerCards"
import DegreeComponont from "./components/DegreeComponent"
import CourseComponont from "./components/CourseComponent"
import CategoriesComponont from "./components/CategoriesComponent"
import TopRated from "./components/TopRated"
import Services from "./components/Services"
import Resources from "./components/Resources"
import Testimonials from "./components/Testimonials"
import banner from "./assets/images/banner.png"

function App() {
  return (
    <React.Fragment>
      <Header/>
      <div className="banner">
        <div className="left_side">
          <h1>The latest online platform, within your reach.</h1>
          <p>Discover the fastest, most effective way to gain job-guranteed expertise for your careers of the future</p> 
          </div>
        <div className="right_side">
         <img src={banner} alt="banner"/>
        </div>
      </div>
      <BannerCards/>
      <DegreeComponont title="DEGREE" info={"OUR DEGREE PROGRAMS"}/>
      <CourseComponont/>
      <DegreeComponont title="CERTIFICATE" info={"OUR CERTIFICATE PROGRAMS"}/>
      <CategoriesComponont imgsrc="/images/category-1.png"/>
      <TopRated/>
      <Services/>
      <Resources/>
      <Testimonials/>
    </React.Fragment>
  );
}

export default App;
