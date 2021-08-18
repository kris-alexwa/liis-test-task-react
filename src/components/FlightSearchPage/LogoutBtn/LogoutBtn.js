import React from 'react';
import './LogoutBtn.css';
import LogOutIcon from '../../../images/icons/logout-icon.png'

function LogoutBtn() {
    return (
        <>
            <button className='logout'>
                <p className='logout__text'>Выйти</p>
                <img className='logout__icon' src={LogOutIcon} alt='Иконка выхода'></img>
            </button>
        </>
    )
}

export default LogoutBtn;