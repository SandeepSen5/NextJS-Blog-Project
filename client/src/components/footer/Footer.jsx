import React from 'react';
import styles from "./footer.module.css"
import Image from 'next/image';

export default function Footer() {
    return (
        <div className={styles.container}>
            <div>2023 LetsGo All rights reserved.</div>
            <div>
                <div className={styles.imgContainer}>
                    <Image src={"data:image/png;base64,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"} width={15} height={15} />
                </div>
            </div>
        </div>
    )
}


