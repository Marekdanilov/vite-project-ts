import { GoodsViewProps } from "../models/ProjectModels";

function GoodsView({goods} : GoodsViewProps) {
    return (
        <div className="flex flex-col bg-gray-50 size-fit border-3 border-black gap-2">
            <p className="px-2 w-fit self-center text-2xl font-semibold">
                Список товаров:
            </p>
            {
                goods.map(el => {
                    return (
                        <div className= "bg-gray-300 p-2">
                            <p> {`Название: "${el.title}",`} </p>
                            <p> {`Описание: "${el.description}"`} </p>
                            <p> {`Цена: ${el.price}`} </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default GoodsView