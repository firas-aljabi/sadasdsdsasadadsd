import React, { useState, useEffect } from "react";

import Logo from "../assets/a1 1.png";
import Logoo from "../assets/Logo.png";
import {  useNavigate } from "react-router-dom";
import audio from "../assets/intero.mp3"
function Language() {
 const navigate=useNavigate()
 const playAudio = () => {
    audio.play();
  };


  return (
    <div className="fixed">
    <div className=" h-screen fixed  flex-col  w-screen ">
    
   
      <div className="flex justify-center mx-auto ">
      <div className=" mt-[15%] ">
      <img src={Logoo} alt="" className=" w-52 mb-10 "  />
      <button className=" bg-orange-200 border-2 border-[#A73500] w-[130%] h-16 mb-6 -ml-8 rounded-3xl  mt-[15%]" onClick={()=>{{localStorage.setItem('lan','en');
      const audioElement = new Audio(audio);
      audioElement.play();
      navigate('/home')}}}>
      <h2 className="text-[#421500] font-jua text-lg ">English</h2>
      </button>
      <button
      className="bg-orange-200 w-[130%] h-16 -ml-8 border-2 border-[#A73500] rounded-3xl  "
      onClick={() => {
        localStorage.setItem("lan", "ar");
        // Here, you can play the audio using the <audio> element
        const audioElement = new Audio(audio);
        audioElement.play();
        navigate('/home');
      }}
    >      <h2 className="text-[#421500] font-jua text-lg ">العربية</h2>
      </button>
      </div>
      </div>
      
      <div className=" fixed bottom-10 w-screen text-[#F4ECE5]  whitespace-nowrap text-sm font-Nico-Moji">powered by Goma Plus</div>
    {/**  <p className="py-2 font-medium text-white/75  ">Asian Fusion Food</p>*/} 
    </div>
    </div>
  );
}

export default Language;
