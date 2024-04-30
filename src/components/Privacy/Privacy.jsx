import { Fresh } from '../../svgs/Svgs'
import s from './Privacy.module.scss'
import { Element } from 'react-scroll';
export const Privacy = () => {
    return (
        <Element id='privacyId' name='privacy'>
            <div className={s.privacy}>
            <h2>Политика конфиденциальности посетителей и заказчиков</h2>
            <div className={s.items}>
                <div className={s.topAd} >
                <div className={s.item}>
                    <div className={s.topIcon}><Fresh /></div>

                    <div className={s.otherInfo}>
                        <h3>Сбор информации</h3>

                        <p>Мы собираем только необходимую информацию, которая помогает нам обрабатывать ваши заказы и предоставлять вам наилучший сервис. Это может включать в себя ваше имя, контактные данные, адрес доставки и информацию о платеже.</p>
                    </div>
                </div>
                <div className={s.item}>
                    <div className={s.topIcon}><Fresh /></div>

                    <div className={s.otherInfo}>
                        <h3>Использование информации</h3>

                        <p>Личная информация, которую вы предоставляете, используется исключительно для обработки ваших заказов, связи с вами относительно вопросов, касающихся вашего заказа, и улучшения качества нашего обслуживания.</p>
                    </div>
                </div>
                </div>

                <div className={s.item + " " + s.last}>
                    <div className={s.topIcon}><Fresh /></div>

                    <div className={s.otherInfo}>
                        <h3>Защита данных:</h3>

                        <p>Мы принимаем все необходимые меры для защиты ваших личных данных от несанкционированного доступа, изменения или распространения. Мы используем безопасные методы хранения и обработки информации, чтобы гарантировать ее конфиденциальность.</p>
                    </div>
                </div>
            </div>
        </div>
        </Element>
    )
}