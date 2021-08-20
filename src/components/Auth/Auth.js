import React from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';

function Auth(props) {
    const [emailInputError, setEmailInputError] = React.useState(null);
    const [passwordInputError, setPasswordInputError] = React.useState(null);
    const [formValid, setFormValid] = React.useState(false);
    const formRef = React.useRef();

    const [emailIsValid, setEmailIsValid] = React.useState(false);
    const [passwordIsValid, setPasswordIsValid] = React.useState(false)

    function handleFormChange() {
        setFormValid(formRef.current.checkValidity())
    }

    function handleChangeEmail(event) {
        setEmailInputError(event.target.validationMessage)
    }

    function handleChangePassword(event) {
        setPasswordInputError(event.target.validationMessage)
    }

    React.useEffect(() => {
        const isEmailValid = emailInputError === null || emailInputError === '';
        setEmailIsValid(isEmailValid)
    }, [emailInputError])

    React.useEffect(() => {
        const isPasswordValid = passwordInputError === null || passwordInputError === ''
        setPasswordIsValid(isPasswordValid)
    }, [passwordInputError])


    const inputEmailErrorClassName = `auth__input ${emailIsValid ? '' : 'auth__input_error'}`;
    const inputPasswordErrorClassName = `auth__input ${passwordIsValid ? '' : 'auth__input_error'}`;
    const labelEmailErrorClassName = `auth__label ${emailIsValid ? '' : 'auth__label_error'}`;
    const labelPasswordErrorClassName = `auth__label ${passwordIsValid ? '' : 'auth__label_error'}`;

    return (
        <>
            <section className='auth-page'>
                <div className='auth'>
                    <div className='auth__container'>
                        <h1 className='auth__title'>Simple Flight Check</h1>
                        <form className='auth__form' ref={formRef} onChange={handleFormChange}>
                            <div className='auth__input-container'>
                                <label htmlFor='input-email' className={labelEmailErrorClassName}>Логин&#58;</label>
                                <input id='input-email' type='email' required onChange={handleChangeEmail} className={inputEmailErrorClassName}></input>
                                <span className='auth__input-error'>{emailInputError}</span>
                            </div>
                            <div className='auth__input-container'>
                                <label htmlFor='input-password' className={labelPasswordErrorClassName}>Пароль&#58;</label>
                                <input id='input-password' minLength='8' pattern="^[^А-Яа-я\s]+$" required type='password' onChange={handleChangePassword} className={inputPasswordErrorClassName}></input>
                                <span className='auth__input-error'>{passwordInputError}</span>
                            </div>
                            <Link to='/flight-search' className='auth__link' ><button className='auth__button' disabled={!formValid}>Войти</button></Link>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Auth;