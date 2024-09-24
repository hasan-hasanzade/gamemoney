import React, { useEffect } from 'react';
import styles from './login.module.scss';
import MailIcon from '../../../public/auth/mail.svg';
import CloseIcon from '../../../public/auth/close.svg';
import KeyIcon from '../../../public/auth/key.svg';
import VkIcon from '../../../public/auth/vk.svg';
import TgIcon from '../../../public/auth/tg.svg';
import SearchIcon from '../../../public/auth/search.svg';
import ParamIcon from '../../../public/auth/params.svg';
import Link from 'next/link';

const LoginPopup = ({ onClose }) => {
  
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
    <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.login}>
        <div className={styles.body}>
          <CloseIcon className={styles.closeIcon} onClick={onClose}/>
          <div className={styles.successs}>Успешно авторизован</div>
          <h2 className={styles.title}>Добро пожаловать,</h2>
          <div className={styles.subtitle}>Войдите в свой аккаунт</div>
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
            <div className={styles.wrap}>
              <input
                id="password"
                placeholder="Пароль..."
                type="email"
                className={styles.input}
              />
              <KeyIcon className={styles.keyIcon} />
            </div>
            <div className={styles.actions}>
              <button className={styles.submitBtn}>
                Войти
              </button>
              <div className={styles.social}>
                <button className={styles.socialBtn}>
                  <VkIcon width={26} height={15}/>
                </button>
                <button className={styles.socialBtn}>
                  <TgIcon width={26} height={26}/>
                </button>
              </div>
            </div>
            <div className={styles.options}>
              <Link href='#' className={styles.forgot}>
                <SearchIcon className={styles.optionIcon} width={21} height={21} />
                <span>Забыли пароль?</span>
              </Link>
              <Link href='#' className={styles.register}>
                <ParamIcon className={styles.optionIcon} width={21} height={21}/>
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
