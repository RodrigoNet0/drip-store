/* eslint-disable @next/next/no-img-element */
"use client";

export default function HeroSection({img, title, provider}) {
  return (
    <div className="bg-[#F5F5F5] min-h-screen w-full flex items-center justify-center">
      <div className="flex flex-row-reverse items-center justify-between w-full max-w-7xl px-8">
        <img
          src={img}
          alt="hero"
          className="w-1/1 max-w-full h-auto object-contain"
        />
        <div className="flex flex-col max-w-1/2">
          <p className="text-lg text-[#F6AA1C] font-medium mb-4">
           {title}
          </p>
          <h1 className="text-4xl font-bold text-[#1F1F1F]">
            Queima de estoque Nike 🔥
          </h1>
          <div>
            <p className="text-lg text-[#474747] font-medium mb-4 mt-3">
              {provider}
            </p>
            <button className="bg-[#C92071] text-white px-4 py-2 w-15 h-10 rounded mt-3">
              Ver Ofertas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
