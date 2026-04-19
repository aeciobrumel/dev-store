import { Product } from "@/types/product"
import { ProductList } from "../product-list"
import { data } from "@/types/data"

export const MostViewedProducts = async () => {
    //TO DO: fazer requisição dos produtos

    return (
        <div className="mt-10">
            <h2 className="text-2xl text-center md:text-left">Produtos Mais Visualizados</h2>
            <p className="text-gray-500 text-center md:text-left"> Campeões de Visualização da nossa loja.</p>
            <div className="mt-9 ">
                <ProductList list={data.products} />
            </div>
        </div>
    )

}