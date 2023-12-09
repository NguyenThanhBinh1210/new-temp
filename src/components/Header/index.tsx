import { AppContext } from "~/contexts/app.context";
import Menu from "~/components/Menu/index";
import React from "react";
import Logo from "~/assets/images/logo-top.jpg";
import Banner from "~/assets/images/banner.jpg";
import { Link } from "react-router-dom";
import MenuIcon from "~/assets/images/icons8-menu.svg";
const Header = () => {
  const { menu, setMenu } = React.useContext(AppContext);
  return (
    <div className="bg-[#f8f9fa]">
      <div className="max-w-[1250px] mx-auto">
        <div className="flex items-center justify-between pt-4 pb-[8px] px-3 ">
          <Link to={"/"} className="w-[308.33px] h-[70px]">
            <img src={Logo} alt="Logo" />
          </Link>
          <button
            onClick={() => setMenu(!menu)}
            className="lg:hidden flex justify-center items-center w-[55.6px] h-[39.6px] rounded border"
          >
            <img src={MenuIcon} alt="MenuIcon" className="w-[30px] h-[30px]" />
          </button>
          <div className="lg:block hidden w-[728px] h-[90.28px]">
            <img src={Banner} alt="Banner" />
          </div>
        </div>
        <div className="py-1">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Header;
