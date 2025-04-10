import { useState } from "react"
import Button from "../components/Button.js"
import Input from "../components/Input.js"
import Text from "../components/Text.js"
import ModalWindow from "../components/ModalWindow.js"
import { IGood } from "../models/ProjectModels.js"

function Home() {
    const [goods, setGoods] = useState([]);

    const goodsView = goods.map((el: IGood) => {
        return (
            <p className="border-2 border-gray-500 px-2">
                {`Название: "${el.title}", Описание: "${el.description}", Цена: ${el.price}`}
            </p>
        )
    });

    return (
        <>
            <div className="bg-orange-100">
                <div className='text-2xl  font-semibold'>This is Home page</div>
                <Button size="medium" color="primary" title="Кнопка"/>
                <Button size="small" color="secondary" title="Кнопка2"/>
                <Input size="medium" color="primary" placeholder="Введите"/>
                <Input size="large" color="secondary" placeholder="Введите2"/>
                <Text size="medium" color="secondary" text="Мой текст"/>
                <div className="pt-15">
                    <Text size="large" color="primary" text="Задание 6. Хуки"/>
                </div>
                
                <div className="bg-gray-50 size-fit border-3 border-black">
                    <p className="px-2">
                        Список товаров:
                    </p>
                    {goodsView}
                </div>
                <div className="my-2">
                    <ModalWindow goods={goods} setGoods={setGoods}/>
                </div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
                <div>Random text.</div>
            </div>
        </>
    )


    
};

export default Home;
