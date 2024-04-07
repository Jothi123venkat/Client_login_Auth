import React from 'react'
import './Pagenotfound.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import DataContext from '../../../context/DataContext'

const Pagenotfound = () => {
  const { t } = useContext(DataContext)
  return (
    <>
      <main className='sesstion_404'>
        <div className="container pageCss">
          <div className="row">
            <div className="col-md-6 align-self-center">
              <img src='./images/404-1.gif' className='img-fluid' alt='' />
            </div>
            <div className="col-md-6 align-self-center page404">
              <h1>404</h1>
              <h2>{t('commonPage.PageNotFound.PageNotFoundTitle')}</h2>
              <p className='mb-0'>{t('commonPage.PageNotFound.NotExists')}</p>
              <p className='mb-4'>{t('commonPage.PageNotFound.ClickTheButton')}</p>
              <div>
                <Link className="btn404 green" to="/">{t('commonPage.PageNotFound.HOME')}</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Pagenotfound