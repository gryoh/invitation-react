import Image from 'next/image'
import styles from './page.module.css'


export default function Home() {
  return (
    <main className={styles.main}>
        <div className={[`${styles.section} ${styles.intro}`]}>
            <img src="/images/intro.png"/>
            <div className={styles.pWrap}>
                <p className={styles.name}>오형준</p>
                <p className={styles.name}>조한미</p>
                <p className={styles.hallFirst}>2024. 04. 20. SAT PM 4 :00</p>
                <p className={styles.hall}>라마다 서울 신도림 호텔 5층 세인트그레이스홀</p>
            </div>
        </div>

        <div className={[`${styles.section} ${styles.message}`]}>
            <p className={styles.message_title}>초대합니다</p>
            <div className={styles.message_content}>
                <p>새로운 마음과 새 의미를 간직하며</p>
                <p>저희 두 사람이 새 출발의</p>
                <p>첫걸음을 내딛습니다.</p>
                <p>좋은 꿈, 바른 뜻으로 올바르게 살 수 있도록</p>
                <p>축복과 격려 주시면</p>
                <p>더없는 기쁨으로 간직하겠습니다.</p>
            </div>
        </div>

        <div className={[`${styles.section} ${styles.call}`]}>
            전화하기
        </div>

        <div>갤러리</div>

        <div>찾아오시는길</div>

        <div>축하의 한마디씩</div>
    </main>
  )
}
