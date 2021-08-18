import React from 'react';
import './Breadcrumbs.css';
import { Link } from 'react-router-dom';
import ArrowIcon from '../../../../images/icons/arrow-icon.png'

function Breadcrumbs() {
    return (
        <>
        <div className='breadcrumbs'>
            <Link className='breadcrumbs__link' to='#'>Вылеты</Link>
            <img className='breadcrumbs__separator' src={ArrowIcon} alt='Иконка стрелка'></img>
            <Link className='breadcrumbs__link' to='#'>SVO&#8201;&#8209;&#8201;JFK</Link>
        </div>
        </>
    )
}

export default Breadcrumbs;