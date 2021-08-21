import React from 'react';
import './LogoutBtn.css';
import LogOutIcon from '../../../images/icons/logout-icon.png';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actions } from '../../../redux/actions';

function LogoutBtn() {
    const dispatch = useDispatch()
    const history = useHistory()

    function handleLogOut() {
        dispatch(actions.loggedOut())
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