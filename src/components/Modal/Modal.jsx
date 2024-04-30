import { useState } from 'react'
import s from './Modal.module.scss'
import instance from '../../axios'

export const Modal = ({product, isOpened, setOpened}) => {
    const [number, setNumber] = useState('')

    const postNumber = async () => {
        try {
            const {data} = await instance.post('/createRequest', {number,})

            if (data._id) {
                setOpened()
                setNumber('')
            }
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div onClick={setOpened} className={`${s.modalBg} ${isOpened ? s.active : ""}`}>
            <div onClick={(e) => e.stopPropagation()} className={s.content}>
                <h3>Чтобы сделать заказ, укажите ваш телефон и мы вам перезвоним!</h3>

                <input value={number} onChange={(e) => setNumber(e.target.value)} placeholder='Номер телефона'/>

                <button onClick={postNumber}>Сделать заказ</button>
            </div>
        </div>
    )
}