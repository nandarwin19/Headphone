import React, { useEffect } from "react";
import { products } from "./constants/constant";
import { useNavigate, useParams } from "react-router-dom";
import Contact from "./Contact";
import Navbar from "./navbar";

const CurrentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const productItem = products.find((item) => item.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="min-h-[60vh] w-full mt-[10vh] ">
      <div className="laptop:grid grid-cols-12  relative w-full">
        <div className="laptop:col-span-9 col-span-12 relative h-full flex w-full bg-black">
          <div className="laptop:w-[55px] bg-white1 h-full border-1 border-r-black"></div>
          <div className="min-h-screen w-full border border-black">
            {Array.from({ length: 6 }).map((_, index) => (
              <img
                key={index}
                src={productItem[`img${index}`]}
                alt=""
                className="w-full h-screen object-cover"
              />
            ))}
          </div>
        </div>
        <div className="laptop:col-span-3 col-span-12 w-full bg-white1 relative">
          <div className="laptop:fixed z-10 p-6 ">
            <p className="text-lg tablet:text-xl italic">
              Immerse yourself in a symphony of sound, where crisp notes of
              melody intertwine with deep bass tones.
            </p>
            <div className="my-6">
              <h2 className="text-md uppercase">Solnato Headphones</h2>

              <ul className="my-2">
                <li className="text-xl tablet:text-2xl">
                  Over-ear headphones / <span className="italic">2021</span>
                </li>
              </ul>
              <div className="w-full flex items-center justify-between">
                <p>Bianco (White)</p>
                <p>€299.00</p>
              </div>
            </div>

            <ul className="mt-10">
              <li>Advanced noise cancellation technology</li>
              <li className="w-full h-[0.7px] bg-black/60 my-1"></li>
              <li>Wireless Bluetooth connectivity</li>
              <li className="w-full h-[0.7px] bg-black/60 my-1"></li>

              <li>Rich, immersive sound quality</li>
              <li className="w-full h-[0.7px] bg-black/60 my-1"></li>
              <li>Comfortable, ergonomic design</li>
              <li className="w-full h-[0.7px] bg-black/60 my-1"></li>
              <li>Driver: 50mm neodymium</li>
              <li className="w-full h-[0.7px] bg-black/60 my-1"></li>
              <li>Frequency response: 20Hz - 20kHz</li>
              <li className="w-full h-[0.7px] bg-black/60 my-1"></li>
              <li>Battery life: Up to 30 hours</li>
              <li className="w-full h-[0.7px] bg-black/60 my-1"></li>
            </ul>
            <button className="w-full h-10 mt-20 bg-black1 text-white">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentPage;