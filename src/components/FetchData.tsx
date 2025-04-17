import { useState, useEffect } from "react";



function FetchData() {
  const [data, setData] = useState<{ message: string, title: string }[]>([]);

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
  }, []);

  return(
    <div className="flex flex-col bg-cyan-100 size-fit border-3 border-black gap-2">
      <p className="px-2 w-fit self-center text-2xl font-semibold">
        Список данных с сервера:
      </p>
      {
        data.map(el => {
          return(
            <div className= "bg-emerald-500 p-2 text-white text-xl font-semibold">
              <p>{`Название: ${el.title}`}</p>
              <p>{`Сообщение: ${el.message}`}</p>
            </div>
          )
        })
      }
    </div>
  )

}

export default FetchData