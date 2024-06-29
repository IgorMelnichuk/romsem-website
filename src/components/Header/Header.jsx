'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerleftside}>
                <div className={styles.contacts}>
                    <div className={styles.contactsname}>Наш телефон</div>
                    <div className={styles.contactsphone1}>+996 705 188 955</div>
                    <div className={styles.contactsphone2}>+996 555 188 955</div>
                    <span><img src='img/Clock.svg' alt="clock icon" className={styles.clockicon} /></span>
                    <span className={styles.worktime}> работаем с 10:00 до 00:00</span>
                </div>
                <div className={styles.city}>
                    <div className={styles.citytitle}>Город</div>
                    <div className={styles.cityname}>Бишкек</div>
                </div>  
            </div>
            <div className={styles.headerrightside}>
                <div className={styles.menu1}>
                    <div className={styles.review}>Отзывы</div>
                    <div className={styles.dilivery}>Доставка и оплата</div>
                </div>
                <div className={styles.search}><img src='img/Search_ico.svg' alt="search icon" className={styles.searchicon} /></div>
            </div>
        </header>
    );
}