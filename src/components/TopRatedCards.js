function CourseCards(props) {
    return (
        <div style={{position:"relative",width:"100%",backgroundColor:"#283142",height:"300px",color:"white",display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column"}}>
        <img src={props.imgsrc} style={{width:"100%",height:"150px"}}/>
        <div style={{flex:"1",padding:"10px"}}>
        <h6 style={{fontSize:"17px",marginBottom:"10px",marginTop:"40px"}}>DATA ANALYST</h6>
        <p style={{fontSize:"15px"}}>From Oxford University</p>
        <h6 style={{fontSize:"13px",marginTop:"10px"}}>COURSE</h6>
        </div>
       <img src="/images/google.png" style={{backgroundColor:"white",width:"60px",position:"absolute",top:"120px",left:"30px",cursor:"pointer"}}/>
       <h2  style={{bottom:"110px",position:"absolute",right:"20px",backgroundColor:props.bg,color:"white",fontSize:"15px",padding:"5px 10px",borderRadius:"10px"}}>{props.offer}</h2>
       
    </div>
    );
}

export default CourseCards;
