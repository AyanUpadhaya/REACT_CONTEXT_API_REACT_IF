import { Outlet } from "react-router-dom";
import Nav from "../../components/website/Nav";

const Website = () => {
  return (
    <>
      <Nav />
      <div className="container-fluid">
        <Outlet />
      </div>
    </>
  );
};

export default Website;
