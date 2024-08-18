import React from 'react';
import styles from './popup.module.scss';
import Image from 'next/image';
import SpbIcon from '../../../public/popup/sbp.svg';
import InProcessIcon from '../../../public/popup/inProcess.svg';
import SearchIcon from '../../../public/popup/search.svg';
import SberIcon from '../../../public/popup/sber.svg';
import TinIcon from '../../../public/popup/tin.svg';
import VtbIcon from '../../../public/popup/vtb.svg';
import AlfaIcon from '../../../public/popup/a.svg';
import RayfIcon from '../../../public/popup/rayf.svg';
import OpenIcon from '../../../public/popup/open.svg';
import GazIcon from '../../../public/popup/gaz.svg';
import SovIcon from '../../../public/popup/sov.svg';
import PciIcon from '../../../public/popup/pci.svg';
import VisaIcon from '../../../public/popup/visa.svg';
import MirIcon from '../../../public/popup/mir.svg';
import MasterIcon from '../../../public/popup/master.svg';
import CloseIcon from '../../../public/popup/close.svg';

const SpbPopUp = ({ onClose }) => { // Accept onClose prop to close the popup
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <div className={styles.spb}>
          <div className={styles.iconWrap}><SpbIcon className={styles.spbIcon} width={80} height={40} /></div>
          <CloseIcon width={18} height={18} className={styles.close} onClick={onClose} />
        </div>
        <div className={styles.body}>
          <div className={styles.qr}>
            <div className={styles.image}>
              <Image src='/popup/qr.png' width={174.5} height={173.5} quality={100} alt='qr' />
            </div>
            <ul className={styles.explanation}>
              <li className={styles.expItem}>Откройте приложение Вашего банка;</li>
              <li className={styles.expItem}>Нажмите на иконку QR;</li>
              <li className={styles.expItem}>Наведите камеру на QR-код;</li>
              <li className={styles.expItem}>Ожидайте статуса операции</li>
            </ul>
            <div className={styles.status}>
              <InProcessIcon width={65} height={57} />
            </div>
          </div>
          <div className={styles.wrap}>
            <div className={styles.banks}>
              <div className={styles.title}>
                Для оплаты отсканируйте QR-код камерой телефона или в приложении банка
              </div>
              <div className={styles.search}>
                <SearchIcon width={12} height={12} className={styles.icon} />
                <input placeholder='Поиск...' type="text" />
              </div>
              <ul className={styles.bankList}>
                <li className={styles.bankItem}><SberIcon width={20} height={20} />Сбербанк</li>
                <li className={styles.bankItem}><TinIcon width={20} height={20} />Т-Банк</li>
                <li className={styles.bankItem}><VtbIcon width={20} height={20} />ВТБ</li>
                <li className={styles.bankItem}><AlfaIcon width={20} height={20} />Альфа-банк</li>
                <li className={styles.bankItem}><RayfIcon width={20} height={20} />Райффайзенбанк</li>
                <li className={styles.bankItem}><OpenIcon width={20} height={20} />Открытие</li>
                <li className={styles.bankItem}><GazIcon width={20} height={20} />Газпромбанк</li>
                <li className={styles.bankItem}><SovIcon width={20} height={20} />Совкомбанк</li>
                <li className={styles.bankItem}><SovIcon width={20} height={20} />Совкомбанк</li>
                <li className={styles.bankItem}><SovIcon width={20} height={20} />Совкомбанк</li>
              </ul>
            </div>
            <div className={styles.btn}>
              <button>Выбрать банк</button>
            </div>
          </div>
        </div>
        <div className={styles.companies}>
          <PciIcon width={56.07} height={21.46} />
          <VisaIcon width={37.89} height={21.46} />
          <MirIcon width={52.31} height={21.46} />
          <MasterIcon width={45.29} height={16.1} />
        </div>
      </div>
    </div>
  );
};

export default SpbPopUp;
