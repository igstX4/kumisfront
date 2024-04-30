import s from './Cards.module.scss'

export const ProductItem = ({count, price, proofs, setOpen}) => {
    return (
        <div className={s.item}>
            <div className={s.topDiv}>
                <h3>{count} Литр{count !== 1 ? "a" : ""}</h3>
            </div>
            <h2 className={s.price}>₴ {price}</h2>

            <ul>
                {proofs.map((item) => <p>{item}</p>)}
            </ul>
            <button onClick={setOpen}>Заказать!</button>
        </div>
    )
}
//