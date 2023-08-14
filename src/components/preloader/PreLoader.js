import React, { useEffect } from "react";
import "./preloader.css";
import { preLoaderAnim, Arabicprev } from "../../animations";
import O from "../../assets/o.png";
import R from "../../assets/r.png";
import Y from "../../assets/y.png";
import Z from "../../assets/z.png";
import E from "../../assets/e.png";
import Oa from "../../assets/ا_1.png";
import Ra from "../../assets/و.png";
import Ya from "../../assets/ر.png";
import Zz from "../../assets/ي ز.png";
import Ea from "../../assets/ي.png";

import Logo from "../../assets/a1 1.png";
import Photo from "../../assets/preload.png";
function PreLoader() {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader h-screen  flex-col relative ">
     {/*   <div className=" absolute top-5 left-5">
        <img src={Logo} alt="" className=" w-32" />
      </div>
     <div className=" absolute top-5 right-0">
        <img src={Photo} alt="" className=" w-72" />
      </div> */}

      <div className="texts-container ">
        <span>
          <img src={O} alt="" className="w-36" />
        </span>
        <span>
          <img src={R} alt="" className="w-20" />
        </span>
        <span>
          <img src={Y} alt="" className="w-20" />
        </span>
        <span>
          <img src={Z} alt="" className="w-24" />
        </span>
        <span>
          <img src={E} alt="" className=" w-32" />
        </span>
      </div>
      <div
        style={{
          transform: "scale(0.85)",
          justifyContent: "right",
          margin: "0",
        }}
        className="texts-container  ml-[5%]"
      >
        <span>
          <img src={Ea} a alt="" className="w-12 h-10 a5 " />
        </span>
        <span>
          <img src={Zz} alt="" className="w-5 h-10 a1 mx-0.5" />
        </span>
        <span>
          <img src={Ya} alt="" className="w-3 h-10 a2 " />
        </span>
        <span>
          <img src={Ra} alt="" className="w-7 h-10 a3 mx-0.5" />
        </span>
        <span>
          <img src={Oa} a alt="" className="w-3 h-14 -mt-3 a4" />
        </span>
      </div>
      {/**  <p className="py-2 font-medium text-white/75  ">Asian Fusion Food</p>*/}
    </div>
  );
}

export default PreLoader;
