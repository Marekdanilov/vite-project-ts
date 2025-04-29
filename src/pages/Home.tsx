import { useState } from "react"
import Text from "../components/Text.js"
import ModalWindow from "../components/GoodsAddModal.js"
import GoodsView from "../components/GoodsView.js"
import ServerData from "../components/ServerData.js"
import { Helmet } from "react-helmet"

function Home() {
    const [goods, setGoods] = useState([]);
    
    return (
        <>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="Главная страница книжного магазина"></meta>
                <meta name="keywords" content="главная, дом, магазин, книги"></meta>
            </Helmet>
            <div className="bg-orange-100">
                <div className='text-2xl  font-semibold'>This is Home page</div>
                <Text size="large" color="primary" text="Задание 6. Хуки"/>
                Добавление из модалки напрямую помощью UseState. Без сервера
                <GoodsView goods = {goods}/>
                <div className="my-2">
                    <ModalWindow goods={goods} setGoods={setGoods}/>
                </div>
                <Text size="large" color="secondary" text="Задание 8 и 9. Get и Post."/>
                Сначала надо добавить товар через модалку. Там работает Post запрос серверу. <br/>
                Затем надо нажать кнопку "Обновить товары". Тогда таблица обновится через Get запрос к сереверу
                <ServerData />
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
