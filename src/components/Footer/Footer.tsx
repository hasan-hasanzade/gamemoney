import React from 'react'
import styles from './footer.module.scss';
import Link from 'next/link';
import CheckFileIcon from '../../../public/footer/file-check.svg';
import DownFileIcon from '../../../public/footer/file-download.svg';
import VkIcon from '../../../public/footer/vk.svg';
import TgIcon from '../../../public/footer/tg.svg';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className='container'>
          <div className={styles.body}>
            <div className={styles.links}>
                <Link className={styles.link} href='#'>
                    <CheckFileIcon className={styles.icon} width={15} height={18}/>
                    Реквизиты
                </Link>
                <Link className={styles.link} href='#'>
                    <DownFileIcon className={styles.icon} width={15} height={18}/>
                    Публичная оферта
                </Link>
                <Link className={styles.link} href='#'>
                    <DownFileIcon className={styles.icon} width={15} height={18}/>
                    Политика конфиденциальности
                </Link>
            </div>
            <div className={styles.mobileIcons}>
                    <a href="#" className="">
                        <TgIcon width={40} height={40}/>
                    </a>
                    <a href="#" className="">
                        <VkIcon width={40} height={40}/>
                    </a>
            </div>
            <div className={styles.copy}>
                <div className={styles.rights}>
                    Все права защищены © GAMEMONEY 2024
                </div>
                <div className={styles.icons}>
                    <a href="#" className="">
                        <TgIcon width={40} height={40}/>
                    </a>
                    <a href="#" className="">
                        <VkIcon width={40} height={40}/>
                    </a>
                </div>
            </div>
          </div>
          <div className={styles.mobileCopy}>
                <div className={styles.rights}>
                    Все права защищены © GAMEMONEY 2024
                </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
