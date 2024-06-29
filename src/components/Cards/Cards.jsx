'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './Cards.module.css';

export default function Cards() {
    return (
        <header className={styles.cards}>
            <div className={styles.allcards}>
                <div className={styles.sets}>
                <img src='img/card_set.svg' alt="Set icon" className={styles.setico}/>
                <span className={styles.setname}>Сеты</span>
                </div>
                <div className={styles.cardsgrid}>
                    <div className={styles.card1}>
                        <div className={styles.picturebox}>
                            <img src='img/set1.png' alt="Set picture" className={styles.setpicture}/>
                            <div className={styles.cardtext1}>Саломон сет</div>
                            <div className={styles.cardtext2}>1050 грамм, 30 кусочков</div>
                        </div>
                        <div className={styles.cardbottomblock}>
                            <span className={styles.cardbottomtext}>1500 СОМ</span>
                            <button className={styles.cardbutton}>Хочу!</button>
                        </div>
                    </div>
                    <div className={styles.card1}>
                        <div className={styles.picturebox}>
                            <img src='img/set1.png' alt="Set picture" className={styles.setpicture}/>
                            <div className={styles.cardtext1}>Саломон сет</div>
                            <div className={styles.cardtext2}>1050 грамм, 30 кусочков</div>
                        </div>
                        <div className={styles.cardbottomblock}>
                            <span className={styles.cardbottomtext}>1500 СОМ</span>
                            <button className={styles.cardbutton}>Хочу!</button>
                        </div>
                    </div>
                    <div className={styles.card1}>
                        <div className={styles.picturebox}>
                            <img src='img/set1.png' alt="Set picture" className={styles.setpicture}/>
                            <div className={styles.cardtext1}>Саломон сет</div>
                            <div className={styles.cardtext2}>1050 грамм, 30 кусочков</div>
                        </div>
                        <div className={styles.cardbottomblock}>
                            <span className={styles.cardbottomtext}>1500 СОМ</span>
                            <button className={styles.cardbutton}>Хочу!</button>
                        </div>
                    </div>
                    <div className={styles.card1}>
                        <div className={styles.picturebox}>
                            <img src='img/set1.png' alt="Set picture" className={styles.setpicture}/>
                            <div className={styles.cardtext1}>Саломон сет</div>
                            <div className={styles.cardtext2}>1050 грамм, 30 кусочков</div>
                        </div>
                        <div className={styles.cardbottomblock}>
                            <span className={styles.cardbottomtext}>1500 СОМ</span>
                            <button className={styles.cardbutton}>Хочу!</button>
                        </div>
                    </div>
                    <div className={styles.card1}>
                        <div className={styles.picturebox}>
                            <img src='img/set1.png' alt="Set picture" className={styles.setpicture}/>
                            <div className={styles.cardtext1}>Саломон сет</div>
                            <div className={styles.cardtext2}>1050 грамм, 30 кусочков</div>
                        </div>
                        <div className={styles.cardbottomblock}>
                            <span className={styles.cardbottomtext}>1500 СОМ</span>
                            <button className={styles.cardbutton}>Хочу!</button>
                        </div>
                    </div>
                    <div className={styles.card1}>
                        <div className={styles.picturebox}>
                            <img src='img/set1.png' alt="Set picture" className={styles.setpicture}/>
                            <div className={styles.cardtext1}>Саломон сет</div>
                            <div className={styles.cardtext2}>1050 грамм, 30 кусочков</div>
                        </div>
                        <div className={styles.cardbottomblock}>
                            <span className={styles.cardbottomtext}>1500 СОМ</span>
                            <button className={styles.cardbutton}>Хочу!</button>
                        </div>
                    </div>
                    <div className={styles.card1}>
                        <div className={styles.picturebox}>
                            <img src='img/set1.png' alt="Set picture" className={styles.setpicture}/>
                            <div className={styles.cardtext1}>Саломон сет</div>
                            <div className={styles.cardtext2}>1050 грамм, 30 кусочков</div>
                        </div>
                        <div className={styles.cardbottomblock}>
                            <span className={styles.cardbottomtext}>1500 СОМ</span>
                            <button className={styles.cardbutton}>Хочу!</button>
                        </div>
                    </div>
                    <div className={styles.card1}>
                        <div className={styles.picturebox}>
                            <img src='img/set1.png' alt="Set picture" className={styles.setpicture}/>
                            <div className={styles.cardtext1}>Саломон сет</div>
                            <div className={styles.cardtext2}>1050 грамм, 30 кусочков</div>
                        </div>
                        <div className={styles.cardbottomblock}>
                            <span className={styles.cardbottomtext}>1500 СОМ</span>
                            <button className={styles.cardbutton}>Хочу!</button>
                        </div>
                    </div>
                    <div className={styles.card1}>
                        <div className={styles.picturebox}>
                            <img src='img/set1.png' alt="Set picture" className={styles.setpicture}/>
                            <div className={styles.cardtext1}>Саломон сет</div>
                            <div className={styles.cardtext2}>1050 грамм, 30 кусочков</div>
                        </div>
                        <div className={styles.cardbottomblock}>
                            <span className={styles.cardbottomtext}>1500 СОМ</span>
                            <button className={styles.cardbutton}>Хочу!</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}