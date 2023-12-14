import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/button/button';

export default function Contact() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Lets keep in touch</h1>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image src="https://images.pexels.com/photos/10959540/pexels-photo-10959540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" fill={true} className={styles.image} />
                </div>
                <form className={styles.form}>
                    <input type='text' placeholder='name' className={styles.input} />
                    <input type='text' placeholder='name' className={styles.input} />
                    <textarea className={styles.textArea} placeholder='message' name=" " id=" " cols="30" rows="10" />
                    <Button text="send" url=" #contact" />
                </form>
            </div>
        </div>
    )
}
