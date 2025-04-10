// import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='flex justify-center bg-[#454545] text-white bottom-0 h-[200px] px-6 py-2'>
            {/* <div className='text-xl  font-semibold'>Footer:</div>
            <div className='text-blue-500 space-x-2'>
                <Link to='/'>Home</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/About'>About</Link>
            </div> */}
            <div className='flex flex-row gap-x-30'>
                <div className='flex flex-col gap-y-5'>
                    <div className='text-xl'>
                        О нас
                    </div>
                    <div>
                        <div className='text-lg text-[#ABABAB]'>
                            <p>О продавце</p>
                            <p>Партнёры</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-y-5'>
                    <div className='text-xl'>
                        Покупателям
                    </div>
                    <div>
                        <div className='text-lg text-[#ABABAB]'>
                            <p>Правила</p>
                            <p>Возврат</p>
                            <p>Скидки</p>
                        </div>
                    </div>
                </div>
                
                <div className='flex flex-col gap-y-5'>
                    <div className='text-xl'>
                        Сотрудничество
                    </div>
                    <div>
                        <div className='text-lg text-[#ABABAB]'>
                            <p>Условия</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-y-5'>
                    <div className='text-xl'>
                        Важно
                    </div>
                    <div>
                        <div className='text-lg text-[#ABABAB]'>
                            <p>Акции</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-y-5'>
                    <div className='text-xl'>
                        Наши соц сети
                    </div>
                    <div>
                        <div className='text-lg text-[#ABABAB]'>
                            <p>ВКонтакте</p>
                            <p>Одноклассники</p>
                            <p>Телеграм</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-y-5'>
                    <div className='text-xl'>
                        Контакты
                    </div>
                    <div>
                        <div className='text-lg text-[#ABABAB]'>
                            <p>8 800 000-00-01</p>
                            <p>8 800 000-00-02</p>
                            <p>bookshop@mail.ru</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer