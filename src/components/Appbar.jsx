import { Button } from "@mui/material";
import React from "react";
import{ Link, useNavigate } from "react-router-dom"


function Appbar(){
    const navigate = useNavigate();
  
    return(
        <>
       <div className="appbar" id="myDiv">
      <h1 >Weather Today</h1>
      <div className="topRightButtons">
        
      <Button onClick={() => navigate('/')}>HOME</Button>
        <Button onClick={() => navigate('/about')}>ABOUT</Button>
        <Button onClick={() => navigate('/contact')}>CONTACT</Button>

        </div>
    </div> 
        </>
       
    )

}
export default Appbar;