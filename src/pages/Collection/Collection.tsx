/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

export default function Collection() {
  const [collection, setCollection] = useState([
    {
      id: 1,
      title: "Novo drop Supreme",
      image: "./blusa.png",
      description: "Comprar",
    },
    {
      id: 2,
      title: "Coleção Adidas Shoes",
      image: "./tenis-colecao.png",
      description: "Comprar",
    },
    {
      id: 3,
      title: "Coleção Inverno",
      image: "./fone.png",
      description: "Comprar",
    },
  ]);

  return (
    <div className="container mx-auto">
      <h1 className="text-[#474747] font-bold text-3xl mb-4">Coleções em destaque</h1>
      <div className="flex flex-wrap justify-between space-y-4 md:space-y-0 md:space-x-4">
        {collection.map((item) => (
          <div
            key={item.id}
            className="bg-[#D8E3F2] p-4 w-full md:w-[30%] h-auto rounded-lg flex flex-col md:flex-row items-center md:items-stretch"
          >
            <div className="md:flex-1">
              <button className="bg-[#E7FF86] p-1 rounded-[29px] text-[#474747] h-10 w-24 mb-2">
                30% OFF
              </button>
              <h2 className="text-[#1F1F1F] font-sans font-bold text-xl md:text-2xl">
                {item.title}
              </h2>
              <p className="text-[#C92071] mt-2 hidden md:block w-[153px] h-[48px] size-[16px] text-center bg-white p-2 rounded-md items-center justify-center">{item.description}</p>
              <button className="bg-[#E7FF86] p-2 rounded-[29px] text-[#474747] h-10 w-full mt-4 md:hidden">
                Saiba mais
              </button>
            </div>
            <div className="md:flex-1 flex items-center justify-center md:justify-end">
              <img
                src={item.image}
                alt={item.title}
                className="w-full md:w-[200px] md:h-[200px] rounded-lg object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
