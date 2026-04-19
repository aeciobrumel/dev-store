import { Banners } from "@/components/home/banners";
import { MostSoldProducts } from "@/components/home/most-sold-products";
import { MostViewedProducts } from "@/components/home/most-viewed-products";
import { ProductListSkeleton } from "@/components/home/product-list-skeleton";
import { data } from "@/types/data";
import Image from "next/image";
import { Suspense } from "react";

export default function Page() {
    return (
        <div>
            <Banners list={data.banners} />
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-6 md:mt-12">
                <div className="flex flex-1 py-6 border border-gray-200 rounded-sm ">
                    <div className="w-32 flex justify-center items-center border-r border-gray-200">
                        <Image src={"/assets/ui/truck-line.png"} alt="" width={40} height={40} className="rounded-sm" />
                    </div>
                    <div className="flex-1 pl-8">
                        <div className="font-bold text-xl">Frete grátis</div>
                        <div className="text-sm text-gray-500">Para todo Sul.</div>
                    </div>
                </div>
                <div className="flex flex-1 py-6 border border-gray-200 rounded-sm ">
                    <div className="w-32 flex justify-center items-center border-r border-gray-200">
                        <Image src={"/assets/ui/discount-percent-line.png"} alt="" width={40} height={40} className="rounded-sm" />
                    </div>
                    <div className="flex-1 pl-8">
                        <div className="font-bold text-xl">Muitas ofertas</div>
                        <div className="text-sm text-gray-500">Ofertas Imbatíveis</div>
                    </div>
                </div>
                <div className="flex flex-1 py-6 border border-gray-200 rounded-sm ">
                    <div className="w-32 flex justify-center items-center border-r border-gray-200">
                        <Image src={"/assets/ui/arrow-left-right-line.png"} alt="" width={40} height={40} className="rounded-sm" />
                    </div>
                    <div className="flex-1 pl-8">
                        <div className="font-bold text-xl">Troca Fácil</div>
                        <div className="text-sm text-gray-500">No período de 30 dias</div>
                    </div>
                </div>
            </div>
            <Suspense fallback={<ProductListSkeleton />}>
                <MostViewedProducts />
            </Suspense>

            <Suspense fallback={<ProductListSkeleton />}>
                <MostSoldProducts />
            </Suspense>
        </div >
    );
}