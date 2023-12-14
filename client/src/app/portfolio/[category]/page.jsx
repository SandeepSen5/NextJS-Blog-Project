import React from 'react';
import style from "./page.module.css";
import Button from '@/components/button/button';
import Image from 'next/image';

export default function Category({ params }) {
    console.log(params);
    return (
        <div className={style.container}>
            <h1 className={style.catTitle}>{params.category}</h1>
            <div className={style.item}>
                <div className={style.content}>
                    <h1 className={style.title}>Test</h1>
                    <p className={style.desc}>Desc</p>
                    <Button text="See More" url="#" />
                </div>
                <div className={style.imgContainer}>
                    <Image className={style.img} src="https://images.pexels.com/photos/1378866/pexels-photo-1378866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" fill={true} />
                </div>
            </div>
            
        </div>
    )
}
