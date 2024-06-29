'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './Footer.module.css';

export default function footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footermain}>
                <div className={styles.menu1}>
                    <div className={styles.menu1text}>О компании</div>
                    <div className={styles.menu1text}>Доставка и оплата</div>
                    <div className={styles.menu1text}>Лента материалов</div>
                    <div className={styles.menu1text}>Политика возврата</div>
                </div>
                <div className={styles.menu2}>
                    <div className={styles.menu2text1}>Введите номер</div>
                    <div className={styles.menu2text2}>+996 (__) ___ __ __</div>
                    <div className={styles.menu2text3}>Выберите удобный мессенджер для общения</div>
                    <div className={styles.footersvgbox}>
                        <img src='img/whatsapp.svg' alt="whatsapp" className={styles.whatsapp}/>
                        <img src='img/telegram.svg' alt="telegram" className={styles.telegram}/>
                        <img src='img/instagram.svg' alt="instagram" className={styles.instagram}/>
                    </div>
                </div>
                <div className={styles.menu3}>
                    <div className={styles.menu3text}>Тел:+996 705 188 955</div>
                    <div className={styles.menu3text}>Тел:+996 555 188 955</div>
                    <div className={styles.menu3text}>Адрес:Бакаева 126</div>
                </div>
            </div>
        </footer>
    );
}