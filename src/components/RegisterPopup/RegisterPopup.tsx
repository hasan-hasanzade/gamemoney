import React, { useEffect, useState } from 'react';
import styles from './register.module.scss';
import MailIcon from '../../../public/auth/mail.svg';
import CloseIcon from '../../../public/auth/close.svg';
import KeyIcon from '../../../public/auth/key.svg';
import VkIcon from '../../../public/auth/vk.svg';
import TgIcon from '../../../public/auth/tg.svg';
import SearchIcon from '../../../public/auth/search.svg';
import UserIcon from '../../../public/auth/user.svg';
import Link from 'next/link';
import { useLoginPopupStore } from '@/shared/store/loginPopupStore';
import { useRegisterPopupStore } from '@/shared/store/registerPopupStore';
import { login, register } from '@/shared/api/auth/auth';
import { useRouter } from 'next/router';
import { setCookie } from '@/lib/utils';
import { LoginButton } from '@telegram-auth/react';

const RegisterPopup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isSuccess, setIsSuccess] = useState(false)

    const { setIsOpen } = useLoginPopupStore()
    const { setIsOpen: setRegisterPopup } = useRegisterPopupStore()


    const goToLogin = () => {
        setRegisterPopup(false)
        setIsOpen(true)
    }


    const tgAuth = async (data: any) => {
        console.log(data)
        const user = await register({ name: data.username, password: data.username, tgLink: `t.me/${data.username}`, avatar: data.photo_url })
        const token = await login({ name: user.data.name!, password: data.username })
        setCookie("accessToken", token.data.accessToken, 30)
        setIsOpen(false)
        setIsSuccess(true)
        location.reload()
    }
    const handleRegister = async (e: any) => {
        e.preventDefault()
        const user = await register({ email, password })
        if (user.status == 201) {
            setIsSuccess(true)
            goToLogin()

        }
    }

    return (
        <>
            <div className={styles.overlay}></div> {/* Overlay */}
            <div className={styles.registerMain}>
                <div className={styles.body}>
                    <CloseIcon className={styles.closeIcon} onClick={() => setRegisterPopup(false)} />
                    {isSuccess && <div className={styles.successs}>Успешно зарегистрирован</div>}
                    <h2 className={styles.title}>Добро пожаловать,</h2>
                    <div className={styles.subtitle}>Укажите вашу почту</div>
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
                        <div className={styles.agreement}>
                            <label className={styles.agrBody}>
                                <input className={styles.checkbox} type="checkbox" />
                                <span className={styles.checkmark}></span>
                                Сгенерировать и выслать пароль
                            </label>
                        </div>
                        <div className={styles.actions}>
                            <button className={styles.submitBtn} onClick={(e) => handleRegister(e)}>
                                Регистрация
                            </button>
                            <div className={styles.social}>
                                <button className={styles.socialBtn}>
                                    <VkIcon width={26} height={15} />
                                </button>
                            </div>
                        </div>
                        <LoginButton botUsername='isapchatbot' onAuthCallback={(data) => tgAuth(data)} buttonSize='medium' lang='ru' />
                        <div className={styles.options}>
                            <Link href='#' className={styles.forgot}>
                                <SearchIcon className={styles.optionIcon} width={21} height={21} />
                                <span>Забыли пароль?</span>
                            </Link>
                            <Link href='#' className={styles.register} onClick={() => goToLogin()}>
                                <UserIcon className={styles.optionIcon} width={21} height={21} />
                                <span>Авторизация</span>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default RegisterPopup;
