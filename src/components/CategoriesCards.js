function CategoriesCards(props) {
    return (
        <div style={{position:"relative",width:"100%",backgroundColor:"#283142",height:"100px",color:"white",display:"flex",justifyContent:"center",alignItems:"center"}}>      
            
        <div style={{flexBasis:"30%",height:"100%"}}>
             <img src={props.imgsrc} style={{width:"100%",height:"100%"}}/>
        </div>

            <div style={{flexBasis:"70%",display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column",paddingLeft:"12px"}} >
            <h6 style={{fontSize:"17px",marginBottom:"5px"}}>{props.course}</h6>
            <p style={{fontSize:"15px"}}>{props.ncourses}</p>
            </div>
        </div>
    );
}

export default CategoriesCards;
