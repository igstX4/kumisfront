import s from './Home.module.scss'
import {Header} from '../../components/Header/Header'
import {TryKymis} from '../../components/TryKymis/TryKymis'

import {Delivery} from '../../components/Delivery/Delivery'
import {ProductItems} from '../../components/Cards/Cards'
import {Privacy} from '../../components/Privacy/Privacy'
import {Footer} from '../../components/Footer/Footer'

export const Home = () => {
    return (
        <div className={s.Home}>
            <Header />
            <TryKymis />
            <ProductItems />
            <Delivery />
            <Privacy />
            <Footer />
        </div>
    )
}