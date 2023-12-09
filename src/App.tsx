import "./App.css";
import * as React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./useRouteElement";
import { useEffect } from "react";
declare global {
  interface Window {
    fbAsyncInit: () => void;
    FB: any;
  }
}
function App() {
  const [showButton, setShowButton] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const goTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  const telCall = () => {
    window.location.href = "tel:0971559971";
  };
  useEffect(() => {
    const renderMessengerPlugin = () => {
      const chatbox: HTMLElement | null =
        document.getElementById("fb-customer-chat");
      if (chatbox) {
        chatbox.setAttribute("page_id", "144934805365921");
        chatbox.setAttribute("attribution", "biz_inbox");
      }

      window.fbAsyncInit = function () {
        window.FB.init({
          xfbml: true,
          version: "v18.0",
        });
      };

      (function (d, s, id) {
        let js: HTMLScriptElement = document.createElement("script");
        const fjs = document.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement("script");
        js.id = id;
        js.src = "https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js";
        if (fjs && fjs.parentNode) {
          fjs.parentNode.insertBefore(js, fjs);
        }
      })(document, "script", "facebook-jssdk");
    };

    renderMessengerPlugin();
  }, []);
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
      {showButton && (
        <button
          className={` fixed p-2 rounded-md bottom-5 right-5 bg-red-600`}
          onClick={() => goTop()}
        >
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#f1f1f1f1"
            transform="matrix(1, 0, 0, 1, 0, 0)"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M12 6V18M12 6L7 11M12 6L17 11"
                stroke="#f1f1f1f1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />{" "}
            </g>
          </svg>
        </button>
      )}
      {
        <a
          className={`fixed p-2 bottom-3 `}
          href="https://zalo.me/0971559971"
          style={{ left: "10.3rem" }}
        >
          <img
            src="https://lh3.googleusercontent.com/X7JUHmDCeT845_MgAttYi_F8RsiHQr9ufnRqk2SiyiJZ1KBZgZek9wFOMuOwDuy4leA=w47"
            alt="0906215668"
            style={{ borderRadius: "50%" }}
          />
        </a>
      }

      {
        <div
          className={`fixed px-20 py-2 bottom-1 `}
          style={{ left: "8.9rem" }}
        >
          <div id="fb-root"></div>
          <div id="fb-customer-chat" className="fb-customerchat"></div>
        </div>
      }

      <button
        className={`h-[50px] fixed group  bottom-5 ml-10 flex items-center  justify-center`}
        onClick={() => telCall()}
        style={{ borderRadius: "25px" }}
      >
        <div className="rounded-full z-10 animate-tada2 absolute left-[-30px] top-[0px] translate-x-[0] translate-y-[-50%] w-[50px] h-[50px] border-[1.4px] border-red-500"></div>
        <div className="rounded-full z-10 animate-tada absolute left-[-30px] top-[0px] translate-x-[0] translate-y-[-50%] w-[50px] h-[50px] bg-green-600 group-hover:bg-orange-700 transition-all"></div>
        <div className="rounded-full z-40 flex items-center justify-center animate-tada absolute left-[-18px] top-[13px] translate-x-[0] translate-y-[-50%] w-[25px] h-[25px] bg-red-500 group-hover:bg-orange-700 transition-all">
          <svg
            width="19px"
            height="19px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
              fill="white"
            />
          </svg>
        </div>
        <a
          href="tel:0971559971"
          className="z-30 rounded-full font-semibold py-2 px-5 bg-green-600 text-white transition-all group-hover:bg-orange-700"
        >
          0971559971
        </a>
      </button>
    </React.StrictMode>
  );
}

export default App;
