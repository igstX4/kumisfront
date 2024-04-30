import s from './Header.module.scss'
import logo from '../../assets/logo.png'
import { Instagram, Telegram } from '../../svgs/Svgs'
import { BurgerMenu } from '../BurgerMenu/BurgerMenu'
import { useState } from 'react'

export const Header = () => {
    const [active, setActive] = useState(false)
    return (
        <>
        <div className={s.header}>
            <button onClick={() => setActive(!active)}>☰</button>

            <h2>KUMIS</h2>

            <div className={s.items}>
                <div><Telegram /></div>
                <div className={s.insta}><Instagram /></div>
            </div>
        </div>
        <BurgerMenu isOpened={active} setOpened={() => setActive(!active)}/>
        </>
        
    )
}