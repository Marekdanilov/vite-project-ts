import Button from './Button'

function Header() {
    return (
        <>
            <div className='flex flex-row bg-[#B6B4A4] sticky top-0 py-2 px-4 justify-between'>
                <div className='flex flex-row gap-x-4'>
                    <Button color="primary" size="medium" title="Главная" onClick={ () => { window.location.assign('/')} } />
                    <Button color="primary" size="medium" title="Вход" onClick={ () => { window.location.assign('/auth')} } />
                    <Button color="primary" size="medium" title="Помощь" onClick={ () => { window.location.assign('/help')} }/>
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