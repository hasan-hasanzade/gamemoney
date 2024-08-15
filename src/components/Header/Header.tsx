import React from 'react'
import styles from './header.module.scss';
import Image from 'next/image';
import MainIcon from '../../../public/header/main.svg';
import UserIcon from '../../../public/header/user.svg';
import QuestionIcon from '../../../public/header/ques.svg';
import ReviewIcon from '../../../public/header/review.svg';
import ExitIcon from '../../../public/header/exit.svg';
import VkIcon from '../../../public/header/vk.svg';
import Link from 'next/link';

const Header = () => {
  return (
    <div className={styles.header}>
        <div className="container">
            <div className={styles.body}>
                <Link href='/'><div className={styles.logo}><Image src='/logo.svg' width={75} height={40} quality={100} alt='лого'></Image></div></Link>
                <div className={styles.main}>
                    <nav className={styles.menu}>
                        <ul className={styles.list}>
                            <li>
                                <div className={styles.item}>
                                    <MainIcon className={styles.icon}/>
                                    <div className={styles.text}><h1>Пополнить баланс Steam (Стим) моментально</h1></div>
                                </div>
                            </li>
                            <li>
                                <Link className={styles.item} href="#">
                                    <UserIcon className={styles.icon}/>
                                    <div className={styles.text}>Профиль</div>
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.item} href='/faq'>
                                     <QuestionIcon className={styles.icon}/>
                                    <div className={styles.text}>FAQ</div>
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.item} href='/reviews'>
                                    <ReviewIcon className={styles.icon}/>
                                    <div className={styles.text}>Отзывы</div>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={styles.authBtn}>
                        <div className={styles.authBody}>
                            <div className={styles.authText}>Авторизации через</div>
                            <VkIcon width={18} height={10}/>
                        </div>
                    </div>
                    {/* <div className={styles.account}>
                        <Link href='#' className={styles.content}>
                            <Image className={styles.profileImg} src='/header/profile.jpg' width={52} height={52} alt='asd'></Image>
                            <div className={styles.info}>
                                <div className={styles.name}>Артур Комбаров</div>
                                <button className={styles.btnExit}>Выход <ExitIcon className={styles.iconExit}/></button>
                            </div>
                        </Link>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
