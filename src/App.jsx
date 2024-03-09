import { Footer, Navbar } from "flowbite-react";
import "./App.css";

import Home from "./Component/Home/Home";
import LogoBlack from "./assets/image/ElSersawy Logo black.png";
// import LogoWhite from "./assets/image/ElSersawy Logo white.png";
import { GrLanguage } from "react-icons/gr";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div dir={`${i18n.language == "en" ? "ltr" : "rtl"}`} id="container2">
        <div className="fixed w-full">
          <Navbar className="bg-black relative">
            <Navbar.Brand href="#">
              <img
                src={LogoBlack}
                className="mr-3 w-20 "
                alt="ElSersawy auto service"
              />
              <span
                className={`self-center whitespace-nowrap text-2xl font-semibold ${
                  i18n.language == "en" ? "" : "ms-2"
                }`}
              >
                {t(`ElSersawy`)}
              </span>
            </Navbar.Brand>

            <button
              onClick={() => {
                if (i18n.language == "en") {
                  i18n.changeLanguage("ar");
                } else {
                  i18n.changeLanguage("en");
                }
              }}
              className={`md:absolute ${
                i18n.language == "en"
                  ? "  md:right-14 2xl:right-10"
                  : "  md:left-2 lg:left-14 2xl:left-10"
              } `}
            >
              <div className="flex items-center border p-1 rounded-lg">
                <p
                  className={`text-xl ${
                    i18n.language == "en" ? "pb-2" : ""
                  } ps-1`}
                >
                  {t(`enORar`)}{" "}
                </p>
                <GrLanguage className="ms-1 " />
              </div>
            </button>

            <Navbar.Toggle className="" />
            <Navbar.Collapse
              className={`${
                i18n.language == "en" ? "md:me-36" : "md:me-16 lg:me-36"
              }  `}
            >
              <Navbar.Link
                className={`text-white text-xl hover:text-gray-600   ${
                  i18n.language == "en" ? "" : "md:me-8"
                }`}
                href="#home"
              >
                {t(`navbar.home`)}
              </Navbar.Link>
              <Navbar.Link
                className="text-white text-xl hover:text-gray-600"
                href="#services"
              >
                {t(`navbar.service`)}
              </Navbar.Link>
              <Navbar.Link
                className="text-white text-xl hover:text-gray-600"
                href="#location"
              >
                {t(`navbar.location`)}
              </Navbar.Link>
              <Navbar.Link
                className="text-white text-xl hover:text-gray-600"
                href="#callus"
              >
                {t(`navbar.callUs`)}
              </Navbar.Link>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <Home />

        <Footer className="w-full bg-black" container rounded-0>
          <div className="">
            <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
              <div>
                <Footer.Brand href="#">
                  <img
                    src={LogoBlack}
                    className="mr-3 w-20 "
                    alt="ElSersawy auto service"
                  />
                  <span
                    className={`self-center whitespace-nowrap text-2xl font-semibold ${
                      i18n.language == "en" ? "" : "ms-2"
                    }`}
                  >
                    {t(`ElSersawy`)}
                  </span>
                </Footer.Brand>
              </div>
            </div>
          </div>
        </Footer>
      </div>
    </>
  );
}

export default App;
