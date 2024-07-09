'use client';
import { ArrowRight } from "lucide-react";

export default function Produtos() {
    return (
        <div>
            <div className="flex justify-between items-center gap-4 p-4">
                <h2 className="text-[#474747] font-bold">Produtos em alta</h2>
                <div className="flex gap-4 items-center">
                    <p className="text-[#C92071]">Ver todos</p>
                    <ArrowRight size={15} className="text-[#C92071]" />
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
                <img src="./imagens/tenis.li.svg" alt="tenis" />
                <img src="./imagens/tenis.li.svg" alt="tenis" />
                <img src="./imagens/tenisli2.svg" alt="tenis" />
                <img src="./imagens/tenisli2.svg" alt="tenis" />
                <img src="./imagens/tenisli2.svg" alt="tenis" />
                <img src="./imagens/tenisli2.svg" alt="tenis" />
                <img src="./imagens/tenisli2.svg" alt="tenis" />
                <img src="./imagens/tenisli2.svg" alt="tenis" />
            </div>
        </div>
    );
}
