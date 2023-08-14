import React, { useState } from "react";
import SuchiBackground from "../../assets/suchiBack.png";
import Logo from "../../assets/Logo.png";

function Header() {
  // function asd(){
  // if(localStorage.getItem('lan')=='ar'){
  //   localStorage.setItem('lan','en')
  // }
  // else{
  //   localStorage.setItem('lan','ar')

  // }
  // console.log(localStorage.getItem('lan'))
  // }
  return (
    <div className="flex relative items-center justify-center px-4 py-4">
      <div className="text-3xl font-medium font-sans w-36  text-[#8e3030]">
        <img src={Logo} alt="" />
      </div>
    </div>
  );
}
 
export default Header;
