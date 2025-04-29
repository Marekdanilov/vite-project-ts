import { Link } from 'react-router-dom'
import Button from './Button'

function Header() {
    return (
        <>
            <div className='flex flex-row bg-[#B6B4A4] sticky top-0 py-2 px-4 justify-between'>
                <div className='flex flex-row gap-x-4'>
                    <Link to="/"> <Button color="primary" size="medium" title="Главная" /> </Link>
                    <Link to="/auth"> <Button color="primary" size="medium" title="Вход" /> </Link>
                    <Link to="/help"> <Button color="primary" size="medium" title="Помощь" /> </Link>
                </div>
                <div className='flex basis-1/2 items-center bg-white text-gray-400 text-xl px-2 rounded-md border-2 border-gray-400'>
                    Поиск..
                </div>
               <Button color="primary" size="medium" title="Корзина"/>
            </div>
        </>
    )
}

export default Header