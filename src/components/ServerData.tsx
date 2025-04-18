import { useState, useEffect } from "react";
import Button from "./Button";


function ServerData() {
  const [data, setData] = useState<{ title: string, description: string, price: string }[]>([]);

  const [dataIsCurrent, setDataIsCurrent] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/data");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    setDataIsCurrent(true);
  }, [dataIsCurrent]);

  return(
    <div className="flex flex-col bg-cyan-100 size-fit border-3 border-black gap-2">
      <p className="px-2 w-fit self-center text-2xl font-semibold">
        Список товаров с сервера:
      </p>
      {
        data.map(el => {
          return(
            <div className= "bg-emerald-500 p-2 text-white text-xl font-semibold">
              <p>{`Название: ${el.title}`}</p>
              <p>{`Описание: ${el.description}`}</p>
              <p>{`Цена: ${el.price}`}</p>
            </div>
          )
        })
      }
      <Button size="medium" color="secondary" title="Обновить товары" onClick = {() => {setDataIsCurrent(false)}}/>
    </div>
  )

}

export default ServerData