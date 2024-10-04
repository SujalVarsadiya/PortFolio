import React from "react";
import textutils from "/textutils.png";
import newsmonkey from "/news.png";
import iNotebook from "/iNotebook.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: textutils,
      name: "Textutils",
      sourcelink: "https://github.com/SujalVarsadiya/Textutils"
    },
    {
      id: 2,
      logo: newsmonkey,
      name: "Newsmonkey",
      sourcelink: "https://github.com/SujalVarsadiya/Newsapp"
    },
    {
      id: 3,
      logo: iNotebook,
      name: "iNotebook",
      sourcelink: "https://github.com/SujalVarsadiya/iNotebook"
    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 my-5">
          {cardItem.map(({ id, logo, name, sourcelink }) => (
            <div
              className="flex flex-col items-center justify-between md:w-[250px] md:h-[250px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                {/* <p className="px-2 text-gray-700">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p> */}
              </div>
              <div className=" px-2 py-4 space-x-3 justify-around">
                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Video
                </button> */}
                <a href={sourcelink} target='-blank'>
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                    Source code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
