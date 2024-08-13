import React from 'react';
import styles from './banner.module.scss';
import WalletIcon from '../../../public/banner/wallet.svg';
import UsersIcon from '../../../public/banner/group.svg';
import TinkIcon from '../../../public/banner/tinkoff.svg';
import CardIcon from '../../../public/banner/bank-card.svg';
import CountUp from 'react-countup';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className={styles.banner}>
        <div className={styles.body}>
            <div className={styles.yellowBanner}>
                <div className={styles.bookImg}>
                    <Image src='/banner/book.png' width={384} height={365} alt='счет' quality={100}></Image>
                </div>
                <div className={styles.info}>
                    <div className={styles.replenish}>
                        <WalletIcon width={27} height={24}/>
                        <div className={styles.repItem}>
                            <div className={styles.name}>Пополнений</div>
                            <div className={styles.count}>
                                <CountUp end={198030} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.users}>
                        <UsersIcon width={29} height={24}/>
                        <div className={styles.repItem}>
                                <div className={styles.name}>Клиентов</div>
                                <div className={styles.count}>
                                    <CountUp end={543069} />
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className={styles.blueBanner}>
                <div className={styles.inner}>
                    <div className={styles.lSide}>
                        <TinkIcon width={176} height={59}/>
                        <div className={styles.title}>Меняйте правила игры</div>
                        <div className={styles.desc}>С кредиткой ALL Games</div>
                    </div>
                    <div className={styles.rSide}>
                        <CardIcon width={89} height={55}/>
                        <div className={styles.lisence}>Лицензия на рекламу №43254</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
