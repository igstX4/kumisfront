import s from './TryKymis.module.scss'
import { scroller } from 'react-scroll';
export const TryKymis = () => {
    const handleClick = () => {
        scroller.scrollTo('cards', {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: 20, // Scrolls to element + 50 pixels down the page
            // ... other options
          });
    }
    return (
        <div className={s.TryKymis}>
            <div className={s.infoDiv}>
                <h2>Попробуй наш кумыс <span>по скидке</span> прямо сейчас!</h2>
                <p>Наш кумыс - это не просто напиток, это настоящий подарок для вашего здоровья! Богатый состав питательных веществ, включая витамины, минералы и полезные микроэлементы, делает его идеальным выбором для поддержания иммунитета и общего благополучия.</p>
                <div>
                    <button onClick={handleClick} className={s.buy}>Заказать!</button>
                </div>
            </div>
        </div>
    )
}
//