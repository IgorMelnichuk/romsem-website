'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './Rightside.module.css';

export default function rightside() {
    return (
        <footer className={styles.rightside}>
            <div className={styles.rightbox}>
            <img src='img/bin.png' alt="bin" className={styles.bin}/>
            <img src='img/dilivery.png' alt="dilivery" className={styles.dilivery}/>
            </div>
        </footer>
    );
}