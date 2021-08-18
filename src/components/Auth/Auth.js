import React from 'react';
import './Auth.css';

function Auth() {
    return (
        <>
            <section className='auth-page'>
                <div className='auth'>
                    <div className='auth__container'>
                        <h1 className='auth__title'>Simple Flight Check</h1>
                        <form className='auth__form'>
                            <div className='auth__input-container'>
                                <label htmlFor='input-email' className='auth__label'>Логин&#58;</label>
                                <input id='input-email' type='email' className='auth__input'></input>
                                <span className='auth__input-error'></span>
                            </div>
                            <div className='auth__input-container'>
                                <label htmlFor='input-password' className='auth__label'>Пароль&#58;</label>
                                <input id='input-password' minLength='8' pattern="^[^А-Яа-я\s]+$" type='password' className='auth__input'></input>
                                <span className='auth__input-error'></span>
                            </div>
                            <button className='auth__button'>Войти</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Auth;