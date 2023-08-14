import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/loader/loader";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useScrollPosition from "./hooks/useScrollPostion";

const Categories = () => {
  const [lang, setLan] = useState("");

  const [categories, setCategories] = useState([]);

  const categoriesItems = categories.data;
  console.log(categories.data);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  useScrollPosition("categories");

  const getCategories = () => {
    fetch(`https://api.oryze.gomaplus.tech/api/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    getCategories();
    setLan(localStorage.getItem("lan"));
  }, []);
  const sortedCategories = categoriesItems
    ? categoriesItems.slice().sort((a, b) => a.position - b.position)
    : [];
  console.log(sortedCategories);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className=" min-h-screen md:px-40 xs:px=30 overflow-x-hidden mt-6">
          {/**   <p className="m-4 text-white text-[16px] font-jua">
        {lang == "ar" ? 'تجربة  لذيذة  مليئة  بالمغامرات  مع  مزيج من المذاق  الآسيوي  المتنوع  في  مكان  واحد' : ' An adventure tasty experience of Asian fusion food all in one place'}
         
        </p>
        */}
          <div
            className={`flex justify-start mb-4 px-4    ${
              lang == "ar" ? "justify-end mr-3 " : "justify-start ml-2 "
            }  `}
          >
            <h2 className="text-[#D0B8A8] font-medium text-2xl">
              {" "}
              {lang == "ar" ? ": الاصناف" : "Categories :"}
            </h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-3  ">
            {sortedCategories &&
              sortedCategories.map((cat) => {
                return (
                  <div key={cat.id}>
                    <div className="focus-within:text-[#ab714d] mx-2 my-6">
                      <button className=" h-28   overflow-hidden focus-within:border-[#ab714d]     rounded-lg cursor-pointer   hover:border-[#ab714d] border-inherit transition duration-300 ease-in-out flex flex-col items-center justify-center  w-full">
                        <LazyLoadImage
                          src={cat.imageurl}
                          alt={cat.name}
                          onClick={() => {
                            navigate(`/products/${cat.id}`, {
                              state: {
                                img: cat?.imageurl,
                                name: cat?.name,
                                name_trans: cat.name_trans,
                              },
                            });
                          }}
                          className=" object-center brightness-50 bg-blend-darken object-fill h-28 w-full rounded-lg hover:scale-110 hover:opacity-60 ease-in-out duration-200 transition-all"
                        />
                      </button>
                      <h1 className="  cursor-pointer sm:text-base text-md   text-[#D0B8A8]  whitespace-normal">
                        {lang == "ar" ? cat.name_trans : cat.name}
                      </h1>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default Categories;
