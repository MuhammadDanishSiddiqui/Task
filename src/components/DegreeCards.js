function DegreeCards(props) {
    return (
        <div style={{width:"100%",backgroundColor:"#283142",height:"350px",color:"white",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <img src={props.imgsrc} style={{width:"100%",height:"150px"}}/>
        <div style={{flex:"1",padding:"10px"}}>
        <h6 style={{fontSize:"17px",marginBottom:"10px"}}>{props.title}</h6>
        <p style={{fontSize:"15px"}}>{props.info}</p>
        </div>
        <div style={{width:"100%",backgroundColor:"#60D69A",padding:"10px"}}>
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <h6 style={{fontSize:"13px",marginBottom:"10px"}}>100% ONLINE</h6>
            <img src={props.imgsrc} style={{width:"30px"}}/>
            </div>
        </div>
       
    </div>
    );
}

export default DegreeCards;
