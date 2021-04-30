function CourseCards(props) {
    return (
        <div style={{position:"relative",width:"100%",backgroundColor:"#283142",height:"350px",color:"white",display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column"}}>
        <img src={props.imgsrc} style={{width:"100%",height:"150px",borderRadius:"100% 0% 100% 0% / 0% 38% 62% 100% "}}/>
        <div style={{flex:"1",padding:"10px"}}>
        <h6 style={{fontSize:"17px",marginBottom:"10px",marginTop:"40px"}}>{props.title}</h6>
        <p style={{fontSize:"15px"}}>{props.info}</p>
        </div>
       <img src={props.brandsrc} style={{backgroundColor:"white",width:"60px",position:"absolute",top:"120px",left:"30px",cursor:"pointer"}}/>
        <div style={{width:"100%",padding:"10px",fontSize:"20px"}}>
           {props.footer}
        </div>
       
    </div>
    );
}

export default CourseCards;
