'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './Promo.module.css';

export default function Promo() {
    return (
        <header className={styles.promo}>
            <div className={styles.promocardbox}>
                <div className={styles.promoleftside}>
                    <div className={styles.chickenbox}>
                        <img src='img/chicken.png' alt="Chicken" className={styles.chicken} />
                        <span className={styles.chickentext}>Чикен</span>
                    </div>
                    <div className={styles.pizzabox}>
                        <img src='img/pizza.png' alt="Pizza" className={styles.pizza} />
                        <span className={styles.chickentext}>Пицца</span>
                    </div>
                </div>
                <div className={styles.promorightside}>
                    <div className={styles.sushibox}>
                        <img src='img/susi.png' alt="Sushi" className={styles.sushi} />
                        <span className={styles.chickentext}>С угрём</span>
                    </div>
                    <div className={styles.corndogbox}>
                        <img src='img/corndog.png' alt="Corn-dog" className={styles.corndog} />
                        <span className={styles.chickentext}>Корн дог</span>
                    </div>
                    <div className={styles.actionbox}>
                        <img src='img/action.png' alt="Action" className={styles.action} />
                        <span className={styles.chickentext}>Акции</span>
                    </div>
                </div>
            </div>
        </header>
    );
}