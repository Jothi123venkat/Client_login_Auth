import React from 'react'
import './sesstiontimeout.css'
import { Button } from '@mui/material'
import useDidMountEffect from '../../../hooks/useDidMountEffect'
import { useContext } from 'react'
import DataContext from '../../../context/DataContext'
const Sesstiontimeout = () => {
    const { t } = useContext(DataContext)
    useDidMountEffect(() => {
        setTimeout(() => {
            logout()
        }, 5000);
    }, [])
    const logout = () => {
        sessionStorage.clear()
        sessionStorage.setItem('lang', 'en')
        window.location.assign('/#/sign-in')
    }
    return (
        <div className='sesstion_div'>
            <div className='text-center'>
                <img src='./images/timeout.gif' className='img-fluid gifimg' alt=''/>
                <h4>{t('commonPage.SessionTimeout.SessionTimeoutTitle')}</h4>
                <p>{t('commonPage.SessionTimeout.SesstionMessgae')}</p>
                <div className="text-center mt-3">
                    <Button variant="contained" className='log_btn_sesstion' onClick={logout}>{t('commonPage.SessionTimeout.Login')}</Button>
                </div>
            </div>

        </div >
    )
}

export default Sesstiontimeout