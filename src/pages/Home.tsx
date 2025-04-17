import { useState } from "react"
import Text from "../components/Text.js"
import ModalWindow from "../components/GoodsAddModal.js"
import GoodsView from "../components/GoodsView.js"
import FetchData from "../components/FetchData.js"

function Home() {
    const [goods, setGoods] = useState([]);

    return (
        <>
            <div className="bg-orange-100">
                <div className='text-2xl  font-semibold'>This is Home page</div>
                <Text size="large" color="primary" text="Задание 6. Хуки"/>
                <GoodsView goods = {goods}/>
                <div className="my-2">
                    <ModalWindow goods={goods} setGoods={setGoods}/>
                </div>
                <Text size="large" color="secondary" text="Задание 8. Get"/>
                <FetchData />
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
