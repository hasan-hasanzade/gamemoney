'use client'

import React, { useState } from 'react';
import styles from './header.module.scss';
import Image from 'next/image';
import MainIcon from '../../../public/header/main.svg';
import UserIcon from '../../../public/header/user.svg';
import QuestionIcon from '../../../public/header/ques.svg';
import ReviewIcon from '../../../public/header/review.svg';
import ExitIcon from '../../../public/header/exit.svg';
import VkIcon from '../../../public/header/vk.svg';
import Link from 'next/link';
import LoginPopup from '../LoginPopup/LoginPopup';
// import ForgotPopup from '../ForgotPopup/ForgotPopup';
// import RegisterPopup from '../RegisterPopup/RegisterPopup';
// import BonusPaymentPopup from '../BonusPaymentPopup/BonusPaymentPopup';

const Header = () => {
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);

  const handleAuthClick = () => {
    setLoginPopupOpen(true);
  };

  const closeLoginPopup = () => {
    setLoginPopupOpen(false);
  };

  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.body}>
          <Link className={styles.logoLink} href='/'>
            <div className={styles.logo}>
              <Image src='/logo.svg' width={75} height={40} quality={100} alt='лого' />
            </div>
          </Link>
          <div className={styles.main}>
            <nav className={styles.menu}>
              <ul className={styles.list}>
                <li>
                  <div className={styles.item}>
                    <MainIcon width={20} height={20} className={styles.icon} />
                    <div className={styles.text}>
                      <h1>Пополнить баланс Steam (Стим) моментально</h1>
                    </div>
                  </div>
                </li>
                <li>
                  <Link className={styles.item} href="/profile">
                    <UserIcon width={20} height={20} className={styles.icon} />
                    <div className={styles.text}>Профиль</div>
                  </Link>
                </li>
                <li>
                  <Link className={styles.item} href='/faq'>
                    <QuestionIcon width={20} height={20} className={styles.icon} />
                    <div className={styles.text}>FAQ</div>
                  </Link>
                </li>
                <li>
                  <Link className={styles.item} href='/reviews'>
                    <ReviewIcon width={23} height={20} className={styles.icon} />
                    <div className={styles.text}>Отзывы</div>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className={styles.authBtn} onClick={handleAuthClick}>
              <div className={styles.authBody}>
                <div className={styles.authText}>Авторизация через</div>
                <VkIcon width={18} height={10} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isLoginPopupOpen && <LoginPopup onClose={closeLoginPopup} />}
    </div>
  );
};

export default Header;
