import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { RiArrowLeftSFill } from "react-icons/ri";
import "swiper/css";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Loader from "../components/loader/loader";
import useScrollPosition from "./hooks/useScrollPostion";

function Popular() {
  const api_url = "https://api.oryze.gomaplus.tech/api/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); // New state for filtered products
  const [selectedCategory, setSelectedCategory] = useState(null);
  const location = useLocation();
  useScrollPosition("productPage");
  const searchParams = new URLSearchParams(location.search);
  const navigate = useNavigate();

  const category = useParams();

  const [lang, setLan] = useState("");
  const { state } = useLocation();

  useEffect(() => {
    getProducts();

    setLan(localStorage.getItem("lan"));
  }, []);

  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        const filteredProducts = data.data.filter(
          (product) => product.status === 1
        );
        setProducts(filteredProducts);
        setFilteredProducts(
          filteredProducts.filter((product) =>
            category != null
              ? product.category_id == category.id
              : product.category_id == 11
          )
        );
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  const [loading, setLoading] = useState(true);

  const items = filteredProducts;
  const categoriesItems = categories.data;

  useEffect(() => {
    // If categories are available and no category is selected, set the first category as selected
    if (categoriesItems && categoriesItems.length > 0 && !selectedCategory) {
      setSelectedCategory(categoriesItems[0]);
    }
  }, [categoriesItems, selectedCategory]);

  function truncateString(str) {
    if (str == null || str === undefined) {
      return "";
    }

    if (str.length <= 30) {
      return str;
    }

    return str.slice(0, 30) + "...";
  }
  const handleClick = (item) => {
    if (state.name !== "Specialized Coffee") {
      navigate(`/productpage/${item}`);
    }
  };
  return (
    <div className=" h-screen w-screen py-6 bg-[#2F2424] hagna-otf  relative  ">
      <button
        onClick={() => {
          navigate(-1);
        }}
        className=" absolute  left-5 top-0  my-6 p-2 border-2 -ml-3 w-10 h-10 items-center border-[#D0B8A8] shadow-lg rounded-lg"
      >
        <RiArrowLeftSFill size={22} className=" text-[#D0B8A8]" />
      </button>

      <div className="flex justify-center mt-8 w-screen">
        <h4 className=" mb-10  text-4xl text-[#d3cfcf] my-6  ">
          {lang == "ar" ? `${state.name_trans}` : `${state.name}`}
        </h4>
      </div>
      <>
        {loading ? (
          <Loader />
        ) : (
          <>
            {/**     <div className=" m-auto round mb-10 flex justify-center" >
            
              <img
                style={{ overflow: "hidden", borderRadius: "10px" }}
                src={state?.img}
                className=" w-screen max-h-56  hover:scale-110 duration-300 ease-in-out rounded-lg shadow-xl shadow-stone-900 mx-auto object-cover object-center"

              />
            </div>
         */}

            {/**         <div className="grid gap-4 grid-cols-2 lg:grid-cols-3  items-center justify-center py-4 mx-7">
             */}
            <div
              className={`grid   ${
                state.name == "Specialized Coffee"
                  ? " grid-cols-1 sm:grid-cols-2"
                  : " grid-cols-1 md:grid-cols-2 "
              } gap-4 items-center justify-center py-4 mx-7`}
            >
              {items &&
                items.map((item) => {
                  return (
                    <div
                      onClick={() => {
                        if (state.name !== "Specialized Coffee") {
                          navigate(`/productpage/${item.id}`);
                        }
                      }}
                      className={`flex shadow-lg justify-betwee  ${
                        state.name == "Specialized Coffee" ? "h-28" : "h-32 "
                      } w-full overflow-hidden  bg-[#F4ECE5] border-2 border-[#d3cfcf]/60 rounded-xl border-glass `}
                    >
                      {" "}
                      {state.name != "Specialized Coffee" ? (
                        <div className="rounded-xl  hover:scale-110 transition-all duration-300 ease-in-out  overflow-hidden  ">
                          <LazyLoadImage
                            src={item?.image}
                            alt="img"
                            className="h-full w-44 object-cover object-center"
                          />
                        </div>
                      ) : (
                        ""
                      )}
                      <div className="  items-start p-2 text-start w-full  ">
                        <div
                          className={`${
                            state.name == "Specialized Coffee"
                              ? "flex justify-center border-b-2"
                              : ""
                          }  `}
                        >
                          <h1
                            className={`hagna-otf  ${
                              state.name == "Specialized Coffee"
                                ? "text-[22px]"
                                : "text-[14px]"
                            }   text-[#421500] font-serif ${
                              localStorage.getItem("lan") == "en"
                                ? " text-start"
                                : "text-end"
                            }`}
                          >
                            {lang == "ar" ? item.name_trans : item.name}
                          </h1>
                        </div>
                        {item.ingredients == "no" ||
                        item.ingredients == "no ingredients" ||
                        item.ingredients == "No ingredients" ? (
                          ""
                        ) : (
                          <div
                            className={`space-y-1 whitespace-nowrap  ${
                              localStorage.getItem("lan") == "en"
                                ? " text-start"
                                : "text-end"
                            } `}
                          >
                            <h1 className="font-thin text-[13px] text-[#A73500]">
                              {lang == "ar" ? "المكونات" : "ingredients"}
                            </h1>
                            <p
                              className={` text-[12px]  text-[#421500] ${
                                localStorage.getItem("lan") == "en"
                                  ? " text-start"
                                  : "text-end"
                              }`}
                            >
                              {lang == "ar"
                                ? truncateString(item.ingredients_trans)
                                : truncateString(item.ingredients)}
                            </p>
                          </div>
                        )}
                        <div className=" flex justify-between mt-5 w-full whitespace-nowrap relative ">
                          <div>
                            <h1
                              className={` text-[#421500]    ${
                                state.name == "Specialized Coffee"
                                  ? "text-[18px]"
                                  : "text-[14px]"
                              }`}
                            >
                              {item.price} SAR
                            </h1>
                          </div>
                          <div>
                            <h1
                              className={` text-[#A73500]    ${
                                state.name == "Specialized Coffee"
                                  ? "text-[18px]"
                                  : "text-[14px]"
                              }`}
                            >
                              {item.calories} CAL
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </>
        )}
      </>
    </div>
  );
}

export default Popular;
