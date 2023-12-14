import React from 'react';
import style from "./page.module.css";
import Button from '@/components/button/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Blog() {
    return (
        <div className={style.maincontainer}>
            <Link href="/blog/testId" className={style.container}>
                <div className={style.imageContainer}>
                    <Image width={400} height={400} className={style.image} src="https://images.pexels.com/photos/1378866/pexels-photo-1378866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                </div>

                <div className={style.content}>
                    <h1 className={style.title}>Test</h1>
                    <p className={style.desc}>Desc</p>
                    <Button text="See More" url="#" />
                </div>
            </Link>
        </div>
    )
}






