import { useTranslation } from "react-i18next";
import { FaFacebookF, FaInstagram, FaPhone, FaTiktok } from "react-icons/fa6";
import audi from "../../assets/image/car logo/audi.png";
import bmw from "../../assets/image/car logo/bmw.png";
import chevrolet from "../../assets/image/car logo/chevrolet.png";
import honda from "../../assets/image/car logo/honda.png";
import hyundai from "../../assets/image/car logo/hyundai.png";
import kia from "../../assets/image/car logo/kia.png";
import mercedes from "../../assets/image/car logo/mercedes.png";
import mitsubishi from "../../assets/image/car logo/mitsubishi.png";
import nissan from "../../assets/image/car logo/nissan.png";
import opel from "../../assets/image/car logo/opel.png";
import renault from "../../assets/image/car logo/Renault.png";
import seat from "../../assets/image/car logo/seat.png";
import skoda from "../../assets/image/car logo/skoda.png";
import toyota from "../../assets/image/car logo/toyota.png";
import volkswagen from "../../assets/image/car logo/Volkswagen.png";
import image1 from "../../assets/image/image1.png";

const Home = () => {
  const { t, i18n } = useTranslation();

  const carLogo = [
    { car: bmw, name: "BMW" },
    { car: mercedes, name: "Mercedes" },
    { car: volkswagen, name: "Volkswagen" },
    { car: skoda, name: "Skoda" },
    { car: opel, name: "Opel" },
    { car: audi, name: "Audi" },
    { car: seat, name: "Seat" },
    { car: chevrolet, name: "Chevrolet" },
    { car: kia, name: "KIA" },
    { car: toyota, name: "Toyota" },
    { car: honda, name: "Honda" },
    { car: hyundai, name: "Hyundai" },
    { car: mitsubishi, name: "Mitsubishi" },
    { car: nissan, name: "Nissan" },
    { car: renault, name: "Renault" },
  ];

  return (
    <div>
      <section id="home" className="home">
        <div
          className={` bg-[url('src/assets/image/car-mechanic.jpg')] bg-cover bg-no-repeat bg-fixed  w-full h-screen`}
        >
          <div className="w-full text-center h-screen bg-black bg-opacity-60 flex justify-center items-center ">
            <div>
              <h2 className="text-6xl font-bold mb-10">{t(`welcome`)}</h2>
              <h3 className="text-5xl font-bold mb-16">
                {t(`AtElSersawyCarMaintenanceCenter`)}
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className=" text-black">
        <h2 className="text-5xl font-bold w-full text-center mt-10">
          {t(`services`)}
        </h2>
        <div className="text-black">
          <p className="text-center mt-3 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            iure?
          </p>
          <div className="mt-10 mb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 w-[70%] mx-auto">
            {carLogo.map((car) => (
              <div
                key={car.name}
                className={`mx-auto w-40 h-52 text-center flex flex-col justify-between`}
              >
                <div className="flex justify-center items-center h-52">
                  <img className="w-full  " src={car.car} alt="" />
                </div>

                <h3 className="text-2xl font-bold">{car.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="location" className="location pb-20 bg-black">
        <h2 className="text-5xl font-bold w-full text-center pt-10">
          {t(`location`)}
        </h2>
        <p className="text-center mt-5 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          iure?
        </p>

        <div className="w-full flex justify-center  mt-10 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.916410665519!2d31.360403859719856!3d29.98183217505945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583b680053154f%3A0x6ebb2cfbc229376c!2z2YXYsdmD2LIg2KfZhNiz2LHYs9in2YjZiiDZhNi12YrYp9mG2Kkg2KfZhNiz2YrYp9ix2KfYqiDYqNin2YTZgti32KfZhdmK2Kk!5e0!3m2!1sar!2seg!4v1709995727729!5m2!1sar!2seg"
            className=" w-[400px] h-[200px] sm:w-[500px] sm:h-[300px] md:w-[600px] md:h-[350px] lg:w-[800px] lg:h-[450px] xl:w-[950px] xl:h-[450px]"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section id="callus" className="callus text-black pb-20">
        <h2 className="text-5xl font-bold w-full text-center pt-10">
          {t(`callUs`)}
        </h2>
        <p className="text-center mt-5 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          iure?
        </p>

        <div
          className="w-[70%] mx-auto md:flex mt-10 items-center"
          dir={`${i18n.language == "en" ? "ltr" : "ltr"}`}
        >
          <div className="md:w-[50%] ">
            <img className="ms-auto w-full rounded-xl" src={image1} alt="" />
          </div>

          <div
            className="md:w-[50%]"
            dir={`${i18n.language == "en" ? "ltr" : "rtl"}`}
          >
            <div className="mx-auto lg:mb-36">
              <div className="ms-5 mt-9  font-medium">
                <h4 className="text-xl font-bold mb-5">{t(`Socialmedia`)} :</h4>

                <div className="ms-3 text-white">
                  <div className=" flex items-center">
                    <a
                      href="https://www.facebook.com/groups/956605468723462/about"
                      target="_blank"
                      className=" bg-black p-2 rounded-full bg-opacity-70 me-4"
                    >
                      <FaFacebookF />
                    </a>
                    <span className="text-black text-xl mb-1">Facebook</span>
                  </div>
                  <div className="mt-4 flex items-center">
                    <a
                      href="https://www.instagram.com/elsersawy_auto_services/"
                      target="_blank"
                      className=" bg-black p-2 rounded-full bg-opacity-70 me-4"
                    >
                      <FaInstagram />
                    </a>
                    <span className="text-black text-xl mb-1">Instagram</span>
                  </div>
                  <div className="mt-4 flex items-center">
                    <a
                      href="https://www.tiktok.com/@elsersawy.auto.service"
                      target="_blank"
                      className=" bg-black p-2 rounded-full bg-opacity-70 me-4"
                    >
                      <FaTiktok />
                    </a>
                    <span className="text-black text-xl mb-1">Tik Tok</span>
                  </div>
                </div>
              </div>
              <div
                className={`ms-5 mt-9 ${
                  i18n.language == "en" ? "text-left" : "text-right"
                } font-medium`}
              >
                <h4 className="text-xl font-bold">{t(`callus`)} :</h4>
                <div className="ms-3 mt-3 flex items-center ">
                  <a
                    href="https://www.facebook.com/groups/956605468723462/about"
                    target="_blank"
                    className=" bg-black p-2 rounded-full bg-opacity-70 me-4  text-white"
                  >
                    <FaPhone />
                  </a>
                  <span className="text-[17px]">01003567220</span>
                </div>
                <div className="ms-3 mt-3 flex items-center ">
                  <a
                    href="https://www.facebook.com/groups/956605468723462/about"
                    target="_blank"
                    className=" bg-black p-2 rounded-full bg-opacity-70 me-4  text-white"
                  >
                    <FaPhone />
                  </a>
                  <span className="text-[17px]">01210700008</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
