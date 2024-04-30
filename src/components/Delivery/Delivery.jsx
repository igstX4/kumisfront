import { Fresh, Point, Timer } from '../../svgs/Svgs'
import s from './Delivery.module.scss'
import { Element } from 'react-scroll';


export const Delivery = () => {
    return (
        <Element name="delivery">
            <div className={s.Delivery}>
            <h2>Доставка и оплата</h2>
            <p className={s.desk}>В этом блоке вы можете найти условия <span>доставки и оплаты</span>, а также прочую информацию.</p>
            <div className={s.items}>
                <div className={s.item}>
                    <div className={s.icon} style={{paddingTop: "7px"}}><Timer /></div>
                    <div className={s.info}>
                        <h2>Быстрая доставка <span>по всей Украине.</span></h2>
                        <p>Мы предлагаем быструю и надежную доставку кумыса в любой регион Украины. Независимо от того, находитесь ли вы в крупном городе или отдаленной деревне, ваш заказ будет доставлен вовремя и в отличном состоянии.</p>
                    </div>
                </div>
                <div className={s.item}>
                    <div className={s.icon} style={{paddingTop: "7px"}}><Fresh /></div>
                    <div className={s.info}>
                        <h2>Гарантия <span>свежести и качества.</span></h2>
                        <p>Мы ценим доверие наших клиентов, поэтому обеспечиваем высокое качество и свежесть каждой бутылки кумыса. Наши специалисты по логистике работают на всех этапах доставки, чтобы гарантировать сохранность всех полезных свойств напитка до момента доставки прямо к вам домой.</p>
                    </div>
                </div>
                <div className={s.item}>
                    <div className={s.icon} style={{paddingTop: "7px"}}><Point /></div>
                    <div className={s.info}>
                        <h2>Удобные опции <span>оплаты и отслеживание заказа.</span></h2>
                        <p>Мы делаем процесс заказа и оплаты максимально удобным для наших клиентов. Вы можете выбрать удобный способ оплаты, а также отслеживать статус вашего заказа в режиме реального времени через нашу онлайн-платформу. Мы стремимся сделать ваш опыт покупки кумыса удобным и приятным, начиная с момента заказа и до момента получения вашей посылки.</p>
                    </div>
                </div>
            </div>
        </div>
        </Element>
    )
}