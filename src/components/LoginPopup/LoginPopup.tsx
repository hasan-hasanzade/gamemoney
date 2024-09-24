import React, { MouseEvent, useEffect, useState } from 'react';
import styles from './login.module.scss';
import MailIcon from '../../../public/auth/mail.svg';
import CloseIcon from '../../../public/auth/close.svg';
import KeyIcon from '../../../public/auth/key.svg';
import VkIcon from '../../../public/auth/vk.svg';
import TgIcon from '../../../public/auth/tg.svg';
import SearchIcon from '../../../public/auth/search.svg';
import ParamIcon from '../../../public/auth/params.svg';
import Link from 'next/link';
import { useLoginPopupStore } from '@/shared/store/loginPopupStore';
import { useRegisterPopupStore } from '@/shared/store/registerPopupStore';
import { login, register } from '@/shared/api/auth/auth';
import { setCookie } from '@/lib/utils';
import { LoginButton } from '@telegram-auth/react';
import VKID from '@/shared/config/vkInstance';



const LoginPopup = () => {
    const { setIsOpen } = useLoginPopupStore()
    const { setIsOpen: setRegisterPopup } = useRegisterPopupStore()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isSuccess, setIsSuccess] = useState(false)
    const goToRegister = () => {
        setIsOpen(false)
        setRegisterPopup(true)
    }

    useEffect(() => {
        // const oneTap = new VKID.OneTap();
        // const container = document.getElementById('VkIdSdkOneTap');
        //
        // // Проверка наличия кнопки в разметке.
        // if (container) {
        //     // Отрисовка кнопки в контейнере с именем приложения APP_NAME, светлой темой и на русском языке.
        //     oneTap.render({ container: container, scheme: VKID.Scheme.DARK, lang: VKID.Languages.RUS })
        //         .on(VKID.WidgetEvents.ERROR, console.log('error')); // handleError — какой-либо обработчик ошибки.
        // } else {
        //     console.log('not found')
        // }
    }, [])

    const tgAuth = async (data: any) => {
        console.log(data)
        const user = await register({ name: data.username, password: data.username, tgLink: `t.me/${data.username}`, avatar: data.photo_url })
        const token = await login({ name: user.data.name!, password: data.username })
        setCookie("accessToken", token.data.accessToken, 30)
        setIsOpen(false)
        setIsSuccess(true)
        location.reload()
    }


    const handleLogin = async (e: any) => {
        e.preventDefault()
        const token = await login({ email, password })
        if (token.status == 201) {
            setCookie("accessToken", token.data.accessToken, 30)
            setIsOpen(false)
            setIsSuccess(true)
        }
    }

    return (
        <>
            <div className={styles.overlay}></div> {/* Overlay */}
            <div className={styles.login}>
                <div className={styles.body}>
                    <CloseIcon className={styles.closeIcon} />
                    {isSuccess && <div className={styles.successs}>Успешно авторизован</div>}
                    <h2 className={styles.title}>Добро пожаловать,</h2>
                    <div className={styles.subtitle}>Войдите в свой аккаунт</div>
                    <form className={styles.form}>
                        <div className={styles.wrap}>
                            <input
                                id="email"
                                placeholder="Почта..."
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.currentTarget.value)}
                                className={styles.input}
                            />
                            <MailIcon className={styles.mailIcon} />
                        </div>
                        <div className={styles.wrap}>
                            <input
                                id="password"
                                placeholder="Пароль..."
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.currentTarget.value)}
                                className={styles.input}
                            />
                            <KeyIcon className={styles.keyIcon} />
                        </div>
                        <div className={styles.actions}>
                            <button className={styles.submitBtn} onClick={(e) => handleLogin(e)}>
                                Войти
                            </button>
                        </div>
                        {/* <div id="VkIdSdkOneTap"></div> */}
                        <LoginButton botUsername='isapchatbot' onAuthCallback={(data) => tgAuth(data)} buttonSize='medium' lang='ru' />
                        <div className={styles.options}>
                            <Link href='#' className={styles.forgot}>
                                <SearchIcon className={styles.optionIcon} width={21} height={21} />
                                <span>Забыли пароль?</span>
                            </Link>
                            <Link href='#' className={styles.register} onClick={() => goToRegister()}>
                                <ParamIcon className={styles.optionIcon} width={21} height={21} />
                                <span>Регистрация</span>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LoginPopup;
