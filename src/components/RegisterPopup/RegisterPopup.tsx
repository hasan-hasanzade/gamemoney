import React, { useEffect, useRef } from 'react';
import styles from './register.module.scss';
import MailIcon from '../../../public/auth/mail.svg';
import CloseIcon from '../../../public/auth/close.svg';
import KeyIcon from '../../../public/auth/key.svg';
import VkIcon from '../../../public/auth/vk.svg';
import TgIcon from '../../../public/auth/tg.svg';
import SearchIcon from '../../../public/auth/search.svg';
import UserIcon from '../../../public/auth/user.svg';
import Link from 'next/link';

const RegisterPopup = ({ onClose }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.registerMain} ref={popupRef}>
        <div className={styles.body}>
          <CloseIcon className={styles.closeIcon} onClick={onClose} />
          <div className={styles.successs}>Успешно зарегистрирован</div>
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
            <div className={styles.wrap}>
              <input
                id="password"
                placeholder="Пароль..."
                type="password"
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
              <button className={styles.submitBtn}>Регистрация</button>
              <div className={styles.social}>
                <button className={styles.socialBtn}>
                  <VkIcon width={26} height={15} />
                </button>
                <button className={styles.socialBtn}>
                  <TgIcon width={26} height={26} />
                </button>
              </div>
            </div>
            <div className={styles.options}>
              <Link href="#" className={styles.forgot}>
                <SearchIcon className={styles.optionIcon} width={21} height={21} />
                <span>Забыли пароль?</span>
              </Link>
              <Link href="#" className={styles.register}>
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
