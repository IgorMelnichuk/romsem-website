'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './Leftside.module.css';

export default function leftside() {
    return (
        <footer className={styles.leftside}>
            <div className={styles.logobox}>
                <img src='img/Romsem.svg' alt="logo" className={styles.logo}/>
            </div>
            <div className={styles.categories}>
                <div className={styles.category}>
                    <img src='img/cat1.svg' alt="pizza" className={styles.categorylogo}/>
                    <span className={styles.categoryname}>Пицца</span>
                </div>
                <div className={styles.category}>
                    <img src='img/cat2.svg' alt="sets" className={styles.categorylogo}/>
                    <span className={styles.categoryname}>Сеты</span>
                </div>
                <div className={styles.category}>
                    <img src='img/cat3.svg' alt="wok" className={styles.categorylogo}/>
                    <span className={styles.categoryname}>WOK</span>
                </div>
                <div className={styles.category}>
                    <img src='img/cat4.svg' alt="rolls" className={styles.categorylogo}/>
                    <span className={styles.categoryname}>Роллы</span>
                </div>
                <div className={styles.category}>
                    <img src='img/cat5.svg' alt="sushi" className={styles.categorylogo}/>
                    <span className={styles.categoryname}>Суши</span>
                </div>
                <div className={styles.category}>
                    <img src='img/cat6.svg' alt="salat" className={styles.categorylogo}/>
                    <span className={styles.categoryname}>Салаты</span>
                </div>
                <div className={styles.category}>
                    <img src='img/cat7.svg' alt="soup" className={styles.categorylogo}/>
                    <span className={styles.categoryname}>Супы</span>
                </div>
                <div className={styles.category}>
                    <img src='img/cat8.svg' alt="corn-dogs" className={styles.categorylogo}/>
                    <span className={styles.categoryname}>Корн доги</span>
                </div>
                <div className={styles.category}>
                    <img src='img/cat9.svg' alt="drinks" className={styles.categorylogo}/>
                    <span className={styles.categoryname}>Напитки</span>
                </div>
                <div className={styles.category}>
                    <img src='img/cat10.svg' alt="stocks" className={styles.categorylogo}/>
                    <span className={styles.categoryname}>Акции</span>
                </div>
            </div>
        </footer>
    );
}