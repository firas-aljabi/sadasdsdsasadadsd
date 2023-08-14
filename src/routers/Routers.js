import { Routes, Route } from "react-router-dom";
import Language from "../pages/Language";
import { Suspense, lazy } from "react";
import Loader from "../components/loader/loader";

const ProductsPage = lazy(() => import("../pages/ProductsPage"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const HomePage = lazy(() => import("../pages/HomePage"));

function Routers() {
  return (
    <div className="max-h-screen bg-[#2F2424]">
    <div className="bg-[#2F2424] w-[100%] h-[100%] fixed top-0 left-0 right-0 -z-10"></div> 
      <Routes>
        <Route path="/" element={<Language />} />
        <Route
          path="/home"
          element={
            <Suspense fallback={<Loader />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="products/:id"
          element={
            <Suspense fallback={<Loader />}>
              <ProductsPage />
            </Suspense>
          }
        />
        <Route
          path="productpage/:id"
          element={
            <Suspense fallback={<Loader />}>
              <ProductDetails />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default Routers;
