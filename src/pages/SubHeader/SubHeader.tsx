'use client';

export default function SubHeader() {
  return (
    <div className=" flex flex-start p-10 bg-white w-full pt-4 pb-2">
      
      <div className="flex gap-4">
        <div className="hover:text-[#f161a7] text-gray-500 px-4 py-2  hover:underline ">
          <a href="#">Home</a>
        </div>
        <div className="hover:text-[#f161a7] text-gray-500 px-4 py-2  hover:underline">
          <a href="#">Produtos</a>
        </div>
        <div className="hover:text-[#f161a7] text-gray-500 px-4 py-2  hover:underline">
          <a href="#">Categorias</a>
        </div>
        <div className="hover:text-[#f161a7] text-gray-500 px-4 py-2  hover:underline">
          <a href="#">Meus Pedidos</a>
        </div>
      </div>
    </div>
  );
}