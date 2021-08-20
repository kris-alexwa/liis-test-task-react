import React from 'react';
import './LogoutBtn.css';
import LogOutIcon from '../../../images/icons/logout-icon.png';
import { Link } from 'react-router-dom';

function LogoutBtn() {
    return (
        <>
            <Link className='logout__link' to='/'>
                <button className='logout'>
                    <p className='logout__text'>Выйти</p>
                    <img className='logout__icon' src={LogOutIcon} alt='Иконка выхода'></img>
                </button>
            </Link>
        </>
    )
}

export default LogoutBtn;