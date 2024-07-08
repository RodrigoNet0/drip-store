export default function SectionCollection() {
    return (
        <div className="flex flex-col gap-4 p-4">
            <h1 className="text-[#474747] text-center font-bold text-2xl md:text-3xl lg:text-4xl">Coleções em destaque</h1> {/* Aumentando o tamanho do título */}
            <div className="flex flex-col gap-4 w-full">
                <ul className="flex justify-center items-center">
                    <li className="flex-shrink-0 text-center">
                        <img src="./camiseta.svg" alt="Imagem de uma coleção" className="h-[150px] w-auto" />
                        <p className="text-[#474747] text-center font-bold">Camiseta</p> 
                    </li>
                    <li className="flex-shrink-0 text-center">
                        <img src="./calca.svg" alt="Imagem de uma coleção" className="h-[170px] w-auto" />
                        <p className="text-[#474747] font-bold"></p>
                    </li>
                    <li className="flex-shrink-0 text-center">
                        <img src="./bone.svg" alt="Imagem de uma coleção" className="h-[170px] w-auto" />
                        <p className="text-[#474747] font-bold"></p>
                    </li>
                    <li className="flex-shrink-0 text-center">
                        <img src="./tenis2.svg" alt="Imagem de uma coleção" className="h-[170px] w-auto" />
                        <p className="text-[#474747] font-bold"></p>
                    </li>
                    <li className="flex-shrink-0 text-center">
                        <img src="./head.svg" alt="Imagem de uma coleção" className="h-[170px] w-auto" />
                        <p className="text-[#474747] font-bold"></p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
