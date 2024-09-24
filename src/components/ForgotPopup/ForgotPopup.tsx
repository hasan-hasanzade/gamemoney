import React from 'react'
import styles from './forgot.module.scss'
import MailIcon from '../../../public/auth/mail.svg';
import CloseIcon from '../../../public/auth/close.svg';
import UserIcon from '../../../public/auth/user.svg';
import ParamIcon from '../../../public/auth/params.svg';
import Link from 'next/link';

const ForgotPopup = () => {
    return (
        <>
            <div className={styles.overlay}></div>
            <div className={styles.forgotMain}>
                <div className={styles.body}>
                    <CloseIcon className={styles.closeIcon} />
                    <div className={styles.successs}>Пароль успешно сброшен</div>
                    <h2 className={styles.title}>Добро пожаловать,</h2>
                    <div className={styles.subtitle}>Укажите вашу почту</div>
                    <form className={styles.form}>
                        <div className={styles.wrap}>
                            <input
                                id="email"
                                placeholder="Почта..."
                                type="email"
                                className={styles.input}
                            />
                            <MailIcon className={styles.mailIcon} />
                        </div>
                        <div className={styles.actions}>
                            <button className={styles.submitBtn}>
                                Войти
                            </button>
                        </div>
                        <div className={styles.options}>
                            <Link href='#' className={styles.forgot}>
                                <UserIcon className={styles.optionIcon} width={19} height={21} />
                                <span>Авторизация</span>
                            </Link>
                            <Link href='#' className={styles.register}>
                                <ParamIcon className={styles.optionIcon} width={21} height={21} />
                                <span>Регистрация</span>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ForgotPopup
