import { useState } from 'react'
import { Modal } from '../Modal/Modal'
import s from './Cards.module.scss'
import { Element } from 'react-scroll'
import { ProductItem } from './ProductItem'

const proofs = {
    one: ["Питательность и богатство",
    "Качество и натуральность",
    "Улучшение здоровья",
    "Вкус и удовольствие",
    "Умеренная цена"],
    two : ["Энергия и восстановление",
    "Удовольствие и здоровье",
    "Больше удовольствия на дольше время",
    "Поддержка иммунитета",
    "Экономия денег"],
    three: ["Живость и радость",
    "Пробуждение и поддержка",
    "Достаточно для всей семьи",
    "Экономия времени на покупке",
    "Прекрасный вариант для вечеринок"]
}
export const ProductItems = () => {
    const [active, setActive] = useState(false)
    
    return (
        <Element name='cards'>
            <Modal isOpened={active} setOpened={() => setActive(!active)}/>
            <div className={s.itemsWrapper}>
            <h3 className={s.title}>Наши продукты!</h3>
            <div className={s.items}>
                <ProductItem setOpen={() => setActive(!active)} count={1} price={200} proofs={proofs.one}/>
                <ProductItem setOpen={() => setActive(!active)} count={2} price={350} proofs={proofs.two}/>
                <ProductItem setOpen={() => setActive(!active)} count={3} price={540} proofs={proofs.three}/>
            </div>
        </div>
        </Element>
    )
}