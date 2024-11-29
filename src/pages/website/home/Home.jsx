import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import SearchContextProvider from "../../../context/SearchContextProvider";
import useGetPath from "../../../hooks/useGetPath";

const Home = () => {
  const location = useGetPath();
  const [hide, setHide] = useState(false);

  useEffect(() => {
    setHide(location !== "/" ? true : false);
  }, [location]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <SearchContextProvider>
        <div className="py-2 h-screen w-full overflow-hidden  ">
          <div className="flex items-start h-full">
            <div className={`h-full ${hide ? "d-none" : ""}`}>
              <Sidebar></Sidebar>
            </div>
            <div className="h-full overflow-auto" style={{ flex: "1 1 0%" }}>
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </SearchContextProvider>
    </>
  );
};

export default Home;
