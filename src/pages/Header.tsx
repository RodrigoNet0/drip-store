'use client';
import { SetStateAction, useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { Input } from "@/components/ui/input";
import Link from "next/link";


export default function Header() {
    const [search, setSearch] = useState("");
    const [isSearch, setIsSearch] = useState(false);

    const handleSearch = (e: { target: { value: SetStateAction<string>; }; }) => {
        setSearch(e.target.value);
        setIsSearch(true);
        console.log(search);
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setIsSearch(false);
    };

    const handleClose = () => {
        setIsSearch(false);
    };

    const handleKeyDown = (e: { key: string; }) => {
        if (e.key === "Escape") {
            handleClose();
            console.log("esc");
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            console.log("removed");
        };
    }, []);

    return (
        <header className="bg-white w-full pt-4 pb-2">
            <div className="flex justify-between items-center w-full h-16 px-4 py-2">
                <div className="flex items-center gap-4">
                    <img
                        src="./logo.png"
                        alt="Logo da Digital Store"
                        className="bg-opacity-40"
                        width={50}
                        height={40}
                    />
                    <h1 className="text-[#c92071] text-2xl font-bold">Digital Store</h1>
                </div>
                <div className="flex items-center gap-4 flex-1 max-w-lg">
                    <div className="relative flex w-full">
                        <Input
                            className="w-full h-11 pl-10 pr-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-gray-500 transition-colors"
                            type="search"
                            placeholder="Pesquisar produto..."
                            value={search}
                            onChange={handleSearch}
                        />
                        <IoSearchOutline
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            onClick={handleSubmit}
                            size={24}
                        />
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Link className=" text-[#474747] rounded-full px-2 py-1 underline" href="./Card">
                        Cadastre-se
                    </Link>
                    <button className="bg-[#c92071] text-[#F5F5F5] rounded-lg px-5 py-2 w-24 h-10">
                        Entrar
                    </button>
                    <button className="text-[#c92071] rounded-full px-4 py-2">
                        <CiShoppingCart size={24} />
                    </button>
                    
                </div>
            </div>
        </header>
    );
}
