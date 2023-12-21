import React from "react";
import { useState, useEffect } from "react";
import './MainPage.css';



import ClothSuggestUI from "../Comp/Comp_suggest.jsx";
import YesterDayUI from "../Comp/Comp_yesterday.jsx";
import LayOutUI from "../Comp/Comp_Layout.jsx";
//컴포넌트

//MUI


  
  
  
function MainPage() {
    return(
        <div>
            <LayOutUI/>
        </div>
    );
}

export default MainPage;

