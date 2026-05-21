"use client"

import { useQueryString } from "@/hooks/use-querystring";
import { ChangeEvent, useState } from "react";

export const ProductListFilter = () => {
    const querystring = useQueryString();
    const [filtersOpen, setFiltersOpen] = useState(false);
    const order = querystring.get('order') || 'views';

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value);
        querystring.set('order', e.target.value);
    }
    return (<>
        <div>
            <div className=" flex flex-col md:flex-row gap-3 justify-between items-start md:items-center">
                <div className="text-2xl"><strong>99</strong> Produtos</div>
                <div className="w-full md:max-w-70 flex flex-row gap-5">
                    <select
                        onChange={handleSelectChange}
                        defaultValue={order}
                        className="flex-1 bg-white justify-center items-center border border-gray-200 rounded-sm text-gray-500 px-6 h-14">
                        <option value="views">Popularidade</option>
                        <option value="price">Preço</option>
                        <option value="selling">Mais vendidos</option>
                    </select>
                    <div
                        onClick={() => setFiltersOpen(!filtersOpen)}
                        className="flex-1 bg-white border md:hidden flex justify-center items-center border-gray-200 rounded-sm text-gray-500 px-6 h-14"
                    >
                        Filtrar por
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 mt-8">
                <div className={`flex-1 md:max-w-70 ${filtersOpen ? 'block' : 'hidden'} md:block`}>filtro</div>
                <div className="flex-1">grid de produtos</div>
            </div>
        </div >
    </>
    );
}