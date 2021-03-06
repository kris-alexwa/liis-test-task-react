import React from 'react';
import './Auth.css';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/actions';

function Auth() {
    const dispatch = useDispatch()

    const [emailInputError, setEmailInputError] = React.useState(null);
    const [passwordInputError, setPasswordInputError] = React.useState(null);
    const [formValid, setFormValid] = React.useState(false);
    const history = useHistory()

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
    }, [emailInputError, passwordInputError])


    const inputEmailErrorClassName = `auth__input ${emailIsValid ? '' : 'auth__input_error'}`;
    const inputPasswordErrorClassName = `auth__input ${passwordIsValid ? '' : 'auth__input_error'}`;
    const labelEmailErrorClassName = `auth__label ${emailIsValid ? '' : 'auth__label_error'}`;
    const labelPasswordErrorClassName = `auth__label ${passwordIsValid ? '' : 'auth__label_error'}`;

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(actions.loggedIn())

        history.push('/flight-search')
    }

    return (
        <>
            <section className='auth-page'>
                <div className='auth'>
                    <div className='auth__container'>
                        <h1 className='auth__title'>Simple Flight Check</h1>
                        <form className='auth__form' ref={formRef} onChange={handleFormChange} onSubmit={handleSubmit}>
                            <div className='auth__input-container'>
                                <label htmlFor='input-email' className={labelEmailErrorClassName}>??????????&#58;</label>
                                <input id='input-email' type='email' required onChange={handleChangeEmail} className={inputEmailErrorClassName}></input>
                                <span className='auth__input-error'>{emailInputError}</span>
                            </div>
                            <div className='auth__input-container'>
                                <label htmlFor='input-password' className={labelPasswordErrorClassName}>????????????&#58;</label>
                                <input id='input-password' minLength='8' pattern="^[^??-????-??\s]+$" required type='password' onChange={handleChangePassword} className={inputPasswordErrorClassName}></input>
                                <span className='auth__input-error'>{passwordInputError}</span>
                            </div>
                            <button type='submit' className='auth__button' disabled={!formValid}>??????????</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Auth;