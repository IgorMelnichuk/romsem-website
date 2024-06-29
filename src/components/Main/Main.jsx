'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './Main.module.css';

export default function Main() {
    return (
        <header className={styles.main}>
            <div className={styles.picturebox}>
            <img src='img/Main_banner.png' alt="Sale" className={styles.mainpic} />
            </div>
            <div className={styles.mainsvggrid}>
            <img src='img/Ellipse 1.svg' className={styles.point}/>
            <img src='img/Ellipse 2.svg' className={styles.point}/>
            <img src='img/Ellipse 2.svg' className={styles.point}/>
            <img src='img/Ellipse 2.svg' className={styles.point}/>
            <img src='img/Ellipse 2.svg' className={styles.point}/>
            </div>
        </header>
    );
}