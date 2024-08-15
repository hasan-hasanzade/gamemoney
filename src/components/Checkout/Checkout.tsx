"use client"
import React from 'react'
import styles from './checkout.module.scss';
import KeyIcon from '../../../public/checkout/key.svg';
import UserIcon from '../../../public/checkout/user.svg';
import InfoIcon from '../../../public/checkout/info.svg';
import MailIcon from '../../../public/checkout/mail.svg';
import PromoIcon from '../../../public/checkout/promo.svg';
import RubIcon from '../../../public/checkout/rub.svg';
import RusFlag from '../../../public/checkout/rus-flag.svg';
import ArrRight from '../../../public/checkout/arrow-right.svg';
import FireIcon from '../../../public/checkout/fire.svg';
import CoinsIcon from '../../../public/checkout/coins.svg';
import SpbIcon from '../../../public/checkout/1.svg';
import CardIcon from '../../../public/checkout/2.svg';
import TinkIcon from '../../../public/checkout/3.svg';
import GPayIcon from '../../../public/checkout/sber-pey.svg';
import YandexIcon from '../../../public/checkout/5.svg';
import WallletIcon from '../../../public/checkout/wallet.svg';
import DiscountIcon from '../../../public/checkout/discount.svg';
import CoinsUpIcon from '../../../public/checkout/coins-up.svg';
import TouchIcon from '../../../public/checkout/touch.svg';
import LoadingIcon from '../../../public/checkout/loading.svg'


const Checkout = () => {
    const [inputValue, setInputValue] = React.useState('');

    const handleButtonClick = (value:any) => {
        setInputValue(value);
    };

  return (
    <div className={styles.checkout}>
        <div className={styles.mobileCommission}>
            <div className={styles.fireIcon}>
                <FireIcon width={19} height={23} className={styles.fire}/>
            </div>
            <div className={styles.comText}>
                Комиссия сервиса
                <span>10%</span>
            </div>
        </div>
      <div className={styles.title}><KeyIcon className={styles.keyIcon} width={18} height={18}/>Введите данные</div>
      <form className={styles.form}>
        <div className={styles.inputWrapper}>
            <UserIcon className={styles.userIcon} />
            <input placeholder="Введите логин..." className={styles.inputLogin} />
            <div className={styles.info}><InfoIcon className={styles.infoIcon} /></div>
            {/* <LoadingIcon /> */}
        </div>
        <div className={styles.wrap}>
            <div className={styles.mail}><MailIcon className={styles.mailIcon} /><input placeholder="Почта..." type="mail" className={styles.input}/></div>
            <div className={styles.promo}><PromoIcon className={styles.promoIcon} /><input placeholder="Промокод..." type="text" className={styles.input}/></div>
        </div>
        <div className={styles.price}>
            <div className={styles.inputBody}>
                <RubIcon width={16} height={20}/>
                <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                />
            </div>
           <div className={styles.currencyBody}>
                <div className={styles.btns}>
                    <button type='button' className={styles.btn} onClick={() => handleButtonClick('100')}>100₽</button>
                    <button type='button' className={styles.btn} onClick={() => handleButtonClick('200')}>200₽</button>
                    <button type='button' className={styles.btn} onClick={() => handleButtonClick('500')}>500₽</button>
                    <button type='button' className={styles.btn} onClick={() => handleButtonClick('2000')}>2000₽</button>
                </div>
                <div className={styles.list}>
                    <RusFlag width={22} height={22}/>
                    <div className={styles.currency}>руб.</div>
                    <ArrRight width={7} height={10}/>
                </div>
           </div>
        </div>
            <div className={styles.mobileBtns}>
                <button type='button' className={styles.btn} onClick={() => handleButtonClick('100')}>100₽</button>
                <button type='button' className={styles.btn} onClick={() => handleButtonClick('200')}>200₽</button>
                <button type='button' className={styles.btn} onClick={() => handleButtonClick('500')}>500₽</button>
                <button type='button' className={styles.btn} onClick={() => handleButtonClick('2000')}>2000₽</button>
            </div>
        <div className={styles.commission}>
            <div className={styles.fireIcon}>
                <FireIcon width={19} height={23} className={styles.fire}/>
            </div>
            <div className={styles.comText}>
                Комиссия сервиса за пополнение 
                <span>10%</span>
            </div>
        </div>
        <div className={styles.title}><CoinsIcon width={18} height={18}/> Выберите платежную систему</div>
        <div className={styles.payment}>
            <div className={styles.types}>
                <div className={styles.payItem}><SpbIcon className={styles.spb}/><span>2%</span></div>
                <div className={styles.payItem}><CardIcon className={styles.spb}/><span>2%</span></div>
                <div className={styles.payItem}><TinkIcon className={styles.spb}/><span>2%</span></div>
                <div className={styles.payItem}><GPayIcon className={styles.spb}/><span>2%</span></div>
                <div className={styles.payItem}><YandexIcon className={styles.spb}/><span>2%</span></div>
            </div>
        </div>
        <div className={styles.advantages}>
            <div className={styles.advItem}>
                <WallletIcon width={20} height={19}/>
                <div className={styles.context}>
                    <div className={styles.advText}>Заплатите</div>
                    <div className={styles.advPrice}>260.35 ₽</div>
                </div>
            </div>
            <div className={styles.advItem}>
                <DiscountIcon width={20} height={20}/>
                    <div className={styles.context}>
                        <div className={styles.advText}>Комиссия сервиса</div>
                        <div className={styles.advPrice}>200 ₽</div>
                    </div>
            </div>
            <div className={styles.advItem}>
                <CoinsUpIcon width={18} height={17} className={styles.coinsUp}/>
                <div className={styles.context}>
                    <div className={styles.advTextSh}>Получите на Steam</div>
                    <div className={styles.advPriceSh}>20.15 ₽</div>
                </div>
            </div>
        </div>
        <div className={styles.agreement}>
            <label className={styles.agrBody}>
                <input className={styles.checkbox} type="checkbox" />
                <span className={styles.checkmark}></span>
                Я принимаю условия Пользовательского соглашения и правилами возврата
            </label>
        </div>
        <div className={styles.submitBtn}>
            <button><TouchIcon width={20} height={27}/> Пополнить <span>260₽</span></button>
        </div>
      </form>
    </div>
  )
}

export default Checkout
