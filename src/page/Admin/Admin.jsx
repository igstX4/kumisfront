import { useEffect, useState } from 'react'
import s from './Admin.module.scss'
import instance from '../../axios'
import axios from 'axios'

const AdminItem = ({ number, id, update }) => {

    const deleteItem = async () => {
        const { data } = await instance.delete(`/${id}`)

        if (data) {
            update()
        }
    }
    return (
        <div className={s.AdminItem}>
            <p>{number}</p>
            <div onClick={deleteItem}>
                <h3>✖</h3>
            </div>
        </div>
    )
}

export const Admin = () => {
    const [logined, setLogined] = useState(false)
    const [password, setPassword] = useState('')
    const [numbers, setNumbers] = useState()
    const getMeFunc = async () => {
        try {
            const { data } = await instance.get('/me')

            if (data.admin) {
                setLogined(true)
                fetchNumbers()
            }
        } catch (e) {
            console.log(e)
        }
    }
    const fetchNumbers = async () => {
        try {
            const { data } = await instance.get('/all')
            setNumbers(data)
        } catch (e) {
            console.log(e)
        }
    }


    const handleLogin = async () => {
        try {
            const { data } = await instance.post('/login', { password: password })

            if (data.token) {
                localStorage.setItem('token', data.token)
                instance.defaults.headers.Authorization = data.token
                getMeFunc()
                // console.log(data1)
            }
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getMeFunc()
        fetchNumbers()
    }, [])

    return (
        <div className={s.Admin}>
            {logined ? <div className={s.content}>
                <h2>Номера пользователей</h2>
                <div className={s.items}>
                    {numbers ? numbers.map((item) => <AdminItem key={item._id} update={fetchNumbers} id={item._id} number={item.number} />) : <p>Loading...</p>}
                </div>
            </div> : <div className={s.wrapper}>
                <div className={s.login}>
                    <h2>Введите админ пароль!</h2>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Пароль' />
                    <button onClick={handleLogin}>Войти</button>
                </div>
            </div>}
        </div>
    )
    // if (!logined) {
    // return 
    // }
    // if (logined) {
    //     <div className={s.Admin}>

    //     </div>
    // } 
}
