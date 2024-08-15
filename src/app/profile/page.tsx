import React from 'react'
import styles from './profile.module.scss'
import UserIcon from '../../../public/profile/user.svg';
import HystoryIcon from '../../../public/profile/history.svg';
import NumIcon from '../../../public/profile/number.svg';
import DateIcon from '../../../public/profile/date.svg';
import RubIcon from '../../../public/profile/rub.svg';
import StatSucIcon from '../../../public/profile/green.svg';
import StatInProcIcon from '../../../public/profile/yellow.svg';
import RefIcon from '../../../public/profile/refs.svg';
import CopyIcon from '../../../public/profile/copy.svg';
import SupportIcon from '../../../public/profile/support.svg';
import RapidPay from '@/components/RapidPay/RapidPay';
import Image from 'next/image';
import CopyToClipboard from 'react-copy-to-clipboard';
import Link from 'next/link';

const page = () => {
  return (
    <div className={styles.profile}>
      <div className="container">
        <div className={styles.body}>
            <div className={styles.heading}>
                <UserIcon width={16.7} height={18.75}/>
                <div className={styles.title}>
                    Личный кабинет
                </div>
            </div>
            <div className={styles.profileInner}>
                <div className={styles.account}>
                    <div className={styles.image}>
                        <Image src='/header/profile.jpg' width={76} height={76} alt='пользователь'/>
                    </div>
                    <div className={styles.profileInfo}>
                        <div className={styles.name}>
                            Артур Комбаров
                        </div>
                        <div className={styles.vk}>
                            https://vk.com/kombarov1991
                        </div>
                    </div>
                </div>
                <div className={styles.stats}>
                    <div className={styles.statsItem}>
                        <div className={styles.statsName}>Пополнений</div>
                        <div className={styles.statsWrap}>
                            <div className={styles.quantity}>
                                29
                            </div>
                        </div>
                    </div>
                    <div className={styles.statsItem}>
                        <div className={styles.statsName}>Сумма</div>
                        <div className={styles.statsWrap}>
                            <div className={styles.quantity}>
                                29 000 руб
                            </div>
                        </div>
                    </div>
                    <div className={styles.statsItem}>
                        <div className={styles.statsName}>Рефералов</div>
                        <div className={styles.statsWrap}>
                            <div className={styles.quantity}>
                                29
                            </div>
                        </div>
                    </div>
                    <div className={styles.statsItem}>
                        <div className={styles.statsName}>Активных</div>
                        <div className={styles.statsWrap}>
                            <div className={styles.quantity}>
                                20
                            </div>
                        </div>
                    </div>
                    <div className={styles.statsItem}>
                        <div className={styles.statsName}>Заработано</div>
                        <div className={styles.statsWrap}>
                            <div className={styles.quantity}>
                                35 000 руб
                            </div>
                        </div>
                    </div>
                    <div className={styles.statsItem}>
                        <div className={styles.statsName}>Выплачено</div>
                        <div className={styles.statsWrap}>
                            <div className={styles.quantity}>
                                29 000 руб
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.history}>
                    <div className={styles.heading}>
                        <HystoryIcon width={19.95} height={21}/>
                        <div className={styles.title}>
                            История пополнений
                        </div>
                    </div>
                    <div className={styles.payHistory}>
                        <div className={styles.payedItem}>
                            <div className={styles.number}>
                                <NumIcon width={17} height={13.55}/>
                                <div className={styles.historyText}>№177222</div>
                            </div>
                            <div className={styles.date}>
                                <DateIcon width={19} height={18}/>
                                <div className={styles.historyText}>19.02.24, 11:36</div>
                            </div>
                            <div className={styles.cost}>
                                <RubIcon width={14.6} height={16}/>
                                <div className={styles.historyText}>1500</div>
                            </div>
                            <div className={styles.status}>
                                <StatSucIcon />
                                <div className={styles.success}>Успешно</div>
                            </div>
                        </div>
                        <div className={styles.payedItem}>
                            <div className={styles.number}>
                                <NumIcon width={17} height={13.55}/>
                                <div className={styles.historyText}>№177222</div>
                            </div>
                            <div className={styles.date}>
                                <DateIcon width={19} height={18}/>
                                <div className={styles.historyText}>19.02.24, 11:36</div>
                            </div>
                            <div className={styles.cost}>
                                <RubIcon width={14.6} height={16}/>
                                <div className={styles.historyText}>1500</div>
                            </div>
                            <div className={styles.status}>
                                <StatInProcIcon />
                                <div className={styles.inProcess}>Обработка</div>
                            </div>
                        </div>
                        <div className={styles.payedItem}>
                            <div className={styles.number}>
                                <NumIcon width={17} height={13.55}/>
                                <div className={styles.historyText}>№177222</div>
                            </div>
                            <div className={styles.date}>
                                <DateIcon width={19} height={18}/>
                                <div className={styles.historyText}>19.02.24, 11:36</div>
                            </div>
                            <div className={styles.cost}>
                                <RubIcon width={14.6} height={16}/>
                                <div className={styles.historyText}>1500</div>
                            </div>
                            <div className={styles.status}>
                                <StatSucIcon />
                                <div className={styles.success}>Успешно</div>
                            </div>
                        </div>
                        <div className={styles.payedItem}>
                            <div className={styles.number}>
                                <NumIcon width={17} height={13.55}/>
                                <div className={styles.historyText}>№177222</div>
                            </div>
                            <div className={styles.date}>
                                <DateIcon width={19} height={18}/>
                                <div className={styles.historyText}>19.02.24, 11:36</div>
                            </div>
                            <div className={styles.cost}>
                                <RubIcon width={14.6} height={16}/>
                                <div className={styles.historyText}>1500</div>
                            </div>
                            <div className={styles.status}>
                                <StatSucIcon />
                                <div className={styles.success}>Успешно</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.referal}>
                    <div className={styles.heading}>
                        <RefIcon width={18} height={18}/>
                        <div className={styles.title}>
                            Реферальная система
                        </div>
                    </div>
                    <div className={styles.refBody}>
                        <div className={styles.refTitle}>
                            Ссылка для распространения:
                        </div>
                        <div className={styles.urlWrap}>
                            <div className={styles.url}>https://skrinshoter.ru/sONu9VR0b37</div>
                            <CopyIcon className={styles.icon} width={17.22} height={17.81}/>
                        </div>
                        <div className={styles.refTitle}>
                            Ваш уровень реф.системы
                        </div>
                        <div className={styles.refPercent}>
                            <div className={styles.refItem}>
                                50%
                            </div>
                            <div className={styles.refItem}>
                                50%
                            </div>
                            <div className={styles.refItem}>
                                50%
                            </div>
                            <div className={styles.refItem}>
                                50%
                            </div>
                        </div>
                    </div>
                </div>
                <Link href='#' className={styles.support}>
                        <SupportIcon width={60} height={49}/>
                        <div className={styles.supportTitle}>
                        Возникли
                        <br />
                        проблемы?
                        </div>
                        <div className={styles.supportText}>
                        О братитесь в техническую поддержку, при обращении укажите номер вашего платежа
                        </div>
                </Link>
            </div>
            <RapidPay />
        </div>
      </div>
    </div>
  )
}

export default page
