import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import s from './BurgerMenu.module.scss'
import { Link, animateScroll as scroll, scroller } from "react-scroll";

export const BurgerMenu = ({ isOpened, setOpened }) => {
    const [opened1, setOpened1] = useState(false)
    const handleClick = (to) => {
        setOpened()
        scroller.scrollTo(to, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: 20, // Scrolls to element + 50 pixels down the page
            // ... other options
          });
    }

    return (
        <>
        <Modal isOpened={opened1} setOpened={() => setOpened1(!opened1)}/>
        <div className={`${s.BurgerMenu} ${isOpened ? s.active : ""}`}>
            <div className={s.top}>
                <div className={s.topDiv}>
                    <h3 onClick={setOpened}>✖</h3>
                    <div>
                        <h2>Меню</h2>
                    </div>
                </div>
                <div className={s.items}>
                    <div onClick={() => handleClick('cards')}>
                        Наши товары
                    </div>
                    <div onClick={() => handleClick('delivery')}>
                        Доставка
                    </div>
                    <div onClick={() => handleClick('privacy')}>
                        Политика конфиденциальности
                    </div>
                </div>
            </div>
            <div className={s.bottom}>
                <button onClick={() => setOpened1(!opened1)}>Заказать!</button>
            </div>
        </div>
        </>
    )
}