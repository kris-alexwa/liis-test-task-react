import React from 'react';
import './LogoutBtn.css';
import LogOutIcon from '../../../images/icons/logout-icon.png';
import { useHistory } from 'react-router-dom';

function LogoutBtn(props) {
    const history = useHistory()

    function handleLogOut() {
        props.handleLogOut()
        history.push('/')
    }

    return (
        <>
            <button className='logout' onClick={handleLogOut}>
                <p className='logout__text'>Выйти</p>
                <img className='logout__icon' src={LogOutIcon} alt='Иконка выхода'></img>
            </button>
        </>
    )
}

export default LogoutBtn;