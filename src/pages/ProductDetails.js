import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import "swiper/css";

import { RiArrowLeftSFill } from "react-icons/ri";

import Loader from "../components/loader/loader";
import { LazyLoadImage } from "react-lazy-load-image-component";

function ProductDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [lang, setLan] = useState("");
  const api_url = "https://api.oryze.gomaplus.tech/api/show_product";
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${api_url}/${id}`)
      .then((res) => res.json())
      .then((product) => setProduct(product.data));
    setLan(localStorage.getItem("lan"));
    setLoading(false);
  }, []);

  console.log(product);
  return (
    <div className=" mx-auto h-screen   w-full  bg-[#2F2424] py-4 ">
      <div className="flex items-center justify-between absolute top-4 left-0 text-[#D0B8A8]">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className=" absolute z-10  left-8 -top-2  my-6 p-2 border-4 -ml-3 w-10 h-10 items-center border-[#D0B8A8] shadow-lg rounded-lg"
        >
          <RiArrowLeftSFill size={25} className=" text-[#D0B8A8] -mt-1 -ml-1" />
        </button>
      </div>
      <>
        {loading ? (
          <Loader />
        ) : (
          <>
            {" "}
            <div className="flex hagna-otf  relative">
              <LazyLoadImage
                src={product?.image}
                alt="img"
                className="w-screen max-h-96  hover:scale-110 duration-300 ease-in-out rounded-lg shadow-xl shadow-stone-900 mx-auto object-cover object-center"
              />
              <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
            </div>
            <div className=" bg-[#2F2424] py-10 px-6">
              <div className="  flex items-center justify-center  ">
                <h1 className="  text-[32px]  text-[#F4ECE5] font-bold mb-2 hagna-otf">
                  {lang == "ar" ? product?.name_trans : product?.name}
                </h1>
              </div>
              <div className="flex  items-center justify-between   ">
                <div className="flex-1 mt-8">
                  {product?.ingredients == "no" ||
                  product?.ingredients == "no ingredients" ||
                  product?.ingredients == "No ingredients" ? (
                    ""
                  ) : (
                    <div
                      className={`Properties  space-y-2 py-2 ${
                        localStorage.getItem("lan") == "en"
                          ? " text-left"
                          : "text-right"
                      }`}
                    >
                      <h1 className=" text-[23px]  text-[#F8BE8B]  ">
                        {lang == "ar" ? "المكونات" : "Ingredients"}
                      </h1>
                      <p className="  text-[18px]    text-[#F4ECE5] pb-4 ">
                        {lang == "ar"
                          ? product?.ingredients_trans
                          : product?.ingredients}
                      </p>
                    </div>
                  )}

                  {product?.taste == "no" ||
                  product?.taste == "no taste" ||
                  product?.taste == "No taste" ? (
                    ""
                  ) : (
                    <div
                      className={`Properties  space-y-2 py-2 ${
                        localStorage.getItem("lan") == "en"
                          ? " text-left w-3/5  my-3"
                          : "text-right"
                      }`}
                    >
                      <h1 className=" text-[22px]  text-[#F8BE8B] hagna-otf">
                        {lang == "ar" ? "حساسية الطعام" : "Food Allergy"}
                      </h1>
                      <p className="   text-[18px]   text-[#F4ECE5] pb-4 ">
                        {lang == "ar" ? product?.taste_trans : product?.taste}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div
                className={` ${
                  localStorage.getItem("lan") == "en"
                    ? " text-left "
                    : "text-right"
                }`}
              >
                <h1 className="text-[#F8BE8B] whitespace-nowrap   text-[22px]">
                  {lang == "ar" ? "السعرات الحرارية:" : "Calories :"}{" "}
                  <span className="text-[#d3cfcf] whitespace-nowrap text-[22px] ">
                    {product?.calories} {lang == "ar" ? "سعرة" : "CAL"}{" "}
                  </span>{" "}
                </h1>
                <h1 className="text-[#F8BE8B] whitespace-nowrap text-[22px]  ">
                  {lang == "ar" ? "السعر:" : "Price :"}{" "}
                  <span className="text-[#d3cfcf] whitespace-nowrap text-[22px] ">
                    {product?.price} {lang == "ar" ? "ريال" : "SAR"}{" "}
                  </span>{" "}
                </h1>
              </div>
            </div>
          </>
        )}
      </>
    </div>
  );
}

export default ProductDetails;
