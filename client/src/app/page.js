import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.desc} >Turning your idea into reality.We bring together the teams from tech industry.</p>
        <button className={styles.button}>See our Works</button>
      </div>
      <div className={styles.item}></div>
      <Image className={styles.img} src={"https://images.pexels.com/photos/18276320/pexels-photo-18276320/free-photo-of-interior-of-a-traditional-moorish-house.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} width={500} height={500} />
    </div>
  )
}




