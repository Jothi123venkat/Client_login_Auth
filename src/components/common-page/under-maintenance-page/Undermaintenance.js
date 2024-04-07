import React, { useContext } from 'react'
import './undermaintenance.css'
import apiService from '../../../api/apiService'
import { useNavigate } from "react-router-dom";
import DataContext from '../../../context/DataContext';
const Undermaintenance = () => {
    const { t } = useContext(DataContext)
    const navigate = useNavigate();
    const upApi = () => {        
        apiService(`/actuator/health`, '', 'get').then((res) => {
            navigate(-1)
        })
    }
    return (
        <div className="under_maintaine">
            <div className="boxunder">
                <div className="animation">
                    <div className="one spin-one"></div>
                    <div className="two spin-two"></div>
                    <div className="three spin-one"></div>
                </div>
                <h1>{t('commonPage.UnderMaintenance.underMaintenance')}</h1>
                <p>{t('commonPage.UnderMaintenance.weApologize')}</p>
                <p>{t('commonPage.UnderMaintenance.pleaseContact')}</p>
                <p>{t('commonPage.UnderMaintenance.thankYouPatience')}</p>
                <p className='refbtn' onClick={upApi} target="_blank">{t('commonPage.UnderMaintenance.refresh')}</p>
            </div>
        </div>
    )
}

export default Undermaintenance